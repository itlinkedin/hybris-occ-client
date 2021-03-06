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

/**
* The PromotionOrderEntryConsumed model module.
* @module models/PromotionOrderEntryConsumed
* @version v2
*/
export default class PromotionOrderEntryConsumed {
    /**
    * Constructs a new <code>PromotionOrderEntryConsumed</code>.
    * @alias module:models/PromotionOrderEntryConsumed
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    *
    * @member {Number} adjustedUnitPrice
    */
        this.adjustedUnitPrice = undefined
        /**
    *
    * @member {Number} orderEntryNumber
    */
        this.orderEntryNumber = undefined
        /**
    *
    * @member {Number} quantity
    */
        this.quantity = undefined
    }

    /**
    * Constructs a <code>PromotionOrderEntryConsumed</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/PromotionOrderEntryConsumed} obj Optional
    * instance to populate.
    * @return {module:models/PromotionOrderEntryConsumed} The populated
    * <code>PromotionOrderEntryConsumed</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionOrderEntryConsumed()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('adjustedUnitPrice')) {
                obj.adjustedUnitPrice = ApiClient.convertToType(data.adjustedUnitPrice, 'Number')
            }
            if (data.hasOwnProperty('orderEntryNumber')) {
                obj.orderEntryNumber = ApiClient.convertToType(data.orderEntryNumber, 'Number')
            }
            if (data.hasOwnProperty('quantity')) {
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number')
            }
        }
        return obj
    }



}
