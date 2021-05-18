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
	var _0xb1a8x9 = CryptoJS[_0x19ce[3]][_0x19ce[2]][_0x19ce[1]](_0x19ce[0]);
	if (typeof String[_0x19ce[5]][_0x19ce[4]] !== _0x19ce[6]) {
		String[_0x19ce[5]][_0x19ce[4]] = function () {
			return this[_0x19ce[8]](/^\s+|\s+$/g, _0x19ce[7]);
		};
	}
	;
	Function[_0x19ce[5]][_0x19ce[9]] = function () {
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
		var _0xb1a8x12 = _0xb1a8x11[_0x19ce[10]](_0xb1a8x4);
		var _0xb1a8x13 = new Date();
		var _0xb1a8x14 = _0xb1a8x12[_0x19ce[12]]()[_0x19ce[11]]().toString();
		var _0xb1a8x15 = _0xb1a8x12[_0x19ce[13]]()[_0x19ce[11]]().toString();
		var _0xb1a8x16 = _0xb1a8x14[_0x19ce[14]](0, 16);
		return _0xb1a8x16;
	}
	var _0xb1a8x17 = _0xb1a8xd[_0x19ce[9]]();
	function _0xb1a8x18(_0xb1a8x19) {
		var _0xb1a8x1a = getSECCurveByName(_0xb1a8x19);
		_0xb1a8x3 = _0xb1a8x1a[_0x19ce[16]]()[_0x19ce[15]]().toString();
		_0xb1a8x4 = _0xb1a8x1a[_0x19ce[16]]()[_0x19ce[17]]()[_0x19ce[11]]().toString();
		_0xb1a8x5 = _0xb1a8x1a[_0x19ce[16]]()[_0x19ce[18]]()[_0x19ce[11]]().toString();
		_0xb1a8x6 = _0xb1a8x1a[_0x19ce[19]]()[_0x19ce[12]]()[_0x19ce[11]]().toString();
		_0xb1a8x7 = _0xb1a8x1a[_0x19ce[19]]()[_0x19ce[13]]()[_0x19ce[11]]().toString();
		_0xb1a8x8 = _0xb1a8x1a[_0x19ce[20]]().toString();
		_0xb1a8x2 = _0x19ce[7];
	}
	this[_0x19ce[21]] = function () {
		_0xb1a8x18(_0x19ce[22]);
		var _0xb1a8x1b = _0xb1a8x1e();
		_0xb1a8x2 = _0xb1a8x1b.toString();
		return _0xb1a8x22();
	};
	function _0xb1a8x1c() {
		return new ECCurveFp(new BigInteger(_0xb1a8x3), new BigInteger(_0xb1a8x4), new BigInteger(_0xb1a8x5));
	}
	function _0xb1a8x1d(_0xb1a8x10) {
		return new ECPointFp(_0xb1a8x10, _0xb1a8x10[_0x19ce[23]](new BigInteger(_0xb1a8x6)), _0xb1a8x10[_0x19ce[23]](new BigInteger(_0xb1a8x7)));
	}
	function _0xb1a8x1e() {
		var _0xb1a8x1f = new SecureRandom();
		var _0xb1a8x20 = new BigInteger(_0xb1a8x8);
		var _0xb1a8x21 = _0xb1a8x20[_0x19ce[24]](BigInteger.ONE);
		var _0xb1a8x1b = new BigInteger(_0xb1a8x20[_0x19ce[25]](), _0xb1a8x1f);
		return _0xb1a8x1b[_0x19ce[27]](_0xb1a8x21)[_0x19ce[26]](BigInteger.ONE);
	}
	function _0xb1a8x22() {
		var _0xb1a8xf = new Date();
		var _0xb1a8x10 = _0xb1a8x1c();
		var _0xb1a8x23 = _0xb1a8x1d(_0xb1a8x10);
		var _0xb1a8x4 = new BigInteger(_0xb1a8x2);
		var _0xb1a8x11 = _0xb1a8x23[_0x19ce[10]](_0xb1a8x4);
		var _0xb1a8x13 = new Date();
		return _0xb1a8x2a(_0xb1a8x11);
	}
	function _0xb1a8x24(_0xb1a8x25) {
		var _0xb1a8x26 = _0x19ce[7];
		for (var _0xb1a8x27 = _0xb1a8x25[_0x19ce[28]] - 1; _0xb1a8x27 >= 0; _0xb1a8x27--) {
			_0xb1a8x26 += _0xb1a8x25[_0x19ce[29]](_0xb1a8x27, 1);
		}
		;
		return _0xb1a8x26;
	}
	this[_0x19ce[30]] = function (_0xb1a8x28) {
		return _0xb1a8x30(_0xb1a8x28);
	};
	this[_0x19ce[31]] = function (_0xb1a8x29, _0xb1a8x28) {
		return _0xb1a8x33(_0xb1a8x29, true, _0xb1a8x28);
	};
	this[_0x19ce[32]] = function (_0xb1a8x29, _0xb1a8x28) {
		return _0xb1a8x33(_0xb1a8x29, false, _0xb1a8x28);
	};
	function _0xb1a8x2a(_0xb1a8x11) {
		var _0xb1a8x2b = _0xb1a8x11[_0x19ce[12]]()[_0x19ce[11]]().toString(16);
		var _0xb1a8x2c = _0xb1a8x11[_0x19ce[13]]()[_0x19ce[11]]().toString(16);
		var _0xb1a8x10 = _0xb1a8x1c();
		var _0xb1a8x2d = _0xb1a8x10[_0x19ce[15]]().toString(16)[_0x19ce[28]];
		if (_0xb1a8x2d % 2 != 0) {
			_0xb1a8x2d++;
		}
		;
		while (_0xb1a8x2b[_0x19ce[28]] < _0xb1a8x2d) {
			_0xb1a8x2b = _0x19ce[33] + _0xb1a8x2b;
		}
		;
		while (_0xb1a8x2c[_0x19ce[28]] < _0xb1a8x2d) {
			_0xb1a8x2c = _0x19ce[33] + _0xb1a8x2c;
		}
		;
		return _0x19ce[34] + _0xb1a8x2b + _0xb1a8x2c;
	}
	function _0xb1a8x2e(_0xb1a8x25) {
		switch (parseInt(_0xb1a8x25[_0x19ce[29]](0, 2), 16)) {
		case 0:
			return this[_0x19ce[35]];
		case 2:
			;
		case 3:
			return null;
		case 4:
			;
		case 6:
			;
		case 7:
			var _0xb1a8x2f = (_0xb1a8x25[_0x19ce[28]] - 2) / 2;
			var _0xb1a8x2b = _0xb1a8x25[_0x19ce[29]](2, _0xb1a8x2f);
			var _0xb1a8x2c = _0xb1a8x25[_0x19ce[29]](_0xb1a8x2f + 2, _0xb1a8x2f);
			var _0xb1a8x10 = _0xb1a8x1c();
			return new ECPointFp(_0xb1a8x10, _0xb1a8x10[_0x19ce[23]](new BigInteger(_0xb1a8x2b, 16)), _0xb1a8x10[_0x19ce[23]](new BigInteger(_0xb1a8x2c, 16)));
		default:
			return null;
		}
	}
	function _0xb1a8x30(_0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		var _0xb1a8x31 = CryptoJS[_0x19ce[3]][_0x19ce[36]][_0x19ce[1]](_0xb1a8x16);
		var _0xb1a8x32 = CryptoJS[_0x19ce[42]][_0x19ce[41]](_0xb1a8x31, _0xb1a8x31, {
			iv: _0xb1a8x9,
			padding: CryptoJS[_0x19ce[38]][_0x19ce[37]],
			mode: CryptoJS[_0x19ce[40]][_0x19ce[39]]
		});
		return _0xb1a8x32;
	}
	function _0xb1a8x33(_0xb1a8x34, _0xb1a8x35, _0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		if (_0xb1a8x35) {
			_0xb1a8x16 = _0xb1a8x24(_0xb1a8x16);
		}
		;
		var _0xb1a8x31 = CryptoJS[_0x19ce[3]][_0x19ce[36]][_0x19ce[1]](_0xb1a8x16);
		var _0xb1a8x32 = CryptoJS[_0x19ce[42]][_0x19ce[41]](_0xb1a8x34, _0xb1a8x31, {
			iv: _0xb1a8x9,
			padding: CryptoJS[_0x19ce[38]][_0x19ce[37]],
			mode: CryptoJS[_0x19ce[40]][_0x19ce[39]]
		});
		return _0xb1a8x32;
	}
	function _0xb1a8x36(_0xb1a8x37) {
		var _0xb1a8x38 = _0x19ce[7];
		for (var _0xb1a8x27 = 0; _0xb1a8x27 < _0xb1a8x37[_0x19ce[28]]; _0xb1a8x27++) {
			_0xb1a8x38 += String[_0x19ce[44]](255 ^ _0xb1a8x37[_0x19ce[43]](_0xb1a8x27));
		}
		;
		return _0xb1a8x38;
	}
	this[_0x19ce[45]] = function _0xb1a8x39(_0xb1a8x3a, _0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		_0xb1a8x16 = _0xb1a8x36(_0xb1a8x16);
		var _0xb1a8x31 = CryptoJS[_0x19ce[3]][_0x19ce[36]][_0x19ce[1]](_0xb1a8x16);
		var _0xb1a8x3b = CryptoJS[_0x19ce[49]][_0x19ce[48]][_0x19ce[47]]({ ciphertext: CryptoJS[_0x19ce[3]][_0x19ce[46]][_0x19ce[1]](_0xb1a8x3a) });
		var _0xb1a8x3c = CryptoJS[_0x19ce[42]][_0x19ce[50]](_0xb1a8x3b, _0xb1a8x31, { iv: _0xb1a8x9 });
		return _0xb1a8x3c.toString(CryptoJS[_0x19ce[3]].Utf8);
	};
	this[_0x19ce[51]] = function _0xb1a8x39(_0xb1a8x3a, _0xb1a8x28) {
		var _0xb1a8x16 = _0xb1a8x17(_0xb1a8x28);
		_0xb1a8x16 = _0xb1a8x24(_0xb1a8x16);
		var _0xb1a8x31 = CryptoJS[_0x19ce[3]][_0x19ce[36]][_0x19ce[1]](_0xb1a8x16);
		var _0xb1a8x3b = CryptoJS[_0x19ce[49]][_0x19ce[48]][_0x19ce[47]]({ ciphertext: CryptoJS[_0x19ce[3]][_0x19ce[46]][_0x19ce[1]](_0xb1a8x3a) });
		var _0xb1a8x3c = CryptoJS[_0x19ce[42]][_0x19ce[50]](_0xb1a8x3b, _0xb1a8x31, { iv: _0xb1a8x9 });
		return _0xb1a8x3c.toString(CryptoJS[_0x19ce[3]].Utf8);
	};
	function _0xb1a8x3d(_0xb1a8x3e) {
		return _0xb1a8x3e[_0x19ce[8]](/^\s+|\s+$/gm, _0x19ce[7]);
	}
	function _0xb1a8x3f(_0xb1a8x40) {
		for (var _0xb1a8x41 = [], _0xb1a8x27 = 0; _0xb1a8x27 < _0xb1a8x40[_0x19ce[28]]; _0xb1a8x27++) {
			_0xb1a8x41[_0x19ce[52]]((_0xb1a8x40[_0xb1a8x27] >>> 4).toString(16));
			_0xb1a8x41[_0x19ce[52]]((_0xb1a8x40[_0xb1a8x27] & 15).toString(16));
		}
		;
		return _0xb1a8x41[_0x19ce[53]](_0x19ce[7]);
	}
	function _0xb1a8x42(_0xb1a8x41) {
		for (var _0xb1a8x40 = [], _0xb1a8x1a = 0; _0xb1a8x1a < _0xb1a8x41[_0x19ce[28]]; _0xb1a8x1a += 2) {
			_0xb1a8x40[_0x19ce[52]](parseInt(_0xb1a8x41[_0x19ce[29]](_0xb1a8x1a, 2), 16));
		}
		;
		return _0xb1a8x40;
	}
