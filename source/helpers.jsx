import dayjs from "dayjs"

export function generateInitialDate(date, children) {
    if (date) {
        return dayjs(date)
    } else if (children) {
        return dayjs(children)
    }
    return dayjs()
}

export function addToDate(date, add) {
    let dayjsDate = date
    Object.entries(add).forEach((entry) => {
        dayjsDate = dayjsDate.add(entry[1], entry[0])
    })
    return dayjsDate
}

export function subtractFromDate(date, subtract) {
    let dayjsDate = date
    Object.entries(subtract).forEach((entry) => {
        dayjsDate = dayjsDate.subtract(entry[1], entry[0])
    })
    return dayjsDate
}
