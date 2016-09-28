# superagent-rxjs

Return an RxJS v5 Observable from your superagent request

# Installation

Add it to your project via npm:

```shell
npm i -S superagent-rxjs
```

if you haven't already, also add superagent as a dependency to your project:

```shell
npm i -S superagent
```

# Usage

```js
import superagent from 'superagent'
import observify from 'superagent-rxjs'

// adds the .observify() method to the superagent Request prototype
const request = observify(superagent)

// Use it
const observable = request.get('http://example.com').observify()
const subscription = observable.subscribe()

// calling unsubscribe before the request has finished will abort the request!
subscription.unsubscribe()
```
