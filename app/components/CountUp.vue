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
    default: 4220
  }
})

const numberRef = ref(props.end)
const prettyNumber = computed(() => {
  return props.prefix + numberRef.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + props.suffix 
})

function easeOut(t) {
  t = Math.min(Math.max(t, 0), 1)
  return 1 - (1 - t) ** 3
}

onMounted(() => {
  let zero;
  function step(timestamp) {
    numberRef.value = 
      Number(props.start) 
      + Math.floor(
        (props.end - props.start) * easeOut((timestamp - zero) / props.duration)
      )
    if ((timestamp - zero) / props.duration < 1) {
      requestAnimationFrame(step)
    }
  }
  function first(timestamp) {
    zero = timestamp
    requestAnimationFrame(step)
  }
  requestAnimationFrame(first)
})
</script>

<template>
  <h2 :class="class">{{ prettyNumber }}</h2>
</template>
