import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page/page'
import Post from '@/components/post/containers/PostContainer'
import Category from '@/components/category/containers/CategoryContainer'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Page,
      params: {
        name: 'homepage'
      }
    },
    {
      path: '/:name',
      name: 'Page',
      component: Page
    },
    {
      path: '/post/:postname',
      name: 'Post',
      component: Post
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category
    }
  ]
})

export default router
