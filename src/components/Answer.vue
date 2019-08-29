<template>
  <div class="answer">
    <div v-for="(row, index) in answer" :key="index" class="board-row" style="float: left;">
      <div class="tile" v-bind:class="`${item}Tile`" v-for="(item, index2) in row" :key="index2"></div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  generateMap() {
    return [
      [
        'Orange', 'Pink', 'Brown',
      ],
      [
        'Pink', 'Blue', 'Brown',
      ],
      [
        'Orange', 'Yellow', 'Green',
      ],
    ];
  },
  props: ['answer'],
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
.answer {
  display: inline-block;
}
</style>
