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
import LanguageWsDTO from './LanguageWsDTO';

/**
* The LanguageListWsDTO model module.
* @module models/LanguageListWsDTO
* @version v2
*/
export default class LanguageListWsDTO {
    /**
    * Constructs a new <code>LanguageListWsDTO</code>.
    * @alias module:models/LanguageListWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>LanguageListWsDTO</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/LanguageListWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/LanguageListWsDTO} The populated
    * <code>LanguageListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguageListWsDTO();

            if (data.hasOwnProperty('languages')) {
                obj['languages'] = ApiClient.convertToType(data['languages'], [LanguageWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/LanguageWsDTO>} languages
    */
    languages = undefined;

}
