<template>
  <div id="about" class="d-flex justify-center align-center">
    <v-container>
      <v-row no-gutters>
        <v-col align="center" justify="center">
          <v-img class="rounded-lg" max-width="500px" src="racoon.jpg">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>

        <v-col class="d-flex flex-column" id="content" :style="{ color: this.$vuetify.theme.themes.light.info }">
          <!-- Corpo do Texto -->
          <h1>Bem vindo! 😄</h1>
          <h2>Me chamo <b>Talison</b></h2>

          <div class="text-body-1">
            Atualmente sou estudante no 3° semetre do curso de BTI na UFRN e
            desenvolvedor por paixão.
            <br />
            Se quiser conferir alguns dos meus projetos abertos é só clicar no
            botão abaixo...
          </div>

          <div class="options my-2 align-self-center">
            <v-btn color="primary" nuxt to="/projects">
              <v-icon>mdi-xml</v-icon> Projetos</v-btn
            >
          </div>

          <!-- <div class="options my-2 align-self-center"> -->
          <!--   <a href="https://drive.google.com/file/d/1idihaz5LW6-gF4xNek9zUVWKE7_5d0TZ/view?usp=sharing" target="_blank"> -->
          <!--     <v-btn color="primary"> <v-icon>mdi-open-in-new</v-icon> Curriculo</v-btn> -->
          <!--   </a> -->
          <!-- </div> -->

          <v-divider class="my-5"></v-divider>

          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header color="primary">
                🎓 Educação...
              </v-expansion-panel-header>
              <v-expansion-panel-content color="secondary">
                <v-timeline align-top dense>
                  <v-timeline-item>
                    <v-row class="pt-1">
                      <v-col cols="3"> 2021-<strong>Atualmente</strong> </v-col>
                      <v-col>
                        Bacharelado em <b>Tecnologia da Informação</b>
                        <div class="text-body-2">
                          Universidade Federal do Rio Grande do Norte
                          (<b>UFRN</b>)
                          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="98.005" height="27.821" viewBox="0 0 98.005 27.821"><defs><style>.logoUfrnSvga{fill:#FFFFFF;}.logoUfrnSvgb{fill:#FFFFFF;}</style></defs><g transform="translate(-486.316 196.719)"><path class="logoUfrnSvga" d="M513.659-196.719l-.2,1.906h19.9l.2-1.906Z"></path><path class="logoUfrnSvgb" d="M512.119-182.117q-.552,5.256-3.586,7.97t-10.214,2.714q-7.284,0-9.881-2.577t-2.016-8.107l1.34-12.746h7.317l-1.339,12.746a6.4,6.4,0,0,0,.955,4.638,4.424,4.424,0,0,0,3.774,1.683,6.2,6.2,0,0,0,4.2-1.563,7,7,0,0,0,2.132-4.758l1.339-12.746h7.318Z"></path><path class="logoUfrnSvgb" d="M554.9-171.983h-7.832l.143-6.6a3.1,3.1,0,0,0-.473-1.219,3.064,3.064,0,0,0-1.117-.98q-1.1,0-3.668-.068t-2.741-.069l-.939,8.932h-7.318l2.405-22.88h15.15a10.234,10.234,0,0,1,5.588,1.58,4.421,4.421,0,0,1,2.19,4.5,5.194,5.194,0,0,1-1.766,3.4,8.9,8.9,0,0,1-3.851,1.992l-.029.275a7.858,7.858,0,0,1,1.743.413,3.846,3.846,0,0,1,1.559.858,4.364,4.364,0,0,1,.838,2.818Zm-6.325-15.974a2,2,0,0,0-1-1.89,4.172,4.172,0,0,0-2.459-.79H540.23l-.586,5.565h4.947a4.751,4.751,0,0,0,2.708-.756A2.8,2.8,0,0,0,548.571-187.957Z"></path><path class="logoUfrnSvgb" d="M581.916-171.983h-9.928l-8.781-15.494-1.628,15.494h-6.837l2.4-22.88h10.409l8.336,15.15,1.593-15.15h6.836Z"></path><path class="logoUfrnSvga" d="M530.625-168.9l2.25-21.4H520.268l-.506,4.81h11.489l-.488,4.638H519.274l-.933,8.863h-7.3l-.113,1.074h0l-.211,2.011Z"></path></g></svg> -->
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item>
                    <v-row class="pt-1">
                      <v-col cols="3"> 2017-2021 </v-col>
                      <v-col>
                        Curso Técnico Integrado em <b>Eletrônica</b>
                        <div class="text-body-2">
                          Instituto Federal do Rio Grande do Norte (<b>IFRN</b>)
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header color="primary">
                👔 Experiência...
              </v-expansion-panel-header>
              <v-expansion-panel-content color="secondary">
                <v-timeline align-top dense>
                  <v-timeline-item>
                    <v-row class="pt-1">
                      <v-col cols="3"> 2021-<strong>Atualmente</strong> </v-col>
                      <v-col>
                        Bacharelado em <b>Tecnologia da Informação</b>
                        <div class="text-body-2">
                          Universidade Federal do Rio Grande do Norte
                          (<b>UFRN</b>)
                          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="98.005" height="27.821" viewBox="0 0 98.005 27.821"><defs><style>.logoUfrnSvga{fill:#FFFFFF;}.logoUfrnSvgb{fill:#FFFFFF;}</style></defs><g transform="translate(-486.316 196.719)"><path class="logoUfrnSvga" d="M513.659-196.719l-.2,1.906h19.9l.2-1.906Z"></path><path class="logoUfrnSvgb" d="M512.119-182.117q-.552,5.256-3.586,7.97t-10.214,2.714q-7.284,0-9.881-2.577t-2.016-8.107l1.34-12.746h7.317l-1.339,12.746a6.4,6.4,0,0,0,.955,4.638,4.424,4.424,0,0,0,3.774,1.683,6.2,6.2,0,0,0,4.2-1.563,7,7,0,0,0,2.132-4.758l1.339-12.746h7.318Z"></path><path class="logoUfrnSvgb" d="M554.9-171.983h-7.832l.143-6.6a3.1,3.1,0,0,0-.473-1.219,3.064,3.064,0,0,0-1.117-.98q-1.1,0-3.668-.068t-2.741-.069l-.939,8.932h-7.318l2.405-22.88h15.15a10.234,10.234,0,0,1,5.588,1.58,4.421,4.421,0,0,1,2.19,4.5,5.194,5.194,0,0,1-1.766,3.4,8.9,8.9,0,0,1-3.851,1.992l-.029.275a7.858,7.858,0,0,1,1.743.413,3.846,3.846,0,0,1,1.559.858,4.364,4.364,0,0,1,.838,2.818Zm-6.325-15.974a2,2,0,0,0-1-1.89,4.172,4.172,0,0,0-2.459-.79H540.23l-.586,5.565h4.947a4.751,4.751,0,0,0,2.708-.756A2.8,2.8,0,0,0,548.571-187.957Z"></path><path class="logoUfrnSvgb" d="M581.916-171.983h-9.928l-8.781-15.494-1.628,15.494h-6.837l2.4-22.88h10.409l8.336,15.15,1.593-15.15h6.836Z"></path><path class="logoUfrnSvga" d="M530.625-168.9l2.25-21.4H520.268l-.506,4.81h11.489l-.488,4.638H519.274l-.933,8.863h-7.3l-.113,1.074h0l-.211,2.011Z"></path></g></svg> -->
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item>
                    <v-row class="pt-1">
                      <v-col cols="3"> 2017-2021 </v-col>
                      <v-col>
                        Curso Técnico Integrado em <b>Eletrônica</b>
                        <div class="text-body-2">
                          Instituto Federal do Rio Grande do Norte (<b>IFRN</b>)
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-divider class="my-5"></v-divider>

          <v-spacer></v-spacer>

          <!-- Links para as redes sociais -->
          <div class="align-self-center">
            <a
              href="https://www.linkedin.com/in/talison-fabio/"
              target="_blank"
            >
              <v-btn fab color="success">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </a>
            <a href="https://github.com/talis-fb" target="_blank">
              <v-btn fab color="success">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    showEducation: false,
    showExperience: false,
  }),
}
</script>

<style lang="scss" scoped>
#about {
  height: 100%;
  width: 100%;
}
#header-tree {
  cursor: pointer;
}
#content {
  color: #ffffff;
}
</style>
