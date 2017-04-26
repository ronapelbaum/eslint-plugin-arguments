const rule = require('../../lib/rules/no-literal-arguments');

describe('no-literal-arguments suite', () => {
    const FIELD = 'CallExpression';
    let contextMock;

    function createNode(){
        return {};
    }

    function createContextMock(methodsNames) {
        let contextMock = jasmine.createSpyObj('context', ['report']);
        contextMock.options = [methodsNames];
        return contextMock;
    }

    function getFilter(contextMock) {
        return rule.create(contextMock)[FIELD];
    }

    describe('rule config spec', () => {
        it('should contain docs', () => {
            expect(rule.meta.docs).toBeDefined();
        });
        it('should contain schema', () => {
            expect(rule.meta.schema).toBeDefined();
        });
        it('should contain create', () => {
            expect(rule.create).toBeDefined();
            expect(typeof rule.create).toBe('function');
        });
    });

    describe('create spec', () => {
        it('should return an object', () => {
            expect(rule.create()).toEqual({'CallExpression': jasmine.any(Function)})
        });
        it('should not filter anything when no methods name configured', () => {
            let node = createNode();
            const contextMock = createContextMock([]);
            getFilter(contextMock)(node);
            expect(contextMock.report).not.toHaveBeenCalled();
        });
    });
});
