# Bug Reproduction

1. `npm i`
2. `npm run test`

Without the function passed to `.get()` being `async`, `npm run test` gives a normal error:

```
  the server
    1) should respond to a GET at /
TypeError: Cannot read property 'idontexist' of undefined
[full stack trace is then printed]
```

But _with_ `async`, which is required for common cases like `await`ing a database call (not shown here but also not necessary for a minimum reproducible example), `npm run test` instead hangs:

```
  the server
    1) should respond to a GET at /
    2) "after all" hook for "should respond to a GET at /"


  0 passing (4s)
  2 failing

  1) the server
       should respond to a GET at /:
     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/home/me/mocha-supertest-async-hang-repro-repo/test/index.test.ts)
      at listOnTimeout (internal/timers.js:554:17)
      at processTimers (internal/timers.js:497:7)

  2) the server
       "after all" hook for "should respond to a GET at /":
     Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/home/me/mocha-supertest-async-hang-repro-repo/test/index.test.ts)
      at listOnTimeout (internal/timers.js:554:17)
      at processTimers (internal/timers.js:497:7)

[at this point the process hangs indefinitely, and neither the TypeError nor its stack trace appear]
```