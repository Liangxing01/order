import { createRouter, createWebHistory } from "vue-router";
import SupManage from "../views/superUser/the-manage";
import SupList from "../views/superUser/the-list";
import SupDetail from "../views/superUser/the-detail";
import SupTotal from "../views/superUser/the-total";

import InHome from "../views/inUser/the-home";
import InDetail from "../views/inUser/the-detail";

import MoneyHome from "../views/moneyUser/the-home";
import MoneyDetail from "../views/moneyUser/the-detail";

import WarehouseIn from "../views/warehouse/the-in";
import WarehouseDetail from "../views/warehouse/the-detail";
import WarehouseSend from "../views/warehouse/the-send";

import OrderDetail from "../views/the-detail";

const routes = [
  {
    path: "/sup-manage",
    name: "manage",
    component: SupManage,
  },
  {
    path: "/sup-list",
    name: "SupList",
    component: SupList,
  },
  {
    path: "/sup-detail",
    name: "SupDetail",
    component: SupDetail,
  },
  {
    path: "/sup-total",
    name: "SupTotal",
    component: SupTotal,
  },

  {
    path: "/in-home",
    name: "InHome",
    component: InHome,
  },
  {
    path: "/in-detail",
    name: "InDetail",
    component: InDetail,
  },

  {
    path: "/money-home",
    name: "MoneyHome",
    component: MoneyHome,
  },
  {
    path: "/money-detail",
    name: "MoneyDetail",
    component: MoneyDetail,
  },

  {
    path: "/warehouse-in",
    name: "WarehouseIn",
    component: WarehouseIn,
  },
  {
    path: "/warehouse-detail",
    name: "WarehouseDetail",
    component: WarehouseDetail,
  },
  {
    path: "/warehouse-send",
    name: "WarehouseSend",
    component: WarehouseSend,
  },
  {
    path: "/order-detail",
    name: "orderDetail",
    components: OrderDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
