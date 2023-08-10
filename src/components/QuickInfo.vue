<template>
  <div class="quick-info">
    <div class="row">
      <div class="col">
        <h1 class="movie-hd">Collect your favourites</h1>
      </div>
      <div class="col">
        <input type="search" class="field" v-model="searchQuery" placeholder="Search title and add to grid" @input="searchMovies" />
        <br>
        <ul class="grid-list">
            <li v-for="movie in movies" :key="movie.id">
              <button @click="addToGrid(movie)" class="add-btn">{{ movie.name }} +</button>
            </li>
        </ul>
      </div>
    </div>
   
    <hr color="white">
    <div class="container">
      <div class="grid">
        <div class=" movie-box" v-for="movie in grid" :key="movie.id">
          <button @click="removeFromGrid(movie.id)" class="remove-btn"> X </button>
          <img :src="movie.image.original" alt="Movie Image" />
          <div class="inner">
            <h2>{{ movie.name }}</h2>
            <p v-html="movie.summary"></p>
          </div>
        </div>
    </div>
    </div>
    
  </div>
</template>
  
  <script>
  // import { mapState, mapActions } from 'vuex';
  import axios from 'axios';
  export default {
    name: 'QuickInfo',
    data() {
      return {
        searchQuery: '',
      };
    },
    computed: {
      movies() {
        return this.$store.state.movies;
      },
      grid() {
        return this.$store.state.grid;
      },
    },
    methods: {
      async searchMovies() {

        if (this.searchQuery) {
          const response = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${this.searchQuery}`
          );
          const movies = response.data.map((item) => item.show);
          console.log(movies);

          this.$store.commit('SET_MOVIES', movies);
        }
      },
      addToGrid(movie) {
        this.$store.commit('ADD_TO_GRID', movie);
      },
      removeFromGrid(movieId) {
        this.$store.commit('REMOVE_FROM_GRID', movieId);
      },
    },
    mounted() {
      // You can also fetch movies initially by calling the searchMovies() method here.
    },

  };
  </script>
  
  
<style scoped>
@media (max-width: 786px) {
  .movie-hd{
    font-size: 28px !important;
  }
  .grid{
    display: block !important;
  }
  .row {
    display: block !important;
  }
  .movie-box{
    width:100% !important;
    margin-top:10px !important;

  }
}
.container{
  margin: 0px 5%;
}
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three equal-width columns */
  grid-gap: 20px; /* Gap between grid items */
}
.row{
  display: flex;
}
.col{
  flex: 1;
}
.movie-box{
  /* display: inline-block; */
  background-color: gray;
  /* width: 32%; */
  padding:10px;
  border-radius: 5px;
}
.movie-box > img{
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.field {
  width: 100%;
  border:1px solid white;
  padding:10px;
  font-size:16px;
  width:75%;
  float: right;
  border-radius: 3px;
  background-color: transparent;
  margin:10px 0px;
  color: white;
}
.add-btn{
  background: transparent;
  border: none;
  cursor: pointer;
  color:white;
}
.grid-list{
  list-style: none;
}
.grid-list >li{
  margin: 5px;
  color:lightgray
}
.grid-list >li:hover{
  margin: 5px;
  color:white;
}
.remove-btn{
  position: relative;
  background-color: #333;
  color: white;
  cursor: pointer;
  border:none;
  float: right;
}
  /* Your styles go here */
  </style>
  