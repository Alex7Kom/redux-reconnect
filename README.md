# redux-reconnect

Wraps [react-redux](https://github.com/reactjs/react-redux)'s `connect()` to connect React components to Redux Store using component's static properties.

## Installation

```sh
npm install redux-reconnect
```

or

```sh
yarn add redux-reconnect
```

## Usage

```js
import { reconnect } from 'redux-reconnect';
```

Define [`connect`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) arguments as static methods of the class:

```js
class MyComponent extends Component {
    static mapStateToProps (state) {
        return { /* ... */ };
    }

    static mapDispatchToProps (dispatch) {
        return { /* ... */ };
    }

    render () {
        return <div>Wow, this is nice!</div>;
    }
}
```

Then you have a choice, you can just wrap your class with `reconnect()`:

```js
const comp = reconnect(MyComponent);
```

or use [Babel's transform decorators](https://babeljs.io/docs/plugins/transform-decorators/):

```js
@reconnect
class MyComponent extends Component {
    /* ... */
}
```

## License

The MIT License (MIT)

Copyright (c) 2017 Alexey Komarov <alex7kom@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
