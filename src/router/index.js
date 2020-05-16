import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import VueAuthenticate from 'vue-authenticate'
import HamsterApi from "../api/HamsterApi";
import LocalStorage from "vue-localstorage";

Vue.use(LocalStorage);
Vue.use(VueRouter);
Vue.use(HamsterApi);

Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain
  tokenName: 'access_token',
  storageType: 'localStorage',

  providers: {
    discord: {
      name: 'discord',
      url: '/api/web/login',
      clientId: '588865748466794498',
      authorizationEndpoint: 'https://discordapp.com/api/oauth2/authorize',
      requiredUrlParams: ['scope', 'prompt'],
      prompt: ['none'],
      scope: ['identify', 'guilds'],
      scopeDelimiter: '&',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 500, height: 570 },
      redirectUri: 'http://localhost:8080'
    }
  }
})

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Главная",
        metaTags: [
          {
            name: "description",
            content: "Discord бот для модерации вашего сервера"
          },
          {
            property: "og:description",
            content: "Discord бот для модерации вашего сервера"
          }
        ]
      }
    },

    { path: "/404", component: NotFound },
     { path: "*", redirect: "/404" }
  ],
  mode: "history"
});
export default router;

// Navigation guard
// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith("/guilds")) {
//     if (Vue.localStorage && Vue.localStorage.get("vue-authenticate.vueauth_access_token")) {
//       return next();
//     }
//     return next("/404");
//   }
//   next();
// });
