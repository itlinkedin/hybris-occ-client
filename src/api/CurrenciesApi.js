/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */

import ApiClient from '../ApiClient'
import CurrencyListWsDTO from '../models/CurrencyListWsDTO'

/**
* Currencies service.
* @module api/CurrenciesApi
* @version v2
*/
export default class CurrenciesApi {

    /**
    * Constructs a new CurrenciesApi.
    * @alias module:api/CurrenciesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to
    * use, default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * getCurrencies Lists all available currencies (all usable currencies for
     * the current store).If the list of currencies for stores is empty, a list
     * of all currencies available in the system is returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/CurrencyListWsDTO}
     * and HTTP response
     */
    currenciesWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = CurrencyListWsDTO

        return this.apiClient.callApi(
            '/currencies', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Currencies Lists all available currencies (all usable currencies for the
     * current store).If the list of currencies for stores is empty, a list of
     * all currencies available in the system is returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/CurrencyListWsDTO}
     */
    getCurrencies(opts) {
        return this.currenciesWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

}
