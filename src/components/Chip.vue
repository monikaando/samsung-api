<template>
  <div>
    <p v-if="chip.fmyChipType === 'COLOR'">
      <strong> Color: </strong>{{ chip.fmyChipLocalName }}
    </p>
    <button v-if="chip.fmyChipType === 'MOBILE MEMORY'">
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
