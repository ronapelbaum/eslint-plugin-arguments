eslint-plugin-arguments
====

[![npm version](https://badge.fury.io/js/eslint-plugin-arguments.svg)](https://badge.fury.io/js/eslint-plugin-arguments)
[![Build Status](https://travis-ci.org/ronapelbaum/eslint-plugin-arguments.svg?branch=master)](https://travis-ci.org/ronapelbaum/eslint-plugin-arguments)
[![Coverage Status](https://coveralls.io/repos/github/ronapelbaum/eslint-plugin-arguments/badge.svg?branch=master)](https://coveralls.io/github/ronapelbaum/eslint-plugin-arguments?branch=master)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/ronapelbaum/eslint-plugin-arguments)

eslint plugin to disallow calling method with inline literals as arguments

## Supported Rules

### `no-literal-arguments`

Methods array: array with the method names that you want to check.

```json
{
    "rules": {
        "arguments/no-literal-arguments": [
            "error", 
            [
                "foo"
            ]
        ]
    }
}
```

When this rule is defined:

```javascript
foo(); \\ OK  
foo(x); \\ OK  
foo(A.x); \\ OK
goo('x'); \\OK
bar.foo(x); \\ OK

foo('x'); \\ BAD 
foo("x"); \\ BAD  
foo(10); \\ BAD
bar.foo('x'); \\ BAD
```

> **Common Usage:** you need to block somthing like `props.getProp('id')` in order to use only `props.getProp(constants.ID)`

## Installation

```
npm i -D eslint eslint-plugin-arguments
```
> **Note:** If you installed `eslint` globally (using the `-g` flag) then you must also install `eslint-plugin-arguments` globally.

## Usage

Add `arguments` to the plugins section of your `.eslintrc.json` configuration file. (You can omit the `eslint-plugin-` prefix):

```json
{
    "plugins": [
        "arguments"
    ]
}
```
