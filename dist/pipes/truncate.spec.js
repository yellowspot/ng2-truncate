"use strict";
var truncate_1 = require('./truncate');
var testing_1 = require('@angular/core/testing');
testing_1.describe('ng2TruncatePipe', function () {
    var pipe;
    testing_1.beforeEach(function () {
        pipe = new truncate_1.ng2TruncatePipe();
    });
    testing_1.it('transforms "123456789" to "123..."', function () {
        testing_1.expect(pipe.transform('123456789', 4)).toEqual('1234...');
    });
    testing_1.it('transforms "123456789" to "123xxx"', function () {
        testing_1.expect(pipe.transform('123456789', 4, 'xxx')).toEqual('1234xxx');
    });
    testing_1.it('transforms "1234 5678" to "123..."', function () {
        testing_1.expect(pipe.transform('1234 5678', 3)).toEqual('123...');
    });
    testing_1.it('leaves "123" unchanged', function () {
        testing_1.expect(pipe.transform('123', 3)).toEqual('123');
    });
    testing_1.it('leaves "12" unchanged', function () {
        testing_1.expect(pipe.transform('12', 3)).toEqual('12');
    });
    testing_1.it('leaves empty string unchanged', function () {
        testing_1.expect(pipe.transform('', 3)).toEqual('');
    });
});
//# sourceMappingURL=truncate.spec.js.map