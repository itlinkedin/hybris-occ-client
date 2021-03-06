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

import expect from 'expect.js'
import Occ from '../config'

let instance

const {catalogId, catalogName, catalogVersionId} = Occ

beforeEach(() => {
    instance = new Occ.CatalogsApi()
})

describe('CatalogsApi', () => {
    describe('getCatalogs', () => {
        it('should call getCatalogs successfully', (done) => {
            instance.getCatalogs()
                .then((res) => {
                    expect(res).to.have.property('catalogs')
                    expect(res.catalogs).to.be.an('array')
                    expect(res.catalogs.length).to.be.ok()
                    done()
                })
        })
    })
    describe('getCatalog', () => {
        it('should call getCatalog successfully', (done) => {
            instance.getCatalog(catalogId)
                .then((res) => {
                    expect(res.name).to.be(catalogName)
                    done()
                })
        })
    })
    describe('getCatalogsByCatalogIdAndCatalogVersionId', () => {
        it('should call getCatalogsByCatalogIdAndCatalogVersionId successfully', (done) => {
            instance.getCatalogsByCatalogIdAndCatalogVersionId(catalogId, catalogVersionId)
                .then((res) => {
                    expect(res.id).to.be(catalogVersionId)
                    done()
                })
        })
    })
    describe('getCategory', () => {
        it('should call getCategory successfully', (done) => {
            instance.getCatalogsByCatalogIdAndCatalogVersionId(catalogId, catalogVersionId)
                .then((res) => {
                    expect(res.id).to.be(catalogVersionId)
                    done()
                })
        })
    })
})
