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
import DeliveryModeWsDTO from './DeliveryModeWsDTO';

/**
* The DeliveryModeListWsDTO model module.
* @module models/DeliveryModeListWsDTO
* @version v2
*/
export default class DeliveryModeListWsDTO {
    /**
    * Constructs a new <code>DeliveryModeListWsDTO</code>.
    * @alias module:models/DeliveryModeListWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>DeliveryModeListWsDTO</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/DeliveryModeListWsDTO} obj Optional instance to
    * populate.
    * @return {module:models/DeliveryModeListWsDTO} The populated
    * <code>DeliveryModeListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryModeListWsDTO();

            if (data.hasOwnProperty('deliveryModes')) {
                obj['deliveryModes'] = ApiClient.convertToType(data['deliveryModes'], [DeliveryModeWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/DeliveryModeWsDTO>} deliveryModes
    */
    deliveryModes = undefined;

}
