# Documentation

The react-dayjs component, DayJS, is a react component used for displaying, formatting, and manipulating dates utilizing the dayjs date library.

* [Quick Start](#quick-start)
* [Props](#props)
    * [date](#date)
    * [format](#format)
    * [element](#element)
    * [add](#add)
    * [subtract](#subtract)
    * [toJSON](#tojson)
    * [toISOString](#toisostring)
    * [asString](#asString)
    * [unixSeconds](#unixseconds)
    * [unixMilliseconds](#unixmilliseconds)
    * [daysInMonth](#daysinmonth)
    * [displayIsValid](#displayisvalid)

## Quick Start
Add the `DayJS` component to a component:

```jsx
import React from 'react';
import DayJS from 'react-dayjs';

export default class MyComponent extends React.Component {
    render() {
        const date = "2000-01-31T11:59:00-05:00";
        return (
            <DayJS>{ date }</DayJS>
        );
    }
}
```

This will output:

```html
<time>2000-01-31T11:59:00-05:00</time>
```

## Props
The component currently supports the following props:

### date

_date = { string | number | Date | dayjs object }_

The date to be displayed, if not given as children. The default is the current time.

```jsx
<DayJS date={ "2000-01-31T11:59:00-05:00" }/>
```

This will output:

```html
<time>2000-01-31T11:59:00-05:00</time>
```

### format

_format = { string }_

The format the date should be displayed in. The default is `ISO 8601`, with no fractional seconds.

The available formats can be found on the [dayjs][dayjs] README.

```jsx
<DayJS format="MM-DD-YYYY">2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>01-31-2000</time>
```

### element

_element = { string | React.Component }_

The element the component should be rendered as. The default is `time`.

```jsx
<DayJS element="span">2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<span>2000-01-31T11:59:00-05:00</span>
```

### add
_add = { object }_

Adds a specific amount of time to the given date.

```jsx
<DayJS add={ { hours: 1 } }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>2000-01-31T12:59:00-05:00</time>
```

### subtract
_subtract = { object }_

Subtracts a specific amount of time to the given date.

```jsx
<DayJS subtract={ { hours: 1 } }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>2000-01-31T10:59:00-05:00</time>
```

### toJSON
_toJSON = { boolean }_

Serializes a dayjs object to JSON, which returns an ISO8601 string. 

```jsx
<DayJS toJSON={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>2000-01-31T17:59:00.000Z</time>
```

### toISOString
_toISOString = { boolean }_

Formats a date to an ISO8601 string. 

```jsx
<DayJS toISOString={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>2000-01-31T17:59:00.000Z</time>
```

### asString
_asString = { boolean }_

Formats a date as a more readable string, using the `toString` dayjs function.

```jsx
<DayJS asString={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>Mon, 31 Jan 2000 17:59:00 GMT</time>
```

### unixSeconds
_unixSeconds = { boolean }_

Displays the time as a unix timestamp (the number of seconds since Unix Epoch).

```jsx
<DayJS unixSeconds={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>949337940</time>
```

### unixMilliseconds
_unixMilliseconds = { boolean }_

Displays the time as a unix timestamp in milliseconds (the number of milliseconds since Unix Epoch).

```jsx
<DayJS unixMilliseconds={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>949337940000</time>
```

### daysInMonth
_daysInMonth = { boolean }_

Displays the number of days in the month of the given time.

```jsx
<DayJS daysInMonth={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>31</time>
```

### displayIsValid
_displayIsValid = { boolean }_

Displays if the given date is valid.

```jsx
<DayJS displayIsValid={ true }>2000-01-31T11:59:00-05:00</DayJS>
```

This will output:

```html
<time>true</time>
```

[dayjs]: https://github.com/xx45/dayjs#format
