<template>
    <footer>
      <div class="inner">
        <div class="row">
          <div class="col">
            <h3>Barcelona</h3>
            <p>C/ d'Arístides Maillol 12 <br> 08028 Barcelona <br> Spain</p>
          </div>
          <div class="col">
            <p>Follow Us on &nbsp; 
              <img :src="twitterPath" alt="twitter" > &nbsp;
              <img :src="youtubePath" alt="youtube" >
            </p>
          </div>

        </div>
        
        
        <!-- Your footer content goes here -->
      </div>
    </footer>
    <p class="footer-bottom">Copyright © Väinö Nyström. All rights reserved.   </p>
    
  </template>
  
  <script>
  
  import TwitterWhite from '@/assets/images/Twitter White.svg';
  import YoutubeWhite from '@/assets/images/Youtube White.svg';


  export default {
    name: 'MyFooter',
    data() {
    return {
      twitterPath: TwitterWhite,
      youtubePath: YoutubeWhite,
      navOpen: false,
    };
  },
  };
  </script>
  
  <style scoped>
  .row{
    margin:0px;
  }
  footer{
    background: #1D1D1D;
    padding: 30px 0px;
  }
  .inner{
    margin:0px 5%;
  }
  .footer-bottom{
    border-top:1px solid gray;
    padding:20px 5%;
    background: #1D1D1D;
    margin:0px;
  }
  /* Your styles go here */
  </style>
  