<p align="center">
  <img src="./.media/alphax.png" alt="">
  <b><i>Fuel of scaffolding.</i></b>
</p>

## Features

* 🚀 Fast, based on stream.
* 📦 Chained API.
* 💅 Using middlewares to process each file.
* 🚨 Asynchronous task control.
* 🌈 Renaming file with a pure function or configuration.
* 🎯 Filtering file with a pure function or configuration.

## Quick Start

Take copy files as an example, if you want to copy all the files from `./src` to `./dist`, you can just do this:

```js
import alphax from 'alphax'

alphax().src('./src/**').dest('./dist')
```

Of course, alphax is far more than that, check out all the [APIs](/api) and [Tips](/tips)
