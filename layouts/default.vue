<template>
  <v-app dark>
    <v-tabs
      color="blue"
      transparent
      centered
      >
      <v-tab class="p-5" nuxt to="/">Sobre mim</v-tab>
      <v-tab class="p-5" nuxt to="/projects">Projetos</v-tab>
    </v-tabs>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
