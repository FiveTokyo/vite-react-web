import CryptoJS from 'crypto-js';

const myPackage = require('../../package.json');

const prefix = `${myPackage.name}_${myPackage.version}_${process.env.NODE_ENV}`


/** 设置localStorage
 * @param  {string} tokenName //localStorage名称
 * @param  {string} token //localStorage数据
 * @returns string  设置的localStorage
 */
export function setLocal(tokenName: string, token: string) {
  const data = encryptByAES(token)
  localStorage.setItem(`${prefix}_${tokenName}`, data);
}

/** 获取localStorage
 * @param  {string} tokenName //localStorage名称
 * @returns string  localStorage数据
 */
export function getLocal(tokenName: string) {
  const result = localStorage.getItem(`${prefix}_${tokenName}`)
  if (!result) return null;
  return decryptByAES(result)
}

/** 移除localStorage
 * @param  {string} tokenName //localStorage名称
 */
export function rmLocal(tokenName: string) {
  localStorage.removeItem(`${prefix}_${tokenName}`);
}


/** 设置Session
 * @param  {string} tokenName //Session名称
 * @param  {string} token //Session数据
 * @returns string  设置的Session
 */
export function setSession(tokenName: string, token: string) {
  const data = encryptByAES(token)
  sessionStorage.setItem(`${prefix}_${tokenName}`, data);
}

/** 获取Session
 * @param  {string} tokenName //Session名称
 * @returns string  Session数据
 */
export function getSession(tokenName: string) {
  const result = sessionStorage.getItem(`${prefix}_${tokenName}`)
  if (!result) return null;
  return decryptByAES(result)
}

/** 移除Session
 * @param  {string} tokenName //Session名称
 */
export function rmSession(tokenName: string) {
  sessionStorage.removeItem(`${prefix}_${tokenName}`);
}



const AES_KEY =
  'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAKe9As2DcXIEal+qLTq4o9/KqDaznL06zDgYUP2R3r8wAUDH+CvGk33FaLmKCt8hlf4inN7/yPhNn/9RWALSyXpFR1dk7p06uQoBL3PPerlemHL01HP8oQNwh5TZ/2khL+yyU5xTIPwMi51rKyTyBEmvqiGbBNbW9437c2kxW2tfAgMBAAECgYAaCtdnjvPLDvJw/dvd1RLkSPOK4qIAIyPXxba1V7NsnYhkRWe7bC40BbU3sT303KML/NW8LZxHKM4hdsCiV5WeHKMk9fmZKKmFqPtUacOEUhUuLR2Gjl6MuW6Oj8JEVzxfpa4cjPpbx9wg/kSfjpYWntj9B5O+jmJ3WIkwcYmVsQJBAN9BJIOfGMKrew18zN9PLGQNttFO9GzG4EE9MnnkipYM2kiaprJ7sIWjJ9RQaF8cJD055QfaDilpW/lXaaj57JcCQQDAV1LhWMxLGcC0hagX2Ua+K9N0URlQxiiE4HZLQHsGM0cYlqk3Gl6EXoMqYBzUYZy0pLkNBXGL8QeJ4gFtNSh5AkEAhEhlClhKo45X6zX3bpnLA73chUjzK0Drv7wzHGZ+d0pGTJ7WBwujHIwAHZ1HOpPCJUUYn/5kRcVX6fYRdT4hIQJBAI8Koj2qz0vu3Ayk9cy+rsjRSRHRGlWi +RFQ6UivrI6A5hfYPAIZ3z7sFvoVvnsIGQWTF3gimz4qw6N8a/kutmkCQQC5oGHYH3fJ3ImEX3ZIy6xeYPLPxxI1tC6N13qzVo3t8tVI3nSgTWVGmu11cEwJZ4MPaqy45+a4FSkugf9Toxqi';
//加密
/**
 * @param  {string} text 需要加密的数据
 * @returns string 加密后返回的数据
 */
export function encryptByAES(text: string) {
  return CryptoJS.AES.encrypt(text, AES_KEY).toString();
}
//解密
/**
 * @param  {string} cipherText //需要被解密的数据
 * @returns string  揭秘后的数据
 */
export function decryptByAES(cipherText: any) {
  return CryptoJS.AES.decrypt(cipherText, AES_KEY).toString(CryptoJS.enc.Utf8);
}

export function encryptByMD5(text: string) {
  return CryptoJS.MD5(text).toString();
}
