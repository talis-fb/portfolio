<script>
import ColorGithub from '~/assets/LanguagesColorsGithub.json'

export default {
  name: 'ProjectContainer',
  props: [
    'img',
    'title',
    'description',
    'tools',
    'sourceCode',
    'site',
    'projectName',
  ],
  data: () => ({
    ColorGithub,
    languages: {},
  }),
  fetchOnServer: true,
  async fetch() {
    console.log(this.sourceCode.slice())
    this.languages = await this.$http.$get(
      `https://api.github.com/repos/talis-fb/${this.projectName}/languages`
    )
  },
  computed: {
    languagesColorBar: function () {
      const totalBytesLangs = Object.values(this.languages).reduce(
        (a, b) => a + b,
        0
      )

      const l = []
      for (var [key, value] of Object.entries(this.languages)) {
        l.push({
          lang: key,
          percent: Math.round((value / totalBytesLangs) * 100),
        })
      }
      return l

      // ----------------------
      //
      // if (Object.values(this.languages) <= 0) return ''
      // if (Object.values(this.languages) == 1)
      // return `${ColorGithub[Object.keys(this.languages)[0]].color} 0% 100%`
      //
      // //       const totalBytesLangs = Object.values(this.languages).reduce(
      // //         (a, b) => a + b,
      // //         0
      // //       )
      //
      // let text = []
      //
      // let before = 0
      // for (var [key, value] of Object.entries(this.languages)) {
      // const firstN = before
      // const secondN = before + Math.round((value / totalBytesLangs) * 100)
      //
      // const colorOfValue = ColorGithub[key].color
      //
      // text.push(
      // `${colorOfValue} ${firstN ? firstN + '%' : ''} ${
      // secondN ? secondN + '%' : ''
      // }`
      // )
      //
      // before = Number(secondN)
      // }
      // console.log(String(text))
      //
      // return String(text)
    },
  },
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
      <v-card id="project-card" class="mx-auto" max-width="344" color="primary">
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

        <!-- Bar with percent of language -->
        <div
          :style="{
            width: '100%',
            height: '5px',
            position: 'absolute',
            bottom: 0,
            left: 0,
            display: 'flex',
            overflow: 'hidden',
          }"
        >
          <div
            v-for="(el, i) in languagesColorBar"
            :key="i"
            :style="{
              height: '100%',
              width: `${el.percent}%`,
              backgroundColor: `${ColorGithub[el.lang].color}`,
            }"
          ></div>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<style>
a {
  text-decoration: none;
}
</style>
