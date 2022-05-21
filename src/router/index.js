import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/HomePage'
import Meetlist from '@/components/meeting/Meetlist'
import Meetdetail from '@/components/meeting/Meetdetail'
import Posterlist from '@/components/poster/Posterlist'
import Posterdetail from '@/components/poster/Posterdetail'

Vue.use(Router)

const router = new Router({
    base: '/seminar/',
    //mode: 'hash',
    routes: [
        { path: '/', name: 'homepage', component: Homepage,
          children: [
              { path: '/', component: Meetlist },
              { path: '/meet/list', component: Meetlist },
              { path: '/meet/detail/:id', component: Meetdetail, props: true },
              { path: '/conference/list', component: Posterlist },
              { path: '/conference/detail/:id', component: Posterdetail, props: true }
          ]
     }
    ]
})
export default router