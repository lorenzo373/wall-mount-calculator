import Vue from 'vue';

export const store = Vue.observable({
  numberOfElements: 1,
  wallWidth: 150,
  elementWidth: 50,
});

export const mutators = {
  setNumberOfElements(value: number): void {
    store.numberOfElements = value;
  },
  setWallWidth(value: number): void {
    store.wallWidth = value;
  },
  setElementWidth(value: number): void {
    store.elementWidth = value;
  },
};
