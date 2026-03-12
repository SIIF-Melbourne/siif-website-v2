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
  },
  delay: {
    type: Number,
    default: 0
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
  const duration = props.duration + props.delay
  let zero;
  function step(timestamp) {
    // progress is a 0-1 value, based on how far along the animation is
    const progress = (timestamp - zero) / duration
    numberRef.value = Number(props.start) + Math.floor((props.end - props.start) * easeOut(progress))
    if (progress < 1) {
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
