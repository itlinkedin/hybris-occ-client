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
import CatalogWsDTO from './CatalogWsDTO';

/**
* The CatalogListWsDTO model module.
* @module models/CatalogListWsDTO
* @version v2
*/
export default class CatalogListWsDTO {
    /**
    * Constructs a new <code>CatalogListWsDTO</code>.
    * @alias module:models/CatalogListWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>CatalogListWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CatalogListWsDTO} obj Optional instance to populate.
    * @return {module:models/CatalogListWsDTO} The populated
    * <code>CatalogListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogListWsDTO();

            if (data.hasOwnProperty('catalogs')) {
                obj['catalogs'] = ApiClient.convertToType(data['catalogs'], [CatalogWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/CatalogWsDTO>} catalogs
    */
    catalogs = undefined;

}
