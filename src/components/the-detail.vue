<template>
  <section class="the-detail">
    <img :src="info.src" class="the-detail__img" />
    <ul class="the-detail__list">
      <li class="the-detail__item" v-for="item in list" :key="item.key">
        {{ item.label }}: {{ info[item.key] }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.the-detail {
  font-size: 14px;
  letter-spacing: 1px;
  color: #999;
  display: flex;
  line-height: 26px;

  &__img {
    width: 120px;
    height: 120px;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>
