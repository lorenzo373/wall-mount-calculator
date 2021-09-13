<template>
  <b-container fluid>
    <b-row>
      <b-col sm="3" offset-md="3">
        <label for="controls-number-of-elements">Number of elements</label>
      </b-col>
      <b-col sm="9" md="3">
        <b-form-input
          id="controls-number-of-elements"
          v-model="numberOfElements"
          type="number"
          placeholder="1 to 6"
          min="1"
          max="6"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="3" offset-md="3">
        <label for="controls-wall-width">Wall width</label>
      </b-col>
      <b-col sm="9" md="3">
        <b-form-input
          id="controls-wall-width"
          v-model="wallWidth"
          type="number"
          min="1"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="3" offset-md="3">
        <label for="controls-element-width">Element width</label>
      </b-col>
      <b-col sm="9" md="3">
        <b-form-input
          id="controls-element-width"
          v-model="elementWidth"
          type="number"
          min="1"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */

import { Vue, Component } from 'vue-property-decorator';
import { store, mutators } from '../store';

@Component
export default class Controls extends Vue {
  get numberOfElements(): number {
    return store.numberOfElements;
  }

  set numberOfElements(value: number) {
    mutators.setNumberOfElements(value);
  }

  get wallWidth(): number {
    return store.wallWidth;
  }

  set wallWidth(value: number) {
    mutators.setWallWidth(value);
  }

  get elementWidth(): number {
    return store.elementWidth;
  }

  set elementWidth(value: number) {
    mutators.setElementWidth(value);
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 1rem;
  text-align: right;
}

label {
  line-height: 2.375rem;
  text-transform: uppercase;
}

</style>
