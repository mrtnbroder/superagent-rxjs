/* @flow */

import type { Observable } from 'rxjs'
import { Observable as O } from 'rxjs/Observable'
import pick from 'ramda/src/pick'

const observify = (Request) => function (): Observable<*> {
  return O.create((o) => {
    const requestCallback = (err, res) => {
      if (err) {
        o.error(err)
      } else {
        o.next(res)
        o.complete()
      }
    }

    /*
     * Superagent requests can only be made (`.end()`) once. Since Rx observables
     * must be resubscribable, we create a new superagent instance if create is
     * called more than once.
     */
    if (this.called === true) {
      /* create another request */
      const request = Object.assign(
        new Request(this.url, this.method),
        pick([
          'domain',
          '_events',
          '_eventsCount',
          '_maxListeners',
          '_agent',
          '_formData',
          'method',
          'url',
          '_header',
          'header',
          'writable',
          '_redirects',
          '_maxRedirects',
          'cookies',
          'qs',
          'qsRaw',
          '_redirectList',
          '_streamRequest'
        ], this)
      )
      request.end(requestCallback)
    } else {
      this.end(requestCallback)
    }

    return () => {
      /*
       * The response is undefined when the subscriber called unsubscribe
       * before the request has ended, so let's cancel it.
       */
      if (this.response === undefined) {
        this.abort()
      }
    }
  })
}

// TODO: add libdefs for superagent
export default (superagent: any): void => {
  superagent.Request.prototype.observify = observify(superagent.Request)

  return void 0
}
