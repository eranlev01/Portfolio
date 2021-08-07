<template>
  <div class="projects-container">
    <div class="sub-container">
      <Card
        class="card"
        :key="project.id"
        v-for="(project) in projects"
        v-bind:project="project"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card";
export default {
  name: "Projects",
  components: {
    Card,
  },
  props: ["projects"],
  created() {
  },
};
</script>
<style lang="css" scoped>
.projects-container {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
.sub-container {
  background: #333;
  border-radius: 10px;
  width: 90%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  animation: transitionIn 0.75s;
}
@media screen and (max-width: 600px) {
  .sub-container  {
    width: 100%;
  }
}
@keyframes transitionIn {
  from {
    opacity: 0;
    transform: rotateX(10deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}
</style>
