'use strict';

describe('EdgesController', function () {
    var scope, http, response;

    beforeEach(module('swFrontApp'));

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        http        = $httpBackend;
        response    = [{key: 'hello'}];
        http.whenGET('/api/edges').respond(response);
        scope = $rootScope.$new();
        $controller('EdgesController', {
            $scope: scope
        });
    }));
    afterEach(function () {
        http.verifyNoOutstandingExpectation();
        http.verifyNoOutstandingRequest();
    });

    it('makes a simple request to /api/edges to fetch edges', function () {
        http.expectGET('/api/edges');
        http.flush();
    });

    it('assigns response data to edges', function () {
        http.flush();
        expect(scope.edges[0].key).toEqual('hello');
    });

    describe('displayRequirements', function () {
        var reqs;
        it('concatenates name and value of the requirement', function () {
            http.flush();
            reqs = [{name: 'Agility',value: 'd6'}];
            expect(scope.displayRequirements(reqs)).toEqual('Agility d6');
        });
    });
});
