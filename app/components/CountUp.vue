<script setup>
const props = defineProps({
  start: {
    type: Number,
    default: 0
  },
  end: Number,
  prefix: {
    type: String,
    default: ""
  },
  suffix: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  },
  duration: {
    type: Number,
    default: 1000
  }
})

const numberRef = ref(props.end)
const prettyNumber = computed(() => {
  return props.prefix + numberRef.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + props.suffix 
})

onMounted(() => {
  let zero;
  function step(timestamp) {
    numberRef.value = Number(props.start) + Math.floor((props.end - props.start) * (timestamp - zero) / props.duration)
    if ((timestamp - zero) / props.duration < 1) {
      requestAnimationFrame(step)
    }
  }
  function first(timestamp) {
    numberRef.value = props.start
    zero = timestamp
    requestAnimationFrame(step)
  }
  requestAnimationFrame(first)
})
</script>

<template>
  <h2 :class="class">{{ prettyNumber }}</h2>
</template>
