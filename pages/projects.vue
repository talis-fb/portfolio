<template>
  <v-row>
    <v-col :key="i" v-for="(el, i) in projectypescript" class="text-center">
      <ProjectContainer
        :img="el.img"
        :title="el.title"
        :description="el.description"
        :tools="el.tools"
      ></ProjectContainer>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Projectypescript',
  data: function () {
    return {
      projectypescript: [
        {
          title: 'Chat',
          description: 'Um chat bonitao',
          tools: ['javascript', 'react', 'sass'],
          img: 'https://github.com/talis-fb/Chat/raw/main/screenshot1.png',
        },
        {
          title: 'Pokedex Vue',
          description: 'Um chat bonitao',
          tools: ['javascript', 'react'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'Telegram bot',
          description: 'Um chat bonitao',
          tools: ['typescript'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'notion-clone',
          description: 'Um chat bonitao',
          tools: ['javascript', 'react',  'redux', 'vite','emotion'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'BluExodia',
          description: 'Um chat bonitao',
          tools: ['cplusplus', 'arduino'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'SnakeGame With One Array',
          description: 'Jogo da Cobrinha clássico, em JavaScript e HTML, onde todo o campo, cenário, comida e a cobra são unicamente uma Array.',
          tools: ['javascript', 'html5'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'Este portfolio',
          description: 'Esse mesmo',
          tools: ['nuxtjs', 'vuejs', 'vuetify'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        }
      ],
    }
  },
}
</script>
