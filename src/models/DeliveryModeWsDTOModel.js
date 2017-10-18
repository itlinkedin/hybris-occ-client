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


import ApiClient from '../ApiClient';
import PriceWsDTOModel from './PriceWsDTOModel';





/**
* The DeliveryModeWsDTOModel model module.
* @module models/DeliveryModeWsDTOModel
* @version v2
*/
export default class DeliveryModeWsDTOModel {
    /**
    * Constructs a new <code>DeliveryModeWsDTOModel</code>.
    * @alias module:models/DeliveryModeWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DeliveryModeWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/DeliveryModeWsDTOModel} obj Optional instance to populate.
    * @return {module:models/DeliveryModeWsDTOModel} The populated <code>DeliveryModeWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliveryModeWsDTOModel();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('deliveryCost')) {
                obj['deliveryCost'] = PriceWsDTOModel.constructFromObject(data['deliveryCost']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} deliveryCost
    */
    deliveryCost = undefined;








}

