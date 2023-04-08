export function getIpPath() {
	const htt = window.location.protocol;// 获取协议 
    const host = window.location.host; // 获取地址和端口号
    return htt+"//"+host;
}
