<template>
  <v-app :style="{ background: AppColors.background, borderBottom: AppColors.primary }" id="app">
    <div id="tab" class="d-flex justify-center align-center mb-3">
      <v-tabs background-color="background accent-4" cl id="tabs" centered>
        <v-tab id="tab" class="p-5" nuxt to="/">Sobre mim</v-tab>
        <v-tab id="tab" class="p-5" nuxt to="/projects">Projetos</v-tab>
      </v-tabs>
      <!-- <v-switch class="" outlined v-model="$vuetify.theme.dark" ></v-switch> -->
    </div>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    AppColors(){
      return this.$vuetify.theme.themes.light;
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  // background-color: #CB997E;

  // #tabs  {
    // background-color: #EDEDED;
  // }
}
</style>
