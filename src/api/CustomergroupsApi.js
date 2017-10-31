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
import MemberListWsDTO from '../models/MemberListWsDTO'
import UserGroupListWsDTO from '../models/UserGroupListWsDTO'
import UserGroupWsDTO17 from '../models/UserGroupWsDTO17'
import UserGroupWsDTO from '../models/UserGroupWsDTO'

/**
* Customergroups service.
* @module api/CustomergroupsApi
* @version v2
*/
export default class CustomergroupsApi {

    /**
    * Constructs a new CustomergroupsApi.
    * @alias module:api/CustomergroupsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * getCustomerGroups
     * Returns all customer groups that are direct subgroups of a customergroup.  Security: Permitted only for customer managers
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageSize Number of customer group returned in one page
     * @param {String} opts.currentPage Current page number (starts with 0)
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserGroupListWsDTO} and HTTP response
     */
    customergroupsWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            pageSize: opts.pageSize,
            currentPage: opts.currentPage,
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = UserGroupListWsDTO

        return this.apiClient.callApi(
            '/customergroups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getCustomerGroups
     * Returns all customer groups that are direct subgroups of a customergroup.  Security: Permitted only for customer managers
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageSize Number of customer group returned in one page
     * @param {String} opts.currentPage Current page number (starts with 0)
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserGroupListWsDTO}
     */
    getCustomerGroups(opts) {
        return this.customergroupsWithHttpInfo(opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * Customergroups
     * Creates a new customer group that is a direct subgroup of a customergroup.  Security: Permitted only for customer managers
     * @param {module:models/UserGroupWsDTO} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroups1WithHttpInfo(body) {
        const postBody = body

        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error('Missing the required parameter \'body\' when calling postCustomerGroup')
        }

        const pathParams = {
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = null

        return this.apiClient.callApi(
            '/customergroups', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Customergroups
     * Creates a new customer group that is a direct subgroup of a customergroup.  Security: Permitted only for customer managers
     * @param {module:models/UserGroupWsDTO} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCustomerGroup(body) {
        return this.customergroups1WithHttpInfo(body)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * getCustomerGroup
     * Returns a customer group with a specific groupId.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserGroupWsDTO17} and HTTP response
     */
    customergroupsByGroupIdWithHttpInfo(groupId, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw new Error('Missing the required parameter \'groupId\' when calling getCustomerGroup')
        }

        const pathParams = {
            groupId
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
        const returnType = UserGroupWsDTO17

        return this.apiClient.callApi(
            '/customergroups/{groupId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getCustomerGroup
     * Returns a customer group with a specific groupId.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserGroupWsDTO17}
     */
    getCustomerGroup(groupId, opts) {
        return this.customergroupsByGroupIdWithHttpInfo(groupId, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * putCustomerGroupsMembers
     * Sets members for a user group. The list of existing members is overwritten with a new one.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTO} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroupsMembersByGroupIdWithHttpInfo(groupId, body) {
        const postBody = body

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw new Error('Missing the required parameter \'groupId\' when calling putCustomerGroupsMembers')
        }

        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error('Missing the required parameter \'body\' when calling putCustomerGroupsMembers')
        }

        const pathParams = {
            groupId
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = null

        return this.apiClient.callApi(
            '/customergroups/{groupId}/members', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * putCustomerGroupsMembers
     * Sets members for a user group. The list of existing members is overwritten with a new one.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTO} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    putCustomerGroupsMembers(groupId, body) {
        return this.customergroupsMembersByGroupIdWithHttpInfo(groupId, body)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * patchCustomerGroupsMembers
     * Assigns user(s) to a customer group.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTO} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroupsMembersByGroupId1WithHttpInfo(groupId, body) {
        const postBody = body

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw new Error('Missing the required parameter \'groupId\' when calling patchCustomerGroupsMembers')
        }

        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error('Missing the required parameter \'body\' when calling patchCustomerGroupsMembers')
        }

        const pathParams = {
            groupId
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = null

        return this.apiClient.callApi(
            '/customergroups/{groupId}/members', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * patchCustomerGroupsMembers
     * Assigns user(s) to a customer group.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTO} body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    patchCustomerGroupsMembers(groupId, body) {
        return this.customergroupsMembersByGroupId1WithHttpInfo(groupId, body)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * deleteCustomerGroupsMember
     * Removes user from a customer group.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {String} userId User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroupsMembersByGroupIdAndUserIdWithHttpInfo(groupId, userId) {
        const postBody = null

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw new Error('Missing the required parameter \'groupId\' when calling deleteCustomerGroupsMember')
        }

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw new Error('Missing the required parameter \'userId\' when calling deleteCustomerGroupsMember')
        }

        const pathParams = {
            groupId,
            userId
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = null

        return this.apiClient.callApi(
            '/customergroups/{groupId}/members/{userId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * deleteCustomerGroupsMember
     * Removes user from a customer group.  Security: Permitted only for customer managers
     * @param {String} groupId Group identifier
     * @param {String} userId User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomerGroupsMember(groupId, userId) {
        return this.customergroupsMembersByGroupIdAndUserIdWithHttpInfo(groupId, userId)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

}
