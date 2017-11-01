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

import ApiClient from '../ApiClient';

/**
* The PaginationWsDTO model module.
* @module models/PaginationWsDTO
* @version v2
*/
export default class PaginationWsDTO {
    /**
    * Constructs a new <code>PaginationWsDTO</code>.
    * @alias module:models/PaginationWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>PaginationWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/PaginationWsDTO} obj Optional instance to populate.
    * @return {module:models/PaginationWsDTO} The populated
    * <code>PaginationWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationWsDTO();

            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('totalResults')) {
                obj['totalResults'] = ApiClient.convertToType(data['totalResults'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('currentPage')) {
                obj['currentPage'] = ApiClient.convertToType(data['currentPage'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
        }
        return obj;
    }

    /**
    * The total number of pages. This is the number of pages, each of pageSize,
    * required to display the totalResults.
    * @member {Number} totalPages
    */
    totalPages = undefined;
    /**
    * The total number of matched results across all pages.
    * @member {Number} totalResults
    */
    totalResults = undefined;
    /**
    * The number of results per page. A page may have less results if there are
    * less than a full page of results, only on the last page in the results.
    * @member {Number} pageSize
    */
    pageSize = undefined;
    /**
    * The current page number. The first page is number zero (0), the second
    * page is number one (1), and so on.
    * @member {Number} currentPage
    */
    currentPage = undefined;
    /**
    * The selected sort code.
    * @member {String} sort
    */
    sort = undefined;

}
