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
    return Object.keys(add).reduce((updatedDate, key) => updatedDate.add(add[key], key), date)
}

export function subtractFromDate(date, subtract) {
    return Object.keys(subtract).reduce((updatedDate, key) => updatedDate.subtract(subtract[key], key), date)
}

// from https://github.com/headzoo/react-moment/blob/240ee62cb969f341e9e081ca6fa94d85312b8ede/src/objects.js#L26-L34
export function objectKeyFilter(obj1, obj2) {
    const obj2Keys = Object.keys(obj2)
    const newProps = Object.assign({}, obj1)
    Object.keys(newProps)
        .filter(key => obj2Keys.indexOf(key) !== -1)
        .forEach(key => delete newProps[key])

    return newProps
}
