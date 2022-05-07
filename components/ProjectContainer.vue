<script>
export default {
  name: 'ProjectContainer',
  props: ['img', 'title', 'description', 'tools', 'sourceCode', 'site'],
  methods: {
    firstLetterUpperCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
}
</script>

<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        id="project-card"
        class="mx-auto"
        max-width="344"
        color="primary"
      >
        <v-img :src="img" height="200px">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>

          <v-fade-transition v-if="sourceCode">
            <v-overlay v-if="hover" absolute color="#036358">
              <a v-if="site" :href="site" target="_blank">
                <v-btn><v-icon>mdi-open-in-new</v-icon>Acessar o projeto</v-btn>
              </a>

              <a v-if="sourceCode" :href="sourceCode" target="_blank">
                <v-btn><v-icon>mdi-github</v-icon>Código fonte</v-btn>
              </a>
            </v-overlay>
          </v-fade-transition>
        </v-img>

        <v-divider></v-divider>

        <v-card-title>{{ title }}</v-card-title>

        <v-card-text align="left">
          {{ description }}
        </v-card-text>

        <v-divider class="my-1"></v-divider>

        <v-card-actions>
          <div class="d-flex m-5">
            <v-tooltip top v-for="(el, i) in tools" :key="i">
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  :class="`devicon-${el}-plain`"
                ></v-icon>
              </template>
              <span>{{ firstLetterUpperCase(el) }}</span>
            </v-tooltip>
          </div>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<style>
a {
  text-decoration: none;
}
</style>
