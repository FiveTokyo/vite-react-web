// @ts-nocheck

/**
 * ------------------------------------
 * !!! 不要修改,这是生成的代码 !!!
 * ------------------------------------
 */

import { BaseAPI, Options } from '../request'

export default class CustomerApi extends BaseAPI {
    /**
     *     *     */

    async getCustomers(
        params: Strapi.QueryGetCustomers,
        options: Options = {}
    ) {
        const headers = {}

        const url = `/customers`
        return await this.request<Strapi.ResGetCustomers>(url, {
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

    async postCustomers(data: Strapi.ReqPostCustomers, options: Options = {}) {
        const headers = { 'content-type': 'application/json' }

        const url = '/customers'
        return await this.request<Strapi.ResPostCustomers>(url, {
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

    async getCustomersId(
        paths: Strapi.ParamGetCustomersId,
        options: Options = {}
    ) {
        const headers = {}

        const url = '/customers/{id}'.replace(
            '{id}',
            String(paths['id'])
        )
        return await this.request<Strapi.ResGetCustomersId>(url, {
            method: 'GET',
            apiPath: '/customers/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async putCustomersId(
        paths: Strapi.ParamPutCustomersId,
        data: Strapi.ReqPutCustomersId,
        options: Options = {}
    ) {
        const headers = { 'content-type': 'application/json' }

        const url = '/customers/{id}'.replace(
            '{id}',
            String(paths['id'])
        )
        return await this.request<Strapi.ResPutCustomersId>(url, {
            method: 'PUT',
            data,
            apiPath: '/customers/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async deleteCustomersId(
        paths: Strapi.ParamDeleteCustomersId,
        options: Options = {}
    ) {
        const headers = {}

        const url = '/customers/{id}'.replace(
            '{id}',
            String(paths['id'])
        )
        return await this.request<Strapi.ResDeleteCustomersId>(url, {
            method: 'DELETE',
            apiPath: '/customers/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
}
