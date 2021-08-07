<template>
  <section class="nav-section">
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
    <div class="mobile-nav-logo">
      <img height="100px" width="120px" src="../assets/logo.png" alt="logo" class="logo" />
    </div>
    <div class="mobile-nav-menu">
      <ul class="mobile-nav-menu-list">
        <li class="mobile-nav-list-item" @click="$router.push('/')">About Me</li>
        <li class="mobile-nav-list-item" @click="$router.push('/my-projects')">My Project</li>
        <li class="mobile-nav-list-item" @click="$router.push('/contact')">Contact</li>
      </ul>
    </div>
  </section>
</template>
<style lang="css" scoped>

.follow-me{
  position: absolute;
  top: 3%;
  left: 0;
}
.follow-me ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.follow-me ul li {
  margin-left: 0px;
  background-color: #fff;
  width: 30px;
  height: 30px;
}
.follow-me ul li span{
  transition: 300ms;
  height: 100%;
  width: 100%;
  transform: scale(1.10);
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
.mobile-nav-logo {
  display: flex;
  justify-content: center;
  margin: 10px auto;
  width: 35%;
}
.mobile-nav-menu {
  width: 100vw;
  color: white;
}
.mobile-nav-menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  color: white;
}
.mobile-nav-list-item {
  background-color: #222;
  padding: 10px 20px;
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
  width: 100%;
  color: #ffffff;
  transition: 300ms ease-in-out;
}
.mobile-nav-list-item:hover {
  background-color: rgb(12, 11, 11);
  box-shadow: 0 0 10px #f59157, 0 0 20px #f59157;
  color: #f59157;
  margin-right: 2px;
}
.mobile-nav-list-item:active {
  border-bottom: 5px solid #222;
}
.color-mode-div{
  height: auto;
  margin: auto;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
  width: auto;
}
.checkbox{
  display: flex;
  margin: 0 0 0 10px;
  width: auto;
  font-size: 13px;
}
@media screen and (max-width: 440px) {
  .mobile-nav-menu-list {
  font-size: 12px;
}
}
</style>