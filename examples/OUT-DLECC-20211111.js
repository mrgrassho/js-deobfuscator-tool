var _0xe6f6 = [
	'0f0e0d0c0b0a09080706050403020100',
	'parse',
	'Hex',
	'enc',
	'A796CFBC9D3F8893D76E6A2A1ECDDA58AAC855C6303BF543ED3A7B2964A2E18D9753BA14F146F4C43B540FAC5530503B16856C4A3ADE64DBA7B17A0557A8E120A8330DEB2380D34A41217CC58EF5F8EC96962CB6E5436B024FB9E12C86A9ECF8275B17AB2EF9D1B85F2F0E44A6740939D8726A647B744E78E25ADB74ED8FA08F',
	'10001',
	'1',
	'trim',
	'prototype',
	'function',
	'',
	'replace',
	'memoize',
	'getTime',
	'random',
	'floor',
	'multiply',
	'length',
	'toBigInteger',
	'getX',
	'substring',
	'getQ',
	'getCurve',
	'getA',
	'getB',
	'getG',
	'getY',
	'getN',
	'charCodeAt',
	'push',
	'join',
	'slice',
	'0',
	'from',
	'init',
	'secp128r1',
	'fromBigInteger',
	'subtract',
	'bitLength',
	'add',
	'mod',
	'substr',
	'exportKey',
	'encryptToMF',
	'encryptToApp',
	'encryptToDLB',
	'04',
	'infinity',
	'Latin1',
	'Pkcs7',
	'pad',
	'CBC',
	'mode',
	'encrypt',
	'AES',
	'\\',
	'stringify',
	'Base64',
	'setPublic',
	'fromCharCode',
	'decryptFromApp',
	'create',
	'CipherParams',
	'lib',
	'decrypt',
	'decryptFromMF',
	'encryptHashPassword',
	'password is empty',
	'salt is empty',
	'toUpperCase',
	'01',
	'sign',
	'getVersion',
	'8.2',
	'DLECC'
];
var DLECC = function () {
	var variable2;
	var variable3;
	var variable4;
	var variable5;
	var variable6;
	var variable7;
	var variable8;
	var variable9 = CryptoJS.enc.Hex.parse('0f0e0d0c0b0a09080706050403020100');
	var variablea = 'A796CFBC9D3F8893D76E6A2A1ECDDA58AAC855C6303BF543ED3A7B2964A2E18D9753BA14F146F4C43B540FAC5530503B16856C4A3ADE64DBA7B17A0557A8E120A8330DEB2380D34A41217CC58EF5F8EC96962CB6E5436B024FB9E12C86A9ECF8275B17AB2EF9D1B85F2F0E44A6740939D8726A647B744E78E25ADB74ED8FA08F';
	var variableb = '10001';
	var variablec = '1';
	if (typeof String.prototype.trim !== function) {
		String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, '');
		};
	}
	;
	Function.prototype.memoize = function () {
		var variabled = this, variablee = {};
		return function (variablef) {
			if (variablef in variablee) {
				return variablee[variablef];
			} else {
				return variablee[variablef] = variabled(variablef);
			}
		};
	};
	function variable10() {
		var variable11 = new Date().getTime();
		var variable12 = Math.floor(Math.random() * 100000000000 + 1);
		var variable13 = Math.floor(Math.random() * 100000000000 + 1);
		var variable14 = new BigInteger(variable12.toString(10));
		var variable15 = new BigInteger(variable13.toString(10));
		var variable16 = new BigInteger(variable11.toString(10));
		var variable17 = variable14.multiply(variable15).multiply(variable16);
		var variable18 = variable17.toString(16);
		while (variable18.toString().length < 32) {
			variable18 = variable18 + Math.floor(Math.random() * 16).toString(16);
		}
		;
		return variable18;
	}
	function variable19(variable1a) {
		var variable1b = variable3f(variable1a);
		var variable4 = new BigInteger(variable2);
		var variable1c = variable1b.multiply(variable4);
		var variable1d = variable1c.getX().toBigInteger().toString();
		var variable1e = variable1d.substring(0, 16);
		return variable1e;
	}
	var variable1f = variable19.memoize();
	function variable20(variable21) {
		var variable22 = getSECCurveByName(variable21);
		variable3 = variable22.getCurve().getQ().toString();
		variable4 = variable22.getCurve().getA().toBigInteger().toString();
		variable5 = variable22.getCurve().getB().toBigInteger().toString();
		variable6 = variable22.getG().getX().toBigInteger().toString();
		variable7 = variable22.getG().getY().toBigInteger().toString();
		variable8 = variable22.getN().toString();
		variable2 = '';
	}
	function variable23(variable24) {
		var variable25 = [];
		for (var variable26 = 0; variable26 < variable24.length; ++variable26) {
			variable25.push(variable24.charCodeAt(variable26));
		}
		;
		return variable25;
	}
	function variable27(variable28) {
		return Array.from(variable28, function (variable29) {
			return ('0' + (variable29 & 255).toString(16)).slice(-2);
		}).join('');
	}
	this.init = function () {
		variable20(secp128r1);
		var variable2a = variable2e();
		variable2 = variable2a.toString();
		return variable32();
	};
	function variable2b() {
		return new ECCurveFp(new BigInteger(variable3), new BigInteger(variable4), new BigInteger(variable5));
	}
	function variable2c(variable2d) {
		return new ECPointFp(variable2d, variable2d.fromBigInteger(new BigInteger(variable6)), variable2d.fromBigInteger(new BigInteger(variable7)));
	}
	function variable2e() {
		var variable2f = new SecureRandom();
		var variable30 = new BigInteger(variable8);
		var variable31 = variable30.subtract(BigInteger.ONE);
		var variable2a = new BigInteger(variable30.bitLength(), variable2f);
		return variable2a.mod(variable31).add(BigInteger.ONE);
	}
	function variable32() {
		var variable2d = variable2b();
		var variable33 = variable2c(variable2d);
		var variable4 = new BigInteger(variable2);
		var variable1b = variable33.multiply(variable4);
		return variable3b(variable1b);
	}
	function variable34(variable35) {
		var variable36 = '';
		for (var variable26 = variable35.length - 1; variable26 >= 0; variable26--) {
			variable36 += variable35.substr(variable26, 1);
		}
		;
		return variable36;
	}
	this.exportKey = function (variable37) {
		return variable41(variable37);
	};
	this.encryptToMF = function (variable38, variable37) {
		return variable48(variable38, true, variable37);
	};
	this.encryptToApp = function (variable38, variable37) {
		return variable48(variable38, false, variable37);
	};
	this.encryptToDLB = function (variable38, variable37) {
		var variable39 = variable48(variable38, false, variable37);
		var variable3a = variable4a(variable39.toString());
		return variable3a;
	};
	function variable3b(variable1b) {
		var variable3c = variable1b.getX().toBigInteger().toString(16);
		var variable3d = variable1b.getY().toBigInteger().toString(16);
		var variable2d = variable2b();
		var variable3e = variable2d.getQ().toString(16).length;
		if (variable3e % 2 != 0) {
			variable3e++;
		}
		;
		while (variable3c.length < variable3e) {
			variable3c = '0' + variable3c;
		}
		;
		while (variable3d.length < variable3e) {
			variable3d = '0' + variable3d;
		}
		;
		return '04' + variable3c + variable3d;
	}
	function variable3f(variable35) {
		switch (parseInt(variable35.substr(0, 2), 16)) {
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
			var variable40 = (variable35.length - 2) / 2;
			var variable3c = variable35.substr(2, variable40);
			var variable3d = variable35.substr(variable40 + 2, variable40);
			var variable2d = variable2b();
			return new ECPointFp(variable2d, variable2d.fromBigInteger(new BigInteger(variable3c, 16)), variable2d.fromBigInteger(new BigInteger(variable3d, 16)));
		default:
			return null;
		}
	}
	function variable41(variable37) {
		var variable1e = variable1f(variable37);
		var variable42 = CryptoJS.enc.Latin1.parse(variable1e);
		var variable43 = variable27(variable23(variable1e));
		var variable44 = CryptoJS.AES.encrypt(variable43, variable42, {
			iv: variable9,
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC
		});
		return variable44.toString();
	}
	function variable45(variable46, variable47, variable37) {
		var variable1e = variable1f(variable37);
		if (variable47) {
			variable1e = variable34(variable1e);
		}
		;
		var variable42 = CryptoJS.enc.Latin1.parse(variable1e);
		var variable44 = CryptoJS.AES.encrypt(variable46, variable42, {
			iv: variable9,
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC
		});
		return variable44.toString();
	}
	function variable48(variable46, variable47, variable37) {
		var variable1e = variable1f(variable37);
		if (variable47) {
			variable1e = variable34(variable1e);
		}
		;
		var variable42 = CryptoJS.enc.Latin1.parse(variable1e);
		var variable18 = variable10();
		var variable49 = CryptoJS.enc.Hex.parse(variable18.toString());
		var variable44 = CryptoJS.AES.encrypt(variable46, variable42, {
			iv: variable49,
			padding: CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC
		});
		return variablec + "\\" + CryptoJS.enc.Base64.stringify(variable49) + "\\" + variable44.toString();
	}
	function variable4a(variable4b) {
		var variable4c = new RSAKey();
		variable4c.setPublic(variablea, variableb);
		var variable39 = variable4c.encrypt(variable4b);
		return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(variable39));
	}
	function variable4d(variable4e) {
		var variable3a = '';
		for (var variable26 = 0; variable26 < variable4e.length; variable26++) {
			variable3a += String.fromCharCode(255 ^ variable4e.charCodeAt(variable26));
		}
		;
		return variable3a;
	}
	this.decryptFromApp = function variable4f(variable50, variable37) {
		var variable1e = variable1f(variable37);
		variable1e = variable4d(variable1e);
		var variable42 = CryptoJS.enc.Latin1.parse(variable1e);
		var variable51 = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(variable50) });
		var variable52 = CryptoJS.AES.decrypt(variable51, variable42, { iv: variable9 });
		return variable52.toString(CryptoJS.enc.Utf8);
	};
	this.decryptFromMF = function variable4f(variable50, variable37) {
		var variable1e = variable1f(variable37);
		variable1e = variable34(variable1e);
		var variable42 = CryptoJS.enc.Latin1.parse(variable1e);
		var variable51 = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(variable50) });
		var variable52 = CryptoJS.AES.decrypt(variable51, variable42, { iv: variable9 });
		return variable52.toString(CryptoJS.enc.Utf8);
	};
	function variable53(variable54) {
		return variable54.replace(/^\s+|\s+$/gm, '');
	}
	function variable55(variable25) {
		for (var variable56 = [], variable26 = 0; variable26 < variable25.length; variable26++) {
			variable56.push((variable25[variable26] >>> 4).toString(16));
			variable56.push((variable25[variable26] & 15).toString(16));
		}
		;
		return variable56.join('');
	}
	function variable57(variable56) {
		for (var variable25 = [], variable22 = 0; variable22 < variable56.length; variable22 += 2) {
			variable25.push(parseInt(variable56.substr(variable22, 2), 16));
		}
		;
		return variable25;
	}
	this.encryptHashPassword = function variable58(variable1e, variable59, variable5a) {
		if (variable1e == null || variable1e.trim().length == 0) {
			alert('password is empty');
			return null;
		}
		;
		if (variable59 == null || variable59.trim().length == 0) {
			alert('salt is empty');
			return null;
		}
		;
		var variable35 = variable53(variable59.toUpperCase());
		var variable5b = CryptoJS.SHA1(CryptoJS.enc.Latin1.parse(variable35)).toString().toUpperCase();
		var variable5c = variable1e + variable5b;
		var variable5d = '01' + CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(variable5c));
		return variable48(variable5d, false, variable5a);
	};
	this.sign = function variable5e(variable5c, variable5a) {
		if (variable5c == null || variable5a == 0) {
			return null;
		}
		;
		var variable35 = variable53(variable5c);
		var variable5b = CryptoJS.SHA256(variable35);
		return variable45(variable5b, false, variable5a);
	};
	this.getVersion = function variable5f() {
		return '8.2';
	};
};
window.DLECC = new DLECC();