<template>
  <div>
    <md-list>
      <md-list-item v-for="song in songs" v-bind:key="song">{{ song.title }} - {{ song.artist }}</md-list-item>
    </md-list>
  </div>
</template>

<script>
// import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
export default {
  name: "Playlist",
  data() {
    return {
      songs: [
        {
          title: "Energy",
          artist: "Bensound",
          src: require("../assets/bensound-energy.mp3")
        },
        {
          title: "Epic",
          artist: "Bensound",
          src: require("../assets/bensound-epic.mp3")
        },
        {
          title: "Slowmotion",
          artist: "Bensound",
          src: require("../assets/bensound-slowmotion.mp3")
        }
      ]
    };
  }
};
</script>

<style>
</style>