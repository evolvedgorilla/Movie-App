<template>
  <div id="app">
    <MyHeader />
    <MyMainVisual />
    <MySiteIntroduction />
    <MyQuickInfo />
    <div class="row">
      <div class="col">
        <MyContactUs />
      </div>
      <div class="col">
        <MyGoogleMapsEmbed />
      </div>
    </div>

    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/Header';
import MyMainVisual from './components/MainVisual';
import MySiteIntroduction from './components/SiteIntroduction';
import MyQuickInfo from './components/QuickInfo';
import MyContactUs from './components/ContactUs';
import MyGoogleMapsEmbed from './components/GoogleMapsEmbed';
import MyFooter from './components/Footer';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyMainVisual,
    MySiteIntroduction,
    MyQuickInfo,
    MyContactUs,
    MyGoogleMapsEmbed,
    MyFooter,
  },
};
</script>

<style>
html,
body,
#app {
  background-color: #000000; /* Replace with your desired dark color code */
  color: #fff; /* Adjust the text color to ensure readability */
  margin: 0;
  padding: 0;
  font-family:sans-serif ;
  letter-spacing: 1px;
}
.row{
  display: flex;
  margin:50px 5%;
}
.col{
  flex:1;
}
@media (max-width: 768px) {
  .row {
    display: block;
  }
}
</style>
