<template>
  <div id="about" class="d-flex justify-center align-center">
    <v-container>
      <v-row no-gutters>
        <v-col align="center" justify="center">
          <v-img
            class="rounded-lg"
            width="500px"
            height="500px"
            src="racoon.jpg"
          >
          </v-img>
        </v-col>
        <v-col>
          <blockquote class="blockquote">
            Um caba que gosta de programar
            <div class="options">
              <v-btn color="primary" nuxt to="/projects">Projects</v-btn>
            </div>
          </blockquote></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
#about {
  height: 100%;
  width: 100%;
}
</style>
