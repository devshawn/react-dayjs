# Documentation

The react-dayjs component, DayJS, is a react component used for displaying, formatting, and manipulating dates utilizing the dayjs date library.

* [Quick Start](#quick-start)
* [Props](#props)
    * [Date](#date)
    * [Format](#format)
    * [Element](#element)
    * [toJSON](#tojson)
    * [toISOString](#toisostring)
    * [toString](#tostring)

## Quick Start
Add the `DayJS` component to a component:

```jsx
import React from 'react';
import DayJS from 'react-dayjs';

export default class MyComponent extends React.Component {
    render() {
        const date = "2000-01-31T12:59-0500";
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
<DayJS date={ "2000-01-31T12:59-0500" }>2000-01-31T12:59-0500</DayJS>
```

This will output:

```html
<time>2000-01-31T11:59:00-05:00</time>
```

### format

_format = { string }_

The format the date should be displayed in. The default is `ISO 8601`, with no fractional seconds.

The available formats can be found on the [dayjs][dayjs] README.

### element

_element = { string | React.Component }_

The element the component should be rendered as. The default is `time`.

```jsx
<DayJS element="span">2000-01-31T12:59-0500</DayJS>
```

This will output:

```html
<span>2000-01-31T11:59:00-05:00</span>
```

### toJSON
_toJSON = { boolean }_

Serializes a dayjs object to JSON, which returns an ISO8601 string. 

```jsx
<DayJS toJSON={ true }>2000-01-31T12:59-0500</DayJS>
```

This will output:

```html
<time>2000-01-31T17:59:00.000Z</time>
```

### toISOString
_toISOString = { boolean }_

Formats a date to an ISO8601 string. 

```jsx
<DayJS toISOString={ true }>2000-01-31T12:59-0500</DayJS>
```

This will output:

```html
<time>2000-01-31T17:59:00.000Z</time>
```

### toString
_toString = { boolean }_

Formats a date as a more readable string.

```jsx
<DayJS toString={ true }>2000-01-31T12:59-0500</DayJS>
```

This will output:

```html
<time>Mon, 31 Jan 2000 17:59:00 GMT</time>
```

[dayjs]: https://github.com/xx45/dayjs#format
