
import { Observable as O } from 'rxjs/Observable'

const observify = function() {
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

export default (superagent) => {
  superagent.Request.prototype.observify = observify

  return superagent
}
