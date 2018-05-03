# react-dayjs

React component for the [dayjs][dayjs] date library. Currently in active development.

[![Build Status](https://travis-ci.org/devshawn/react-dayjs.svg?branch=master)](https://travis-ci.org/devshawn/react-dayjs) [![codecov](https://codecov.io/gh/devshawn/react-dayjs/branch/master/graph/badge.svg)](https://codecov.io/gh/devshawn/react-dayjs)  [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/headzoo/react-moment/master/LICENSE)

## Installing

Use npm to install `react-dayjs` as well as its peer dependency, `dayjs`.

```bash
npm install --save dayjs react-dayjs
```

Then, import the package into your React project:

```jsx
import React from 'react';
import DayJS from 'react-dayjs';

export default class App extends React.Component {
    ...
}
```

## Quick Start
Add the `DayJS` component to a component:

```jsx
import React  from 'react';
import DayJS from 'react-dayjs';

exports default class MyComponent extends React.Component {
    render() {
        const date = "2000-01-31T12:59-0500";
        return (
            <DayJS>{ date }</DayJS>
        );
    }
}
```

Outputs:

```html
<span>2000-01-31T11:59:00-06:00</span>
```

## Contributing

Interested in contributing? Read [CONTRIBUTING.md][contributing] to learn more.

## License

This software is released under the MIT license. See [LICENSE.md][license] for more details.

[contributing]: https://github.com/devshawn/react-dayjs/blob/master/CONTRIBUTING.md
[dayjs]: https://github.com/xx45/dayjs
[license]: https://github.com/devshawn/react-dayjs/blob/master/LICENSE.md
