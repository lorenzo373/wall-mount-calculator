<template>
  <div class="wall-element" :style="elementStyle" />
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
import { Component, Vue } from 'vue-property-decorator';
import { store } from '../store';

@Component
export default class WallElement extends Vue {
  backgroundImage = '';

  mounted(): void {
    this.backgroundImage = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 99999)}`;
  }

  get numberOfElements(): number {
    return parseInt(String(store.numberOfElements), 10);
  }

  get elementStyle(): any {
    const unit = window.innerWidth > window.innerHeight ? 'vh' : 'vw';

    return {
      height: `calc(100${unit} / 2 / ${(this.numberOfElements + 1) * 0.75})`,
      width: `calc(100${unit} / 2 / ${(this.numberOfElements + 1)})`,
      backgroundImage: `url('${this.backgroundImage}')`,
    };
  }
}
</script>

<style scoped>
.wall-element {
  box-shadow:
    0 0 0 6px rgb(240, 240, 240),
    0 0 0 8px rgb(220, 220, 220),
    0 0 0 10px rgb(200, 200, 200),
    0 0 24px 14px rgba(0, 0, 0, 0.15);
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
}

</style>
