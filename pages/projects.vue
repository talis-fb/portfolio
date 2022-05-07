<template>
  <v-container>
    <v-row>
      <v-col :key="i" v-for="(el, i) in projectypescript" class="text-center">
        <ProjectContainer
          :img="el.img"
          :title="el.title"
          :description="el.description"
          :tools="el.tools"
          :sourceCode="el.sourceCode"
          :site="el.site"
        ></ProjectContainer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Projectypescript',
  data: function () {
    return {
      projectypescript: [
        {
          title: 'Este portfolio',
          description: 'Esse mesmo',
          tools: ['nuxtjs', 'vuejs', 'vuetify'],
          img: 'racoon.jpg',
          sourceCode: 'https://github.com/talis-fb/portfolio'
        },
        {
          title: 'Pokedex Vue',
          description: 'Um chat bonitao',
          tools: ['typescript', 'vuejs', 'sass'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',

          sourceCode: 'https://github.com/talis-fb/pokedex-vue'

        },
        {
          title: 'Pokedex React',
          description: 'Um chat bonitao',
          tools: ['javascript', 'react'],
          img: 'https://github.com/talis-fb/pokedex/raw/master/screenshot.png',
          sourceCode: 'https://github.com/talis-fb/pokedex'
        },
        {
          title: 'Telegram bot',
          description: 'Um chat bonitao',
          tools: ['typescript', 'heroku'],
          img: 'https://wersm.com/wp-content/uploads/2016/11/wersm-telegram-telegraph.jpg',
          sourceCode: 'https://github.com/talis-fb/telegram_bot'
        },
        {
          title: 'SnakeGame With One Array',
          description:
            'Jogo da Cobrinha clássico, em JavaScript e HTML, onde todo o campo, cenário, comida e a cobra são unicamente uma Array.',
          tools: ['javascript', 'html5'],
          img: 'snake_game_print.png',
          sourceCode: 'https://github.com/talis-fb/SnakeGameWithOneArray',
          site: 'https://talis-fb.github.io/SnakeGameWithOneArray/'
        },
        {
          title: 'notion-clone',
          description: 'Um chat bonitao',
          tools: ['javascript', 'react', 'redux', 'vite', 'emotion'],
          img: 'notion_clone_print.png',
          sourceCode: 'https://github.com/talis-fb/notion-clone',
        },
        {
          title: 'Ocma',
          description: 'Um chat bonitao',
          tools: ['c'],
          img: 'https://github.com/talis-fb/ocma/raw/main/screen.png',

          sourceCode: 'https://github.com/talis-fb/ocma'
        },
        {
          title: 'Chat',
          description: 'Um chat bonitao',
          tools: ['javascript', 'react', 'sass', 'nodejs', 'socketio','mongodb'],
          img: 'https://github.com/talis-fb/Chat/raw/main/screenshot1.png',
          sourceCode: 'https://github.com/talis-fb/Chat'
        },
        {
          title: 'SQLClient',
          description: 'A very simple, easy, fast and minilmalist client SQLite for beginner practice the language SQL',
          tools: ['sqlite', 'javascript', 'html5', 'css3'],
          img: 'https://github.com/talis-fb/SQLClient/raw/master/screenshot.png',
          sourceCode: 'https://github.com/talis-fb/SQLClient'
        },
        {
          title: 'Calculadora Com React',
          description: 'Um modelo de calculadora construído em ReactJS inspirado na Calculadora Nativa do Android.',
          tools: ['javascript', 'react', 'css'],
          img: 'https://github.com/talis-fb/CalculadoraSimplesComReact/raw/master/screenshot.png',
          sourceCode: 'https://github.com/talis-fb/CalculadoraSimplesComReact'
        },
        {
          title: 'PlayerVideoWeb',
          description: 'Um modelo de player de vídeos para web feito em js',
          tools: ['javascript', 'html5', 'css3'],
          img: 'player_video_print.png',
          sourceCode: 'https://github.com/talis-fb/PlayerVideoWeb'
        },
        {
          title: 'BluExodia',
          description: 'Um chat bonitao',
          tools: ['cplusplus', 'arduino'],
          img: 'bluexodia_print.jpg',
          sourceCode: 'https://github.com/talis-fb/BluExodia'
        },
      ],
    }
  },
}
</script>
