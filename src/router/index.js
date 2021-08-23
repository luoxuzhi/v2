import Vue from 'vue'
import Router from 'vue-router'
const Notify = () => import('@/components/notify/notify')
const Layout = () => import('@/components/layout/layout')
const Home = () => import('@/components/home/home')
const Renderless = () => import('@/components/renderless/renderless')
const Vslot = () => import('@/components/v-slot/')
const Directives = () => import('@/components/directives/')
const Table = () => import('@/components/table/')
const Table1 = () => import('@/components/table1/')
const Render = () => import('@/components/render/render')
const More = () => import('@/components/more/more')
const WatchTwo = () => import('@/components/watch-two/watch-two')
const WatchOne = () => import('@/components/watch-one/watch-one')
const Ruleone = () => import('@/components/ruleone/ruleone')
const Ruletwo = () => import('@/components/ruletwo/ruletwo')
const Two = () => import('@/components/two/two')
const Three = () => import('@/components/three/three')
const Optionthreetwo = () => import('@/components/optionthreetwo/optionthreetwo')
const Optionthreeone = () => import('@/components/optionthreeone/optionthreeone')
const Second = () => import('@/components/second/second')
const Upload = () => import('@/components/upload/upload')
const ArrForm = () => import('@/components/arrform')
const Mysql = () => import('@/components/mysql')
const Wss = () => import('@/components/wss')
const Watch = () => import('@/components/watch/watch')

Vue.use(Router)

export default new Router({
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
