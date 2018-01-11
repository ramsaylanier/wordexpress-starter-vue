import Page from '../components/page/page'
import Post from '../components/post/containers/PostContainer'
import Category from '../components/category/containers/CategoryContainer'
import Author from '../components/author/AuthorSingle'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Page
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
  },
  {
    path: '/author/:name',
    name: 'Author',
    component: Author
  }
]

export default routes
