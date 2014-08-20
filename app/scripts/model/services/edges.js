'use strict';

angular.module('swFrontApp')
/*    .service('edges', function () {
        // Define service datasources and other object literals
        // used in the view as data elements
        // ----------------------------------------------------------------------
        this.query = function () {
            return [
                {
                    name: 'Gears of War',
                    description: 'It\'s a kickass game, if you don\'t like it you can shove your pussy ass game you like in your ass!',
                    category: {
                        name: '3rd Person Shooter'
                    },
                    requirements: [
                        {type: "rank", name: 'Rank: ', value:'Tier - 1'},
                        {type: "price", name: 'Price: ', value:'US$50.00'},
                        {type: "rating", name: 'Rated: ', value:'M'}
                    ]
                },
                {
                    name: 'Starcraft 2: Wings of Liberty',
                    description: 'The war continues son, Raynor\'s Raiders are back and want to destroy the Queen of Blades, but really?',
                    category: {
                        name: 'Strategy'
                    },
                    requirements: [
                        {type: "rank", name: 'Rank: ', value:'Tier - 3'},
                        {type: "price", name: 'Price: ', value:'US$25.00'},
                        {type: "rating", name: 'Rated: ', value:'T'}
                    ]
                },
                {
                    name: 'Gears of War 2',
                    description: 'New chainsaw duel, press B like a motherfucking gerbil fuck or else you get chainsawed to chunks!',
                    category: {
                        name: '3rd Person Shooter'
                    },
                    requirements: [
                        {type: "rank", name: 'Rank: ', value:'Tier - 2'},
                        {type: "price", name: 'Price: ', value:'US$50.00'},
                        {type: "rating", name: 'Rated: ', value:'M'}
                    ]
                },
                {
                    name: 'Starcraft',
                    description: 'A mayor conflict in the Kuprulu sector, can you manage to win the ultimate online real time strategy?',
                    category: {
                        name: 'Strategy'
                    },
                    requirements: [
                        {type: "rank", name: 'Rank: ', value:'Tier - 1'},
                        {type: "price", name: 'Price: ', value:'US$25.00'},
                        {type: "rating", name: 'Rated: ', value:'T'}
                    ]
                },
                {
                    name: 'Gears of War 3',
                    description: 'Girls characters, more weapons and game modes, same brutality! Pick it son!',
                    category: {
                        name: '3rd Person Shooter'
                    },
                    requirements: [
                        {type: "rank", name: 'Rank: ', value:'Tier - 3'},
                        {type: "price", name: 'Price: ', value:'US$50.00'},
                        {type: "rating", name: 'Rated: ', value:'M'}
                    ]
                }
            ]
        };
    });*/
    .factory('edges', function ($resource) {
        return $resource('/api/edges/:id', {id: '@id'});
    });
