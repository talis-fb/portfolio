<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        Um caba que gosta de programar
        <div class="options">
          <v-btn color="blue" nuxt to="/projects">Projects</v-btn>
        </div>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'About',
}
</script>
