<template>
    <div class="main-visual">
      <video :src="video" alt="video" autoplay loop muted></video>
    </div>
  </template>
  
  <script>

import video from '@/assets/Videos/Header Video.mp4';

  export default {
    name: 'MyMainVisual',
    data() {
      return {
        video: video,
      };
    },
  };
  
  </script>
  
  <style scoped>
  .main-visual {
    position: relative;
    overflow: hidden;
    /* This will define the aspect ratio of your video. Adjust as needed. */
    /* The following represents a 16:9 aspect ratio. */
    padding-top: 56.25%;
  }
  
  .main-visual video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  
  