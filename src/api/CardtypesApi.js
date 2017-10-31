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
import CardTypeListWsDTO from '../models/CardTypeListWsDTO'

/**
* Cardtypes service.
* @module api/CardtypesApi
* @version v2
*/
export default class CardtypesApi {

    /**
    * Constructs a new CardtypesApi.
    * @alias module:api/CardtypesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Cardtypes
     * Lists supported payment card types.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CardTypeListWsDTO} and HTTP response
     */
    cardtypesWithHttpInfo(opts) {
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
        const returnType = CardTypeListWsDTO

        return this.apiClient.callApi(
            '/cardtypes', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Cardtypes
     * Lists supported payment card types.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CardTypeListWsDTO}
     */
    getCardTypes(opts) {
        return this.cardtypesWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

}
