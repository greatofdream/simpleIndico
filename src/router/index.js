import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '@/components/HomePage'
import Meetlist from '@/components/meeting/Meetlist'
import Meetdetail from '@/components/meeting/Meetdetail'
import Posterlist from '@/components/poster/Posterlist'
import Posterdetail from '@/components/poster/Posterdetail'

import AdminBase from '@/components/admin/base/base.vue'
import Thesislist from '@/components/admin/manage/thesis.vue'
Vue.use(Router)

const router = new Router({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/admin', name: 'admin-base', component: AdminBase, 
        children: [
            { path: 'thesis', name: 'hepThesis', component: Thesislist },
        ]    
    },
        { path: '/seminar', name: 'homepage', component: Homepage,
          children: [
              { path: '', component: Meetlist },
              { path: 'meet/list', component: Meetlist },
              { path: 'meet/detail/:id', component: Meetdetail, props: true },
              { path: 'conference/list', component: Posterlist },
              { path: 'conference/detail/:id', component: Posterdetail, props: true }
          ]
     }
    ]
})
export default router