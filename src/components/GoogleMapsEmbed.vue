<template>
    <div class="google-maps">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Barcelona,+Spain&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        width="600"
        height="400"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyGoogleMapsEmbed',
  };
  </script>
  
<style scoped>
@media (max-width: 768px) {
  .google-maps > iframe{
    width:350px !important;
  }
}
  .google-maps{
    margin-top:5rem;
  }
  /* Your styles go here */
</style>
  