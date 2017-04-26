module.exports = {
  meta: {
    docs: {
      description: 'disallow calling method with inline literals as arguments',
      category: 'Call Expressions',
    },
    schema: [
      {
        type: 'array',
        required: true,
      },
    ],
  },

  create(context) {
    function noInlineMacro(node) {
      context.options[0].forEach((method) => {
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
