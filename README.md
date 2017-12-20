# VuePress

> WordPress development using Vue, GraphQL, and Express.

## Node Version Requirement

```bash
node 6.*
node 7.*
```

## Config

Using the `/config/sample.config.json` file as an example, create a `development.json` and `production.json` file. The file should contain connection details to your WordPress MySQL database for the respective environments. 

## WordPress Setup

In a fresh WordPress install, you'll need to do a few basic setup items:

- Create a page called 'Homepage'
- Create a menu called 'primary-navigation'

## Build Setup

``` bash
npm install
npm run build
npm start
```

## Development Setup

```bash
npm install
npm run dev
```

## License

[MIT](http://opensource.org/licenses/MIT)
