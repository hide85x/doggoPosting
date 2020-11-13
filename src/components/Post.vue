<template>
  <v-container column-xs>
    <v-layout column>
      <v-flex class="mx-auto">
        <div id="spinner">
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="blue"
            class="spinner"
          ></v-progress-circular>
          <v-img :src="this.dogPic"></v-img>
        </div>
      </v-flex>

      <v-container fluid style="min-height: 0" grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field label="breed" name="beed" :value="breed" id="id">
              {{ breed }}
            </v-text-field>
            <v-text-field
              v-model="comment"
              label="comment"
              hint="Describe the doggo"
              id="author"
            />
            <v-text-field
              v-model="author"
              label="Author"
              hint="how they call You"
              id="author"
            />
            <v-btn class="my-3" block color="primary" @click="postDoggo()">
              POST A DOG
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import { mapActions } from 'vuex';
export default {
  name: "Post",
  props:{
    pictureUrl: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      loading: false,
      comment: "",
      info:"",
      author: "",
      dogPic: "",
      breed: "",
    };
  },
  computed:{
  },
  methods: {
    ...mapActions(['ADD_DOG']),
    postDoggo() {
      const dog = {
        id: Math.floor(Math.random() * Math.floor(99999)),
        comment: this.comment,
        url: this.dogPic,
        info: `Posted by ${this.author}`,
        createdAt: new Date(),
      };
      db.collection("dogs")
        .add(dog)
        .then((res) => {
          this.$store.dispatch('ADD_DOG', dog)
          this.$router.push('/')
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.loading = true;
    console.log(`out url from camera : ${this.pictureUrl}`)
    if(this.pictureUrl !== ''){
            this.dogPic = this.pictureUrl;
            console.log(this.dogPic)
            this.loading=false;
        }else {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        this.breed = res.data.message.split("/")[4];
        this.dogPic = res.data.message;
        this.loading = false;
      })
      .catch((err) => console.log(err));
  }},
};
</script>
<style lang="scss">
#comment,
#author {
  color: black;
}
</style>