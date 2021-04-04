import Home from './Views/home.vue.js'
import Views from './Views/views.vue.js'
import Sources from './Views/sources.vue.js'
import Suggestions from './Views/suggestions.vue.js'

import Gallery from './Views/GalleryViews/gallery.vue.js'
import RandomGallery from './Views/GalleryViews/random-gallery.vue.js'
import BomdiaGallery from './Views/GalleryViews/bomdia-gallery.vue.js'

import Add from './Views/AddViews/add.vue.js'
import AddRandom from './Views/AddViews/add-random.vue.js'
import AddBomdia from './Views/AddViews/add-bomdia.vue.js'

import Page404 from './Views/404.vue.js'

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: Add },
  { path: '/views', component: Views },
  { path: '/sources', component: Sources },
  { path: '/suggestions', component: Suggestions },
  { path: '/gallery', component: Gallery },
  { path: '/gallery/random', component: RandomGallery },
  { path: '/gallery/bomdia', component: BomdiaGallery },
  { path: '/add/random', component: AddRandom },
  { path: '/add/bomdia', component: AddBomdia },

  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})

export default router