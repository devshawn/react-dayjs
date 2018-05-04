import dayjs from "dayjs"

export function generateInitialDate(date, children) {
    if (children) {
        return dayjs(children)
    } else if (date) {
        return dayjs(date)
    }
    return dayjs()
}

export function addToDate(date, add) {
    let dayjsDate = date
    Object.keys(add).forEach((key) => {
        dayjsDate = dayjsDate.add(add[key], key)
    })
    return dayjsDate
}

export function subtractFromDate(date, subtract) {
    let dayjsDate = date
    Object.keys(subtract).forEach((key) => {
        dayjsDate = dayjsDate.subtract(subtract[key], key)
    })
    return dayjsDate
}
