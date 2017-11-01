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
import CountryWsDTO from './CountryWsDTO';
import RegionWsDTO from './RegionWsDTO';

/**
* The AddressWsDTO model module.
* @module models/AddressWsDTO
* @version v2
*/
export default class AddressWsDTO {
    /**
    * Constructs a new <code>AddressWsDTO</code>.
    * @alias module:models/AddressWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>AddressWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/AddressWsDTO} obj Optional instance to populate.
    * @return {module:models/AddressWsDTO} The populated
    * <code>AddressWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressWsDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('titleCode')) {
                obj['titleCode'] = ApiClient.convertToType(data['titleCode'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('town')) {
                obj['town'] = ApiClient.convertToType(data['town'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = RegionWsDTO.constructFromObject(data['region']);
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = CountryWsDTO.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj['shippingAddress'] = ApiClient.convertToType(data['shippingAddress'], 'Boolean');
            }
            if (data.hasOwnProperty('visibleInAddressBook')) {
                obj['visibleInAddressBook'] = ApiClient.convertToType(data['visibleInAddressBook'], 'Boolean');
            }
            if (data.hasOwnProperty('formattedAddress')) {
                obj['formattedAddress'] = ApiClient.convertToType(data['formattedAddress'], 'String');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} id
    */
    id = undefined;
    /**
    * 
    * @member {String} title
    */
    title = undefined;
    /**
    * 
    * @member {String} titleCode
    */
    titleCode = undefined;
    /**
    * 
    * @member {String} firstName
    */
    firstName = undefined;
    /**
    * 
    * @member {String} lastName
    */
    lastName = undefined;
    /**
    * 
    * @member {String} companyName
    */
    companyName = undefined;
    /**
    * 
    * @member {String} line1
    */
    line1 = undefined;
    /**
    * 
    * @member {String} line2
    */
    line2 = undefined;
    /**
    * 
    * @member {String} town
    */
    town = undefined;
    /**
    * @member {module:models/RegionWsDTO} region
    */
    region = undefined;
    /**
    * 
    * @member {String} postalCode
    */
    postalCode = undefined;
    /**
    * 
    * @member {String} phone
    */
    phone = undefined;
    /**
    * 
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {module:models/CountryWsDTO} country
    */
    country = undefined;
    /**
    * 
    * @member {Boolean} shippingAddress
    */
    shippingAddress = undefined;
    /**
    * 
    * @member {Boolean} visibleInAddressBook
    */
    visibleInAddressBook = undefined;
    /**
    * 
    * @member {String} formattedAddress
    */
    formattedAddress = undefined;

}
