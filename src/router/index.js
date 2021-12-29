// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  // beforeRouteEnter: (to, from, next) => {
  //   // ...
  //   console.log("abc: ",to.path);
  //   // if(1){
  //   //   console.log("999");
  //   //   next({name: "TextEditor"});
  //   // }else {
  //   //   next()
  //   // }
  // },
  routes: [
    layout('Default', [
      route('Event', 'components/event'),

      // Pages
      route('UserProfile', null, 'components/profile'),

      // Components
      route('Notifications', null, 'components/notifications'),
      route('NotificationsV2', null, 'components/notificationsV2'),

      route('TextEditor', null, 'components/texteditor'),
      route('Icons', null, 'components/icons'),
      route('Typography', null, 'components/typography'),
      route('Event', null, 'components/event'),

      // Tables
      route('Regular Tables', null, 'tables/regular'),

      // Maps
      route('Google Maps', null, 'component/user'),
    ]),
  ],
})

router.beforeEach((to, from, next) => {
  console.log("to.path: ", to.path);
  if(to.path == "/components/event/"){
    // return next({name: 'TextEditor'});
  }
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

// router.beforeEach((to, from, next) => {
//   // ...
//   // console.log("to",to);
//   // console.log("from",from);
//   // console.log("next",next);
//   // co quyen
//   console.log("abc: ",to.path);
//   if(1){
//     console.log("999");
//     next({name: "TextEditor"});
//   }else {
//     next()
//   }
//   //ko quyen
// })

export default router
