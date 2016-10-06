# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.2.1"></a>
## [2.2.1](https://github.com/mrtnbroder/superagent-rxjs/compare/v2.2.0...v2.2.1) (2016-10-06)


### Bug Fixes

* **bower:** ignore everything expect umd build ([8ddeed7](https://github.com/mrtnbroder/superagent-rxjs/commit/8ddeed7))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/mrtnbroder/superagent-rxjs/compare/v2.1.0...v2.2.0) (2016-10-06)


### Bug Fixes

* **package:** add back build script to release ([7fd6551](https://github.com/mrtnbroder/superagent-rxjs/commit/7fd6551))


### Features

* add bower support ([#3](https://github.com/mrtnbroder/superagent-rxjs/issues/3)) ([5f4e18b](https://github.com/mrtnbroder/superagent-rxjs/commit/5f4e18b))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/mrtnbroder/superagent-rxjs/compare/v2.0.0...v2.1.0) (2016-10-06)


### Features

* add flowtype support ([#2](https://github.com/mrtnbroder/superagent-rxjs/issues/2)) ([286d3d7](https://github.com/mrtnbroder/superagent-rxjs/commit/286d3d7))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/mrtnbroder/superagent-rxjs/compare/v1.1.0...v2.0.0) (2016-09-30)


### Bug Fixes

* **readme:** correct link to observify method ([293ab86](https://github.com/mrtnbroder/superagent-rxjs/commit/293ab86))


### Code Refactoring

* **index:** return undefined ([77c4b20](https://github.com/mrtnbroder/superagent-rxjs/commit/77c4b20))


### BREAKING CHANGES

* index: If you looked at the function signature, it looked like the actual function is pure, since it returned `Request` again, however, that wasn't the case, so I’ve decided to return `undefined` instead to make it more clear that the function is impure and mutates the real superagent passed into the function.



<a name="1.1.0"></a>
# [1.1.0](https://github.com/mrtnbroder/superagent-rxjs/compare/v1.0.0...v1.1.0) (2016-09-28)


### Bug Fixes

* **travis:** syntax ([2a1784d](https://github.com/mrtnbroder/superagent-rxjs/commit/2a1784d))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/mrtnbroder/superagent-rxjs/compare/a39b5f8...v1.0.0) (2016-09-28)


### Bug Fixes

* **package:** lower the required rxjs version ([a3260e7](https://github.com/mrtnbroder/superagent-rxjs/commit/a3260e7))
* **travis:** remove node 0.12 ([a39b5f8](https://github.com/mrtnbroder/superagent-rxjs/commit/a39b5f8))
