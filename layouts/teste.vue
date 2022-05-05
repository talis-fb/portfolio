<template>
  <v-app dark>
    <v-main>
      <v-container id="a">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'seial-chart-bubble',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'seiala-chart-bubble',
          title: 'Projects',
          to: '/projects',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style>
#a{
  background-color: red;
}
</style>
