import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Page from '@/components/page/page'
import Post from '@/components/post/containers/PostContainer'
import Category from '@/components/category/containers/CategoryContainer'
import Header from '@/components/header/header'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        page: Home
      }
    },
    {
      path: '/:name',
      name: 'Page',
      components: {
        header: Header,
        page: Page
      }
    },
    {
      path: '/post/:postname',
      name: 'Post',
      components: {
        header: Header,
        page: Post
      }
    },
    {
      path: '/category/:id',
      name: 'Category',
      components: {
        header: Header,
        page: Category
      }
    }
  ]
})

export default router
