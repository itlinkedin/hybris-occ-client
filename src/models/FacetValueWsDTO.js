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
import SearchStateWsDTO from './SearchStateWsDTO';

/**
* The FacetValueWsDTO model module.
* @module models/FacetValueWsDTO
* @version v2
*/
export default class FacetValueWsDTO {
    /**
    * Constructs a new <code>FacetValueWsDTO</code>.
    * @alias module:models/FacetValueWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>FacetValueWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/FacetValueWsDTO} obj Optional instance to populate.
    * @return {module:models/FacetValueWsDTO} The populated
    * <code>FacetValueWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FacetValueWsDTO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = SearchStateWsDTO.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {module:models/SearchStateWsDTO} query
    */
    query = undefined;
    /**
    * 
    * @member {Boolean} selected
    */
    selected = undefined;

}
