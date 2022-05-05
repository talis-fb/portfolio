<script>
export default {
  name: 'ProjectContainer',
  props: [  'img', 'title', 'description', 'tools'],
  data: function(){
    return {
      logoTools: {
        js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        ts: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        nuxt: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
        vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg',
        c: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg',
        cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg',
        redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        arduino: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg',
        sass: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      }
    }
  }
}
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="344"
    >
    <v-img :src="img" height="200px" ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text align="left">
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-img
        v-for="(el, i) in tools"
        :key="i"
        :src="logoTools[el]"
        class="elevation-6"
        max-width="25px"
        ></v-img>
    </v-card-actions>
  </v-card>
</template>

