import DayJS from "../source/index"
import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-dom/test-utils"
import dayjs from "dayjs"

const DATE_STRING = "2000-01-31T12:59-0500"

describe("react-dayjs main", () => {
    it("default", () => {
        const date = TestUtils.renderIntoDocument(<DayJS/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs().format())
    })

    it("should render children", () => {
        const date = TestUtils.renderIntoDocument(<DayJS>{ DATE_STRING }</DayJS>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render date prop", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING }/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render unix milliseconds", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } unixMilliseconds/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(`${dayjs(DATE_STRING).valueOf()}`)
    })

    it("should render unix seconds", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } unixSeconds/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(`${dayjs(DATE_STRING).unix()}`)
    })
})

describe("react-dayjs manipulation", () => {
    it("should add", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } add={ { hours: 1 } }/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).add(1, "hour").format())
    })

    it("should subtract", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } subtract={ { hours: 1 } }/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).subtract(1, "hour").format())
    })
})

describe("react-dayjs toStrings", () => {
    it("should render toJSON", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } toJSON/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).toJSON())
    })

    it("should render toISOString", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } toISOString/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).toISOString())
    })

    it("should render toString", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } asString/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual(dayjs(DATE_STRING).toString())
    })
})
