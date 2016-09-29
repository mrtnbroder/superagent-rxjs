
import test from 'ava'
import nock from 'nock'
import { Observable as O } from 'rxjs'
import superagent from 'superagent'
import observify from '../src'

const request = observify(superagent)
const URL = 'http://example.com'

test.afterEach(() => {
  nock.cleanAll()
})

test((t) => {
  t.truthy(request.Request.prototype.observify, 'it adds the observify method to the Request prototype')
})

test((t) => {
  const req = request.get(URL).observify()

  t.is(req instanceof O, true, 'observify returns an instance of an Observable')
})

test('passes when the request succeeds', (t) => {
  nock(URL).get('/').reply(200)

  return request.get(URL).observify().do((res) => {
    t.pass()
  })
})

test('fails when the request fails', (t) => {
  nock(URL).get('/').reply(400, { status: 'error' })

  return request.get(URL).observify().catch((err) => {
    t.pass()
    return O.empty()
  })
})

test.cb('aborts the request when unsubscribe is called before the request has ended', (t) => {
  const myNock = nock(URL).get('/').delay(10).reply(200)
  const req = request.get(URL)
  const obs = req.observify().subscribe()

  setTimeout(() => {
    obs.unsubscribe()
    t.truthy(req._aborted, 'request got aborted')
    t.end()
  }, 5)
})

test.cb('does not abort the request when unsubscribe is called after the request has ended', (t) => {
  const myNock = nock(URL).get('/').delay(10).reply(200)
  const req = request.get(URL).observify().subscribe()

  setTimeout(() => {
    req.unsubscribe()
    t.falsy(req._aborted, 'request did not get aborted')
    t.end()
  }, 15)
})
