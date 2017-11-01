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
* The ProductReferenceWsDTO173 model module.
* @module models/ProductReferenceWsDTO173
* @version v2
*/
export default class ProductReferenceWsDTO173 {
    /**
    * Constructs a new <code>ProductReferenceWsDTO173</code>.
    * @alias module:models/ProductReferenceWsDTO173
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>ProductReferenceWsDTO173</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ProductReferenceWsDTO173} obj Optional instance to
    * populate.
    * @return {module:models/ProductReferenceWsDTO173} The populated
    * <code>ProductReferenceWsDTO173</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductReferenceWsDTO173();

            if (data.hasOwnProperty('preselected')) {
                obj['preselected'] = ApiClient.convertToType(data['preselected'], 'Boolean');
            }
            if (data.hasOwnProperty('referenceType')) {
                obj['referenceType'] = ApiClient.convertToType(data['referenceType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Boolean} preselected
    */
    preselected = undefined;
    /**
    * 
    * @member {String} referenceType
    */
    referenceType = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * 
    * @member {Number} quantity
    */
    quantity = undefined;

}
