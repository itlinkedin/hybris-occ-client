/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient'
import ProductListWsDTO from '../models/ProductListWsDTO'

/**
* Export service.
* @module api/ExportApi
* @version v2
*/
export default class ExportApi {

    /**
    * Constructs a new ExportApi.
    * @alias module:api/ExportApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * ExportProducts
     * Used for product export. Depending on the timestamp parameter, it can return all products or only products modified after the given time.  Security: Allowed only for trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalog Catalog from which get products. Must be provided along with version.
     * @param {String} opts.pageSize The number of results returned per page.
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @param {String} opts.currentPage The current result page requested.
     * @param {String} opts.version Catalog version. Must be provided along with catalog.
     * @param {String} opts.timestamp When this parameter is set, only products modified after given time will be returned.This parameter should be in RFC-8601 format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductListWsDTO} and HTTP response
     */
    exportProductsWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            catalog: opts.catalog,
            pageSize: opts.pageSize,
            fields: opts.fields,
            currentPage: opts.currentPage,
            version: opts.version,
            timestamp: opts.timestamp
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = ProductListWsDTO

        return this.apiClient.callApi(
            '/export/products', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * ExportProducts
     * Used for product export. Depending on the timestamp parameter, it can return all products or only products modified after the given time.  Security: Allowed only for trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalog Catalog from which get products. Must be provided along with version.
     * @param {String} opts.pageSize The number of results returned per page.
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @param {String} opts.currentPage The current result page requested.
     * @param {String} opts.version Catalog version. Must be provided along with catalog.
     * @param {String} opts.timestamp When this parameter is set, only products modified after given time will be returned.This parameter should be in RFC-8601 format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductListWsDTO}
     */
    exportProducts(opts) {
        return this.exportProductsWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

}
