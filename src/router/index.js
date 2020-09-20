import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/HomePage'
import Meetlist from '@/components/meeting/Meetlist'
import Meetdetail from '@/components/meeting/Meetdetail'

Vue.use(Router)

const router = new Router({
    base: '/meeting/',
    //mode: 'hash',
    routes: [
        { path: '/', name: 'homepage', component: Homepage,
          children: [
              { path: '/', component: Meetlist },
              { path: '/meet/list', component: Meetlist },
              { path: '/meet/detail/:id', component: Meetdetail, props: true }
          ]
     }
    ]
})
export default router