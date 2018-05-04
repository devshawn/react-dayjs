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
    return Object.keys(add).reduce((date, key) => date.add(add[key], key), date)
}

export function subtractFromDate(date, subtract) {
    return Object.keys(subtract).reduce((date, key) => date.subtract(subtract[key], key), date)
}
