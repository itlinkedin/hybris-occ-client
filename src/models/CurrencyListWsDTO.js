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
import CurrencyWsDTO from './CurrencyWsDTO';

/**
* The CurrencyListWsDTO model module.
* @module models/CurrencyListWsDTO
* @version v2
*/
export default class CurrencyListWsDTO {
    /**
    * Constructs a new <code>CurrencyListWsDTO</code>.
    * @alias module:models/CurrencyListWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>CurrencyListWsDTO</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CurrencyListWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/CurrencyListWsDTO} The populated
    * <code>CurrencyListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyListWsDTO();

            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], [CurrencyWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/CurrencyWsDTO>} currencies
    */
    currencies = undefined;

}
