<template>
  <div id="app">

    <main class="d-flex justify-content-center align-items-center main-content-block" id="content">
      <RouterView :key="$route.path"/>
    </main>

  </div>
</template>

<script>
export default {
  created() {
    document.body.style.backgroundColor = "#7D8491";
  },
};
</script>

<style lang="scss" scoped>
@import "./utils/main.scss";
</style>
