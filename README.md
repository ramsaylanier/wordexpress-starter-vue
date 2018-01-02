# VuePress

> WordPress development using Vue, GraphQL, and Express.

[Read the Introduction to Vue Press](https://medium.com/@rmmmsy/introducing-vuepress-wordpress-development-with-vue-and-graphql-f5063a97bb69)

## Node Version Requirement

```bash
node 6.*
node 7.*
```

## Config

Using the `/config/sample.config.json` file as an example, create a `development.json` and `production.json` file. The file should contain connection details to your WordPress MySQL database for the respective environments. 

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

# Working With WordPress

## First Steps

In a fresh WordPress install, you'll need to do a few basic setup items:

- Create a page called 'Homepage'
- Create a menu called 'primary-navigation'
- Install Advanced Custom Fields plugin (see below)

## Advanced Custom Fields

VuePress uses some custom post fields. You're best bet is to install the Advanced Custom Fields plugin into your WordPress backend. I've included am `acf-export` JSON file in this repo that you should import. This will give you just a few basic custom page fields that can be used to give your pages custom layout components.

## Layout Components

Currently there are only [three layout components](https://github.com/ramsaylanier/VuePress/tree/master/src/components/page/layouts) - `DefaultPage`, `PageWithHeader`, and `PostList`. In order to set the layout component, simply type the name of the component in the custom field. If there is nothing in the layout component field, `DefaultPage` will be used. 

### PageWithHeader

In the backend:

<img width="965" alt="screen shot 2017-12-19 at 8 54 27 pm" src="https://user-images.githubusercontent.com/2359852/34187337-dadf8bec-e4fe-11e7-84a0-3f1d885437d7.png">


Result:

<img width="1428" alt="screen shot 2017-12-19 at 9 06 14 pm" src="https://user-images.githubusercontent.com/2359852/34187651-80791a72-e500-11e7-8c9d-ec7bdbeb62be.png">

### PostList

In the backend: 

<img width="962" alt="screen shot 2017-12-19 at 9 10 04 pm" src="https://user-images.githubusercontent.com/2359852/34187773-0762ff30-e501-11e7-8b82-bd16d2b77c94.png">

Result:

<img width="1440" alt="screen shot 2017-12-19 at 9 08 38 pm" src="https://user-images.githubusercontent.com/2359852/34187730-d36b6442-e500-11e7-9af3-a52674dbfd6a.png">

## License

[MIT](http://opensource.org/licenses/MIT)
