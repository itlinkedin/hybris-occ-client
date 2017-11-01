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
* The Language model module.
* @module models/Language
* @version v2
*/
export default class Language {
    /**
    * Constructs a new <code>Language</code>.
    * @alias module:models/Language
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>Language</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Language} obj Optional instance to populate.
    * @return {module:models/Language} The populated <code>Language</code>
    * instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Language();

            if (data.hasOwnProperty('isocode')) {
                obj['isocode'] = ApiClient.convertToType(data['isocode'], 'String');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} isocode
    */
    isocode = undefined;

}
