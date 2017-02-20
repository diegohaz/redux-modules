# redux-modules

[![Build Status](https://img.shields.io/travis/diegohaz/redux-modules/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/redux-modules) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/redux-modules/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/redux-modules/branch/master)

**redux-modules** is a modular approach to better organize redux stuff. It was inspired by [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux). However, this handles not only `actions` and `reducers`, but also `selectors`, `sagas`, `middlewares` etc.

In short, a redux module is:

- **A feature** with action creators, reducer, selectors, sagas, middlewares and any other thing from the redux ecosystem (see [`examples`](examples));
- **Complete**, which means that one feature will not be separated into multiple modules;
- **Pluggable**, which means that you can always add or remove it to have or not that feature without having to change other redux modules.

![Plug](https://media1.giphy.com/media/26uf6spoYGcCBRGik/giphy.gif)

## The problem

Let's say you have an existing project with a bunch of redux entities, such as `articles`, `users` and `comments`, with their own reducers and selectors, as well as action creators or sagas to perform CRUD operations (see [`examples/resource`](examples/resource)).

Now you want to add [normalizr](https://github.com/paularmstrong/normalizr) to it. Then you realize that you'll need to do a lot of refactor to proper `normalize` and `denormalize` your entities.

The problem gets even worse if after some time your team decides to remove normalizr. You'll need to refactor everything again.

![So much work](https://media1.giphy.com/media/ZUXpujW5dNuZq/giphy.gif)

## The solution

A redux module would take care of and encapsulate the normalization feature (see [`examples/entities`](examples/entities)).

You'll just need to change your containers to use selectors from the `entities` module instead of the `articles`, `users` and `comments` ones.

![Nice](https://media1.giphy.com/media/u83WM7V9TsgLK/giphy.gif)

## License

MIT © [Diego Haz](https://github.com/diegohaz)
