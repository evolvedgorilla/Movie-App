<template>
  <hr color="#111" >
  <div class="site-introduction">
    <h1>MOVIE LIBRARY</h1>
    <p >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br class="break">
      sed diam nonumy eirmod tempor invidunt ut labore et <br class="break">
      dolore magna aliquyam erat, sed diam voluptua.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MySiteIntroduction',
};
</script>

<style scoped>
.site-introduction {
  max-width: 600px; 
  margin: 80px 5%;
  
  /* margin-left: auto; */
  /* margin-right: auto; */
  padding: 0 20px; 
}
.site-introduction >p{
  color:lightgray;
}
.site-introduction >h1{
  font-size: 42px;
}
@media (min-width: 600px) {
  .break {
    display: none;
  }
}
</style>
