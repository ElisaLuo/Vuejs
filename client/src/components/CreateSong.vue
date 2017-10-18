<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Create Song">
        <v-text-field label="Title" v-model="song.title" required :rules="[required]"></v-text-field>
        <v-text-field label="Artist" v-model="song.artist" required :rules="[required]"></v-text-field>
        <v-text-field label="Genre" v-model="song.genre" required :rules="[required]"></v-text-field>
        <v-text-field label="Album" v-model="song.album" required :rules="[required]"></v-text-field>
        <v-text-field label="Album Image" v-model="song.albumImage" required :rules="[required]"></v-text-field>
        <v-text-field label="Youtube ID" v-model="song.youtubeId" required :rules="[required]"></v-text-field>
      </panel>
    </v-flex>
    
    <v-flex xs8>
      <panel title="Create Song" class="ml-3">
        <v-text-field label="Lyrics" multi-line v-model="song.lyrics" required :rules="[required]"></v-text-field>
        <v-text-field label="Tab" multi-line v-model="song.tab" required :rules="[required]"></v-text-field>
      </panel>
      <v-btn dark class="cyan" @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.addSong(this.song)
      } catch (err) {
        console.log(err)
      }
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
</style>
