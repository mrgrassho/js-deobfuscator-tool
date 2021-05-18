var _0x19ce = [
	'0f0e0d0c0b0a09080706050403020100',
	'parse',
	'Hex',
	'enc',
	'trim',
	'prototype',
	'function',
	'',
	'replace',
	'memoize',
	'multiply',
	'toBigInteger',
	'getX',
	'getY',
	'substring',
	'getQ',
	'getCurve',
	'getA',
	'getB',
	'getG',
	'getN',
	'init',
	'secp128r1',
	'fromBigInteger',
	'subtract',
	'bitLength',
	'add',
	'mod',
	'length',
	'substr',
	'exportKey',
	'encryptToMF',
	'encryptToApp',
	'0',
	'04',
	'infinity',
	'Latin1',
	'Pkcs7',
	'pad',
	'CBC',
	'mode',
	'encrypt',
	'AES',
	'charCodeAt',
	'fromCharCode',
	'decryptFromApp',
	'Base64',
	'create',
	'CipherParams',
	'lib',
	'decrypt',
	'decryptFromMF',
	'push',
	'join',
	'encryptHashPassword',
	'password is empty',
	'salt is empty',
	'toUpperCase',
	'01',
	'stringify',
	'sign',
	'getVersion',
	'5',
	'DLECC'
];
var DLECC = function () {
	var _0xb1a8x2;
	var _0xb1a8x3;
	var _0xb1a8x4;
	var _0xb1a8x5;
	var _0xb1a8x6;
	var _0xb1a8x7;
	var _0xb1a8x8;
	var _0xb1a8x9 = CryptoJS.enc.Hex.parse('0f0e0d0c0b0a09080706050403020100');
	if (typeof String.prototype.trim !== function) {
		String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}
	;
	Function.prototype.memoize = function () {
		var _0xb1a8xa = this, _0xb1a8xb = {};
		return function (_0xb1a8xc) {
			if (_0xb1a8xc in _0xb1a8xb) {
				return _0xb1a8xb[_0xb1a8xc];
			} else {
				return _0xb1a8xb[_0xb1a8xc] = _0xb1a8xa(_0xb1a8xc);
			}
		};
	};
	function _0xb1a8xd(_0xb1a8xe) {
		var _0xb1a8xf = new Date();
		var _0xb1a8x10 = _0xb1a8x1c();
		var _0xb1a8x11 = _0xb1a8x2e(_0xb1a8xe);
		var _0xb1a8x4 = new BigInteger(_0xb1a8x2);
		var _0xb1a8x12 = _0xb1a8x11.multiply(_0xb1a8x4);
		var _0xb1a8x13 = new Date();
		var _0xb1a8x14 = _0xb1a8x12.getX().toBigInteger().toString();
		var _0xb1a8x15 = _0xb1a8x12.getY().toBigInteger().toString();
		var _0xb1a8x16 = _0xb1a8x14.substring(0, 16);
		return _0xb1a8x16;
	}
	var _0xb1a8x17 = _0xb1a8xd.memoize();
	function _0xb1a8x18(_0xb1a8x19) {
		var _0xb1a8x1a = getSECCurveByName(_0xb1a8x19);
		_0xb1a8x3 = _0xb1a8x1a.getCurve().getQ().toString();
		_0xb1a8x4 = _0xb1a8x1a.getCurve().getA().toBigInteger().toString();
		_0xb1a8x5 = _0xb1a8x1a.getCurve().getB().toBigInteger().toString();
		_0xb1a8x6 = _0xb1a8x1a.getG().getX().toBigInteger().toString();
		_0xb1a8x7 = _0xb1a8x1a.getG().getY().toBigInteger().toString();
		_0xb1a8x8 = _0xb1a8x1a.getN().toString();
		_0xb1a8x2 = '';
	}
	this.init = function () {
		_0xb1a8x18(secp128r1);
		var _0xb1a8x1b = _0xb1a8x1e();
		_0xb1a8x2 = _0xb1a8x1b.toString();
		return _0xb1a8x22();
	};
	function _0xb1a8x1c() {
		return new ECCurveFp(new BigInteger(_0xb1a8x3), new BigInteger(_0xb1a8x4), new BigInteger(_0xb1a8x5));
	}
	function _0xb1a8x1d(_0xb1a8x10) {
		return new ECPointFp(_0xb1a8x10, _0xb1a8x10.fromBigInteger(new BigInteger(_0xb1a8x6)), _0xb1a8x10.fromBigInteger(new BigInteger(_0xb1a8x7)));
	}
	function _0xb1a8x1e() {
		var _0xb1a8x1f = new SecureRandom();
		var _0xb1a8x20 = new BigInteger(_0xb1a8x8);
		var _0xb1a8x21 = _0xb1a8x20.subtract(BigInteger.ONE);
		var _0xb1a8x1b = new BigInteger(_0xb1a8x20.bitLength(), _0xb1a8x1f);
		return _0xb1a8x1b.mod(_0xb1a8x21).add(BigInteger.ONE);
	}
	function _0xb1a8x22() {
		var _0xb1a8xf = new Date();
		var _0xb1a8x10 = _0xb1a8x1c();
		var _0xb1a8x23 = _0xb1a8x1d(_0xb1a8x10);
		var _0xb1a8x4 = new BigInteger(_0xb1a8x2);
		var _0xb1a8x11 = _0xb1a8x23.multiply(_0xb1a8x4);
		var _0xb1a8x13 = new Date();
		return _0xb1a8x2a(_0xb1a8x11);
	}
	function _0xb1a8x24(_0xb1a8x25) {
		var _0xb1a8x26 = '';
		for (var _0xb1a8x27 = _0xb1a8x25.length - 1; _0xb1a8x27 >= 0; _0xb1a8x27--) {
			_0xb1a8x26 += _0xb1a8x25.substr(_0xb1a8x27, 1);
		}
		;
		return _0xb1a8x26;
	}
	this.exportKey = function (_0xb1a8x28) {
		return _0xb1a8x30(_0xb1a8x28);
	};
	this.encryptToMF = function (_0xb1a8x29, _0xb1a8x28) {
		return _0xb1a8x33(_0xb1a8x29, true, _0xb1a8x28);
	};
	this.encryptToApp = function (_0xb1a8x29, _0xb1a8x28) {
		return _0xb1a8x33(_0xb1a8x29, false, _0xb1a8x28);
	};
	function _0xb1a8x2a(_0xb1a8x11) {
		var _0xb1a8x2b = _0xb1a8x11.getX().toBigInteger().toString(16);
		var _0xb1a8x2c = _0xb1a8x11.getY().toBigInteger().toString(16);
		var _0xb1a8x10 = _0xb1a8x1c();
		var _0xb1a8x2d = _0xb1a8x10.getQ().toString(16).length;
		if (_0xb1a8x2d % 2 != 0) {
			_0xb1a8x2d++;
		}
		;
		while (_0xb1a8x2b.length < _0xb1a8x2d) {
			_0xb1a8x2b = '0' + _0xb1a8x2b;
		}
		;
		while (_0xb1a8x2c.length < _0xb1a8x2d) {
			_0xb1a8x2c = '0' + _0xb1a8x2c;
		}
		;
		return '04' + _0xb1a8x2b + _0xb1a8x2c;
	}
	function _0xb1a8x2e(_0xb1a8x25) {
		switch (parseInt(_0xb1a8x25.substr(0, 2), 16)) {
		case 0:
			return this.infinity;
		case 2:
			;
		case 3:
			return null;
		case 4:
			;
		case 6:
			;
		case 7:
			var _0xb1a8x2f = (_0xb1a8x25.length - 2) / 2;
			var _0xb1a8x2b = _0xb1a8x25.substr(2, _0xb1a8x2f);
			var _0xb1a8x2c = _0xb1a8x25.substr(_0xb1a8x2f + 2, _0xb1a8x2f);
			var _0xb1a8x10 = _0xb1a8x1c();
			return new ECPointFp(_0xb1a8x10, _0xb1a8x10.fromBigInteger(new BigInteger(_0xb1a8x2b, 16)), _0xb1a8x10.fromBigInteger(new BigInteger(_0xb1a8x2c, 16)));
		default:
			return null;
		}
	}
	function _0xb1a8x30(_0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		var _0xb1a8x31 = CryptoJS.enc.Latin1.parse(_0xb1a8x16);
		var _0xb1a8x32 = CryptoJS.AES.encrypt(_0xb1a8x31, _0xb1a8x31, {
			iv: _0xb1a8x9,
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC
		});
		return _0xb1a8x32;
	}
	function _0xb1a8x33(_0xb1a8x34, _0xb1a8x35, _0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		if (_0xb1a8x35) {
			_0xb1a8x16 = _0xb1a8x24(_0xb1a8x16);
		}
		;
		var _0xb1a8x31 = CryptoJS.enc.Latin1.parse(_0xb1a8x16);
		var _0xb1a8x32 = CryptoJS.AES.encrypt(_0xb1a8x34, _0xb1a8x31, {
			iv: _0xb1a8x9,
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC
		});
		return _0xb1a8x32;
	}
	function _0xb1a8x36(_0xb1a8x37) {
		var _0xb1a8x38 = '';
		for (var _0xb1a8x27 = 0; _0xb1a8x27 < _0xb1a8x37.length; _0xb1a8x27++) {
			_0xb1a8x38 += String.fromCharCode(255 ^ _0xb1a8x37.charCodeAt(_0xb1a8x27));
		}
		;
		return _0xb1a8x38;
	}
	this.decryptFromApp = function _0xb1a8x39(_0xb1a8x3a, _0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		_0xb1a8x16 = _0xb1a8x36(_0xb1a8x16);
		var _0xb1a8x31 = CryptoJS.enc.Latin1.parse(_0xb1a8x16);
		var _0xb1a8x3b = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(_0xb1a8x3a) });
		var _0xb1a8x3c = CryptoJS.AES.decrypt(_0xb1a8x3b, _0xb1a8x31, { iv: _0xb1a8x9 });
		return _0xb1a8x3c.toString(CryptoJS.enc.Utf8);
	};
	this.decryptFromMF = function _0xb1a8x39(_0xb1a8x3a, _0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		_0xb1a8x16 = _0xb1a8x24(_0xb1a8x16);
		var _0xb1a8x31 = CryptoJS.enc.Latin1.parse(_0xb1a8x16);
		var _0xb1a8x3b = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(_0xb1a8x3a) });
		var _0xb1a8x3c = CryptoJS.AES.decrypt(_0xb1a8x3b, _0xb1a8x31, { iv: _0xb1a8x9 });
		return _0xb1a8x3c.toString(CryptoJS.enc.Utf8);
	};
	function _0xb1a8x3d(_0xb1a8x3e) {
		return _0xb1a8x3e.replace(/^\s+|\s+$/gm, '');
	}
	function _0xb1a8x3f(_0xb1a8x40) {
		for (var _0xb1a8x41 = [], _0xb1a8x27 = 0; _0xb1a8x27 < _0xb1a8x40.length; _0xb1a8x27++) {
			_0xb1a8x41.push((_0xb1a8x40[_0xb1a8x27] >>> 4).toString(16));
			_0xb1a8x41.push((_0xb1a8x40[_0xb1a8x27] & 15).toString(16));
		}
		;
		return _0xb1a8x41.join('');
	}
	function _0xb1a8x42(_0xb1a8x41) {
		for (var _0xb1a8x40 = [], _0xb1a8x1a = 0; _0xb1a8x1a < _0xb1a8x41.length; _0xb1a8x1a += 2) {
			_0xb1a8x40.push(parseInt(_0xb1a8x41.substr(_0xb1a8x1a, 2), 16));
		}
		;
		return _0xb1a8x40;
	}
