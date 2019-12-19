import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Hirdavat from "../components/Hirdavat";
import Hirdavat2 from "../components/Hirdavat2";
import Hakkimizda from "../components/Hakkimizda";
import Iletisim from "../components/Iletisim";
import Kargo from "../components/Kargo";
import KargoTakibi from "../components/KargoTakibi";
import Iptal from "../components/Iptal";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hirdavat',
      name: 'Hirdavat',
      component: Hirdavat
    },

    {
      path: '/hakkimizda',
      name: 'Hakkimizda',
      component: Hakkimizda
    },

    {
      path: '/hirdavat2',
      name: 'Hirdavat2',
      component: Hirdavat2
    },

    {
      path: '/iletisim',
      name: 'İletişim',
      component: Iletisim
    },

    {
      path: '/kargo',
      name: 'Kargo',
      component: Kargo
    },

    {
      path: '/Kargotakibi',
      name: 'Kargo Takibi',
      component: KargoTakibi
    },

    {
      path: '/iptal',
      name: 'İptal',
      component: Iptal,
    },
  ]


})

