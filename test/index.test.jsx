import DayJS from "../source/index"
import React from "react"
import dayjs from "dayjs"
import { render } from '@testing-library/react'

const DATE_STRING = "2000-01-31T11:59:00-05:00"
const DATE_STRING_2 = "2100-01-31T11:59:00-05:00"

describe("react-dayjs main", () => {
    it("default", () => {
        const { container } = render(<DayJS />)
        expect(container.firstChild.innerHTML).toEqual(dayjs().format())
    })

    it("should render children", () => {
        const { container } = render(<DayJS>{ DATE_STRING }</DayJS>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render date prop with date string", () => {
        const { container } = render(<DayJS date={ DATE_STRING }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render date prop with date object", () => {
        const { container } = render(<DayJS date={ new Date(DATE_STRING) }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render date prop with date in milliseconds", () => {
        const { container } = render(<DayJS date={ 949337940000 }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render date prop with dayjs object", () => {
        const { container } = render(<DayJS date={ dayjs(DATE_STRING) }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format())
    })

    it("should render children over date prop", () => {
        const { container } = render(<DayJS date={ dayjs(DATE_STRING_2) }>{ DATE_STRING }</DayJS>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format())
    })
})

describe("react-dayjs element", () => {
    it("should be span by default", () => {
        const { container } = render(<DayJS date={ DATE_STRING }/>)
        expect(container.firstChild.tagName).toEqual("TIME")
    })

    it("should be able to be changed", () => {
        const { container } = render(<DayJS date={ DATE_STRING } element="span"/>)
        expect(container.firstChild.tagName).toEqual("SPAN")
    })

    it("className should be handed to element", () => {
        const { container } = render(<DayJS
            date={ DATE_STRING }
            className="myClassName"/>)
        expect(container.firstChild.className).toEqual("myClassName")
    })

    it("style should be handed to element", () => {
        const { container } = render(<DayJS
            date={ DATE_STRING }
            style={ { fontSize: 30 } }
            element="h1"/>)
        expect(container.firstChild.style._values).toEqual({ "font-size": "30px" })
    })
})

describe("react-dayjs manipulation", () => {
    it("should add", () => {
        const { container } = render(<DayJS date={ DATE_STRING } add={ { hours: 1 } }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).add(1, "hour").format())
    })

    it("should subtract", () => {
        const { container } = render(<DayJS date={ DATE_STRING } subtract={ { hours: 1 } }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).subtract(1, "hour").format())
    })
})

describe("react-dayjs formats", () => {
    it("should format dates", () => {
        const format = "MM-DD-YYYY"
        const { container } = render(<DayJS date={ DATE_STRING } format={ format }/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).format(format))
    })

    it("should render isValid", () => {
        const { container } = render(<DayJS date={ DATE_STRING } displayIsValid/>)
        expect(container.firstChild.innerHTML).toEqual(`${dayjs(DATE_STRING).isValid()}`)
    })

    it("should render daysInMonth", () => {
        const { container } = render(<DayJS date={ DATE_STRING } daysInMonth/>)
        expect(container.firstChild.innerHTML).toEqual(`${dayjs(DATE_STRING).daysInMonth()}`)
    })

    it("should render unix milliseconds", () => {
        const { container } = render(<DayJS date={ DATE_STRING } unixMilliseconds/>)
        expect(container.firstChild.innerHTML).toEqual(`${dayjs(DATE_STRING).valueOf()}`)
    })

    it("should render unix seconds", () => {
        const { container } = render(<DayJS date={ DATE_STRING } unixSeconds/>)
        expect(container.firstChild.innerHTML).toEqual(`${dayjs(DATE_STRING).unix()}`)
    })

    it("should render toJSON", () => {
        const { container } = render(<DayJS date={ DATE_STRING } toJSON/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).toJSON())
    })

    it("should render toISOString", () => {
        const { container } = render(<DayJS date={ DATE_STRING } toISOString/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).toISOString())
    })

    it("should render toString", () => {
        const { container } = render(<DayJS date={ DATE_STRING } asString/>)
        expect(container.firstChild.innerHTML).toEqual(dayjs(DATE_STRING).toString())
    })
})
