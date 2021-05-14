<template>
  <section>
    <div class="the-info">
      <span class="the-info__item"></span>
      <span class="the-info__item">订单</span>
      <span class="the-info__item">工资</span>
    </div>
    <div class="the-info">
      <span class="the-info__item">员工1</span>
      <span class="the-info__item">50</span>
      <span class="the-info__item">￥5000</span>
    </div>
    <div class="the-scroll">
      <div class="the-info" v-for="user in test" :key="user">
        <span class="the-info__item">员工{{ user }}</span>
        <span class="the-info__item">{{ user + 30 }}</span>
        <span class="the-info__item">￥5000</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.the-info {
  display: flex;
  width: 330px;

  &__item {
    flex: 1;
    height: 32px;
    line-height: 32px;
  }
}

.the-scroll {
  height: 64px;
  overflow: hidden;
}
</style>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const test = reactive([1, 2, 3, 4, 5, 6, 7]);

    return {
      test,
    };
  },
  created() {
    this.timer = setInterval(() => {
      const targ = this.test.shift();
      this.test.push(targ);
    }, 1000);
  },
};
</script>
