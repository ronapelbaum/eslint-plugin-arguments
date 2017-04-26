# eslint-plugin-arguments

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


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "arguments/no-literal-arguments": ["error", ["getKey"]]
    }
}
```

## Supported Rules
