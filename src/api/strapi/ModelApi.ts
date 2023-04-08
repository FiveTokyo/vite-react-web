// @ts-nocheck

/**
 * ------------------------------------
 * !!! 不要修改,这是生成的代码 !!!
 * ------------------------------------
 */

import { BaseAPI, Options } from '../request'

export default class ModelApi extends BaseAPI {
    /**
     *     *     */

    async getModels(params: Strapi.QueryGetModels, options: Options = {}) {
        const headers = {}

        const url = '/models'
        return await this.request<Strapi.ResGetModels>(url, {
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

    async postModels(data: Strapi.ReqPostModels, options: Options = {}) {
        const headers = { 'content-type': 'application/json' }

        const url = '/models'
        return await this.request<Strapi.ResPostModels>(url, {
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

    async getModelsId(paths: Strapi.ParamGetModelsId, options: Options = {}) {
        const headers = {}

        const url = '/models/{id}'.replace(
            '{id}',
            encodeURIComponent(String(paths['id']))
        )
        return await this.request<Strapi.ResGetModelsId>(url, {
            method: 'GET',
            apiPath: '/models/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async putModelsId(
        paths: Strapi.ParamPutModelsId,
        data: Strapi.ReqPutModelsId,
        options: Options = {}
    ) {
        const headers = { 'content-type': 'application/json' }

        const url = '/models/{id}'.replace(
            '{id}',
            encodeURIComponent(String(paths['id']))
        )
        return await this.request<Strapi.ResPutModelsId>(url, {
            method: 'PUT',
            data,
            apiPath: '/models/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
    /**
     *     *     */

    async deleteModelsId(
        paths: Strapi.ParamDeleteModelsId,
        options: Options = {}
    ) {
        const headers = {}

        const url = '/models/{id}'.replace(
            '{id}',
            encodeURIComponent(String(paths['id']))
        )
        return await this.request<Strapi.ResDeleteModelsId>(url, {
            method: 'DELETE',
            apiPath: '/models/{id}',
            ...options,
            headers: {
                ...headers,
                ...(options.headers || {}),
            },
        })
    }
}
