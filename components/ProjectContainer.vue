<script>
export default {
  name: 'ProjectContainer',
  props: ['img', 'title', 'description', 'tools'],
}
</script>

<template>
  <v-card id="project-card" class="mx-auto" max-width="344" color="secondary">
    <v-img :src="img" height="200px">
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-divider></v-divider>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text align="left">
      {{ description }}
    </v-card-text>

    <v-divider class="my-1"></v-divider>

    <v-card-actions>
      <div class="d-flex m-5">
        <v-icon
          v-for="(el, i) in tools"
          :key="i"
          :class="`devicon-${el}-plain`"
        >
        </v-icon>
      </div>
    </v-card-actions>
  </v-card>
</template>
