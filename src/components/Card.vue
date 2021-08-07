<template>
  <div class="card">
    <div class="img-box">
      <img
        width="100%"
        height="100%"
        v-bind:src="require('../images/' + project.image)"
        alt="framework"
      />
    </div>
    <div class="content">
      <h2 id="title">
        {{project.name}}

        <br />
        <span>{{project.front_end }} {{ project.back_end ? project.back_end : null}}</span>
      </h2>
      <p>{{project.description}}</p>
      <a v-bind:href="project.url" target="_blank">
        <span></span>Go Visit
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["project"]
};
</script>
<style lang="css" scoped>
.card {
  height: 375px;
  width: 300px;
  color: white;
  position: relative;
  background: rgb(8, 8, 8);
  overflow: hidden;
  border-radius: 10px;
  transition: 0.35s;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
}
.card:hover {
  cursor: pointer;
  transform: scale(1.05);
  box-shadow: rgba(255, 255, 255, 0.4);
}
.card .img-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
.card:hover .img-box {
  opacity: 0.5;
  filter: hue-rotate(10deg);
}
.card .content {
  position: absolute;
  width: 100%;
  height: 80%;
  bottom: -100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  opacity: 0.5;
  transition: 0.3s;
}
.card h2 {
  font-size: 20px;
  transition: 0.6s ease-in-out;
}
.card:hover h2 {
  font-size: 23px;
  transform: scale(1.1);
  margin-bottom: 20px;
}
.card h2 span {
  color: rgb(233, 233, 131);
  font-size: 18px;
}
.card:hover .content {
  opacity: 1;
  bottom: 0;
}
.card:nth-child(1) .content {
  background: linear-gradient(0deg, #442127, transparent);
}
.card:nth-child(2) .content {
  background: linear-gradient(0deg, #214375, transparent);
}
.card:nth-child(3) .content {
  background: linear-gradient(0deg, #000000, transparent);
}
.card .content p {
  overflow: scroll;
  font-size: 15px;
  height: auto;
}
.card .content p::-webkit-scrollbar {
  display: none;
}
a {
  position: absolute;
  margin: 10px auto;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 40px;
  background: #262626;
  text-transform: uppercase;
  text-align: center;
  line-height: 40px;
  color: rgb(233, 233, 131);
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 4px;
}
a::before,
a::after,
a span:before,
a span::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: rgb(233, 233, 131);
  transition: 1s;
}
a::before {
  top: -2px;
  left: -2px;
}
a::after {
  top: -2px;
  right: -2px;
}
a span:before {
  bottom: -2px;
  left: -2px;
}
a span::after {
  bottom: -2px;
  right: -2px;
}
a:hover:before,
a:hover:after,
a:hover span:before,
a:hover span::after {
  width: 120px;
  height: 5px;
}


@media screen and (max-width: 600px) {
  .card {
    height: 450px;
    width: 350px;
  }
  .card .content {
    height: 60%;
  }
  #title {
    font-size: 15px;
  }
  .card .content p,
  h2 span,
  .content h2,
  a {
    font-size: smaller;
  }
  a {
    width: 100px;
    height: 30px;
    line-height: 30px;
  }
  a::before,
  a::after,
  a span:before,
  a span::after {
    width: 5px;
    height: 3px;
  }
  a:hover:before,
  a:hover:after,
  a:hover span:before,
  a:hover span::after {
    width: 100px;
    height: 3px;
  }
}
</style>