/**
 * ------------------------------------
 * !!! 不要修改,这是生成的代码 !!!
 * ------------------------------------
 */
// tslint:disable
declare namespace Strapi {
    export interface ResGetArCustomerAddresses {
        data?: ArCustomerAddressListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface ArCustomerAddressListResponseDataItem {
        id?: string
        attributes?: {
            code?: string
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        short_name?: string
                        type?: string
                        credit_rating?: string
                        ar_customer_addresses?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    country?: string
                                    province?: string
                                    city?: string
                                    use_code?: string
                                    detail_address?: string
                                    ar_customer_contacts?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            country?: string
            province?: string
            city?: string
            use_code?: string
            detail_address?: string
            ar_customer_contacts?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetArCustomerAddresses {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostArCustomerAddresses {
        data?: ArCustomerAddressResponseDataObject
        meta?: {}
    }
    export interface ArCustomerAddressResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        short_name?: string
                        type?: string
                        credit_rating?: string
                        ar_customer_addresses?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    country?: string
                                    province?: string
                                    city?: string
                                    use_code?: string
                                    detail_address?: string
                                    ar_customer_contacts?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            country?: string
            province?: string
            city?: string
            use_code?: string
            detail_address?: string
            ar_customer_contacts?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostArCustomerAddresses {
        data: {
            code?: string
            ar_customer_base_info?: number | string
            country?: string
            province?: string
            city?: string
            use_code?: string
            detail_address?: string
            ar_customer_contacts?: (number | string)[]
            status?: boolean
        }
    }

    export interface ResGetArCustomerAddressesId {
        data?: ArCustomerAddressResponseDataObject
        meta?: {}
    }
    export interface ArCustomerAddressResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        short_name?: string
                        type?: string
                        credit_rating?: string
                        ar_customer_addresses?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    country?: string
                                    province?: string
                                    city?: string
                                    use_code?: string
                                    detail_address?: string
                                    ar_customer_contacts?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            country?: string
            province?: string
            city?: string
            use_code?: string
            detail_address?: string
            ar_customer_contacts?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetArCustomerAddressesId {
        id: string | number
    }

    export interface ResPutArCustomerAddressesId {
        data?: ArCustomerAddressResponseDataObject
        meta?: {}
    }
    export interface ArCustomerAddressResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        short_name?: string
                        type?: string
                        credit_rating?: string
                        ar_customer_addresses?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    country?: string
                                    province?: string
                                    city?: string
                                    use_code?: string
                                    detail_address?: string
                                    ar_customer_contacts?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            country?: string
            province?: string
            city?: string
            use_code?: string
            detail_address?: string
            ar_customer_contacts?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutArCustomerAddressesId {
        id: string | number
    }

    export interface ReqPutArCustomerAddressesId {
        data: {
            code?: string
            ar_customer_base_info?: number | string
            country?: string
            province?: string
            city?: string
            use_code?: string
            detail_address?: string
            ar_customer_contacts?: (number | string)[]
            status?: boolean
        }
    }

    export type ResDeleteArCustomerAddressesId = number

    export interface ParamDeleteArCustomerAddressesId {
        id: string | number
    }

    export interface ResGetArCustomerBaseInfos {
        data?: ArCustomerBaseInfoListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface ArCustomerBaseInfoListResponseDataItem {
        id?: string
        attributes?: {
            code?: string
            name?: string
            short_name?: string
            type?: string
            credit_rating?: string
            ar_customer_addresses?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetArCustomerBaseInfos {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostArCustomerBaseInfos {
        data?: ArCustomerBaseInfoResponseDataObject
        meta?: {}
    }
    export interface ArCustomerBaseInfoResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            name?: string
            short_name?: string
            type?: string
            credit_rating?: string
            ar_customer_addresses?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostArCustomerBaseInfos {
        data: {
            code?: string
            name?: string
            short_name?: string
            type?: string
            credit_rating?: string
            ar_customer_addresses?: (number | string)[]
            status?: boolean
        }
    }

    export interface ResGetArCustomerBaseInfosId {
        data?: ArCustomerBaseInfoResponseDataObject
        meta?: {}
    }
    export interface ArCustomerBaseInfoResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            name?: string
            short_name?: string
            type?: string
            credit_rating?: string
            ar_customer_addresses?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetArCustomerBaseInfosId {
        id: string | number
    }

    export interface ResPutArCustomerBaseInfosId {
        data?: ArCustomerBaseInfoResponseDataObject
        meta?: {}
    }
    export interface ArCustomerBaseInfoResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            name?: string
            short_name?: string
            type?: string
            credit_rating?: string
            ar_customer_addresses?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutArCustomerBaseInfosId {
        id: string | number
    }

    export interface ReqPutArCustomerBaseInfosId {
        data: {
            code?: string
            name?: string
            short_name?: string
            type?: string
            credit_rating?: string
            ar_customer_addresses?: (number | string)[]
            status?: boolean
        }
    }

    export type ResDeleteArCustomerBaseInfosId = number

    export interface ParamDeleteArCustomerBaseInfosId {
        id: string | number
    }

    export interface ResGetArCustomerContacts {
        data?: ArCustomerContactListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface ArCustomerContactListResponseDataItem {
        id?: string
        attributes?: {
            ar_customer_address?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            job?: string
            phone?: string
            telephone?: string
            email?: string
            wechart?: string
            fax?: string
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetArCustomerContacts {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostArCustomerContacts {
        data?: ArCustomerContactResponseDataObject
        meta?: {}
    }
    export interface ArCustomerContactResponseDataObject {
        id?: string
        attributes?: {
            ar_customer_address?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            job?: string
            phone?: string
            telephone?: string
            email?: string
            wechart?: string
            fax?: string
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostArCustomerContacts {
        data: {
            ar_customer_address?: number | string
            name?: string
            job?: string
            phone?: string
            telephone?: string
            email?: string
            wechart?: string
            fax?: string
            status?: boolean
        }
    }

    export interface ResGetArCustomerContactsId {
        data?: ArCustomerContactResponseDataObject
        meta?: {}
    }
    export interface ArCustomerContactResponseDataObject {
        id?: string
        attributes?: {
            ar_customer_address?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            job?: string
            phone?: string
            telephone?: string
            email?: string
            wechart?: string
            fax?: string
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetArCustomerContactsId {
        id: string | number
    }

    export interface ResPutArCustomerContactsId {
        data?: ArCustomerContactResponseDataObject
        meta?: {}
    }
    export interface ArCustomerContactResponseDataObject {
        id?: string
        attributes?: {
            ar_customer_address?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        ar_customer_base_info?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    code?: string
                                    name?: string
                                    short_name?: string
                                    type?: string
                                    credit_rating?: string
                                    ar_customer_addresses?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        country?: string
                        province?: string
                        city?: string
                        use_code?: string
                        detail_address?: string
                        ar_customer_contacts?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    ar_customer_address?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    name?: string
                                    job?: string
                                    phone?: string
                                    telephone?: string
                                    email?: string
                                    wechart?: string
                                    fax?: string
                                    status?: boolean
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        status?: boolean
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            job?: string
            phone?: string
            telephone?: string
            email?: string
            wechart?: string
            fax?: string
            status?: boolean
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutArCustomerContactsId {
        id: string | number
    }

    export interface ReqPutArCustomerContactsId {
        data: {
            ar_customer_address?: number | string
            name?: string
            job?: string
            phone?: string
            telephone?: string
            email?: string
            wechart?: string
            fax?: string
            status?: boolean
        }
    }

    export type ResDeleteArCustomerContactsId = number

    export interface ParamDeleteArCustomerContactsId {
        id: string | number
    }

    export interface ResGetCustomers {
        data?: CustomerListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface CustomerListResponseDataItem {
        id?: string
        attributes?: {
            name?: string
            orders?: {
                data?: {
                    id?: string
                    attributes?: {
                        user_asset?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    userId?: string
                                    expire?: string
                                    online?: boolean
                                    documents?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mydocuments?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mymodels?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    models?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    manufacture_configurations?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    my_manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    materials?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    orders?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customers?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customer_types?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    price_rule?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        price?: number
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        customer?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        bom?: unknown
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customerId?: string
            customer_type?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetCustomers {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostCustomers {
        data?: CustomerResponseDataObject
        meta?: {}
    }
    export interface CustomerResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            orders?: {
                data?: {
                    id?: string
                    attributes?: {
                        user_asset?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    userId?: string
                                    expire?: string
                                    online?: boolean
                                    documents?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mydocuments?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mymodels?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    models?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    manufacture_configurations?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    my_manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    materials?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    orders?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customers?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customer_types?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    price_rule?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        price?: number
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        customer?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        bom?: unknown
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customerId?: string
            customer_type?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostCustomers {
        data: {
            name?: string
            orders?: (number | string)[]
            user_asset?: number | string
            customerId?: string
            customer_type?: number | string
        }
    }

    export interface ResGetCustomersId {
        data?: CustomerResponseDataObject
        meta?: {}
    }
    export interface CustomerResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            orders?: {
                data?: {
                    id?: string
                    attributes?: {
                        user_asset?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    userId?: string
                                    expire?: string
                                    online?: boolean
                                    documents?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mydocuments?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mymodels?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    models?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    manufacture_configurations?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    my_manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    materials?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    orders?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customers?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customer_types?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    price_rule?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        price?: number
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        customer?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        bom?: unknown
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customerId?: string
            customer_type?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetCustomersId {
        id: string | number
    }

    export interface ResPutCustomersId {
        data?: CustomerResponseDataObject
        meta?: {}
    }
    export interface CustomerResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            orders?: {
                data?: {
                    id?: string
                    attributes?: {
                        user_asset?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    userId?: string
                                    expire?: string
                                    online?: boolean
                                    documents?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mydocuments?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    mymodels?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    models?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    manufacture_configurations?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    my_manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    materials?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    orders?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customers?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    customer_types?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    price_rule?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        price?: number
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        customer?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        bom?: unknown
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customerId?: string
            customer_type?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutCustomersId {
        id: string | number
    }

    export interface ReqPutCustomersId {
        data: {
            name?: string
            orders?: (number | string)[]
            user_asset?: number | string
            customerId?: string
            customer_type?: number | string
        }
    }

    export type ResDeleteCustomersId = number

    export interface ParamDeleteCustomersId {
        id: string | number
    }

    export interface ResGetDocuments {
        data?: DocumentListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface DocumentListResponseDataItem {
        id?: string
        attributes?: {
            model?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        file?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    alternativeText?: string
                                    caption?: string
                                    width?: number
                                    height?: number
                                    formats?: unknown
                                    hash?: string
                                    ext?: string
                                    mime?: string
                                    size?: number
                                    url?: string
                                    previewUrl?: string
                                    provider?: string
                                    provider_metadata?: unknown
                                    related?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    folder?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    folderPath?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        size?: number
                        status?:
                            | 'waiting'
                            | 'processing'
                            | 'processed'
                            | 'error'
                            | 'netError'
                        message?: string
                        type?: 'step'
                        document?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order_header?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    customer_po?: string
                                    order_number?: string
                                    order_type?: string
                                    contact_person_id?: number
                                    create_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    update_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    pay_way?: string
                                    remark?: string
                                    traffic_way?: string
                                    delivery_dates?: string
                                    order_lines?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    step?: number
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    price?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            entities?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            members?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            owner?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            config?: unknown
            name?: string
            manufacture_configuration?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetDocuments {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostDocuments {
        data?: DocumentResponseDataObject
        meta?: {}
    }
    export interface DocumentResponseDataObject {
        id?: string
        attributes?: {
            model?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        file?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    alternativeText?: string
                                    caption?: string
                                    width?: number
                                    height?: number
                                    formats?: unknown
                                    hash?: string
                                    ext?: string
                                    mime?: string
                                    size?: number
                                    url?: string
                                    previewUrl?: string
                                    provider?: string
                                    provider_metadata?: unknown
                                    related?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    folder?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    folderPath?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        size?: number
                        status?:
                            | 'waiting'
                            | 'processing'
                            | 'processed'
                            | 'error'
                            | 'netError'
                        message?: string
                        type?: 'step'
                        document?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order_header?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    customer_po?: string
                                    order_number?: string
                                    order_type?: string
                                    contact_person_id?: number
                                    create_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    update_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    pay_way?: string
                                    remark?: string
                                    traffic_way?: string
                                    delivery_dates?: string
                                    order_lines?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    step?: number
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    price?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            entities?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            members?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            owner?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            config?: unknown
            name?: string
            manufacture_configuration?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostDocuments {
        data: {
            model?: number | string
            entities?: (number | string)[]
            members?: (number | string)[]
            owner?: number | string
            config?: unknown
            name: string
            manufacture_configuration?: number | string
        }
    }

    export interface ResGetManufactureConfigurations {
        data?: ManufactureConfigurationListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface ManufactureConfigurationListResponseDataItem {
        id?: string
        attributes?: {
            type?: 'common' | 'document' | 'user'
            data?: unknown
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            description?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetManufactureConfigurations {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostManufactureConfigurations {
        data?: ManufactureConfigurationResponseDataObject
        meta?: {}
    }
    export interface ManufactureConfigurationResponseDataObject {
        id?: string
        attributes?: {
            type?: 'common' | 'document' | 'user'
            data?: unknown
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            description?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostManufactureConfigurations {
        data: {
            type: 'common' | 'document' | 'user'
            data?: unknown
            user_asset?: number | string
            name?: string
            description?: string
        }
    }

    export interface ResGetManufactureConfigurationsId {
        data?: ManufactureConfigurationResponseDataObject
        meta?: {}
    }
    export interface ManufactureConfigurationResponseDataObject {
        id?: string
        attributes?: {
            type?: 'common' | 'document' | 'user'
            data?: unknown
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            description?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetManufactureConfigurationsId {
        id: string | number
    }

    export interface ResPutManufactureConfigurationsId {
        data?: ManufactureConfigurationResponseDataObject
        meta?: {}
    }
    export interface ManufactureConfigurationResponseDataObject {
        id?: string
        attributes?: {
            type?: 'common' | 'document' | 'user'
            data?: unknown
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            name?: string
            description?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutManufactureConfigurationsId {
        id: string | number
    }

    export interface ReqPutManufactureConfigurationsId {
        data: {
            type: 'common' | 'document' | 'user'
            data?: unknown
            user_asset?: number | string
            name?: string
            description?: string
        }
    }

    export type ResDeleteManufactureConfigurationsId = number

    export interface ParamDeleteManufactureConfigurationsId {
        id: string | number
    }

    export interface ResGetMaterials {
        data?: MaterialListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface MaterialListResponseDataItem {
        id?: string
        attributes?: {
            name?: string
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetMaterials {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostMaterials {
        data?: MaterialResponseDataObject
        meta?: {}
    }
    export interface MaterialResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostMaterials {
        data: {
            name?: string
            user_asset?: number | string
        }
    }

    export interface ResGetModels {
        data?: ModelListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface ModelListResponseDataItem {
        id?: string
        attributes?: {
            name?: string
            file?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        alternativeText?: string
                        caption?: string
                        width?: number
                        height?: number
                        formats?: unknown
                        hash?: string
                        ext?: string
                        mime?: string
                        size?: number
                        url?: string
                        previewUrl?: string
                        provider?: string
                        provider_metadata?: unknown
                        related?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        folder?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    pathId?: number
                                    parent?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    children?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    files?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    path?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        folderPath?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            size?: number
            status?:
                | 'waiting'
                | 'processing'
                | 'processed'
                | 'error'
                | 'netError'
            message?: string
            type?: 'step'
            document?: {
                data?: {
                    id?: string
                    attributes?: {
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    file?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    size?: number
                                    status?:
                                        | 'waiting'
                                        | 'processing'
                                        | 'processed'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    type?: 'step'
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order_header?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        entities?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    visible?: boolean
                                    type?: 'group' | 'object' | 'system'
                                    build_description?: unknown
                                    material?: unknown
                                    matrix?: unknown
                                    name?: string
                                    originInStructure?: string
                                    originSource?: string
                                    parent?: string
                                    post_build_description?: unknown
                                    children?: unknown
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updated?: string
                                    clientId?: string
                                    deleted_?: boolean
                                    renderType?: string
                                    options?: unknown
                                    status?:
                                        | 'complete'
                                        | 'waiting'
                                        | 'processing'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        config?: unknown
                        name?: string
                        manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            members?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            owner?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order_header?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetModels {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostModels {
        data?: ModelResponseDataObject
        meta?: {}
    }
    export interface ModelResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            file?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        alternativeText?: string
                        caption?: string
                        width?: number
                        height?: number
                        formats?: unknown
                        hash?: string
                        ext?: string
                        mime?: string
                        size?: number
                        url?: string
                        previewUrl?: string
                        provider?: string
                        provider_metadata?: unknown
                        related?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        folder?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    pathId?: number
                                    parent?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    children?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    files?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    path?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        folderPath?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            size?: number
            status?:
                | 'waiting'
                | 'processing'
                | 'processed'
                | 'error'
                | 'netError'
            message?: string
            type?: 'step'
            document?: {
                data?: {
                    id?: string
                    attributes?: {
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    file?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    size?: number
                                    status?:
                                        | 'waiting'
                                        | 'processing'
                                        | 'processed'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    type?: 'step'
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order_header?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        entities?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    visible?: boolean
                                    type?: 'group' | 'object' | 'system'
                                    build_description?: unknown
                                    material?: unknown
                                    matrix?: unknown
                                    name?: string
                                    originInStructure?: string
                                    originSource?: string
                                    parent?: string
                                    post_build_description?: unknown
                                    children?: unknown
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updated?: string
                                    clientId?: string
                                    deleted_?: boolean
                                    renderType?: string
                                    options?: unknown
                                    status?:
                                        | 'complete'
                                        | 'waiting'
                                        | 'processing'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        config?: unknown
                        name?: string
                        manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            members?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            owner?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order_header?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostModels {
        data: {
            name?: string
            file?: number | string
            size?: number
            status?:
                | 'waiting'
                | 'processing'
                | 'processed'
                | 'error'
                | 'netError'
            message?: string
            type?: 'step'
            document?: number | string
            members?: (number | string)[]
            owner?: number | string
            order?: number | string
            order_header?: number | string
        }
    }

    export interface ResGetModelsId {
        data?: ModelResponseDataObject
        meta?: {}
    }
    export interface ModelResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            file?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        alternativeText?: string
                        caption?: string
                        width?: number
                        height?: number
                        formats?: unknown
                        hash?: string
                        ext?: string
                        mime?: string
                        size?: number
                        url?: string
                        previewUrl?: string
                        provider?: string
                        provider_metadata?: unknown
                        related?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        folder?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    pathId?: number
                                    parent?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    children?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    files?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    path?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        folderPath?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            size?: number
            status?:
                | 'waiting'
                | 'processing'
                | 'processed'
                | 'error'
                | 'netError'
            message?: string
            type?: 'step'
            document?: {
                data?: {
                    id?: string
                    attributes?: {
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    file?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    size?: number
                                    status?:
                                        | 'waiting'
                                        | 'processing'
                                        | 'processed'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    type?: 'step'
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order_header?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        entities?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    visible?: boolean
                                    type?: 'group' | 'object' | 'system'
                                    build_description?: unknown
                                    material?: unknown
                                    matrix?: unknown
                                    name?: string
                                    originInStructure?: string
                                    originSource?: string
                                    parent?: string
                                    post_build_description?: unknown
                                    children?: unknown
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updated?: string
                                    clientId?: string
                                    deleted_?: boolean
                                    renderType?: string
                                    options?: unknown
                                    status?:
                                        | 'complete'
                                        | 'waiting'
                                        | 'processing'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        config?: unknown
                        name?: string
                        manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            members?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            owner?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order_header?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetModelsId {
        id: string | number
    }

    export interface ResPutModelsId {
        data?: ModelResponseDataObject
        meta?: {}
    }
    export interface ModelResponseDataObject {
        id?: string
        attributes?: {
            name?: string
            file?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        alternativeText?: string
                        caption?: string
                        width?: number
                        height?: number
                        formats?: unknown
                        hash?: string
                        ext?: string
                        mime?: string
                        size?: number
                        url?: string
                        previewUrl?: string
                        provider?: string
                        provider_metadata?: unknown
                        related?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        folder?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    pathId?: number
                                    parent?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    children?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    files?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    path?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        folderPath?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            size?: number
            status?:
                | 'waiting'
                | 'processing'
                | 'processed'
                | 'error'
                | 'netError'
            message?: string
            type?: 'step'
            document?: {
                data?: {
                    id?: string
                    attributes?: {
                        model?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    file?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    size?: number
                                    status?:
                                        | 'waiting'
                                        | 'processing'
                                        | 'processed'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    type?: 'step'
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    order_header?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        entities?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    visible?: boolean
                                    type?: 'group' | 'object' | 'system'
                                    build_description?: unknown
                                    material?: unknown
                                    matrix?: unknown
                                    name?: string
                                    originInStructure?: string
                                    originSource?: string
                                    parent?: string
                                    post_build_description?: unknown
                                    children?: unknown
                                    document?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updated?: string
                                    clientId?: string
                                    deleted_?: boolean
                                    renderType?: string
                                    options?: unknown
                                    status?:
                                        | 'complete'
                                        | 'waiting'
                                        | 'processing'
                                        | 'error'
                                        | 'netError'
                                    message?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        config?: unknown
                        name?: string
                        manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            members?: {
                data?: {
                    id?: string
                    attributes?: {}
                }[]
            }
            owner?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            order_header?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutModelsId {
        id: string | number
    }

    export interface ReqPutModelsId {
        data: {
            name?: string
            file?: number | string
            size?: number
            status?:
                | 'waiting'
                | 'processing'
                | 'processed'
                | 'error'
                | 'netError'
            message?: string
            type?: 'step'
            document?: number | string
            members?: (number | string)[]
            owner?: number | string
            order?: number | string
            order_header?: number | string
        }
    }

    export type ResDeleteModelsId = number

    export interface ParamDeleteModelsId {
        id: string | number
    }

    export interface ResGetOrders {
        data?: OrderListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface OrderListResponseDataItem {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            price?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customer?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            bom?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetOrders {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostOrders {
        data?: OrderResponseDataObject
        meta?: {}
    }
    export interface OrderResponseDataObject {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            price?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customer?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            bom?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostOrders {
        data: {
            user_asset?: number | string
            price?: number
            model?: number | string
            customer?: number | string
            bom?: unknown
        }
    }

    export interface ResGetOrdersId {
        data?: OrderResponseDataObject
        meta?: {}
    }
    export interface OrderResponseDataObject {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            price?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customer?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            bom?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetOrdersId {
        id: string | number
    }

    export interface ResPutOrdersId {
        data?: OrderResponseDataObject
        meta?: {}
    }
    export interface OrderResponseDataObject {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            price?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            customer?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            bom?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutOrdersId {
        id: string | number
    }

    export interface ReqPutOrdersId {
        data: {
            user_asset?: number | string
            price?: number
            model?: number | string
            customer?: number | string
            bom?: unknown
        }
    }

    export type ResDeleteOrdersId = number

    export interface ParamDeleteOrdersId {
        id: string | number
    }

    export interface ResGetOrderHeaders {
        data?: OrderHeaderListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface OrderHeaderListResponseDataItem {
        id?: string
        attributes?: {
            customer_po?: string
            order_number?: string
            order_type?: string
            contact_person_id?: number
            create_by?: {
                data?: {
                    id?: string
                    attributes?: {
                        username?: string
                        email?: string
                        provider?: string
                        resetPasswordToken?: string
                        confirmationToken?: string
                        confirmed?: boolean
                        blocked?: boolean
                        role?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    description?: string
                                    type?: string
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            update_by?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            pay_way?: string
            remark?: string
            traffic_way?: string
            delivery_dates?: string
            order_lines?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        quantity?: number
                        price?: number
                        discount_price?: number
                        item_type?: unknown
                        discount?: number
                        unit?: string
                        cancel_quantity?: number
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            step?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        file?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    alternativeText?: string
                                    caption?: string
                                    width?: number
                                    height?: number
                                    formats?: unknown
                                    hash?: string
                                    ext?: string
                                    mime?: string
                                    size?: number
                                    url?: string
                                    previewUrl?: string
                                    provider?: string
                                    provider_metadata?: unknown
                                    related?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    folder?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    folderPath?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        size?: number
                        status?:
                            | 'waiting'
                            | 'processing'
                            | 'processed'
                            | 'error'
                            | 'netError'
                        message?: string
                        type?: 'step'
                        document?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order_header?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    customer_po?: string
                                    order_number?: string
                                    order_type?: string
                                    contact_person_id?: number
                                    create_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    update_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    pay_way?: string
                                    remark?: string
                                    traffic_way?: string
                                    delivery_dates?: string
                                    order_lines?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    step?: number
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    price?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            price?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetOrderHeaders {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostOrderHeaders {
        data?: OrderHeaderResponseDataObject
        meta?: {}
    }
    export interface OrderHeaderResponseDataObject {
        id?: string
        attributes?: {
            customer_po?: string
            order_number?: string
            order_type?: string
            contact_person_id?: number
            create_by?: {
                data?: {
                    id?: string
                    attributes?: {
                        username?: string
                        email?: string
                        provider?: string
                        resetPasswordToken?: string
                        confirmationToken?: string
                        confirmed?: boolean
                        blocked?: boolean
                        role?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    description?: string
                                    type?: string
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            update_by?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            pay_way?: string
            remark?: string
            traffic_way?: string
            delivery_dates?: string
            order_lines?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        quantity?: number
                        price?: number
                        discount_price?: number
                        item_type?: unknown
                        discount?: number
                        unit?: string
                        cancel_quantity?: number
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            step?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        file?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    alternativeText?: string
                                    caption?: string
                                    width?: number
                                    height?: number
                                    formats?: unknown
                                    hash?: string
                                    ext?: string
                                    mime?: string
                                    size?: number
                                    url?: string
                                    previewUrl?: string
                                    provider?: string
                                    provider_metadata?: unknown
                                    related?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    folder?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    folderPath?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        size?: number
                        status?:
                            | 'waiting'
                            | 'processing'
                            | 'processed'
                            | 'error'
                            | 'netError'
                        message?: string
                        type?: 'step'
                        document?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order_header?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    customer_po?: string
                                    order_number?: string
                                    order_type?: string
                                    contact_person_id?: number
                                    create_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    update_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    pay_way?: string
                                    remark?: string
                                    traffic_way?: string
                                    delivery_dates?: string
                                    order_lines?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    step?: number
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    price?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            price?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostOrderHeaders {
        data: {
            customer_po?: string
            order_number?: string
            order_type?: string
            contact_person_id?: number
            create_by?: number | string
            update_by?: number | string
            pay_way?: string
            remark?: string
            traffic_way?: string
            delivery_dates?: string
            order_lines?: (number | string)[]
            step?: number
            model?: number | string
            ar_customer_base_info?: number | string
            price?: string
        }
    }

    export interface ResGetOrderHeadersId {
        data?: OrderHeaderResponseDataObject
        meta?: {}
    }
    export interface OrderHeaderResponseDataObject {
        id?: string
        attributes?: {
            customer_po?: string
            order_number?: string
            order_type?: string
            contact_person_id?: number
            create_by?: {
                data?: {
                    id?: string
                    attributes?: {
                        username?: string
                        email?: string
                        provider?: string
                        resetPasswordToken?: string
                        confirmationToken?: string
                        confirmed?: boolean
                        blocked?: boolean
                        role?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    description?: string
                                    type?: string
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            update_by?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            pay_way?: string
            remark?: string
            traffic_way?: string
            delivery_dates?: string
            order_lines?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        quantity?: number
                        price?: number
                        discount_price?: number
                        item_type?: unknown
                        discount?: number
                        unit?: string
                        cancel_quantity?: number
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            step?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        file?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    alternativeText?: string
                                    caption?: string
                                    width?: number
                                    height?: number
                                    formats?: unknown
                                    hash?: string
                                    ext?: string
                                    mime?: string
                                    size?: number
                                    url?: string
                                    previewUrl?: string
                                    provider?: string
                                    provider_metadata?: unknown
                                    related?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    folder?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    folderPath?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        size?: number
                        status?:
                            | 'waiting'
                            | 'processing'
                            | 'processed'
                            | 'error'
                            | 'netError'
                        message?: string
                        type?: 'step'
                        document?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order_header?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    customer_po?: string
                                    order_number?: string
                                    order_type?: string
                                    contact_person_id?: number
                                    create_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    update_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    pay_way?: string
                                    remark?: string
                                    traffic_way?: string
                                    delivery_dates?: string
                                    order_lines?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    step?: number
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    price?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            price?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetOrderHeadersId {
        id: string | number
    }

    export interface ResPutOrderHeadersId {
        data?: OrderHeaderResponseDataObject
        meta?: {}
    }
    export interface OrderHeaderResponseDataObject {
        id?: string
        attributes?: {
            customer_po?: string
            order_number?: string
            order_type?: string
            contact_person_id?: number
            create_by?: {
                data?: {
                    id?: string
                    attributes?: {
                        username?: string
                        email?: string
                        provider?: string
                        resetPasswordToken?: string
                        confirmationToken?: string
                        confirmed?: boolean
                        blocked?: boolean
                        role?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    description?: string
                                    type?: string
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            update_by?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            pay_way?: string
            remark?: string
            traffic_way?: string
            delivery_dates?: string
            order_lines?: {
                data?: {
                    id?: string
                    attributes?: {
                        code?: string
                        name?: string
                        quantity?: number
                        price?: number
                        discount_price?: number
                        item_type?: unknown
                        discount?: number
                        unit?: string
                        cancel_quantity?: number
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }[]
            }
            step?: number
            model?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        file?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    alternativeText?: string
                                    caption?: string
                                    width?: number
                                    height?: number
                                    formats?: unknown
                                    hash?: string
                                    ext?: string
                                    mime?: string
                                    size?: number
                                    url?: string
                                    previewUrl?: string
                                    provider?: string
                                    provider_metadata?: unknown
                                    related?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    folder?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    folderPath?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        size?: number
                        status?:
                            | 'waiting'
                            | 'processing'
                            | 'processed'
                            | 'error'
                            | 'netError'
                        message?: string
                        type?: 'step'
                        document?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        members?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        owner?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        order_header?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    customer_po?: string
                                    order_number?: string
                                    order_type?: string
                                    contact_person_id?: number
                                    create_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    update_by?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    pay_way?: string
                                    remark?: string
                                    traffic_way?: string
                                    delivery_dates?: string
                                    order_lines?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    step?: number
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    ar_customer_base_info?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    price?: string
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            ar_customer_base_info?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            price?: string
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutOrderHeadersId {
        id: string | number
    }

    export interface ReqPutOrderHeadersId {
        data: {
            customer_po?: string
            order_number?: string
            order_type?: string
            contact_person_id?: number
            create_by?: number | string
            update_by?: number | string
            pay_way?: string
            remark?: string
            traffic_way?: string
            delivery_dates?: string
            order_lines?: (number | string)[]
            step?: number
            model?: number | string
            ar_customer_base_info?: number | string
            price?: string
        }
    }

    export type ResDeleteOrderHeadersId = number

    export interface ParamDeleteOrderHeadersId {
        id: string | number
    }

    export interface ResGetOrderLines {
        data?: OrderLineListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface OrderLineListResponseDataItem {
        id?: string
        attributes?: {
            code?: string
            name?: string
            quantity?: number
            price?: number
            discount_price?: number
            item_type?: unknown
            discount?: number
            unit?: string
            cancel_quantity?: number
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetOrderLines {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostOrderLines {
        data?: OrderLineResponseDataObject
        meta?: {}
    }
    export interface OrderLineResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            name?: string
            quantity?: number
            price?: number
            discount_price?: number
            item_type?: unknown
            discount?: number
            unit?: string
            cancel_quantity?: number
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostOrderLines {
        data: {
            code?: string
            name?: string
            quantity?: number
            price?: number
            discount_price?: number
            item_type?: unknown
            discount?: number
            unit?: string
            cancel_quantity?: number
        }
    }

    export interface ResGetOrderLinesId {
        data?: OrderLineResponseDataObject
        meta?: {}
    }
    export interface OrderLineResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            name?: string
            quantity?: number
            price?: number
            discount_price?: number
            item_type?: unknown
            discount?: number
            unit?: string
            cancel_quantity?: number
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetOrderLinesId {
        id: string | number
    }

    export interface ResPutOrderLinesId {
        data?: OrderLineResponseDataObject
        meta?: {}
    }
    export interface OrderLineResponseDataObject {
        id?: string
        attributes?: {
            code?: string
            name?: string
            quantity?: number
            price?: number
            discount_price?: number
            item_type?: unknown
            discount?: number
            unit?: string
            cancel_quantity?: number
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutOrderLinesId {
        id: string | number
    }

    export interface ReqPutOrderLinesId {
        data: {
            code?: string
            name?: string
            quantity?: number
            price?: number
            discount_price?: number
            item_type?: unknown
            discount?: number
            unit?: string
            cancel_quantity?: number
        }
    }

    export type ResDeleteOrderLinesId = number

    export interface ParamDeleteOrderLinesId {
        id: string | number
    }

    export interface ResGetPriceRules {
        data?: PriceRuleListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface PriceRuleListResponseDataItem {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            rules?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetPriceRules {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostPriceRules {
        data?: PriceRuleResponseDataObject
        meta?: {}
    }
    export interface PriceRuleResponseDataObject {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            rules?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostPriceRules {
        data: {
            user_asset?: number | string
            rules?: unknown
        }
    }

    export interface ResGetPriceRulesId {
        data?: PriceRuleResponseDataObject
        meta?: {}
    }
    export interface PriceRuleResponseDataObject {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            rules?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetPriceRulesId {
        id: string | number
    }

    export interface ResPutPriceRulesId {
        data?: PriceRuleResponseDataObject
        meta?: {}
    }
    export interface PriceRuleResponseDataObject {
        id?: string
        attributes?: {
            user_asset?: {
                data?: {
                    id?: string
                    attributes?: {
                        userId?: string
                        expire?: string
                        online?: boolean
                        documents?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    model?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    entities?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    members?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    owner?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    config?: unknown
                                    name?: string
                                    manufacture_configuration?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        mydocuments?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        mymodels?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        models?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        manufacture_configurations?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        my_manufacture_configuration?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        materials?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        orders?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customers?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        customer_types?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }[]
                        }
                        price_rule?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    user_asset?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    rules?: unknown
                                    createdAt?: string
                                    updatedAt?: string
                                    publishedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }
                        }
                        createdAt?: string
                        updatedAt?: string
                        publishedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            rules?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutPriceRulesId {
        id: string | number
    }

    export interface ReqPutPriceRulesId {
        data: {
            user_asset?: number | string
            rules?: unknown
        }
    }

    export type ResDeletePriceRulesId = number

    export interface ParamDeletePriceRulesId {
        id: string | number
    }

    export interface ResGetSaListPrices {
        data?: SaListPriceListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface SaListPriceListResponseDataItem {
        id?: string
        attributes?: {
            item_code?: string
            item_name?: string
            unit?: string
            price?: number
            category?: unknown
            status?: boolean
            type?: 'plateMaterial' | 'partsQuote' | 'ProcessingTechnology'
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetSaListPrices {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostSaListPrices {
        data?: SaListPriceResponseDataObject
        meta?: {}
    }
    export interface SaListPriceResponseDataObject {
        id?: string
        attributes?: {
            item_code?: string
            item_name?: string
            unit?: string
            price?: number
            category?: unknown
            status?: boolean
            type?: 'plateMaterial' | 'partsQuote' | 'ProcessingTechnology'
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostSaListPrices {
        data: {
            item_code?: string
            item_name?: string
            unit?: string
            price?: number
            category?: unknown
            status?: boolean
            type?: 'plateMaterial' | 'partsQuote' | 'ProcessingTechnology'
        }
    }

    export interface ResGetSaListPricesId {
        data?: SaListPriceResponseDataObject
        meta?: {}
    }
    export interface SaListPriceResponseDataObject {
        id?: string
        attributes?: {
            item_code?: string
            item_name?: string
            unit?: string
            price?: number
            category?: unknown
            status?: boolean
            type?: 'plateMaterial' | 'partsQuote' | 'ProcessingTechnology'
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamGetSaListPricesId {
        id: string | number
    }

    export interface ResPutSaListPricesId {
        data?: SaListPriceResponseDataObject
        meta?: {}
    }
    export interface SaListPriceResponseDataObject {
        id?: string
        attributes?: {
            item_code?: string
            item_name?: string
            unit?: string
            price?: number
            category?: unknown
            status?: boolean
            type?: 'plateMaterial' | 'partsQuote' | 'ProcessingTechnology'
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ParamPutSaListPricesId {
        id: string | number
    }

    export interface ReqPutSaListPricesId {
        data: {
            item_code?: string
            item_name?: string
            unit?: string
            price?: number
            category?: unknown
            status?: boolean
            type?: 'plateMaterial' | 'partsQuote' | 'ProcessingTechnology'
        }
    }

    export type ResDeleteSaListPricesId = number

    export interface ParamDeleteSaListPricesId {
        id: string | number
    }

    export interface ResGetStandards {
        data?: StandardListResponseDataItem[]
        meta?: {
            pagination?: {
                page?: number
                pageSize?: number
                pageCount?: number
                total?: number
            }
        }
    }
    export interface StandardListResponseDataItem {
        id?: string
        attributes?: {
            standard?: 'metric' | 'imperial' | 'US' | 'hasco' | 'lkm'
            part?: string
            category?: string
            parameters?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface QueryGetStandards {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string
        /**
         * Retun page/pageSize (default: true)
         */
        'pagination[withCount]'?: boolean
        /**
         * Page number (default: 0)
         */
        'pagination[page]'?: number
        /**
         * Page size (default: 25)
         */
        'pagination[pageSize]'?: number
        /**
         * Offset value (default: 0)
         */
        'pagination[start]'?: number
        /**
         * Number of entities to return (default: 25)
         */
        'pagination[limit]'?: number
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string
        /**
         * Relations to return
         */
        populate?: string
    }

    export interface ResPostStandards {
        data?: StandardResponseDataObject
        meta?: {}
    }
    export interface StandardResponseDataObject {
        id?: string
        attributes?: {
            standard?: 'metric' | 'imperial' | 'US' | 'hasco' | 'lkm'
            part?: string
            category?: string
            parameters?: unknown
            createdAt?: string
            updatedAt?: string
            publishedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {
                        firstname?: string
                        lastname?: string
                        username?: string
                        email?: string
                        resetPasswordToken?: string
                        registrationToken?: string
                        isActive?: boolean
                        roles?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    name?: string
                                    code?: string
                                    description?: string
                                    users?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    permissions?: {
                                        data?: {
                                            id?: string
                                        }[]
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        blocked?: boolean
                        preferedLanguage?: string
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostStandards {
        data: {
            standard: 'metric' | 'imperial' | 'US' | 'hasco' | 'lkm'
            part: string
            category: string
            parameters?: unknown
        }
    }

    export interface ResGetUsersQueryname {
        data?: UsersPermissionsUserResponseDataObject
        meta?: {}
    }
    export interface UsersPermissionsUserResponseDataObject {
        id?: string
        attributes?: {
            username?: string
            email?: string
            provider?: string
            resetPasswordToken?: string
            confirmationToken?: string
            confirmed?: boolean
            blocked?: boolean
            role?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        description?: string
                        type?: string
                        permissions?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    action?: string
                                    role?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        users?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    username?: string
                                    email?: string
                                    provider?: string
                                    resetPasswordToken?: string
                                    confirmationToken?: string
                                    confirmed?: boolean
                                    blocked?: boolean
                                    role?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            createdAt?: string
            updatedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ResPostUsersBriefinfo {
        data?: UsersPermissionsUserResponseDataObject
        meta?: {}
    }
    export interface UsersPermissionsUserResponseDataObject {
        id?: string
        attributes?: {
            username?: string
            email?: string
            provider?: string
            resetPasswordToken?: string
            confirmationToken?: string
            confirmed?: boolean
            blocked?: boolean
            role?: {
                data?: {
                    id?: string
                    attributes?: {
                        name?: string
                        description?: string
                        type?: string
                        permissions?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    action?: string
                                    role?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        users?: {
                            data?: {
                                id?: string
                                attributes?: {
                                    username?: string
                                    email?: string
                                    provider?: string
                                    resetPasswordToken?: string
                                    confirmationToken?: string
                                    confirmed?: boolean
                                    blocked?: boolean
                                    role?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    createdAt?: string
                                    updatedAt?: string
                                    createdBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                    updatedBy?: {
                                        data?: {
                                            id?: string
                                        }
                                    }
                                }
                            }[]
                        }
                        createdAt?: string
                        updatedAt?: string
                        createdBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                        updatedBy?: {
                            data?: {
                                id?: string
                                attributes?: {}
                            }
                        }
                    }
                }
            }
            createdAt?: string
            updatedAt?: string
            createdBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
            updatedBy?: {
                data?: {
                    id?: string
                    attributes?: {}
                }
            }
        }
    }

    export interface ReqPostUsersBriefinfo {
        data: {
            username: string
            email: string
            provider?: string
            password?: string
            resetPasswordToken?: string
            confirmationToken?: string
            confirmed?: boolean
            blocked?: boolean
            role?: number | string
        }
    }

    export interface ResAuthLocal {
        jwt?: string
        user?: UsersPermissionsUser
    }
    export interface UsersPermissionsUser {
        id?: number
        username?: string
        email?: string
        provider?: string
        confirmed?: boolean
        blocked?: boolean
        createdAt?: string
        updatedAt?: string
    }

    export interface ReqAuthLocal {
        identifier?: string
        password?: string
    }
}
