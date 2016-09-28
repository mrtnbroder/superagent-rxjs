
const O = require('rxjs/Observable').Observable

module.exports = (superagent) => {
  superagent.Request.prototype.observify = function() {
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

  return superagent
}
