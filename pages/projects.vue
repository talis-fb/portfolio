<template>
  <v-container>
    <v-row>
      <v-col :key="i" v-for="(el, i) in projects" class="text-center">
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
  name: 'Projects',
  data: function () {
    return {
      projects: [
        {
          title: 'Este portfolio',
          description:
            'Construido com o intuito de se tornar um site pessoal, listando os projetos que já desenvolvi',
          tools: ['nuxtjs', 'vuejs', 'vuetify'],
          img: 'racoon.jpg',
          sourceCode: 'https://github.com/talis-fb/portfolio',
        },
        {
          title: 'Pokedex Vue',
          description:
            'Uma pokedex feita em VueJS para aprender a utilizar o framework',
          tools: ['typescript', 'vuejs', 'sass', 'heroku'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
          site: 'https://pokedex-treino-vue.herokuapp.com/',
          sourceCode: 'https://github.com/talis-fb/pokedex-vue',
        },
        {
          title: 'Pokedex React',
          description:
            'Uma simples pokedex feita em ReactJS, que utiliza a API do Pokemon, feita com o intuito de aprender e praticar o uso do ReactJS',
          tools: ['javascript', 'react'],
          img: 'https://github.com/talis-fb/pokedex/raw/master/screenshot.png',
          sourceCode: 'https://github.com/talis-fb/pokedex',
        },
        {
          title: 'Simple-Chat',
          description: 'Um simples chat construído com NextJS e Firebase',
          tools: ['typescript', 'react', 'nextjs', 'redux', 'firebase'],
          site: 'https://simple-chat-talis-fb.vercel.app/chat',
          img: 'https://github.com/talis-fb/Simple-Chat/raw/main/screenshot_1.png',
          sourceCode: 'https://github.com/talis-fb/Simple-Chat',
        },
        {
          title: 'Telegram bot',
          description:
            'Um bot do telegram feito para preencher automaticamente uma planinha do Google Sheets com gastos diários.',
          tools: ['typescript', 'heroku'],
          img: 'https://wersm.com/wp-content/uploads/2016/11/wersm-telegram-telegraph.jpg',
          sourceCode: 'https://github.com/talis-fb/telegram_bot',
        },
        {
          title: 'Dota 2 Website Clone',
          description: 'Clone do site original do Dota 2',
          tools: ['vuejs', 'sass'],
          img: 'https://github.com/talis-fb/dota2-website/raw/master/screenshot1.png',
          site: 'https://talis-fb.github.io/dota2-website/',
          sourceCode: 'https://github.com/talis-fb/dota2-website',
        },
        {
          title: 'SnakeGame With One Array',
          description:
            'Jogo da Cobrinha clássico, em JavaScript e HTML, onde todo o campo, cenário, comida e a cobra são unicamente uma Array.',
          tools: ['javascript', 'html5'],
          img: 'snake_game_print.png',
          sourceCode: 'https://github.com/talis-fb/SnakeGameWithOneArray',
          site: 'https://talis-fb.github.io/SnakeGameWithOneArray/',
        },
        {
          title: 'Notion Clone',
          description:
            'Um clone super básico da interface do Notion feito para aprender a utilizar o ReduxJS aplicado ao React e o uso de Styleds Components com o Emotion',
          tools: ['javascript', 'react', 'redux', 'vite', 'emotion'],
          img: 'notion_clone_print.png',
          sourceCode: 'https://github.com/talis-fb/notion-clone',
        },
        {
          title: 'Ocma',
          description:
            'Projeto desenvolvimento na matéria de ITP do curso de BTI. Um Bot que joga sozinho um jogo de pesca.',
          tools: ['c'],
          img: 'https://github.com/talis-fb/ocma/raw/main/screen.png',

          sourceCode: 'https://github.com/talis-fb/ocma',
        },
        {
          title: 'Chat',
          description:
            'Um chat simples e completo feito para aprender e fixar conhecimentos web: desenvolvimento de servidores back-end com WebSockets, uso de banco de dados e criaçãod e uma interface com React',
          tools: [
            'javascript',
            'react',
            'sass',
            'nodejs',
            'socketio',
            'mongodb',
          ],
          img: 'https://github.com/talis-fb/Chat/raw/main/screenshot1.png',
          sourceCode: 'https://github.com/talis-fb/Chat',
        },
        {
          title: 'SQLClient',
          description:
            'Um cliente de SQLite super simples e minimalista feito para testar e aprender comandos SQL básicos. Ele roda em HTML e executa os comandos recebidos em um arquivo SQLite, mostrando o resultado quando é retornado uma tabela.',
          tools: ['sqlite', 'javascript', 'html5', 'css3'],
          img: 'https://github.com/talis-fb/SQLClient/raw/master/screenshot.png',
          sourceCode: 'https://github.com/talis-fb/SQLClient',
        },
        {
          title: 'Calculadora Com React',
          description:
            'Um modelo de calculadora construído em ReactJS inspirado na Calculadora Nativa do Android.',
          tools: ['javascript', 'react', 'css'],
          img: 'https://github.com/talis-fb/CalculadoraSimplesComReact/raw/master/screenshot.png',
          sourceCode: 'https://github.com/talis-fb/CalculadoraSimplesComReact',
        },
        {
          title: 'PlayerVideoWeb',
          description: 'Um modelo de player de vídeos para web feito em js',
          tools: ['javascript', 'html5', 'css3'],
          img: 'player_video_print.png',
          sourceCode: 'https://github.com/talis-fb/PlayerVideoWeb',
        },
        {
          title: 'BluExodia',
          description:
            'Projeto desenvolvido para o projeto Integrador do Curso de eletrônica do IFRN. Uma biblioteca de Arduino feita para facilitar o uso do componente de leitura e escrita de cartões RFID',
          tools: ['cplusplus', 'arduino'],
          img: 'bluexodia_print.jpg',
          sourceCode: 'https://github.com/talis-fb/BluExodia',
        },
      ],
    }
  },
}
</script>
