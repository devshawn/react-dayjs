# Documentation

The react-dayjs component, DayJS, is a react component used for displaying, formatting, and manipulating dates utilizing the dayjs date library.

* [Quick Start](#quick-start)
* [Props](#props)
    * [Date](#date)
    * [Format](#format)
    * [Element](#element)

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
<span>2000-01-31T11:59:00-05:00</span>
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
[dayjs]: https://github.com/xx45/dayjs#format
