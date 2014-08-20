'use strict';

describe('NavigationMenu', function () {
    it('changes active link depending on route', function() {
        browser.get('/');
        var activeListItem = element(by.css('.active'));
        var text = activeListItem.findElement(by.tagname('a')).getText();

        expect(text).toEqual('Home');
    });
});
