<template>
  <b-container fluid class="overlay">
    <div class="line line-center" :style="topStyle(1, 3)">
      <number
        :to="wallWidth"
        :duration=".3"
        easing="Power1.easeOut"
      />cm
    </div>
    <b-row>
      <b-col v-for="element in parseInt(numberOfElements)" :key="element">
        <div
          v-if="element === 1"
          class="line line-center-left"
          :style="topStyle(2.5, 6)"
        >
          <number
            :to="outerToCenterWidth"
            :format="formatNumber"
            :duration=".3"
            easing="Power1.easeOut"
          />cm
        </div>
        <div
          v-if="element === 1 && numberOfElements > 1"
          class="line line-center-left line-between"
          :style="topStyle(4, 9)"
        />
        <div
          v-if="element === 2"
          class="center-value"
          :style="topStyle(4, 9, 0.5)"
        >
          <number
            :to="centerToCenterWidth"
            :format="formatNumber"
            :duration=".3"
            easing="Power1.easeOut"
          />cm
        </div>
        <div
          v-if="element === 2 && numberOfElements > 1"
          class="line line-center-right line-between"
          :style="topStyle(4, 9)"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
import { Component, Vue } from 'vue-property-decorator';
import { store } from '../store';

@Component
export default class Measurements extends Vue {
  get numberOfElements(): number {
    return parseInt(String(store.numberOfElements), 10);
  }

  get wallWidth(): number {
    return parseInt(String(store.wallWidth), 10);
  }

  get elementWidth(): number {
    return parseInt(String(store.elementWidth), 10);
  }

  get outerToCenterWidth(): number {
    const totalElementWidth = this.numberOfElements * this.elementWidth;
    const emptySpace = this.wallWidth - totalElementWidth;
    const elementToElement = emptySpace / (this.numberOfElements + 1);

    return elementToElement + (this.elementWidth / 2);
  }

  get centerToCenterWidth(): number {
    const totalElementWidth = this.numberOfElements * this.elementWidth;
    const emptySpace = this.wallWidth - totalElementWidth;
    const elementToElement = emptySpace / (this.numberOfElements + 1);

    return elementToElement + this.elementWidth;
  }

  formatNumber(number: number): string {
    return number.toFixed(2);
  }

  topStyle(minValue: number, maxValue: number, extra = 0): any {
    return {
      top: `${(((maxValue - minValue) / 6) * this.numberOfElements) + minValue + extra}rem`,
    };
  }
}
</script>

<style scoped>
.overlay {
  position: relative;
  top: -100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  color: #FFF;
  font-variant: small-caps;
}

.row {
  height: 100%;
}

/* Remove gutter */
.col {
  padding-left: 0;
  padding-right: 0;
}

.line {
  position: relative;
  background: #FFF;
  height: 2px;
  float: left;
  line-height: 2rem;
}

.line-center {
  top: 2rem;
  width: calc(100% + var(--bs-gutter-x));
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}

.line-center-left, .line-center-right {
  width: 50%;
  top: 4rem;
}

.line-between {
  top: 6rem;
}

.center-value {
  position: relative;
  width: 0;
  float: left;
  top: 6.5rem;
  left: -2rem;
}

</style>
