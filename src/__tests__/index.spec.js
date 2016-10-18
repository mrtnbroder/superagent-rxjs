
import test from 'ava'
import nock from 'nock'
import { Observable as O } from 'rxjs'
import request from 'superagent'
import observify from '../'

const URL = 'http://example.com'

test.afterEach(() => {
  nock.cleanAll()
})

test.before(() => {
  observify(request)
})

test('it adds the observify method to the Request prototype', (t) => {
  t.truthy(request.Request.prototype.observify)
})

test('observify returns an instance of an Observable', (t) => {
  const req = request.get(URL).observify()

  t.truthy(req instanceof O)
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

test.serial.cb('is resubscribable and fails', (t) => {
  nock(URL).get('/').reply(500)
  nock(URL).get('/').reply(500)
  nock(URL).get('/').reply(500)
  request.get(URL).observify().retry(2).subscribe(
    () => { t.fail(); t.end() },
    () => { t.pass(); t.end() }
  )
})

test.serial.cb('is resubscribable and succeeds', (t) => {
  // Fail twice then succeed
  nock(URL).get('/').reply(500)
  nock(URL).get('/').reply(500)
  nock(URL).get('/').reply(200)
  request.get(URL).observify().retry(2).subscribe(
    () => { t.pass(); t.end() },
    () => { t.fail(); t.end() }
  )
})

