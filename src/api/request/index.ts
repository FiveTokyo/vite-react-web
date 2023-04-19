import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Canceler, InternalAxiosRequestConfig } from 'axios'
// import jwt_decode, { JwtPayload } from 'jwt-decode'
import qs from 'qs'
import { getLocal, rmLocal, rmSession, setLocal, setSession } from '@utils/storage'
import { message } from 'antd'
import { debounce, throttle } from 'lodash'



const baseURL = '//hx-manager.qa8.chinabm.cn'

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
const loginUrl = ['/api/login/index', '/api/login/ydscanlogin'];
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
    let token = await getLocal('token')
    config.headers!.token = token;

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
const errorCode: { [k in number]: any } = {
  400: '请求错误',
  401: '没有权限',
  403: '禁止访问',
  404: '请求的资源不存在',
  406: '请求的格式不可得',
  410: '请求的资源被删除',
  422: '当创建一个对象时验证错误',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务器暂时过载或维护',
  504: '网关超时',
};
const errorInfo = debounce(message.error, 1000)

// 添加响应拦截器
instance.interceptors.response.use(
  async (res: AxiosResponse) => {
    if (res.config.url === '') {
      await setLocal('token', res.data.token);
    }
    const { data } = res;
    const { msg, code, data: dataJson } = data
    if ([401, 10001].includes(code)) {
      localStorage.removeItem('token');
      const lastHref = decodeURI(location.href).replace(location.origin, '');
      sessionStorage.setItem('lastHref', lastHref);
      window.location.href = '/user/login';
    }
    return res
  },
  (error: AxiosError) => {

    return Promise.reject(error)
  }
)

function handleApiError(error: AxiosError) {
  let code = 500
  let data: any;

  // if (error.code >= 400) {
  //   message.error(`${errorCode[error.status]}`);
  //   return {
  //     data: {},
  //   };
  // }

  if ([401, 10001].includes(error.status as number)) {
    localStorage.removeItem('token');
    const lastHref = decodeURI(location.href).replace(location.origin, '');
    sessionStorage.setItem('lastHref', lastHref);
    window.location.href = '/user/login';
  }

  if (error.response) {
    data = error.response.data
    code = error.response.status
  }
  if (code === 403) {
    return Promise.reject(error)
  }

  if ([401].includes(code)) {

    return Promise.reject(error)

  } else {
    let msg = '未知错误'
    const errorMsg = error.message || ''

    if (errorMsg.includes('Network Error')) {
      msg =
        '请检查网络' +
        (error.config && error.config.url
          ? error.config.url
          : JSON.stringify(error.request))
    } else if (errorMsg.includes('timeout') && errorMsg.includes('exceeded')) {
      msg = '请求超时'
    }

    errorInfo(msg || '系统错误，请稍后重试')

    return Promise.reject(error)
  }
}


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
    .catch((err: AxiosError) => {
      handleApiError(err)
      throw err
    })
}