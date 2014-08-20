'use strict';

angular.module('swFrontApp')
    .service('ranks', function () {
        this.query = function () {
            return [
                {
                    name: 'All'
                },
                {
                    name: 'Tier - 1'
                },
                {
                    name: 'Tier - 2'
                },
                {
                    name: 'Tier - 3'
                }
            ];
        };
    });
