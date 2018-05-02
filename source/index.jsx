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
        const { date, format, children, add, subtract, toJSON, toISOString, asString, unixSeconds, unixMilliseconds } = this.props
        let dayjsDate = generateInitialDate(date, children)

        if (add) {
            dayjsDate = addToDate(dayjsDate, add)
        }

        if (subtract) {
            dayjsDate = subtractFromDate(dayjsDate, subtract)
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
        return (
            <span>
                { this.state.value }
            </span>
        )
    }
}

DayJS.propTypes = {
    date: PropTypes.string,
    format: PropTypes.string,
    toJSON: PropTypes.bool,
    toISOString: PropTypes.bool,
    asString: PropTypes.bool,
    unixSeconds: PropTypes.bool,
    unixMilliseconds: PropTypes.bool,
    add: PropTypes.object,
    subtract: PropTypes.object,
    children: PropTypes.string
}

DayJS.defaultProps = {
    date: null,
    format: null,
    toJSON: null,
    toISOString: null,
    asString: null,
    unixSeconds: null,
    unixMilliseconds: null,
    add: null,
    subtract: null,
    children: null
}
