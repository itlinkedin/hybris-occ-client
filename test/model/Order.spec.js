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
        instance = new Occ.Order()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('Order', () => {
        it('should create an instance of Order', () => {
            // uncomment below and update the code to test Order
            // var instane = new Occ.Order();
            // expect(instance).to.be.a(Occ.Order);
        })

        it('should have the property created (base name: "created")', () => {
            // uncomment below and update the code to test the property created
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property status (base name: "status")', () => {
            // uncomment below and update the code to test the property status
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property statusDisplay (base name: "statusDisplay")', () => {
            // uncomment below and update the code to test the property statusDisplay
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property guestCustomer (base name: "guestCustomer")', () => {
            // uncomment below and update the code to test the property guestCustomer
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property consignments (base name: "consignments")', () => {
            // uncomment below and update the code to test the property consignments
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryStatus (base name: "deliveryStatus")', () => {
            // uncomment below and update the code to test the property deliveryStatus
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryStatusDisplay (base name: "deliveryStatusDisplay")', () => {
            // uncomment below and update the code to test the property deliveryStatusDisplay
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property unconsignedEntries (base name: "unconsignedEntries")', () => {
            // uncomment below and update the code to test the property unconsignedEntries
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property code (base name: "code")', () => {
            // uncomment below and update the code to test the property code
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property net (base name: "net")', () => {
            // uncomment below and update the code to test the property net
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property totalPriceWithTax (base name: "totalPriceWithTax")', () => {
            // uncomment below and update the code to test the property totalPriceWithTax
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property totalPrice (base name: "totalPrice")', () => {
            // uncomment below and update the code to test the property totalPrice
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property totalTax (base name: "totalTax")', () => {
            // uncomment below and update the code to test the property totalTax
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property subTotal (base name: "subTotal")', () => {
            // uncomment below and update the code to test the property subTotal
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryCost (base name: "deliveryCost")', () => {
            // uncomment below and update the code to test the property deliveryCost
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property entries (base name: "entries")', () => {
            // uncomment below and update the code to test the property entries
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property totalItems (base name: "totalItems")', () => {
            // uncomment below and update the code to test the property totalItems
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryMode (base name: "deliveryMode")', () => {
            // uncomment below and update the code to test the property deliveryMode
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryAddress (base name: "deliveryAddress")', () => {
            // uncomment below and update the code to test the property deliveryAddress
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property paymentInfo (base name: "paymentInfo")', () => {
            // uncomment below and update the code to test the property paymentInfo
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property appliedOrderPromotions (base name: "appliedOrderPromotions")', () => {
            // uncomment below and update the code to test the property appliedOrderPromotions
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property appliedProductPromotions (base name: "appliedProductPromotions")', () => {
            // uncomment below and update the code to test the property appliedProductPromotions
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property productDiscounts (base name: "productDiscounts")', () => {
            // uncomment below and update the code to test the property productDiscounts
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property orderDiscounts (base name: "orderDiscounts")', () => {
            // uncomment below and update the code to test the property orderDiscounts
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property totalDiscounts (base name: "totalDiscounts")', () => {
            // uncomment below and update the code to test the property totalDiscounts
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property site (base name: "site")', () => {
            // uncomment below and update the code to test the property site
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property store (base name: "store")', () => {
            // uncomment below and update the code to test the property store
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property guid (base name: "guid")', () => {
            // uncomment below and update the code to test the property guid
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property calculated (base name: "calculated")', () => {
            // uncomment below and update the code to test the property calculated
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property appliedVouchers (base name: "appliedVouchers")', () => {
            // uncomment below and update the code to test the property appliedVouchers
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property user (base name: "user")', () => {
            // uncomment below and update the code to test the property user
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property pickupOrderGroups (base name: "pickupOrderGroups")', () => {
            // uncomment below and update the code to test the property pickupOrderGroups
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryOrderGroups (base name: "deliveryOrderGroups")', () => {
            // uncomment below and update the code to test the property deliveryOrderGroups
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property pickupItemsQuantity (base name: "pickupItemsQuantity")', () => {
            // uncomment below and update the code to test the property pickupItemsQuantity
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

        it('should have the property deliveryItemsQuantity (base name: "deliveryItemsQuantity")', () => {
            // uncomment below and update the code to test the property deliveryItemsQuantity
            // var instane = new Occ.Order();
            // expect(instance).to.be();
        })

    })

}))