<template>
  <div id="app">
    <div class="bgc"></div>
    <div id="desktop">
      <!------Desktop Header--->
      <header class="nav">
        <nav-bar />
      </header>
      <!----------------------->

      <!------Desktop Container--->
      <div class="container">
        <transition name="view">
          <router-view v-bind:projects="projects" />
        </transition>
      </div>
      <!-------------------------->
    </div>
    <div id="mobile">
      <!------Mobile Header--->
      <header class="mobile-nav">
        <mobile-nav-bar />
      </header>
      <!----------------------->

      <!------Mobile Container--->
      <div class="mobile-container">
        <transition name="view">
          <router-view v-bind:projects="projects" />
        </transition>
      </div>
      <!-------------------------->
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar";
import { projectsArr } from "./ProjectsArr";

export default {
  components: {
    NavBar,
    MobileNavBar,
  },
  data() {
    return {
      projects: projectsArr,
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@100&display=swap");
.body-bg-image {
  background-color: #222;
  overflow: scroll;
  font-family: "Exo", sans-serif;
}
body::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 1096px) {
  #desktop {
    display: none;
  }
  .mobile-nav {
    position: fixed;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 250px;
    transition: 0.3s;
    z-index: 100;
  }

  .mobile-container {
    position: absolute;
    top: 250px;
    height: auto;
    width: 100%;
  }
}
@media screen and (min-width: 1096px) {
  #mobile {
    display: none;
  }
  .nav {
    transition: 0.3s;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
  }
  .container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 25%;
    height: 100vh;
    width: 75%;
  }
}
</style>
