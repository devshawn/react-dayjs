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
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("2000-01-31T11:59:00-06:00")
    })

    it("should render date prop", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING }/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("2000-01-31T11:59:00-06:00")
    })

    it("should render unix milliseconds", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } unixMilliseconds/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("949341540000")
    })

    it("should render unix seconds", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } unixSeconds/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("949341540")
    })
})

describe("react-dayjs manipulation", () => {
    it("should add", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } add={ { hours: 1 } }/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("2000-01-31T12:59:00-06:00")
    })

    it("should subtract", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } subtract={ { hours: 1 } }/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("2000-01-31T10:59:00-06:00")
    })
})

describe("react-dayjs toStrings", () => {
    it("should render toJSON", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } toJSON/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("2000-01-31T17:59:00.000Z")
    })

    it("should render toISOString", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } toISOString/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("2000-01-31T17:59:00.000Z")
    })

    it("should render toObject", () => {
        const date = TestUtils.renderIntoDocument(<DayJS date={ DATE_STRING } asString/>)
        expect(ReactDOM.findDOMNode(date).innerHTML).toEqual("Mon, 31 Jan 2000 17:59:00 GMT")
    })
})
