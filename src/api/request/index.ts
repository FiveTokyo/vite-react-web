import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Canceler, InternalAxiosRequestConfig } from 'axios'
// import jwt_decode, { JwtPayload } from 'jwt-decode'
import qs from 'qs'
import { getLocal, rmLocal, setLocal } from '@utils/storage'
import { message } from 'antd'
import { debounce } from 'lodash'

const baseURL = process.env.REACT_APP_BASE_URL

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 取消请求操作
const allPendingRequestsRecord: Canceler[] = [];
const pending: {
  [key in string]: Canceler
} = {};

// export const removeAllPendingRequestsRecord = () => {
//   allPendingRequestsRecord.length > 0 && allPendingRequestsRecord.forEach((func) => {
//     // 取消请求（调用函数就是取消该请求）
//     func('路由跳转了取消所有请求');
//   });
//   // 移除所有记录
//   allPendingRequestsRecord.splice(0);
// };

// 取消同一个重复的ajax请求
const removePending = (key: string, isRequest: boolean = false) => {
  if (pending[key] && isRequest) {
    pending[key](key + ':取消重复请求');
  }
  delete pending[key];
};

const instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  responseType: 'json',
  paramsSerializer: {
    encode: (params) => qs.stringify(params, { arrayFormat: 'comma' })
  }

})

// 添加请求拦截器
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    let reqData: string = '';
    // 处理如url相同请求参数不同时上一个请求被屏蔽的情况
    if (config.method === 'get') {
      reqData = config.url + config.method + JSON.stringify(config.params);
    } else if (config.method) {
      reqData = config!.url + config!.method + JSON.stringify(config.data);
    }
    // 如果用户连续点击某个按钮会发起多个相同的请求，可以在这里进行拦截请求并取消上一个重复的请求
    removePending(reqData, true);
    let token = await getLocal('jwt')
    // let decoded: JwtPayload;
    // if (token) {
    //     decoded = jwt_decode(token)
    //     let exp = decoded.exp as number
    //     let cur = Math.floor(Date.now() / 1000)
    //     let d = exp - cur
    //     if (d < 60 * 60 * 5 && d > 0) {
    //         await request('updateTokenUrl' + `?token=${token}`, {})
    //         token = await getLockr('jwt');
    //     }
    // }

    config.headers!.Authorization = `Bearer ${token}`;

    if (config.method === 'post') {
      config.data = {
        ...config.data,
      }
    } else {
      config.url = config.url + '?' + qs.stringify(config.params);
      config.params = {}
    }
    config.cancelToken = new axios.CancelToken((c) => {
      pending[reqData] = c;
      // allPendingRequestsRecord.push(c);
    });

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

const errorInfo = debounce(message.error, 1000)

// 添加响应拦截器
instance.interceptors.response.use(
  async (res: AxiosResponse) => {
    if (res.config.url === '') {
      await setLocal('jwt', res.data.jwt);
    }

    return res
  },
  (error: AxiosError) => {
    const code = error.response?.status as number
    if (axios.isCancel(error)) {
      return new Promise(() => { });
    }
    if ([401].includes(code)) {
      message.error('登录失效请重新登录!')
      window.location.href = '/login'
      rmLocal('jwt')
    }
    return Promise.reject(error)
  }
)


export default async function request<T>(url: string, options: AxiosRequestConfig) {
  return instance
    .request<T>({
      url,
      responseType: 'json',
      ...options,
    })
    .then((res: AxiosResponse) => {
      return res.data as T
    })
  // .catch((err: AxiosError) => {
  //   handleApiError(err)
  //   throw err
  // })
}