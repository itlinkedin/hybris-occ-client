/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
    // AMD.
        define(['expect.js', '../../src/index'], factory)
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'))
    } else {
    // Browser globals (root is window)
        factory(root.expect, root.Occ)
    }
}(this, (expect, Occ) => {
    'use strict'

    let instance

    beforeEach(() => {
        instance = new Occ.OrderEntryOCC()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('OrderEntryOCC', () => {
        it('should create an instance of OrderEntryOCC', () => {
            // uncomment below and update the code to test OrderEntryOCC
            // var instane = new Occ.OrderEntryOCC();
            // expect(instance).to.be.a(Occ.OrderEntryOCC);
        })

        it('should have the property quantity (base name: "quantity")', () => {
            // uncomment below and update the code to test the property quantity
            // var instane = new Occ.OrderEntryOCC();
            // expect(instance).to.be();
        })

        it('should have the property product (base name: "product")', () => {
            // uncomment below and update the code to test the property product
            // var instane = new Occ.OrderEntryOCC();
            // expect(instance).to.be();
        })

        it('should have the property deliveryPointOfService (base name: "deliveryPointOfService")', () => {
            // uncomment below and update the code to test the property deliveryPointOfService
            // var instane = new Occ.OrderEntryOCC();
            // expect(instance).to.be();
        })

    })

}))
