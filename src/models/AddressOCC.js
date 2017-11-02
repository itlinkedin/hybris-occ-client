/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

import ApiClient from '../ApiClient'
import Country from './Country'
import Region from './Region'

/**
* The AddressOCC model module.
* @module models/AddressOCC
* @version v2
*/
export default class AddressOCC {
    /**
    * Constructs a new <code>AddressOCC</code>.
    * @alias module:models/AddressOCC
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} titleCode
    */
        this.titleCode = undefined
        /**
    *
    * @member {String} firstName
    */
        this.firstName = undefined
        /**
    *
    * @member {String} lastName
    */
        this.lastName = undefined
        /**
    *
    * @member {String} line1
    */
        this.line1 = undefined
        /**
    *
    * @member {String} line2
    */
        this.line2 = undefined
        /**
    *
    * @member {String} town
    */
        this.town = undefined
        /**
    * @member {module:models/Region} region
    */
        this.region = undefined
        /**
    *
    * @member {String} postalCode
    */
        this.postalCode = undefined
        /**
    * @member {module:models/Country} country
    */
        this.country = undefined
    }

    /**
    * Constructs a <code>AddressOCC</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/AddressOCC} obj Optional instance to populate.
    * @return {module:models/AddressOCC} The populated
    * <code>AddressOCC</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressOCC()

            if (data.hasOwnProperty('titleCode')) {
                obj.titleCode = ApiClient.convertToType(data.titleCode, 'String')
            }
            if (data.hasOwnProperty('firstName')) {
                obj.firstName = ApiClient.convertToType(data.firstName, 'String')
            }
            if (data.hasOwnProperty('lastName')) {
                obj.lastName = ApiClient.convertToType(data.lastName, 'String')
            }
            if (data.hasOwnProperty('line1')) {
                obj.line1 = ApiClient.convertToType(data.line1, 'String')
            }
            if (data.hasOwnProperty('line2')) {
                obj.line2 = ApiClient.convertToType(data.line2, 'String')
            }
            if (data.hasOwnProperty('town')) {
                obj.town = ApiClient.convertToType(data.town, 'String')
            }
            if (data.hasOwnProperty('region')) {
                obj.region = Region.constructFromObject(data.region)
            }
            if (data.hasOwnProperty('postalCode')) {
                obj.postalCode = ApiClient.convertToType(data.postalCode, 'String')
            }
            if (data.hasOwnProperty('country')) {
                obj.country = Country.constructFromObject(data.country)
            }
        }
        return obj
    }

}
