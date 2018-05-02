import React from 'react';
import PropTypes from 'prop-types';
import dayjs from "dayjs"

export default class DayJS extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    componentWillMount() {
        this.update(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }

    update() {
        const { date, toJSON } = this.props;
        const dayjsDate = date ? dayjs(date) : dayjs();

        if(toJSON) {
            return void this.setState({ value: dayjsDate.toJSON() })
        }

        this.setState({ value: dayjsDate.format() })
    }

    render() {
        return (
            <div>
                { this.state.value }
            </div>
        )
    }
}

DayJS.propTypes = {
    date: PropTypes.string,
    format: PropTypes.string,
    toJSON: PropTypes.bool
};