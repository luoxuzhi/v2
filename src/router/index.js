import Vue from 'vue'
import Router from 'vue-router'
import Notify from '@/components/notify/notify'
import Layout from '@/components/layout/layout'
// import Watch from '@/components/watch/watch'
import Home from '@/components/home/home'
import Renderless from '@/components/renderless/renderless'
import Vslot from '@/components/v-slot/'
import Directives from '@/components/directives/'
import Table from '@/components/table/'
import Table1 from '@/components/table1/'
import Render from '@/components/render/render'
import More from '@/components/more/more'
import WatchTwo from '@/components/watch-two/watch-two'
import WatchOne from '@/components/watch-one/watch-one'
import Ruleone from '@/components/ruleone/ruleone'
import Ruletwo from '@/components/ruletwo/ruletwo'
import Two from '@/components/two/two'
import Three from '@/components/three/three'
import Optionthreetwo from '@/components/optionthreetwo/optionthreetwo'
import Optionthreeone from '@/components/optionthreeone/optionthreeone'
import Second from '@/components/second/second'
import Upload from '@/components/upload/upload'
import ArrForm from '@/components/arrform'
import Mysql from '@/components/mysql'
import Wss from '@/components/wss'
const Watch = () => import('@/components/watch/watch')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue2',
  routes: [
    {
      path: '/',
      redirect: '/notify',
    },
    {
      path: '/notify',
      name: 'notify',
      component: Notify,
    },
    {
      path: '/layout',
      component: Layout,
    },
    {
      path: '/watch',
      component: {
        render(h) {
          return h('router-view')
        },
      },
      children: [
        { path: '', component: Watch },
        { path: 'one', component: WatchOne },
        { path: 'two', component: WatchTwo },
      ],
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/renderless',
      component: Renderless,
    },
    {
      path: '/render',
      component: Render,
    },
    {
      path: '/more',
      component: More,
    },
    {
      path: '/two',
      component: Two,
    },
    {
      path: '/three',
      component: Three,
    },
    // {
    //   path:'/one/ruleone',
    //   component:Ruleone
    // },
    // {
    //   path:'/one/ruletwo',
    //   component:Ruletwo
    // }
    {
      path: '/one',
      component: {
        template: ` 
          <keep-alive>
            <router-view />
          </keep-alive>
        `,
        // template:`<router-view />`,
        name: 'One',
      },
      redirect: '/one/optionone',
      children: [
        {
          path: 'optionone',
          component: Ruleone,
        },
        {
          path: 'optiontwo',
          component: Ruletwo,
        },
        {
          path: 'optionthree',
          redirect: '/one/optionthree/one',
          component: {
            template: ` 
              <keep-alive>
                <router-view />
              </keep-alive>
            `,
            // template:'<router-view />',
            name: 'Three',
          },
          children: [
            {
              path: 'optionthreeone',
              component: Optionthreeone,
            },
            {
              path: 'optionthreetwo',
              component: Optionthreetwo,
            },
          ],
        },
      ],
    },
    {
      path: '/second',
      component: Second,
    },
    {
      path: '/upload',
      component: Upload,
    },
    {
      path: '/vslot',
      component: Vslot,
    },
    {
      path: '/directives',
      component: Directives,
    },
    {
      path: '/table',
      component: Table,
    },
    {
      path: '/table1',
      component: Table1,
    },
    {
      path: '/arrform',
      component: ArrForm,
    },
    {
      path: '/mysql',
      component: Mysql,
    },
    {
      path: '/wss',
      component: Wss,
    },
  ],
})
