eslint-plugin-arguments
====

[![npm version](https://badge.fury.io/js/eslint-plugin-arguments.svg)](https://badge.fury.io/js/eslint-plugin-arguments)
[![Build Status](https://travis-ci.org/ronapelbaum/eslint-plugin-arguments.svg?branch=master)](https://travis-ci.org/ronapelbaum/eslint-plugin-arguments)
[![Coverage Status](https://coveralls.io/repos/github/ronapelbaum/eslint-plugin-arguments/badge.svg?branch=master)](https://coveralls.io/github/ronapelbaum/eslint-plugin-arguments?branch=master)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/ronapelbaum/eslint-plugin-arguments)

eslint plugin to disallow calling method with inline literals as arguments

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-arguments`:

```
$ npm install eslint-plugin-arguments --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-arguments` globally.

## Usage

Add `no-literal-arguments` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "arguments"
    ]
}
```

## Supported Rules

### no-literal-arguments

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
foo(x); \\ OK  
bar.foo(x); \\ OK
foo(A.x); \\ OK
bar.foo(A.x); \\ OK

foo('x'); \\ BAD  
bar.foo('x'); \\ BAD
foo(10); \\ BAD
bar.foo(10); \\ BAD
```
