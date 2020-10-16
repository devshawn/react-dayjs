# react-dayjs

React component for the [dayjs][dayjs] date library.

![Node CI](https://github.com/devshawn/react-dayjs/workflows/Node%20CI/badge.svg) [![codecov](https://img.shields.io/codecov/c/github/devshawn/react-dayjs/master.svg?style=flat-square)](https://codecov.io/gh/devshawn/react-dayjs) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/react-dayjs.svg?style=flat-square) ![npm](https://img.shields.io/npm/v/react-dayjs.svg?color=blue&style=flat-square) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/devshawn/react-dayjs/blob/master/LICENSE.md)

* [Installing](#installing)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [License](#license)


## Installing

Use npm to install `react-dayjs` as well as its peer dependency, `dayjs`.

```bash
npm install --save dayjs react-dayjs
```

Then, import the package into your React project:

```jsx
import React from 'react';
import DayJS from 'react-dayjs';

export default class Application extends React.Component {
    ...
}
```

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

## Documentation

Read [DOCUMENTATION.md][documentation] to view the technical details of the component and its props.

## Contributing

Interested in contributing? Read [CONTRIBUTING.md][contributing] to learn more.

## License

This software is released under the MIT license. See [LICENSE.md][license] for more details.

[contributing]: https://github.com/devshawn/react-dayjs/blob/master/CONTRIBUTING.md
[dayjs]: https://github.com/xx45/dayjs
[documentation]: https://github.com/devshawn/react-dayjs/blob/master/DOCUMENTATION.md
[license]: https://github.com/devshawn/react-dayjs/blob/master/LICENSE.md
