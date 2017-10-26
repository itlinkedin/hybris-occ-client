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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../config'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Occ);
  }
}(this, function (expect, Occ) {
  'use strict';

  var instance;
  const {
    product,
    search,
    searchResults,
    sampleProduct,
    store,
    productSuggestion,
    productReview
  } = Occ.default;

    beforeEach(function () {
      instance = new Occ.default.ProductsApi();
    });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductsApi', function () {
    describe('productsByProductCode', function () {
      it('should call productsByProductCode successfully', function (done) {
        instance.productsByProductCode(sampleProduct.code)
          .then((res) => {
            expect(res.name).to.equal(sampleProduct.name);
            done();
          })
      });
    });
    describe('productsExpressupdate', function () {
      it('should call productsExpressupdate successfully', function (done) {
        // unsupported
        done();
      });
    });
    describe('productsReferencesByProductCode', function () {
      it('should call productsReferencesByProductCode successfully', function (done) {
        // instance.productsReferencesByProductCode(sampleProduct.code, {referenceType: 'a'})
        //   .then((res) => {
        //     done();
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
          done();
      });
    });
    describe('productsReviewsByProductCode', function () {
      it('should call productsReviewsByProductCode successfully', function (done) {
        instance.productsReviewsByProductCode(sampleProduct.code)
          .then((res) => {
            expect(res).to.have.property('reviews');
            done();
          })
      });
    });
    describe('productsReviewsByProductCode1', function () {
      it('should call productsReviewsByProductCode1 successfully', function (done) {
        instance.productsReviewsByProductCode1(sampleProduct.code, productReview)
          .then((res) => {
            expect(res.headline).to.equal(productReview.headline);
            done();
          })
      });
    });
    describe('productsSearch1', function () {
      it('should call productsSearch1 successfully', function (done) {
        instance.productsSearch1(search)
          .then((res) => {
            expect(res.freeTextSearch).to.equal(searchResults.freeTextSearch);
            expect(res.sorts).to.eql(searchResults.sorts);
            expect(res.products[0].code).to.equal(sampleProduct.code);
            done();
          })
      });
    });
    describe('productsStockByProductCode1', function () {
      it('should call productsStockByProductCode1 successfully', function (done) {
        instance.productsStockByProductCode1(sampleProduct.code, {location: store.name})
          .then((res) => {
            expect(res.stores[0].name).to.equal(store.name);
            expect(res.product.code).to.equal(sampleProduct.code);
            done();
          })
      });
    });
    describe('productsStockByProductCodeAndStoreName', function () {
      it('should call productsStockByProductCodeAndStoreName successfully', function (done) {
        instance.productsStockByProductCodeAndStoreName(sampleProduct.code, store.name)
          .then((res) => {
            expect(res.stockLevelStatus).to.equal(store.stockLevelStatus);
            expect(res.stockLevel).to.equal(store.stockLevel);
            done();
          })
      });
    });
    describe('productsSuggestions', function () {
      it('should call productsSuggestions successfully', function (done) {
        instance.productsSuggestions(productSuggestion.max, productSuggestion.term)
          .then((res) => {
            expect(res.suggestions).to.eql(productSuggestion.answer);
            done();
          })
      });
    });
  });

}));