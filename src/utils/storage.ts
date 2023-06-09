/*
 * @Author: 伍东京 15211420607@163.com
 * @Date: 2023-04-13 09:32:02
 * @LastEditors: 伍东京 15211420607@163.com
 * @LastEditTime: 2023-04-18 17:33:32
 * @FilePath: /vite-react-web/src/utils/storage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//添加前缀,避免多个项目缓存命名冲突,还有缓存数据加密\安全数据问题 token等
import CryptoJS from 'crypto-js';
import myPackage from '../../package.json';

//环境+项目名+版本号+缓存名
const prev = process.env.NODE_ENV + '_' + myPackage.name + '_' + myPackage.version + '_';

export function setLocal(name: string, value: string | undefined) {
  return localStorage.setItem(prev + name, encryptByAES(value))
}

export function getLocal(name: string) {
  const result = localStorage.getItem(prev + name);
  if (!result) return null
  return decryptByAES(result)
}

export function rmLocal(name: string) {
  return localStorage.removeItem(prev + name);
}

export function setSession(name: string, value: string | undefined) {
  return sessionStorage.setItem(prev + name, encryptByAES(value))
}

export function getSession(name: string) {
  const result = sessionStorage.getItem(prev + name);
  if (!result) return null
  return decryptByAES(result)
}

export function rmSession(name: string) {
  return sessionStorage.removeItem(prev + name);
}

//自定义密钥进制,16进制,32个编码
const key = CryptoJS.enc.Hex.parse("97d46447e8d0b3bc4fe4cff2ee3a8121");
const iv = CryptoJS.enc.Hex.parse("3f6d4d7247299bef5a1335a724743485");

//加密
/**
 * @param  {string} data 需要加密的数据
 * @returns string 加密后返回的数据
 */
export function encryptByAES(data = '') {
  return CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}

//解密
/**
 * @param  {string} encrypted //需要被解密的数据
 * @returns string  揭秘后的数据
 */
export function decryptByAES(encrypted = '') {
  const decrypt = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv, mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
}

