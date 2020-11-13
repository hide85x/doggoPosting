<template>
  <v-app>
    <v-app-bar color="blue" app>
      <v-btn
        icon
        color="white"
        outlined
        v-if="$route.name !== 'home'"
        @click="$router.go(-1)"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span id="title">DoggoSearch</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-if="$route.name == 'post'"
        @click="$router.push({ name: 'camera' })"
      >
        <v-icon color="white">mdi-camera</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Post from "./components/Post";
import Details from "./components/Details";

export default {
  name: "App",

  components: {
    Post,
    Details,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#title {
  display: flex;
  color: white;
  text-align: center;
  margin: auto;
}
</style>