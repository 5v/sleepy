# Sleepy
This module is to be used for debugging. Why would you put this in production
code?

## Install
Global installation is recommended.

```js
% npm -g i sleepy
```

As a global package, when debugging your work, you might for example want a slow
API response. See `./example/example.js` for an example server and run with:

```sh
% node ./example/example.js # run server
```

```sh
% time curl localhost:3000
This used to return waaay too quickly!
curl localhost:3000  0.00s user 0.00s system 0% cpu 1.015 total
```

With a global, you can just add the sleepy package and invocation, then remove
it when you are done without changing your module's packages.

## API
Sleepy has three exported functions, all to achieve the same thing. It is a
shell analogy to the `sleep` call for synchronous code, asynchronous code and
promise-y code. The following examples will print `hi` and then 500 ms later, `bye`.

```js
# Sync
console.log('hi');
sleepy.sync(500);
console.log(bye);

# Async/callback
console.log('hi');
sleepy.cb(500, () => {
	console.log('bye');
});

# Promise
console.log('hi');
sleepy.promise(500).then(() => {
	console.log('bye');
});
```
