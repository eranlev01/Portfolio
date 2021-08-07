<template>
  <section style="height:100vh; width: 65%;">
    <div class="nav-logo">
      <img height="150px" width="180px" src="../assets/logo.png" alt="logo" class="logo" />
    </div>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <li class="nav-list-item" @click="$router.push('/')">About Me</li>
        <li class="nav-list-item" @click="$router.push('/my-projects')">My Project</li>
        <li class="nav-list-item" @click="$router.push('/contact')">Contact</li>
      </ul>
    </div>
    <div class="follow-me">
      <ul>
        <li>
          <a
            class="github"
            target="_blank"
            href="https://github.com/eranlev01"
            title="Follow on GitHub"
          >
            <span>Follow on Github</span>
          </a>
        </li>
        <li>
          <a
            class="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/eran-lev/"
            title="Connect on Linkedin"
          >
            <span>Connect on Linkedin</span>
          </a>
        </li>
        <li>
          <a
            class="twitter"
            target="_blank"
            href="https://twitter.com/eranlev1996"
            title="Follow on Twitter"
          >
          <span>Connect on Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="css" scoped>
.nav-logo {
  display: flex;
  justify-content: center;
  margin: 50px auto 120px;
}
.nav-menu {
  color: white;
  width: 100%;
}
.nav-menu-list {
  list-style: none;
  padding: 0;
}
.nav-list-item {
  background-color: #222;
  padding: 10px 20px;
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
  width: 100%;
  color: #ffffff;
  transition: 300ms ease-in-out;
  transition-delay: 0.05s;
}
.nav-list-item:hover {
  width: 110%;
  background-color: rgb(12, 11, 11);
  box-shadow: 0 0 10px #f59157, 0 0 20px #f59157;
  color: #f59157;
}
.span-dark {
  color: white;
}
.span-light {
  color: black;
}
.profile-links {
  position: absolute;
  bottom: 0;
  /* border: 1px solid yellow; */
  width: 100%;
  display: flex;
}
.fa-sm {
  margin: 100px 0 0;
  display: flex;
  flex-direction: row;
}
.follow-me {
  z-index: 1001;
  position: fixed;
  left: 0;
  top: 73%;
  width: 55px;
  height: 275px;
}
.follow-me ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.follow-me ul li {
  background-color: #fff;
  width: 40px;
  height: 40px;
  
}
.follow-me ul li span{
  transition: 300ms;
  height: 100%;
  width: 100%;
  transform: scale(1.05);
  border-radius: 0;
  border: 0;
  
}
.follow-me ul li:hover span {
  transform: scale(1.15);
  left: 25px;
}
.follow-me ul li:hover{
  background-color: rgb(228, 224, 224);
}
.github span {
  display: block;
  background: url(../assets/square.svg) no-repeat 0 1px;
  background-size: cover;
  text-indent: -9999em;
}
.linkedin span {
  display: block;
  background: url(../assets/linkedin.svg) no-repeat 0 1px;
  background-size: 100% auto;
  text-indent: -9999em;
}
.twitter span {
  display: block;
  background: url(../assets/twitter.svg) no-repeat 0 1px;
  background-size: 100% auto;
  z-index: 1000;
  text-indent: -9999em;
}

</style>