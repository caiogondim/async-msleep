# async-msleep

<div>
  <img src="http://travis-ci.org/caiogondim/async-msleep.svg?branch=master" alt="Travis CI">
</div>

<br>

Async [msleep](https://github.com/caiogondim/msleep).

## Installation

```bash
npm install --save async-msleep
```

## Usage

Useful for moving non-essential computation to the next event loop (tracking, ...).

```js
async function foo() {
  await msleep(0) // Same as setTimeout(foo, 0), but using async/await
}
```

## Reference
- [msleep](https://github.com/caiogondim/msleep)

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
