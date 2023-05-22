/**
 * url地址
 */
export const urlReg =
	/^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/

// 邮箱正则
export const emailReg =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 手机号
export const phoneNumberReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/


// 是否是url连接
export function isUrl(url: string | undefined | null): boolean {
	if (!url) return false
	return urlReg.test(url);
}

// 是否是邮箱
export function isEmail(email: string | undefined | null): boolean {
	if (!email) return false
	return urlReg.test(email);
}

// 是否是邮箱
export function isPhoneNumber(phone: string | undefined | null | number): boolean {
	if (!phone) return false
	return urlReg.test(phone);
}

