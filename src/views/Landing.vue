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
    <div class="absolute bottom-0 left-0 w-full px-12 pb-8">
      <div class="flex gap-4 overflow-x-auto scrollbar-hide">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="min-w-[265px] h-[180px] relative bg-neutral-900 rounded-md overflow-hidden"
        >
          <img :src="project.image" class="w-full h-full object-cover opacity-90" />

          <!-- INDEX -->
          <span class="absolute -bottom-6 left-0 text-xs tracking-widest text-white/50">
            [{{ String(i + 1).padStart(2, '0') }}]
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const projects = ref([
  { image: '/src/views/projects/aven.jpg' },
  { image: '/src/views/projects/mad2.jpg' },
  { image: '/src/views/projects/scpm.jpg' },
  { image: '/src/views/projects/float.jpg' },
])

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