this[_0x19ce[54]] = function _0xb1a8x43(_0xb1a8x16, _0xb1a8x44, _0xb1a8x45) {
	if (_0xb1a8x16 == null || _0xb1a8x16[_0x19ce[4]]()[_0x19ce[28]] == 0) {
		alert(_0x19ce[55]);
		return null;
	}
	;
	if (_0xb1a8x44 == null || _0xb1a8x44[_0x19ce[4]]()[_0x19ce[28]] == 0) {
		alert(_0x19ce[56]);
		return null;
	}
	;
	var _0xb1a8x25 = _0xb1a8x3d(_0xb1a8x44[_0x19ce[57]]());
	var _0xb1a8x46 = CryptoJS.SHA1(CryptoJS[_0x19ce[3]][_0x19ce[36]][_0x19ce[1]](_0xb1a8x25)).toString()[_0x19ce[57]]();
	var _0xb1a8x47 = _0xb1a8x16 + _0xb1a8x46;
	var _0xb1a8x48 = _0x19ce[58] + CryptoJS[_0x19ce[3]][_0x19ce[46]][_0x19ce[59]](CryptoJS.SHA256(_0xb1a8x47));
	return _0xb1a8x33(_0xb1a8x48, false, _0xb1a8x45);
};
	this[_0x19ce[60]] = function _0xb1a8x49(_0xb1a8x47, _0xb1a8x45) {
		if (_0xb1a8x47 == null || _0xb1a8x45 == 0) {
			return null;
		}
		;
		var _0xb1a8x25 = _0xb1a8x3d(_0xb1a8x47);
		var _0xb1a8x46 = CryptoJS.SHA256(_0xb1a8x25);
		return _0xb1a8x33(_0xb1a8x46, false, _0xb1a8x45);
	};
	this[_0x19ce[61]] = function _0xb1a8x4a() {
		return _0x19ce[62];
	};
};
window[_0x19ce[63]] = new DLECC();