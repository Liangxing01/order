<template>
  <el-card>
    <the-order-detail :info="card" :list="cardInfo"></the-order-detail>
  </el-card>
</template>

<script>
import { reactive } from "vue";
import TheOrderDetail from "../../components/the-detail";

export default {
  components: {
    TheOrderDetail,
  },
  setup() {
    const cardInfo = reactive([
      {
        label: "尺寸",
        key: "size",
      },
      {
        label: "售价",
        key: "price",
      },
      {
        label: "状态",
        key: "status",
      },
      {
        label: "备注",
        key: "description",
      },
      {
        label: "售价",
        key: "price",
      },
      {
        label: "状态",
        key: "status",
      },
      {
        label: "备注",
        key: "description",
      },
    ]);

    const card = reactive({
      src: require("../../assets/logo.png"),
      size: "欧洲42码",
      status: "已发货",
      description: "备注信息",
      price: "$12",
    });

    return {
      cardInfo,
      card,
    };
  },
};
</script>
