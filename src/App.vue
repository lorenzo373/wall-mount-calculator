<template>
  <div id="app">
    <b-container class="full-container">
      <b-row class="column">
        <b-col>
          <WallView />
          <Measurements />
        </b-col>
        <b-col>
          <Controls />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WallView from './components/WallView.vue';
import Controls from './components/Controls.vue';
import Measurements from './components/Measurements.vue';

@Component({
  components: {
    WallView,
    Controls,
    Measurements,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, #FFF, #ccc);
}

.full-container {
  height: 100%;
}

.row.column {
  height: 100%;
  flex-direction: column;
}

@keyframes pop-in {
  0% {
    transform: translateY(-10px) scale(1.2);
    opacity: 0;
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.pop-enter-active {
  animation: pop-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  /* opacity: 0; */
}

</style>
