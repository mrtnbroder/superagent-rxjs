# superagent-rxjs
[![npm](https://img.shields.io/npm/v/superagent-rxjs.svg?style=flat-square)]()
[![Build Status](https://img.shields.io/travis/mrtnbroder/superagent-rxjs/master.svg?maxAge=2592000&style=flat-square)]()
[![Coveralls](https://img.shields.io/coveralls/mrtnbroder/superagent-rxjs.svg?maxAge=2592000&style=flat-square)]()
[![Dependency Status](https://dependencyci.com/github/mrtnbroder/superagent-rxjs/badge?style=flat-square)](https://dependencyci.com/github/mrtnbroder/superagent-rxjs)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg?maxAge=2592000&style=flat-square)](https://github.com/mrtnbroder/superagent-rxjs)
[![npm](https://img.shields.io/npm/dt/superagent-rxjs.svg?maxAge=2592000&style=flat-square)]()

Return an RxJS v5 Observable from your [superagent](https://visionmedia.github.io/superagent/) request

## Installation

Add it to your project via npm or [yarn](https://github.com/yarnpkg/yarn) (recommended):

```shell
npm install --save superagent-rxjs
```

If you haven't already, also add superagent and rxjs as a dependency to your project:

```shell
npm install --save superagent rxjs
```

## Usage

```js
import request from 'superagent'
import observify from 'superagent-rxjs'

// mutates superagent's Request.prototype and adds the .observify() method to it
observify(request)

// use it!
const observable = request.get('http://example.com').observify()
const subscription = observable.subscribe()

// calling unsubscribe before the request has finished will abort the request
subscription.unsubscribe()
```

## API

### [`observify :: Request -> void`](https://github.com/mrtnbroder/superagent-rxjs/blob/master/src/index.js#L27-L31)

Adds the `observify` method to superagent's `Request.prototype` and returns nothing

## Credits

Thanks [Kriegslustig](https://github.com/Kriegslustig) for helping out on the tests 😄
