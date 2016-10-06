# superagent-rxjs
[![GitHub version](https://badge.fury.io/gh/mrtnbroder%2Fsuperagent-rxjs.svg)](https://badge.fury.io/gh/mrtnbroder%2Fsuperagent-rxjs)
[![Build Status](https://travis-ci.org/mrtnbroder/superagent-rxjs.svg?branch=master)](https://travis-ci.org/mrtnbroder/superagent-rxjs)
[![Coverage Status](https://coveralls.io/repos/github/mrtnbroder/superagent-rxjs/badge.svg?branch=master)](https://coveralls.io/github/mrtnbroder/superagent-rxjs?branch=master)
[![Dependency Status](https://dependencyci.com/github/mrtnbroder/superagent-rxjs/badge)](https://dependencyci.com/github/mrtnbroder/superagent-rxjs)

Return an RxJS v5 Observable from your [superagent](https://visionmedia.github.io/superagent/) request

## Installation

Add it to your project via npm or bower:

```shell
npm i -S superagent-rxjs
```

or

```shell
bower install superagent-rxjs
```

if you haven't already, also add superagent as a dependency to your project:

```shell
npm i -S superagent
```

I also recommend to **explicitly** add rxjs as a dependency of your project:

```shell
npm i -S rxjs
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
