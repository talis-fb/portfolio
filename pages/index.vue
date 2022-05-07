<template>
  <div id="about" class="d-flex justify-center align-center">
    <v-row>
      <v-img max-width="500px" min-width="50%" src="racoon.jpg"></v-img>
      <blockquote class="blockquote">
        Um caba que gosta de programar
        <div class="options">
          <v-btn color="primary" nuxt to="/projects">Projects</v-btn>
        </div>
      </blockquote>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'About',
  // mounted() {
  // this.$nextTick(() => {
  // this.$nuxt.$loading.start()
  // setTimeout(() => this.$nuxt.$loading.finish(), 3000)
  // })
  // }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
