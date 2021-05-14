<template>
  <the-header></the-header>
  <main class="the-main">
    <the-nav class="the-main__left"></the-nav>
    <section class="the-main__right">
      <main class="the-main__content">
        <router-view />
      </main>
    </section>
  </main>
</template>

<script>
import TheHeader from "@/components/layout/the-header";
import TheNav from "@/components/layout/the-nav";

export default {
  components: {
    TheNav,
    TheHeader,
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
}

.the-main {
  display: flex;
  flex: 1;

  &__left {
    width: 320px;
    height: 100%;
  }

  &__right {
    padding: 20px;
    background: #f1f1f1;
    border-radius: 4px;
    flex: 1;
  }

  &__content {
    background: #fff;
    min-height: 100%;
    padding: 20px;
  }
}
</style>
