<template>
<div class="about">
    <div class="about-card">
      <div class="card-title">
        <img height="75px" width="75" src="../assets/myAvatar2-copy.png" alt="avatar" class="avatar" />
        <div class="title-text-content">
          <p>About me</p>
          <h2>Eran Lev</h2> 
        </div>
      </div>
      <div class="card-content">
        <p>
          I'm a Full-stack Web Developer who speaialized in JavaScript Technologies across the whole stack.
          I have serious passion for building web applications.
          Expirience building complete web applications with backend API Systems.
        </p>
        <table width="100%">
          <tr>
            <th>Requirement</th>
            <th>Solution</th>
          </tr>
          <tr>
            <td>Front-end</td>
            <td>React, Angular, Vue.js, HTML, CSS, JavaScript</td>
          </tr>
          <tr>
            <td>Back-end</td>
            <td>Node.js, Express.js, MongoDB, MySQL, PHP</td>
          </tr>
          <tr>
            <td>Libraries</td>
            <td>Query, JWT, SASS</td>
          </tr>
        </table>
        <p>
          As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making new things, 
          and my mission-driven work ethic to literally change the world.
          That's why I’m excited to make a big impact at a high growth company. 
        </p>
      </div>
    </div>
</div>
</template>

<style lang="css" scoped>
@media screen and (max-width: 1096px) {
  .about {
    height: 78.5vh;
  }
}
@media screen and (min-width: 1096px) {
  .about {
    height: 90.5vh;
  }
}
@media screen and (max-width: 600px) {
  .avatar {
    width: 40px;
    height: 40px;
  }
  .title-text-content p, h2{
    font-size: smaller;
  }
  table > tr,
td,
th {
  border: 0 !important;
  padding: 10px;
  text-align: center;
}
}
.about{
  /* border: 1px solid green; */
  height: auto;
  display:flex; 
  justify-content: center;
  align-items: center; 
  padding: 2rem;
  width: 100%; 
}
.about-card {
  max-height: 100%;
  max-width: 90%;
  background: #333;
  padding: 3em;
  border-radius: 10px;
  color: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  transition: 300ms ease-in-out;
  opacity: 0.95;
  animation: transitionIn 1s;
}
.about-card:hover{
  box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
  transform: scale(1.01);
  opacity: 1;
}
.about-card > * {
  transition: 0.5s;
}
.about-card:hover > * {
  margin: 0 0 +10px;
}
.about-card > .card-title {
  display: flex;
  align-items: center;
  background-color: #222;
  border-radius: 10px;
}
.avatar {
  border-radius: 50%;
  border: 1px solid rgb(255, 255, 255, 0.4);
  margin: 0 30px;
}
.title-text-content{
  padding: 10px 0;
}
.title-text-content > p {
  margin-bottom: 0;
  color: rgb(210, 210, 210);

}
.title-text-content > h2 {
  margin-top: 0;

}
.card-content > p {
  max-height: 100%;
  line-height: 1.5;
  margin: 30px auto;
  animation: transitionFromSides 750ms;
}
table {
  border-spacing: 0px;
  margin: 50px auto;
  animation: transitionFromSides 750ms;
}
table > tr,
td,
th {
  border: 1px solid white;
  padding: 10px ;
  text-align: center;
}
@keyframes transitionIn{
  from{
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to{
    opacity: 1;
    transform: rotateX(0);
  }
}
@keyframes transitionFromSides{
  from{
    transform: scaleX(0.95);
  }
  to{
   transform: scaleX(1);
  }
}

</style>
