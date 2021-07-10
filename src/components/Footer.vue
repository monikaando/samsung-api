<template>
  <div class="footer">
    <p>Application created by</p>
    <a
      rel="noopener noreferrer"
      href="https://monikaswidzinska.netlify.app/"
      target="_blank"
      ><p>Monika Swidzinska</p></a
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 2rem;
  background-color: #20242a;
  padding: 0;
  margin: 0;
}
a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 0.8rem 0 0.2rem;
}
a:hover {
  color: #ffffff;
}
p {
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-size: 0.7rem;
}
</style>