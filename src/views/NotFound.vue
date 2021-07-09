<template>
  <div class="error-page">
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/v1625677404/SamsungProducts/404-Error.png"
      alt="error-page"
    />
    <button @click="$router.push({ name: 'Home' })">
      Go back to the Home page
    </button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: end;
  background-color: white;
}
img {
  width: 40rem;
}
button {
  padding: 0.25rem 1rem;
  margin: 5rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 1.5rem;
  border: 0.12rem solid #06b4fd;
  margin-left: 0.5rem;
  height: 3.2rem;
  background-color: #06b4fd;
  color: white;
}
button:hover {
  color: white;
  background-color: #535353;
  border: 0.12rem solid #535353;
  cursor: pointer;
}
@media only screen and (max-width: 576px) {
  img {
    width: 100%;
  }
}
</style>