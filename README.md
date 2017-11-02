# hybris-api-js-client

Hybris OCC API JavaScript Client library.

## Installation

```shell
npm install hybris-api-js-client --save
```

## Testing

Because Hybris OCC is not public available, you need to have a running instance that you can test against. In test folder, there is a file `example.env.json` that has the example configuration for your environment. Simply create a file `env.json`, and fill out the required fields.

Example:
```json
{
    "baseSite": "apparel-uk",
    "baseUrl": "https://<Your Hybris Instance>/rest/v2",
    "authorizationUrl": "https://<Your Hybris Instance>/authorizationserver/oauth/token"
}
```


# occ (everything below is generated by swagger codegen)

Occ - JavaScript client for occ
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v2
- Package version: v2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen


### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Occ = require('occ');

var defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = "YOUR ACCESS TOKEN"

var api = new Occ.CardtypesApi()

var opts = { 
  'fields': "fields_example" // {String} Response configuration (list of fields, which should be returned in response)
};
api.cardtypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Occ.CardtypesApi* | [**getCardTypes**](docs/CardtypesApi.md#getCardTypes) | **GET** /cardtypes | getCardTypes
*Occ.CatalogsApi* | [**getCatalogs**](docs/CatalogsApi.md#getCatalogs) | **GET** /catalogs | getCatalogs
*Occ.CatalogsApi* | [**getCatalog**](docs/CatalogsApi.md#getCatalog) | **GET** /catalogs/{catalogId} | getCatalog
*Occ.CatalogsApi* | [**getCatalogsByCatalogIdAndCatalogVersionId**](docs/CatalogsApi.md#getCatalogsByCatalogIdAndCatalogVersionId) | **GET** /catalogs/{catalogId}/{catalogVersionId} | CatalogsByCatalogIdAndCatalogVersionId
*Occ.CatalogsApi* | [**getCategory**](docs/CatalogsApi.md#getCategory) | **GET** /catalogs/{catalogId}/{catalogVersionId}/categories/{categoryId} | getCategory
*Occ.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#currencies) | **GET** /currencies | getCurrencies
*Occ.CustomergroupsApi* | [**getCustomerGroups**](docs/CustomergroupsApi.md#getCustomerGroups) | **GET** /customergroups | getCustomerGroups
*Occ.CustomergroupsApi* | [**postCustomerGroup**](docs/CustomergroupsApi.md#postCustomerGroup) | **POST** /customergroups | Customergroups
*Occ.CustomergroupsApi* | [**getCustomerGroup**](docs/CustomergroupsApi.md#getCustomerGroup) | **GET** /customergroups/{groupId} | getCustomerGroup
*Occ.CustomergroupsApi* | [**putCustomerGroupsMembers**](docs/CustomergroupsApi.md#putCustomerGroupsMembers) | **PUT** /customergroups/{groupId}/members | putCustomerGroupsMembers
*Occ.CustomergroupsApi* | [**patchCustomerGroupsMembers**](docs/CustomergroupsApi.md#patchCustomerGroupsMembers) | **PATCH** /customergroups/{groupId}/members | patchCustomerGroupsMembers
*Occ.CustomergroupsApi* | [**deleteCustomerGroupsMember**](docs/CustomergroupsApi.md#deleteCustomerGroupsMember) | **DELETE** /customergroups/{groupId}/members/{userId} | deleteCustomerGroupsMember
*Occ.DeliverycountriesApi* | [**getDeliveryCountries**](docs/DeliverycountriesApi.md#getDeliveryCountries) | **GET** /deliverycountries | getDeliveryCountries
*Occ.ExportApi* | [**exportProducts**](docs/ExportApi.md#exportProducts) | **GET** /export/products | ExportProducts
*Occ.FeedsApi* | [**getOrdersStatusfeed**](docs/FeedsApi.md#getOrdersStatusfeed) | **GET** /feeds/orders/statusfeed | getOrdersStatusfeed
*Occ.ForgottenpasswordtokensApi* | [**postForgottenPasswordToken**](docs/ForgottenpasswordtokensApi.md#postForgottenPasswordToken) | **POST** /forgottenpasswordtokens | postForgottenPasswordToken
*Occ.LanguagesApi* | [**getLanguages**](docs/LanguagesApi.md#getLanguages) | **GET** /languages | getLanguages
*Occ.OrdersApi* | [**getOrder**](docs/OrdersApi.md#getOrder) | **GET** /orders/{code} | getOrder
*Occ.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /products/{productCode} | getProduct
*Occ.ProductsApi* | [**getProductExpressupdate**](docs/ProductsApi.md#getProductExpressupdate) | **GET** /products/expressupdate | getProductExpressupdate
*Occ.ProductsApi* | [**getProductReferences**](docs/ProductsApi.md#getProductReferences) | **GET** /products/{productCode}/references | getProductReferences
*Occ.ProductsApi* | [**getProductReviews**](docs/ProductsApi.md#getProductReviews) | **GET** /products/{productCode}/reviews | getProductReviews
*Occ.ProductsApi* | [**postProductReview**](docs/ProductsApi.md#postProductReview) | **POST** /products/{productCode}/reviews | postProductReview
*Occ.ProductsApi* | [**getProductSearch**](docs/ProductsApi.md#getProductSearch) | **GET** /products/search | ProductsSearch
*Occ.ProductsApi* | [**getProductStock**](docs/ProductsApi.md#getProductStock) | **GET** /products/{productCode}/stock | getProductStock
*Occ.ProductsApi* | [**getProductsStockByProductCodeAndStoreName**](docs/ProductsApi.md#getProductsStockByProductCodeAndStoreName) | **GET** /products/{productCode}/stock/{storeName} | getProductsStockByProductCodeAndStoreName
*Occ.ProductsApi* | [**getProductSuggestions**](docs/ProductsApi.md#getProductSuggestions) | **GET** /products/suggestions | getProductSuggestions
*Occ.PromotionsApi* | [**getPromotions**](docs/PromotionsApi.md#promotions) | **GET** /promotions | getPromotions
*Occ.PromotionsApi* | [**getPromotion**](docs/PromotionsApi.md#getPromotion) | **GET** /promotions/{code} | getPromotion
*Occ.StoresApi* | [**getStores**](docs/StoresApi.md#getStores) | **GET** /stores | Stores
*Occ.StoresApi* | [**getStore**](docs/StoresApi.md#getStore) | **GET** /stores/{storeId} | getStore
*Occ.TitlesApi* | [**getTitles**](docs/TitlesApi.md#getTitles) | **GET** /titles | getTitles
*Occ.UsersApi* | [**postUsers**](docs/UsersApi.md#postUsers) | **POST** /users | postUsers
*Occ.UsersApi* | [**getUserAddresses**](docs/UsersApi.md#getUserAddresses) | **GET** /users/{userId}/addresses | getUserAddresses
*Occ.UsersApi* | [**postUserAddress**](docs/UsersApi.md#postUserAddress) | **POST** /users/{userId}/addresses | getUserAddresses
*Occ.UsersApi* | [**getUserAddress**](docs/UsersApi.md#getUserAddress) | **GET** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**putUserAddress**](docs/UsersApi.md#putUserAddress) | **PUT** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**patchUserAddress**](docs/UsersApi.md#patchUserAddress) | **PATCH** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**deleteUserAddress**](docs/UsersApi.md#deleteUserAddress) | **DELETE** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**postUserAddressesVerification**](docs/UsersApi.md#postUserAddressesVerification) | **POST** /users/{userId}/addresses/verification | postUserAddressesVerification
*Occ.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userId} | getUser
*Occ.UsersApi* | [**putUser**](docs/UsersApi.md#putUser) | **PUT** /users/{userId} | getUser
*Occ.UsersApi* | [**patchUser**](docs/UsersApi.md#patchUser) | **PATCH** /users/{userId} | getUser
*Occ.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{userId} | getUser
*Occ.UsersApi* | [**postCartDeliveryAddress**](docs/UsersApi.md#postCartDeliveryAddress) | **POST** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
*Occ.UsersApi* | [**putCartDeliveryAddress**](docs/UsersApi.md#putCartDeliveryAddress) | **PUT** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
*Occ.UsersApi* | [**deleteCartDeliveryAddress**](docs/UsersApi.md#deleteCartDeliveryAddress) | **DELETE** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
*Occ.UsersApi* | [**getCarts**](docs/UsersApi.md#getCarts) | **GET** /users/{userId}/carts | getCarts
*Occ.UsersApi* | [**postCart**](docs/UsersApi.md#postCart) | **POST** /users/{userId}/carts | getCarts
*Occ.UsersApi* | [**getCart**](docs/UsersApi.md#getCart) | **GET** /users/{userId}/carts/{cartId} | getCart
*Occ.UsersApi* | [**deleteCart**](docs/UsersApi.md#deleteCart) | **DELETE** /users/{userId}/carts/{cartId} | getCart
*Occ.UsersApi* | [**postCartCloneSavedcart**](docs/UsersApi.md#postCartCloneSavedcart) | **POST** /users/{userId}/carts/{cartId}/clonesavedcart | postCartCloneSavedcart
*Occ.UsersApi* | [**getCartDeliveryMode**](docs/UsersApi.md#getCartDeliveryMode) | **GET** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliveryMode
*Occ.UsersApi* | [**putCartDeliveryMode**](docs/UsersApi.md#putCartDeliveryMode) | **PUT** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliveryMode
*Occ.UsersApi* | [**deleteCartDeliveryMode**](docs/UsersApi.md#deleteCartDeliveryMode) | **DELETE** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliveryMode
*Occ.UsersApi* | [**getCartDeliveryModes**](docs/UsersApi.md#getCartDeliveryModes) | **GET** /users/{userId}/carts/{cartId}/deliverymodes | getCartDeliveryModes
*Occ.UsersApi* | [**putCartEmail**](docs/UsersApi.md#putCartEmail) | **PUT** /users/{userId}/carts/{cartId}/email | putCartEmail
*Occ.UsersApi* | [**getCartEntries**](docs/UsersApi.md#getCartEntries) | **GET** /users/{userId}/carts/{cartId}/entries | getCartEntries
*Occ.UsersApi* | [**postCartEntries**](docs/UsersApi.md#postCartEntries) | **POST** /users/{userId}/carts/{cartId}/entries | getCartEntries
*Occ.UsersApi* | [**getCartEntry**](docs/UsersApi.md#getCartEntry) | **GET** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**putCartEntry**](docs/UsersApi.md#putCartEntry) | **PUT** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**patchCartEntry**](docs/UsersApi.md#patchCartEntry) | **PATCH** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**deleteCartEntry**](docs/UsersApi.md#deleteCartEntry) | **DELETE** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**patchCartFlagForDeletion**](docs/UsersApi.md#patchCartFlagForDeletion) | **PATCH** /users/{userId}/carts/{cartId}/flagForDeletion | patchCartFlagForDeletion
*Occ.UsersApi* | [**postCartPaymentDetail**](docs/UsersApi.md#postCartPaymentDetail) | **POST** /users/{userId}/carts/{cartId}/paymentdetails | postCartPaymentDetail
*Occ.UsersApi* | [**putCartPaymentDetail**](docs/UsersApi.md#putCartPaymentDetail) | **PUT** /users/{userId}/carts/{cartId}/paymentdetails | postCartPaymentDetail
*Occ.UsersApi* | [**getCartPromotions**](docs/UsersApi.md#getCartPromotions) | **GET** /users/{userId}/carts/{cartId}/promotions | getCartPromotions
*Occ.UsersApi* | [**postCartPromotion**](docs/UsersApi.md#postCartPromotion) | **POST** /users/{userId}/carts/{cartId}/promotions | getCartPromotions
*Occ.UsersApi* | [**getCartPromotion**](docs/UsersApi.md#getCartPromotion) | **GET** /users/{userId}/carts/{cartId}/promotions/{promotionId} | getCartPromotion
*Occ.UsersApi* | [**deleteCartPromotion**](docs/UsersApi.md#deleteCartPromotion) | **DELETE** /users/{userId}/carts/{cartId}/promotions/{promotionId} | getCartPromotion
*Occ.UsersApi* | [**patchCartRestoreSavedCart**](docs/UsersApi.md#patchCartRestoreSavedCart) | **PATCH** /users/{userId}/carts/{cartId}/restoresavedcart | patchCartRestoreSavedCart
*Occ.UsersApi* | [**patchSavedCart**](docs/UsersApi.md#patchSavedCart) | **PATCH** /users/{userId}/carts/{cartId}/save | patchSavedCart
*Occ.UsersApi* | [**getSavedCart**](docs/UsersApi.md#getSavedCart) | **GET** /users/{userId}/carts/{cartId}/savedcart | getSavedCart
*Occ.UsersApi* | [**getCartVouchers**](docs/UsersApi.md#getCartVouchers) | **GET** /users/{userId}/carts/{cartId}/vouchers | getCartVouchers
*Occ.UsersApi* | [**postCartVoucher**](docs/UsersApi.md#postCartVoucher) | **POST** /users/{userId}/carts/{cartId}/vouchers | getCartVouchers
*Occ.UsersApi* | [**deleteCartVouchers**](docs/UsersApi.md#deleteCartVouchers) | **DELETE** /users/{userId}/carts/{cartId}/vouchers/{voucherId} | deleteCartVouchers
*Occ.UsersApi* | [**getCustomerGroups*](docs/UsersApi.md#getCustomerGroups) | **GET** /users/{userId}/customergroups | getCustomerGroups
*Occ.UsersApi* | [**putLogin**](docs/UsersApi.md#putLogin) | **PUT** /users/{userId}/login | putLogin
*Occ.UsersApi* | [**getOrders**](docs/UsersApi.md#getOrders) | **GET** /users/{userId}/orders | UsersOrdersByUserId
*Occ.UsersApi* | [**postOrder**](docs/UsersApi.md#postOrder) | **POST** /users/{userId}/orders | UsersOrdersByUserId
*Occ.UsersApi* | [**getOrder**](docs/UsersApi.md#getOrder) | **GET** /users/{userId}/orders/{code} | getOrder
*Occ.UsersApi* | [**putPassword**](docs/UsersApi.md#putPassword) | **PUT** /users/{userId}/password | putPassword
*Occ.UsersApi* | [**getPaymentDetail**](docs/UsersApi.md#getPaymentDetail) | **GET** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentDetail
*Occ.UsersApi* | [**putPaymentDetail**](docs/UsersApi.md#putPaymentDetail) | **PUT** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentDetail
*Occ.UsersApi* | [**patchPaymentDetail**](docs/UsersApi.md#patchPaymentDetail) | **PATCH** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentDetail
*Occ.UsersApi* | [**deletePaymentDetail**](docs/UsersApi.md#deletePaymentDetail) | **DELETE** /users/{userId}/paymentdetails/{paymentDetailsId} | getPaymentDetail
*Occ.UsersApi* | [**getPaymentDetails**](docs/UsersApi.md#getPaymentDetails) | **GET** /users/{userId}/paymentdetails | getPaymentDetail
*Occ.VouchersApi* | [**getVoucher**](docs/VouchersApi.md#getVoucher) | **GET** /vouchers/{code} | getVoucher


## Documentation for s

 - [Occ.AddressListWsDTO](docs/AddressListWsDTO.md)
 - [Occ.AddressOCC](docs/AddressOCC.md)
 - [Occ.AddressWsDTO](docs/AddressWsDTO.md)
 - [Occ.BaseOptionWsDTO](docs/BaseOptionWsDTO.md)
 - [Occ.BillingAddress](docs/BillingAddress.md)
 - [Occ.BreadcrumbWsDTO](docs/BreadcrumbWsDTO.md)
 - [Occ.CardTypeListWsDTO](docs/CardTypeListWsDTO.md)
 - [Occ.CardTypeWsDTO](docs/CardTypeWsDTO.md)
 - [Occ.CartListWsDTO](docs/CartListWsDTO.md)
 - [Occ.CartWsDTO](docs/CartWsDTO.md)
 - [Occ.CatalogListWsDTO](docs/CatalogListWsDTO.md)
 - [Occ.CatalogVersionWsDTO](docs/CatalogVersionWsDTO.md)
 - [Occ.CatalogWsDTO](docs/CatalogWsDTO.md)
 - [Occ.CategoryHierarchyWsDTO](docs/CategoryHierarchyWsDTO.md)
 - [Occ.CategoryWsDTO](docs/CategoryWsDTO.md)
 - [Occ.ClassificationWsDTO](docs/ClassificationWsDTO.md)
 - [Occ.ConsignmentEntryWsDTO](docs/ConsignmentEntryWsDTO.md)
 - [Occ.ConsignmentWsDTO](docs/ConsignmentWsDTO.md)
 - [Occ.CountryListWsDTO](docs/CountryListWsDTO.md)
 - [Occ.Country](docs/Country.md)
 - [Occ.CountryOCC](docs/CountryOCC.md)
 - [Occ.CurrencyListWsDTO](docs/CurrencyListWsDTO.md)
 - [Occ.Currency](docs/Currency.md)
 - [Occ.CurrencyOCC](docs/CurrencyOCC.md)
 - [Occ.DeliveryModeListWsDTO](docs/DeliveryModeListWsDTO.md)
 - [Occ.DeliveryModeWsDTO](docs/DeliveryModeWsDTO.md)
 - [Occ.DeliveryOrderEntryGroupWsDTO](docs/DeliveryOrderEntryGroupWsDTO.md)
 - [Occ.DeliveryPointOfService](docs/DeliveryPointOfService.md)
 - [Occ.FacetValueWsDTO](docs/FacetValueWsDTO.md)
 - [Occ.FacetWsDTO](docs/FacetWsDTO.md)
 - [Occ.FeatureUnitWsDTO](docs/FeatureUnitWsDTO.md)
 - [Occ.FeatureValueWsDTO](docs/FeatureValueWsDTO.md)
 - [Occ.FeatureWsDTO](docs/FeatureWsDTO.md)
 - [Occ.FutureStockWsDTO](docs/FutureStockWsDTO.md)
 - [Occ.GeoPointWsDTO](docs/GeoPointWsDTO.md)
 - [Occ.ImageWsDTO](docs/ImageWsDTO.md)
 - [Occ.LanguageListWsDTO](docs/LanguageListWsDTO.md)
 - [Occ.Language](docs/Language.md)
 - [Occ.LanguageOCC](docs/LanguageOCC.md)
 - [Occ.MemberListWsDTO](docs/MemberListWsDTO.md)
 - [Occ.Member](docs/Member.md)
 - [Occ.OpeningScheduleWsDTO](docs/OpeningScheduleWsDTO.md)
 - [Occ.OrderEntryListWsDTO](docs/OrderEntryListWsDTO.md)
 - [Occ.OrderEntryOCC](docs/OrderEntryOCC.md)
 - [Occ.OrderEntryWsDTO](docs/OrderEntryWsDTO.md)
 - [Occ.OrderHistoryListWsDTO](docs/OrderHistoryListWsDTO.md)
 - [Occ.OrderHistoryWsDTO](docs/OrderHistoryWsDTO.md)
 - [Occ.OrderStatusUpdateElementListWsDTO](docs/OrderStatusUpdateElementListWsDTO.md)
 - [Occ.OrderStatusUpdateElementWsDTO](docs/OrderStatusUpdateElementWsDTO.md)
 - [Occ.OrderWsDTO](docs/OrderWsDTO.md)
 - [Occ.PaginationWsDTO](docs/PaginationWsDTO.md)
 - [Occ.PaymentDetailsListWsDTO](docs/PaymentDetailsListWsDTO.md)
 - [Occ.PaymentDetailsOCC](docs/PaymentDetailsOCC.md)
 - [Occ.PaymentDetailsWsDTO](docs/PaymentDetailsWsDTO.md)
 - [Occ.PickupOrderEntryGroupWsDTO](docs/PickupOrderEntryGroupWsDTO.md)
 - [Occ.PointOfServiceStockWsDTO](docs/PointOfServiceStockWsDTO.md)
 - [Occ.PointOfServiceWsDTO](docs/PointOfServiceWsDTO.md)
 - [Occ.PriceRangeWsDTO](docs/PriceRangeWsDTO.md)
 - [Occ.PriceWsDTO](docs/PriceWsDTO.md)
 - [Occ.PrincipalWsDTO](docs/PrincipalWsDTO.md)
 - [Occ.ProductExpressUpdateElementListWsDTO](docs/ProductExpressUpdateElementListWsDTO.md)
 - [Occ.ProductExpressUpdateElementWsDTO](docs/ProductExpressUpdateElementWsDTO.md)
 - [Occ.ProductListWsDTO](docs/ProductListWsDTO.md)
 - [Occ.Product](docs/Product.md)
 - [Occ.ProductReferenceListWsDTO](docs/ProductReferenceListWsDTO.md)
 - [Occ.ProductReferenceOCC](docs/ProductReferenceOCC.md)
 - [Occ.ProductReferenceWsDTO](docs/ProductReferenceWsDTO.md)
 - [Occ.ProductSearchPageWsDTO](docs/ProductSearchPageWsDTO.md)
 - [Occ.ProductOCC](docs/ProductOCC.md)
 - [Occ.ProductOCC1](docs/ProductOCC1.md)
 - [Occ.PromotionListWsDTO](docs/PromotionListWsDTO.md)
 - [Occ.PromotionOrderEntryConsumedWsDTO](docs/PromotionOrderEntryConsumedWsDTO.md)
 - [Occ.PromotionRestrictionWsDTO](docs/PromotionRestrictionWsDTO.md)
 - [Occ.PromotionResultListWsDTO](docs/PromotionResultListWsDTO.md)
 - [Occ.PromotionResultWsDTO](docs/PromotionResultWsDTO.md)
 - [Occ.PromotionWsDTO](docs/PromotionWsDTO.md)
 - [Occ.Region](docs/Region.md)
 - [Occ.RegionOCC](docs/RegionOCC.md)
 - [Occ.ReviewListWsDTO](docs/ReviewListWsDTO.md)
 - [Occ.ReviewOCC](docs/ReviewOCC.md)
 - [Occ.ReviewWsDTO](docs/ReviewWsDTO.md)
 - [Occ.SaveCartResultWsDTO](docs/SaveCartResultWsDTO.md)
 - [Occ.SearchQueryWsDTO](docs/SearchQueryWsDTO.md)
 - [Occ.SearchStateWsDTO](docs/SearchStateWsDTO.md)
 - [Occ.SortWsDTO](docs/SortWsDTO.md)
 - [Occ.SpecialOpeningDayWsDTO](docs/SpecialOpeningDayWsDTO.md)
 - [Occ.SpellingSuggestionWsDTO](docs/SpellingSuggestionWsDTO.md)
 - [Occ.StockWsDTO](docs/StockWsDTO.md)
 - [Occ.StoreFinderSearchPageWsDTO](docs/StoreFinderSearchPageWsDTO.md)
 - [Occ.StoreFinderStockSearchPageWsDTO](docs/StoreFinderStockSearchPageWsDTO.md)
 - [Occ.SuggestionListWsDTO](docs/SuggestionListWsDTO.md)
 - [Occ.SuggestionWsDTO](docs/SuggestionWsDTO.md)
 - [Occ.TimeWsDTO](docs/TimeWsDTO.md)
 - [Occ.TitleListWsDTO](docs/TitleListWsDTO.md)
 - [Occ.TitleWsDTO](docs/TitleWsDTO.md)
 - [Occ.UserGroupListWsDTO](docs/UserGroupListWsDTO.md)
 - [Occ.UserGroupOCC](docs/UserGroupOCC.md)
 - [Occ.UserGroupWsDTO](docs/UserGroupWsDTO.md)
 - [Occ.UserSignUpWsDTO](docs/UserSignUpWsDTO.md)
 - [Occ.UserWsDTO286](docs/UserWsDTO286.md)
 - [Occ.UserWsDTO](docs/UserWsDTO.md)
 - [Occ.VariantCategoryWsDTO](docs/VariantCategoryWsDTO.md)
 - [Occ.VariantMatrixElementWsDTO](docs/VariantMatrixElementWsDTO.md)
 - [Occ.VariantOptionQualifierWsDTO](docs/VariantOptionQualifierWsDTO.md)
 - [Occ.VariantOptionWsDTO](docs/VariantOptionWsDTO.md)
 - [Occ.VariantValueCategoryWsDTO](docs/VariantValueCategoryWsDTO.md)
 - [Occ.VoucherListWsDTO](docs/VoucherListWsDTO.md)
 - [Occ.VoucherWsDTO](docs/VoucherWsDTO.md)
 - [Occ.WeekdayOpeningDayWsDTO](docs/WeekdayOpeningDayWsDTO.md)


## Documentation for Authorization


### auth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: http://api-example.hybris.com/rest/authorizationserver/authorize
- **Scopes**: N/A

