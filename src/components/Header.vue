<template>
  <header class="header">
    <img :src="logoPath" alt="Logo" class="logo" />
    <button class="burger" @click="navOpen = !navOpen">
      <span class="burger-line" :class="{ 'toggle': navOpen }"></span>
      <span class="burger-line" :class="{ 'toggle': navOpen }"></span>
      <span class="burger-line" :class="{ 'toggle': navOpen }"></span>
    </button>
    <nav class="navigation" :class="{ 'nav-open': navOpen }">
      <ul class="navigation-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Screens</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">Movie Library</a></li>
        <li><a href="#">Location & Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import logoWhite from '@/assets/Logos/Logo White.svg';

export default {
  name: 'MyHeader',
  data() {
    return {
      logoPath: logoWhite,
      navOpen: false,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin:0px 5%;
  /* background-color: #111; */
  border-bottom: 1px solid #111; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 40px; /* Adjust as needed */
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none;
}

.burger-line {
  width: 2rem;
  height: 0.25rem;
  background: #333;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.burger-line.toggle:nth-child(1) {
  transform: rotate(45deg);
}

.burger-line.toggle:nth-child(2) {
  opacity: 0;
}

.burger-line.toggle:nth-child(3) {
  transform: rotate(-45deg);
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation-links {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
}

.navigation-links li a {
  padding: 0 15px;
  text-decoration: none;
  color:white;
}

@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .navigation {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.95);
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    z-index: 1;
  }


  .navigation.nav-open {
    transform: translateX(0);
  }

  .navigation-links {
    flex-direction: column;
    width: 100%;
  }

  .navigation-links li {
    margin: 15px 0;
  }
}
</style>
