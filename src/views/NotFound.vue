<template>
  <div class="error-page">
    <img
      src="https://res.cloudinary.com/mokaweb/image/upload/v1625491081/SamsungProducts/404page.png"
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
  width: 60rem;
}
button {
  padding: 0.25rem 1rem;
  margin: 5rem 0;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid #cc545a;
  margin-left: 0.5rem;
  height: 45px;
  background-color: #cc545a;
  color: white;
}
button:hover {
  color: white;
  background-color: #f06f76;
  border: 1px solid #f06f76;
  cursor: pointer;
}
@media only screen and (max-width: 576px) {
  img {
    width: 100%;
  }
}
</style>