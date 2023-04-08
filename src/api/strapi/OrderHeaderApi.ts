// @ts-nocheck

/**
 * ------------------------------------
 * !!! 不要修改,这是生成的代码 !!!
 * ------------------------------------
 */

import { BaseAPI, Options } from '../request'

export default class OrderHeaderApi extends BaseAPI {
    /**
     *     *     */

    async getOrderHeaders(
        params: Strapi.QueryGetOrderHeaders,
        options: Options = {}
    ) {
        const headers = {}

        const url = '/order-headers'
        return await this.request<Strapi.ResGetOrderHeaders>(url, {
            method: 'GET',
            params,
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async postOrderHeaders(
        data: Strapi.ReqPostOrderHeaders,
        options: Options = {}
    ) {
        const headers = { 'content-type': 'application/json' }

        const url = '/order-headers'
        return await this.request<Strapi.ResPostOrderHeaders>(url, {
            method: 'POST',
            data,
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async getOrderHeadersId(
        paths: Strapi.ParamGetOrderHeadersId,
        options: Options = {}
    ) {
        const headers = {}

        const url = '/order-headers/{id}'.replace(
            '{id}',
            encodeURIComponent(String(paths['id']))
        )
        return await this.request<Strapi.ResGetOrderHeadersId>(url, {
            method: 'GET',
            apiPath: '/order-headers/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async putOrderHeadersId(
        paths: Strapi.ParamPutOrderHeadersId,
        data: Strapi.ReqPutOrderHeadersId,
        options: Options = {}
    ) {
        const headers = { 'content-type': 'application/json' }

        const url = '/order-headers/{id}'.replace(
            '{id}',
            encodeURIComponent(String(paths['id']))
        )
        return await this.request<Strapi.ResPutOrderHeadersId>(url, {
            method: 'PUT',
            data,
            apiPath: '/order-headers/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async deleteOrderHeadersId(
        paths: Strapi.ParamDeleteOrderHeadersId,
        options: Options = {}
    ) {
        const headers = {}

        const url = '/order-headers/{id}'.replace(
            '{id}',
            encodeURIComponent(String(paths['id']))
        )
        return await this.request<Strapi.ResDeleteOrderHeadersId>(url, {
            method: 'DELETE',
            apiPath: '/order-headers/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
}
