<template>
  <div class="p__ring_tones">
    <div class="ring_tones_panel">
      <ring-radio-panel title="WORK" :ringOptions="workOptions" :value="workSelectedRing"></ring-radio-panel>
      <ring-radio-panel title="BREAK" :ringOptions="breakOptions" :value="breakSelectedRing">></ring-radio-panel>
    </div>
  </div>
</template>

<script>
import RingRadioPanel from '@/components/toolsCom/RingRadioPanel.vue';
export default {
  data() {
    return {
      workOptions: [{ value: 'none' }, { value: 'default' }, { value: 'alarm' }, { value: 'alert' }, 
        { value: 'beep' }, { value: 'bell' }, { value: 'bird' }, { value: 'bugle' }, { value: 'digital' }, 
        { value: 'drop' }, { value: 'horn' }, { value: 'music' }, { value: 'ring' }, { value: 'warning' }, 
        { value: 'whistle' }],
      breakOptions: [{ value: 'none' }, { value: 'default' }, { value: 'alarm' }, { value: 'alert' }, 
        { value: 'beep' }, { value: 'bell' }, { value: 'bird' }, { value: 'bugle' }, { value: 'digital' }, 
        { value: 'drop' }, { value: 'horn' }, { value: 'music' }, { value: 'ring' }, { value: 'warning' }, 
        { value: 'whistle' }],
      workSelectedRing: 'default',
      breakSelectedRing: 'alert'
    }
  },
  components: {
    RingRadioPanel
  }
};
</script>

<style lang="scss">
.p__ring_tones {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  height: 100%;
  .ring_tones_panel {
    width: 100%;
    max-width: 445px;
  }
}
</style>
