import { useAtom } from 'jotai'
import { UserInfoAtom, userInfoAtom } from '../constants/atom';
import { useAsyncEffect } from 'ahooks';

export default function useUserInfo() {

    const [userInfo, setUserInfo] = useAtom(userInfoAtom)

    useAsyncEffect(async () => {
        if (!userInfo.id) {
            await getUserInfo()
        }
    }, [])

    const getUserInfo = async () => {
        setUserInfo({
            id: Math.random().toString(36).substring(2, 9),
            name: Math.random().toString(36).substring(2, 9)
        })
    }

    return { userInfo, updateUserInfo: getUserInfo, setUserInfo }

}