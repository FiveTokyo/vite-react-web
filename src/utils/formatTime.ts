import dayjs from "dayjs";

export function formatTime(time: string | Date | dayjs.Dayjs | null | undefined) {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}


export function formatDate(time: string | Date | dayjs.Dayjs | null | undefined) {
    return dayjs(time).format('YYYY-MM-DD')
}