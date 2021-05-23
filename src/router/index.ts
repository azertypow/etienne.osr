import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/02',
    name: '02',
    component: () => import(/* webpackChunkName: "about" */ '../views/02.vue')
  },
  {
    path: '/A03',
    name: 'A03',
    component: () => import(/* webpackChunkName: "about" */ '../views/A03.vue')
  },
  {
    path: '/A04',
    name: 'A04',
    component: () => import(/* webpackChunkName: "about" */ '../views/A04.vue')
  },
  {
    path: '/A05',
    name: 'A05',
    component: () => import(/* webpackChunkName: "about" */ '../views/A05.vue')
  },
  {
    path: '/A06',
    name: 'A06',
    component: () => import(/* webpackChunkName: "about" */ '../views/A06.vue')
  },
  {
    path: '/A07',
    name: 'A07',
    component: () => import(/* webpackChunkName: "about" */ '../views/A07.vue')
  },

  //
  // memeber
  //
  {
    path: '/B03',
    name: 'B03',
    component: () => import(/* webpackChunkName: "about" */ '../views/B03.vue')
  },
  {
    path: '/B04',
    name: 'B04',
    component: () => import(/* webpackChunkName: "about" */ '../views/B04.vue')
  },
  {
    path: '/B05',
    name: 'B05',
    component: () => import(/* webpackChunkName: "about" */ '../views/B05.vue')
  },


  //
  // scenario page
  //
  {
    path: '/S01',
    name: 'S01',
    component: () => import(/* webpackChunkName: "about" */ '../views/S01.vue')
  },
  {
    path: '/S02',
    name: 'S02',
    component: () => import(/* webpackChunkName: "about" */ '../views/S02.vue')
  },
  {
    path: '/S03',
    name: 'S03',
    component: () => import(/* webpackChunkName: "about" */ '../views/S03.vue')
  },
  {
    path: '/S04',
    name: 'S04',
    component: () => import(/* webpackChunkName: "about" */ '../views/S04.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  if(to.name === "A07") {

    const randomScenarioView = [
      "S01",
      "S02",
      "S03",
      "S04",
    ]

    const randomItem = getRandomInt(0, randomScenarioView.length)

    window.setTimeout( () => {
      router.push({name: randomScenarioView[ randomItem ]})
    }, 3000 )
  }

  next()
})

export default router


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
