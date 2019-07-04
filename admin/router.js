import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter);

import blog from "./components/blog";
import works from "./components/works";
import form from "./components/form";
import about from "./components/about";


const routes = [
  {
    path: 'https://ritamitina0.github.io/portfolio1/admin/about',
    component: about
  },
  {
    path: '/https://ritamitina0.github.io/portfolio1/admin/works',
    component: works
  },
  {
    path: 'https://ritamitina0.github.io/portfolio1/admin/blog',
    component: blog
  }
];

export default new VueRouter({routes, mode:'history'});