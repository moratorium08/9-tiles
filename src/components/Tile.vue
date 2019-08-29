<template>
  <button v-bind:class="tileType" class="tile" type="button" v-on:click="onClick"></button>
</template>

<script>
export default {
  props: ['color', 'posX', 'posY'],
  computed: {
    tileType() {
      return `${this.color}Tile`;
    },
  },
  methods: {
    onClick() {
      this.$emit('onFlip', this.posX, this.posY);
    },
  },
};
</script>

<style>
.YellowTile {
  background-color: yellow;
}
.GreenTile {
  background-color: green;
}
.BlueTile {
  background-color: blue;
}
.OrangeTile {
  background-color: orange;
}
.PinkTile {
  background-color: pink;
}
.BrownTile {
  background-color: brown;
}
.tile {
  height: 50px;
  width: 50px;
}
</style>
