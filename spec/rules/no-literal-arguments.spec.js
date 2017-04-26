const rule = require('../../lib/rules/no-literal-arguments');
describe('no-literal-arguments suite', () => {
    it("should contain docs", function () {
        expect(rule.meta.docs).toBeDefined();
    });
    it("should contain schema", function () {
        expect(rule.meta.schema).toBeDefined();
    });
    it("should contain create", function () {
        expect(rule.create).toBeDefined();
        expect(typeof rule.create).toBe('function');
    });

});