this.encryptHashPassword = function _0xb1a8x43(_0xb1a8x16, _0xb1a8x44, _0xb1a8x45) {
	if (_0xb1a8x16 == null || _0xb1a8x16.trim().length == 0) {
		alert('password is empty');
		return null;
	}
	;
	if (_0xb1a8x44 == null || _0xb1a8x44.trim().length == 0) {
		alert('salt is empty');
		return null;
	}
	;
	var _0xb1a8x25 = _0xb1a8x3d(_0xb1a8x44.toUpperCase());
	var _0xb1a8x46 = CryptoJS.SHA1(CryptoJS.enc.Latin1.parse(_0xb1a8x25)).toString().toUpperCase();
	var _0xb1a8x47 = _0xb1a8x16 + _0xb1a8x46;
	var _0xb1a8x48 = '01' + CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(_0xb1a8x47));
	return _0xb1a8x33(_0xb1a8x48, false, _0xb1a8x45);
};
	this.sign = function _0xb1a8x49(_0xb1a8x47, _0xb1a8x45) {
		if (_0xb1a8x47 == null || _0xb1a8x45 == 0) {
			return null;
		}
		;
		var _0xb1a8x25 = _0xb1a8x3d(_0xb1a8x47);
		var _0xb1a8x46 = CryptoJS.SHA256(_0xb1a8x25);
		return _0xb1a8x33(_0xb1a8x46, false, _0xb1a8x45);
	};
	this.getVersion = function _0xb1a8x4a() {
		return '5';
	};
};
window.DLECC = new DLECC();