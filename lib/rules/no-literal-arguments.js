module.exports = {
  meta: {
    docs: {
      description: 'disallow calling method with inline literals as arguments',
      category: 'Call Expressions',
    },
    schema: [
      {
        type: 'array',
        items: {
          type: 'string',
        },
        minItems: 1,
        uniqueItems: true,
      },
    ],
  },

  create(context) {
    const methodNames = context.options[0];
    function noInlineMacro(node) {
      if (!methodNames) return;
      methodNames.forEach((method) => {
        const nodeMethod = (node.callee.property && node.callee.property.name) ||
                    node.callee.name;
        if (nodeMethod === method) {
          node.arguments.forEach((argument) => {
            if (argument.type === 'Literal') {
              context.report({
                node,
                message: `${method}() shouldn't be called with inline literal: ${argument.raw}`,
                data: {
                  identifier: node.name,
                },
              });
            }
          });
        }
      });
    }

    return {
      CallExpression: noInlineMacro,
    };
  },
};
