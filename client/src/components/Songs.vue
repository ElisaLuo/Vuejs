<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn slot="create" class="cyan lighten-4" light medium right middle absolute fab @click="navigateTo({name: 'songs-create'})">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <audio controls>
                <source :src="song.soundSource" type="application/ogg">
              Your browser does not support the audio element.
              </audio>
              <v-btn dark class="cyan" @click="navigateTo({name: 'song', params: {songId: song._id}})">View</v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImage" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
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
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.getSongs()).data // Actually gets data
  }
}
</script>

<style scoped>
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
</style>