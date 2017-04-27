const rule = require('../../lib/rules/no-literal-arguments');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-literal-arguments', rule, {
  valid: [
        { code: 'foo(x)', options: [] },
        { code: 'foo(x)', options: [['foo']] },
        { code: 'foo(\'x\')', options: [['goo']] },
        { code: 'bar.foo(x)', options: [['foo']] },
        { code: 'foo(A.x)', options: [['foo']] },
        { code: 'bar.foo(A.x)', options: [['foo']] },

  ],

  invalid: [
        { code: 'foo(\'x\')', options: [['foo']], errors: [{ message: '' }] },
        { code: 'bar.foo(\'x\')', options: [['foo']], errors: [{ message: '' }] },
        { code: 'foo(1)', options: [['foo']], errors: [{ message: '' }] },
        { code: 'bar.foo(1)', options: [['foo']], errors: [{ message: '' }] },
  ],
});
