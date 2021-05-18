# Deobfuscate Tool

## Obfuscation Technique

Currently, this tool only works for the following Obfuscation technique.

The obfuscated file needs to have the symbols on top of the script. Example:

```js
var _0xe6f6 = [
	'0f0e0d0c0b0a09080706050403020100',
	'parse',
	'Hex',
	'enc',
	'A796CFBC9D3F8893D76E6A2A1ECDDA58AAC855C6303BF543ED3A7B2964A2E18D9753BA14F146F4C43B540FAC5530503B16856C4A3ADE64DBA7B17A0557A8E120A8330DEB2380D34A41217CC58EF5F8EC96962CB6E5436B024FB9E12C86A9ECF8275B17AB2EF9D1B85F2F0E44A6740939D8726A647B744E78E25ADB74ED8FA08F',
	...
]
...
var DLECC = function () {
	...
}
```

So, if the JS that you're trying to deobfuscated is obfuscated using other techinque this tool won't work.

## Usage

Here it's a simple example, that deofuscates the content of an obfuscated JavaScript

```bash
deofuscate.py DLECC.js
```

The results will be saved in a file called `OUT-fname`, where `fname` is the original name file.

## Advance Usage

Following the simple usage, in some cases is not enough to read the JS clearly. So to add more symbols you can use the `--extra-symbols`/`-e` argument. This option will extend the results used on the simple usage.

```bash
deofuscate.py DLECC.js --extra-symbols extra.json
```

The extra symbols file need to follow this strucure:

```json
[
  {
    "rep": "_0xaab0x",
    "exp": "variable",
    "type": "var"
  }
]
```

The field `type` specifies how the replacement symbol `rep` will be replaced with `exp`. The available options are:
|type|description|how it works?|
|:---:|:---:|:---:|
|`var`| for variable names| Here `rep` is replaced with `exp` with no additional data|
|`brac`| for expressions that are surrounded by brackets | Here `rep` is replaced with `exp` surrounded by brackets|
|`func`| for expressions that are functions | Here `rep` is replaced with `exp` with a dot in the begining |

## Additional Comments

The JS output, in some cases will have errors especially in constant strings that will require manual modification, in order to compile. This errors could also apperar in string assigments and comparisons.

## Examples

Check the directory `examples` to get a view of obfuscated JS, and deobfuscated results.
