<template>
  <div>
    <div v-for="(row, index) in answer" :key="index" class="board-row" style="float: left;">
      <div class="row" v-for="(item, index2) in row" :key="index2">
        <p>{{item}}</p>
      </div>
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
