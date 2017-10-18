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
* The OrderHistoryWsDTOModel model module.
* @module models/OrderHistoryWsDTOModel
* @version v2
*/
export default class OrderHistoryWsDTOModel {
    /**
    * Constructs a new <code>OrderHistoryWsDTOModel</code>.
    * @alias module:models/OrderHistoryWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OrderHistoryWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderHistoryWsDTOModel} obj Optional instance to populate.
    * @return {module:models/OrderHistoryWsDTOModel} The populated <code>OrderHistoryWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderHistoryWsDTOModel();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('statusDisplay')) {
                obj['statusDisplay'] = ApiClient.convertToType(data['statusDisplay'], 'String');
            }
            if (data.hasOwnProperty('placed')) {
                obj['placed'] = ApiClient.convertToType(data['placed'], 'String');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = PriceWsDTOModel.constructFromObject(data['total']);
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
    * @member {String} status
    */
    status = undefined;
    /**
    * 
    * @member {String} statusDisplay
    */
    statusDisplay = undefined;
    /**
    * 
    * @member {String} placed
    */
    placed = undefined;
    /**
    * 
    * @member {String} guid
    */
    guid = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} total
    */
    total = undefined;








}

