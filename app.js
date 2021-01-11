(function () {
    'use strict';

    

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;

        var shoppingList = ShoppingListFactory();

        list1.item = shoppingList.getItems();

        list1.removeItem = function (index) {
            shoppingList.removeItem(index);
        };
    }

var factory2 = new ShoppingListService();

    function ShoppingListService() {
        var service = this;

        var items = [
            {
                name: 'Aydi',
                quantity: 10
            },
            {
                name: 'BMW',
                quantity: 9
            },
            {
                name: 'Lada',
                quantity: 3
            },
            {
                name: 'Opel',
                quantity: 6
            },
            {
                name: 'Fiat',
                quantity: 8
            },
        ];
        var buyProducts = [];

        service.removeItem = function (itemIndex) {
            buyProducts.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getbuyProducts = function () {
            return buyProducts;
        };
    }

    function ShoppingListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }

})();