/* @flow */

import { Observable as O, type Observable } from 'rxjs'

const observify = function(): Observable<*> {
  return O.create((o) => {
    this.end((err, res) => {
      if (err) {
        o.error(err)
      } else {
        o.next(res)
      }
      o.complete()
    })

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
  superagent.Request.prototype.observify = observify

  return void 0
}
