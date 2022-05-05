<template>
  <v-row>
    <v-col :key="i" v-for="(el, i) in projects" class="text-center">
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
  name: 'Projects',
  data: function () {
    return {
      projects: [
        {
          title: 'Chat',
          description: 'Um chat bonitao',
          tools: ['js', 'react', 'sass'],
          img: 'https://github.com/talis-fb/Chat/raw/main/screenshot1.png',
        },
        {
          title: 'Pokedex Vue',
          description: 'Um chat bonitao',
          tools: ['js', 'react'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'Telegram bot',
          description: 'Um chat bonitao',
          tools: ['ts'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'notion-clone',
          description: 'Um chat bonitao',
          tools: ['js', 'react', 'redux'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'BluExodi',
          description: 'Um chat bonitao',
          tools: ['cpp', 'arduino'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        },
        {
          title: 'SnakeGame With One Array',
          description: 'Jogo da Cobrinha clássico, em JavaScript e HTML, onde todo o campo, cenário, comida e a cobra são unicamente uma Array.',
          tools: ['js', 'html'],
          img: 'https://github.com/talis-fb/pokedex-vue/raw/master/screnshoot.png',
        }
      ],
    }
  },
}
</script>
