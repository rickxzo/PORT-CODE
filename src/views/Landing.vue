<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <section class="text-white px-12 pt-20 grid grid-cols-12">
    <!-- BIG NAME -->
    <div class="col-span-6 flex flex-col justify-center">
      <h1 class="text-[clamp(4rem,9vw,8rem)] font-medium leading-none tracking-tight">
        GOURAV<br />
        JANA
      </h1>
    </div>

    <!-- META INFO -->
    <div class="col-span-6 flex items-end justify-end">
      <div class="text-[12px] tracking-widest uppercase text-white/80 pr-24">
        <div>SW & AI Engineer</div>
        <div>West Bengal, Ind AT&nbsp;&nbsp;{{ time }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('')

function updateTime() {
  time.value = new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  })
}

let interval: number

onMounted(() => {
  updateTime()
  interval = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
