<template>
  <b-container fluid class="full-container">
    <transition-group name="pop" tag="b-row">
      <b-col v-for="element in parseInt(numberOfElements)" :key="element">
        <WallElement />
      </b-col>
    </transition-group>
  </b-container>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
import { Vue, Component } from 'vue-property-decorator';
import WallElement from './WallElement.vue';
import { store } from '../store';

@Component({
  components: {
    WallElement,
  },
})
export default class WallView extends Vue {
  get numberOfElements(): number {
    return parseInt(String(store.numberOfElements), 10);
  }
}
</script>

<style scoped>
.row {
  height: 100%;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
