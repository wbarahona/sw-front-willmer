'use strict';

describe('Controller:navigation', function () {
    var location, scope;

        beforeEach(module('swFrontApp'));

        beforeEach(inject(function ($controller, $rootScope, $location) {
            location = $location;
            scope = $rootScope.$new();
            $controller('NavigationController', {
                $scope: scope
            });
        }));
        describe('isActive', function () {
            // TESTING CASES FOR CONTROLLERS GOES HERE
            // -----------------------------------------------------------------------
            it('returns true when the paths are the same', function () {
                location.path('/test');
                expect(scope.isActive('/test')).toBeTruthy();
            });
            it('returns false when the paths are different', function () {
                location.path('/different');
                expect(scope.isActive('/test')).toBeFalsy();
            });
            it('returns true if it commences with the same word', function () {
                location.path('/test/1/yay');
                expect(scope.isActive('/test')).toBeTruthy();
            });
            // it('returns true if it commences with the same word followed by query string', function () {
            //     location.path('/test?id=1');
            //     expect(scope.isActive('/test')).toBeTruthy();
            // });
        });
});
