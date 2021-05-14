<template>
  <ul class="the-total">
    <li class="the-total__item" v-for="item in list" :key="item.key">
      <span class="the-total__title">{{ item.label }}</span>
      <p class="the-total__num">{{ info[item.key] }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.the-total {
  overflow: hidden;
  text-align: center;

  &__item {
    float: left;
    display: inline-block;
    width: 23%;
    min-width: 120px;
    margin: 10px 0;
    margin-right: 2%;
    border: 1px solid #ececec;
    border-radius: 8px;
    padding: 15px 0;
    box-shadow: 2px 2px 2px #aaa;
    cursor: pointer;
    text-align: center;
  }

  &__title {
    font-size: 20px;
    line-height: 28px;
  }

  &__num {
    font-size: 42px;
    line-height: 50px;
    margin-top: 12px;
    color: #e4393c;
  }
}
</style>
