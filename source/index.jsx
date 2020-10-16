import React, {
    useEffect,
    useState,
} from "react"
import PropTypes from "prop-types"
import {
    addToDate,
    generateInitialDate,
    subtractFromDate,
    objectKeyFilter
} from "./helpers"

const propTypes = {
    element: PropTypes.any,
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
    ]),
    format: PropTypes.string,
    toJSON: PropTypes.bool,
    toISOString: PropTypes.bool,
    asString: PropTypes.bool,
    unixSeconds: PropTypes.bool,
    unixMilliseconds: PropTypes.bool,
    daysInMonth: PropTypes.bool,
    displayIsValid: PropTypes.bool,
    add: PropTypes.object,
    subtract: PropTypes.object,
    children: PropTypes.string,
}

const DayJS = (props) => {
    const [state, setState] = useState({
        value: "",
    })

    const update = () => {
        const {
            date,
            format,
            children,
            add,
            subtract,
            daysInMonth,
            toJSON,
            toISOString,
            asString,
            unixSeconds,
            unixMilliseconds,
            displayIsValid,
        } = props

        let dayjsDate = generateInitialDate(date, children)

        if (add) {
            dayjsDate = addToDate(dayjsDate, add)
        }

        if (subtract) {
            dayjsDate = subtractFromDate(dayjsDate, subtract)
        }

        if (displayIsValid) {
            return setState(state => ({
                ...state,
                value: `${dayjsDate.isValid()}`,
            }))
        }

        if (daysInMonth) {
            return setState(state => ({
                ...state,
                value: dayjsDate.daysInMonth(),
            }))
        }

        if (toJSON) {
            return setState(state => ({
                ...state,
                value: dayjsDate.toJSON(),
            }))
        }

        if (toISOString) {
            return setState(state => ({
                ...state,
                value: dayjsDate.toISOString(),
            }))
        }

        if (asString) {
            return setState(state => ({
                ...state,
                value: dayjsDate.toString(),
            }))
        }

        if (unixMilliseconds) {
            return setState(state => ({
                ...state,
                value: dayjsDate.valueOf(),
            }))
        }

        if (unixSeconds) {
            return setState(state => ({
                ...state,
                value: dayjsDate.unix()
            }))
        }

        if (format) {
            return setState(state => ({
                ...state,
                value: dayjsDate.format(format),
            }))
        }

        return setState(state => ({
            ...state,
            value: dayjsDate.format()
        }))
    }

    useEffect(() => {
        update(props)
    }, [])

    const elementProps = objectKeyFilter(props, propTypes)
    return React.createElement(
        props.element,
        elementProps,
        state.value
    )
}

DayJS.propTypes = propTypes

DayJS.defaultProps = {
    element: "time",
    date: null,
    format: null,
    toJSON: false,
    toISOString: false,
    asString: false,
    unixSeconds: false,
    unixMilliseconds: false,
    daysInMonth: false,
    displayIsValid: false,
    add: null,
    subtract: null,
    children: null,
}

export default DayJS
