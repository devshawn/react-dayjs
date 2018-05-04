# Documentation

The react-dayjs component, DayJS, is a react component used for displaying, formatting, and manipulating dates utilizing the dayjs date library.

* [Quick Start](#quick-start)
* [Props](#props)
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

### element

_element = { string | React.Component }_

The element the component should be rendered as. The default is `time`.

```jsx
import React from 'react';
import DayJS from 'react-dayjs';

export default class MyComponent extends React.Component {
    render() {
        return (
            <DayJS element="span">2000-01-31T12:59-0500</DayJS>
        )
    }
}
```

This will output:

```html
<span>2000-01-31T11:59:00-05:00</span>
```
