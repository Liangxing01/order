<template>
  <section>
    <div v-for="item in 4" :key="item">
      <section class="the-header">
        <section class="the-header__search">
          <el-form :model="search" inline>
            <el-form-item label="订单时间">
              <el-date-picker
                v-model="search.time"
                placeholder="请选择下单时间"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="search.keywards"
                placeholder="请搜索关键字"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                ><el-icon class="el-icon-search"></el-icon
              ></el-button>
            </el-form-item>
          </el-form>
        </section>
        <section class="the-header__btns">
          <el-button type="danger">新增订单</el-button>
          <el-button type="danger">新增客户</el-button>
        </section>
      </section>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template v-slot="props">
            <section class="the-card">
              <el-card
                class="the-card__item"
                v-for="card in props.row.children"
                :key="card.no"
              >
                <the-detail-card
                  :info="card"
                  :list="cardInfo"
                ></the-detail-card>
              </el-card>
            </section>
          </template>
        </el-table-column>
        <el-table-column label="订单编号" prop="no"> </el-table-column>
        <el-table-column label="下单时间" prop="time"> </el-table-column>
        <el-table-column label="操作" width="120px">
          <span class="the-link" @click="$router.push('/order-detail')"
            >订单详情</span
          >
        </el-table-column>
      </el-table>

      <footer class="the-footer">
        <el-pagination background layout="prev, pager, next" :total="35">
        </el-pagination>
      </footer>
    </div>
  </section>
</template>

<script>
import TheDetailCard from "../../components/the-detail";
// import ThePriceList from "../../components/the-price";
// import TheTotalPanel from "../../components/the-info";
import { reactive } from "vue";

export default {
  components: {
    TheDetailCard,
    // TheTotalPanel,
    // ThePriceList,
  },
  setup() {
    const totalList = reactive([
      {
        label: "备货",
        key: "key1",
      },
      {
        label: "待发货",
        key: "key2",
      },
      {
        label: "已发货",
        key: "key3",
      },
      {
        label: "待发单号",
        key: "key4",
      },
      {
        label: "运输中",
        key: "key5",
      },
      {
        label: "已签收",
        key: "key6",
      },
      {
        label: "异常",
        key: "key7",
      },
      {
        label: "订单",
        key: "key8",
      },
      {
        label: "备货",
        key: "key1",
      },
    ]);

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
    ]);

    const tableData = reactive([
      {
        no: "YS052151212",
        time: "2019-10-12 12:30:33",
        children: [
          {
            src: require("../../assets/logo.png"),
            size: "欧洲42码",
            status: "已发货",
            description: "备注信息",
            price: "$12",
          },
          {
            src: require("../../assets/logo.png"),
            size: "欧洲42码",
            status: "已发货",
            description: "备注信息",
            price: "$12",
          },
        ],
      },
      {
        no: "YS052151212",
        time: "2019-10-12 12:30:33",
        children: [
          {
            src: require("../../assets/logo.png"),
            size: "欧洲42码",
            status: "已发货",
            description: "备注信息",
            price: "$12",
          },
        ],
      },
    ]);

    const search = reactive({ time: "", keywards: "" });

    const totalInfo = reactive({
      key1: 10,
      key2: 30,
      key3: 104,
      key4: 110,
      key5: 310,
      key6: 110,
      key7: 140,
      key8: 8,
    });

    return {
      tableData,
      cardInfo,
      search,
      totalList,
      totalInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.the-total {
  display: flex;

  &__right {
    flex: 1;
  }
}

.the-card {
  display: flex;

  &__item {
    width: 320px;
    margin-right: 20px;
  }
}

.the-header {
  &__search {
    float: left;
    margin: 15px 0;
  }

  &__btns {
    float: right;
    margin-top: 15px;
  }
}

.the-footer {
  text-align: right;
  padding: 20px;
}
</style>
