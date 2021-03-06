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
        instance = new Occ.Promotion()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('Promotion', () => {
        it('should create an instance of Promotion', () => {
            // uncomment below and update the code to test Promotion
            // var instane = new Occ.Promotion();
            // expect(instance).to.be.a(Occ.Promotion);
        })

        it('should have the property code (base name: "code")', () => {
            // uncomment below and update the code to test the property code
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property title (base name: "title")', () => {
            // uncomment below and update the code to test the property title
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property promotionType (base name: "promotionType")', () => {
            // uncomment below and update the code to test the property promotionType
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property startDate (base name: "startDate")', () => {
            // uncomment below and update the code to test the property startDate
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property endDate (base name: "endDate")', () => {
            // uncomment below and update the code to test the property endDate
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property description (base name: "description")', () => {
            // uncomment below and update the code to test the property description
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property couldFireMessages (base name: "couldFireMessages")', () => {
            // uncomment below and update the code to test the property couldFireMessages
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property firedMessages (base name: "firedMessages")', () => {
            // uncomment below and update the code to test the property firedMessages
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property productBanner (base name: "productBanner")', () => {
            // uncomment below and update the code to test the property productBanner
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property enabled (base name: "enabled")', () => {
            // uncomment below and update the code to test the property enabled
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property priority (base name: "priority")', () => {
            // uncomment below and update the code to test the property priority
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property promotionGroup (base name: "promotionGroup")', () => {
            // uncomment below and update the code to test the property promotionGroup
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

        it('should have the property restrictions (base name: "restrictions")', () => {
            // uncomment below and update the code to test the property restrictions
            // var instane = new Occ.Promotion();
            // expect(instance).to.be();
        })

    })

}))
