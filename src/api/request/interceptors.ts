// 拦截器

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'
import { getLocal, rmLocal, setLocal } from '@/src/utils/storage';
// 取消请求操作
// const allPendingRequestsRecord: Canceler[] = [];
const pending: {
  [key in string]: Canceler
} = {};

// 取消同一个重复的ajax请求
const removePending = (key: string, isRequest: boolean = false) => {
  if (pending[key] && isRequest) {
    pending[key](key + ':取消重复请求');
  }
  delete pending[key];
};

function getContentType(headers: any) {
  const keys = Object.keys(headers)
  for (const k of keys) {
    if (k.toLocaleLowerCase() === 'content-type') {
      return headers[k]
    }
  }
  return ''
}

/** 针对某些接口修改参数和返回值 */
export function transformInterceptor(ax: AxiosInstance) {
  // 添加请求拦截器
  ax.interceptors.request.use(
    async (config: AxiosRequestConfig) => {

      let reqData: string = '';
      // 处理如url相同请求参数不同时上一个请求被屏蔽的情况
      if (config.method?.toLocaleLowerCase() === 'get') {
        reqData = config.url + config.method + JSON.stringify(config.params);
      } else if (config.method) {
        reqData = config!.url + config!.method + JSON.stringify(config.data);
      }

      // 如果用户连续点击某个按钮会发起多个相同的请求，可以在这里进行拦截请求并取消上一个重复的请求
      removePending(reqData, true);
      if (config.url!.indexOf('/auth/local') > -1) {
        setLocal('jwt', '')
      } else {
        let token = await getLocal('jwt')
        config.headers!.Authorization = `Bearer ${token}`;
      }


      config.cancelToken = new axios.CancelToken((c: any) => {
        pending[reqData] = c;
      });

      return config
    },
    (err: any) => {
      return Promise.reject(err)
    }
  )

  // 添加响应拦截器
  ax.interceptors.response.use(
    async (res: AxiosResponse) => {

      return res
    },
    (err: AxiosError) => {
      return Promise.reject(err)
    }
  )
}


