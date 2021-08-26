import Vue from 'vue'
import Router from 'vue-router'
const Notify = () => import(/* webpackPrefetch: true */ '@/components/notify/notify')
const Layout = () => import(/* webpackPrefetch: true */ '@/components/layout/layout')
const Home = () => import(/* webpackPrefetch: true */ '@/components/home/home')
const Renderless = () => import(/* webpackPrefetch: true */ '@/components/renderless/renderless')
const Vslot = () => import(/* webpackPrefetch: true */ '@/components/v-slot/')
const Directives = () => import(/* webpackPrefetch: true */ '@/components/directives/')
const Table = () => import(/* webpackPrefetch: true */ '@/components/table/')
const Table1 = () => import(/* webpackPrefetch: true */ '@/components/table1/')
const Render = () => import(/* webpackPrefetch: true */ '@/components/render/render')
const More = () => import(/* webpackPrefetch: true */ '@/components/more/more')
const WatchTwo = () => import(/* webpackPrefetch: true */ '@/components/watch-two/watch-two')
const WatchOne = () => import(/* webpackPrefetch: true */ '@/components/watch-one/watch-one')
const Ruleone = () => import(/* webpackPrefetch: true */ '@/components/ruleone/ruleone')
const Ruletwo = () => import(/* webpackPrefetch: true */ '@/components/ruletwo/ruletwo')
const Two = () => import(/* webpackPrefetch: true */ '@/components/two/two')
const Three = () => import(/* webpackPrefetch: true */ '@/components/three/three')
const Optionthreetwo = () => import(/* webpackPrefetch: true */ '@/components/optionthreetwo/optionthreetwo')
const Optionthreeone = () => import(/* webpackPrefetch: true */ '@/components/optionthreeone/optionthreeone')
const Second = () => import(/* webpackPrefetch: true */ '@/components/second/second')
const Upload = () => import(/* webpackPrefetch: true */ '@/components/upload/upload')
const ArrForm = () => import(/* webpackPrefetch: true */ '@/components/arrform')
const Mysql = () => import(/* webpackPrefetch: true */ '@/components/mysql')
const Wss = () => import(/* webpackPrefetch: true */ '@/components/wss')
const Watch = () => import(/* webpackPrefetch: true */ '@/components/watch/watch')

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
