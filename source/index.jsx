import React from "react"
import PropTypes from "prop-types"
import { addToDate, generateInitialDate, subtractFromDate } from "./helpers"

export default class DayJS extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "" }
    }

    componentWillMount() {
        this.update(this.props)
    }

    update() {
        const { date, format, children, add, subtract, daysInMonth, toJSON, toISOString, asString, unixSeconds, unixMilliseconds, displayIsValid } = this.props
        let dayjsDate = generateInitialDate(date, children)

        if (add) {
            dayjsDate = addToDate(dayjsDate, add)
        }

        if (subtract) {
            dayjsDate = subtractFromDate(dayjsDate, subtract)
        }

        if (displayIsValid) {
            return this.setState({ value: `${dayjsDate.isValid()}` })
        }

        if (daysInMonth) {
            return this.setState({ value: dayjsDate.daysInMonth() })
        }

        if (toJSON) {
            return this.setState({ value: dayjsDate.toJSON() })
        }

        if (toISOString) {
            return this.setState({ value: dayjsDate.toISOString() })
        }

        if (asString) {
            return this.setState({ value: dayjsDate.toString() })
        }

        if (unixMilliseconds) {
            return this.setState({ value: dayjsDate.valueOf() })
        }

        if (unixSeconds) {
            return this.setState({ value: dayjsDate.unix() })
        }

        if (format) {
            return this.setState({ value: dayjsDate.format(format) })
        }

        return this.setState({ value: dayjsDate.format() })
    }

    render() {
        const Element = this.props.element
        return (
            <Element>
                { this.state.value }
            </Element>
        )
    }
}

DayJS.propTypes = {
    element: PropTypes.any,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.object]),
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
    children: PropTypes.string
}

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
    children: null
}
