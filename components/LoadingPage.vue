<template>
  <div v-if="loading" class="loading-page">
    <p>Carregamento meu caro... </p>

  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      console.log('RODOU')
      console.log(this.loading)
      this.loading = true
    },
    finish() {
      console.log('FECHOU')
      this.loading = false
      console.log(this.loading)
    }
  }
}
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
