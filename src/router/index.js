import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import All from "@/components/all";
import Done from "@/components/done";
import Willdo from "@/components/willdo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: { name: "All" }
    },
    {
      path: "/all",
      name: "All",
      component: All
    },
    {
      path: "/done",
      name: "Done",
      component: Done
    },
    {
      path: "/willdo",
      name: "Willdo",
      component: Willdo
    }
  ]
  // linkActiveClass: 'active'
});
