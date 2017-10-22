<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Info">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">By: {{song.artist}}</div>
            <div class="song-genre">Genre: {{song.genre}}</div>
            <iframe :src="song.youtubeId"></iframe>
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImage" /><br>
            <audio controls>
              <source :src="song.soundSource" type="application/ogg">
              Your browser does not support the audio element.
            </audio><br>
            Album: {{song.album}}
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
        <textarea readonly>{{song.lyrics}}</textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    this.song.youtubeId = 'http://www.youtube.com/embed/' + (await SongsService.show(songId)).data.youtubeId
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.ml-2{
  white-space: pre-line
}
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 24px;
}
.album-image {
  width: 55%;
  margin: 0 auto;
}
textarea {
  width: 100%;
  border: none;
  height: 500px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
