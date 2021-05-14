<template>
  <div>
    <header class="the-total">
      <the-total-panel
        class="the-total__right"
        :list="totalList"
        :info="totalInfo"
      ></the-total-panel>
    </header>
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
        <el-button type="danger">新增</el-button>
        <el-button type="danger">付款截图</el-button>
      </section>
    </section>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column label="图片">
        <img src="../../assets/logo.png" width="80px" />
      </el-table-column>
      <el-table-column label="售价" prop="price"> </el-table-column>
      <el-table-column label="尺寸" prop="size"></el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="备注" prop="description"></el-table-column>
      <el-table-column label="物流公司" prop="company"></el-table-column>
      <el-table-column label="更新时间" prop="time"></el-table-column>
      <el-table-column label="操作" width="120px">
        <el-link type="primary">编辑</el-link>
      </el-table-column>
    </el-table>

    <footer class="the-footer">
      <el-pagination background layout="prev, pager, next" :total="35">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
// import TheDetailCard from "../../components/the-detail";
import TheTotalPanel from "../../components/the-info";
import { reactive } from "vue";

export default {
  components: {
    // TheDetailCard,
    TheTotalPanel,
  },
  setup() {
    const imgSrc = require("../../assets/logo.png");

    const totalList = reactive([
      {
        label: "下单",
        key: "key1",
      },
      {
        label: "备货",
        key: "key2",
      },
      {
        label: "待发货",
        key: "key3",
      },
      {
        label: "已发货",
        key: "key4",
      },
      {
        label: "待发单号",
        key: "key5",
      },
      {
        label: "已签收",
        key: "key6",
      },
      {
        label: "运输中",
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
        label: "换货",
        key: "key1",
      },
      {
        label: "取消",
        key: "key2",
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
      imgSrc,
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
