<template>
  <div>
    <div class="colors" v-if="chip.fmyChipType === 'COLOR'">
      <p>
        {{ chip.fmyChipLocalName }}
      </p>
      <button class="color"></button>
    </div>
    <button v-if="chip.fmyChipType === 'MOBILE MEMORY'" class="outline">
      {{ chip.fmyChipLocalName }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: ["chip"],
};
</script>
<style scoped>
button.outline {
  position: relative;
  z-index: 3;
  background: transparent;
  color: #070707;
  font-size: 14px;
  border-color: #070707;
  border-style: solid;
  border-width: 2px;
  border-radius: 22px;
  padding: 7px 15px;
  text-transform: uppercase;
  transition: all 0.2s linear;
}
button.outline:hover {
  color: white;
  background: #070707;
  border-color: #070707;
  transition: all 0.2s linear;
}
button.outline:active {
  border-radius: 22px;
}
button.color {
  position: relative;
  z-index: 3;
  background: transparent;
  border-color: #070707;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 20px;
  padding: 10px;
  height: 10px;
  margin-left: 1.5rem;
}
.colors {
  display: flex;
  align-items: center;
}
</style>