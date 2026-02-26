<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <section class="work-section">
    <!-- Fixed center content -->
    <div class="archive-layer">
      <h1 class="archive-title">CERTIFICATES</h1>
      <p class="archive-sub">Scroll to discover</p>
    </div>

    <!-- Scrollable components layer -->
    <div class="scroll-layer" ref="scrollLayer">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="work-card"
        :style="{ transform: `translateX(${xOffsets[i]}px)` }"
      >
        <div class="h-[90%] w-[100%] bg-black rounded-3xl">
          <img :src="item.image" class="w-full h-full object-cover rounded-3xl" />
        </div>
        <p class="mt-3 ml-3">[ {{i}} ] {{ item.title }} ({{ item.date }})</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const items = ref([
  { image: '/src/views/certs/p1.jpg', title: 'Diploma in Programming', date: 'IITM' },
  { image: '/src/views/certs/p2.jpg', title: 'Agents Course', date: 'HuggingFace' },
  { image: '/src/views/certs/p3.jpg', title: 'Fundamentals of LLMs', date: 'HuggingFace' },
  { image: '/src/views/certs/p4.jpg', title: 'Software Engineer', date: 'Hackerrank' },
  { image: '/src/views/certs/p5.jpg', title: 'Foundation in DS & Programmming', date: 'IITM' },
])

const xOffsets = computed(() =>
  items.value.map((_, i) => {
    const base = 370 // distance from center
    const jitter = Math.random() * 100 - 50 // subtle randomness
    return (i % 2 === 0 ? -base : base) + jitter
  }),
)
import { onMounted, onUnmounted, ref } from 'vue'

const scrollLayer = ref<HTMLDivElement | null>(null)

let rafId: number
const speed = 0.3 // ← adjust scroll speed here

onMounted(() => {
  const el = scrollLayer.value
  if (!el) return

  el.addEventListener('scroll', () => {
    const maxScroll = el.scrollHeight - el.clientHeight

    // If user scrolls to bottom → jump to top
    if (el.scrollTop >= maxScroll) {
      el.scrollTop = 1
    }

    // If user scrolls to top → jump to bottom
    if (el.scrollTop <= 0) {
      el.scrollTop = maxScroll - 1
    }
  })
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.work-section {
  position: relative;
  height: 88.5vh;
  overflow: hidden;
}

/* Fixed ARCHIVE layer */
.archive-layer {
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  pointer-events: none;
}

.archive-title {
  font-size: clamp(4rem, 8.5vw, 8rem);
  font-weight: 400;
  line-height: 1;
}

.archive-sub {
  margin-top: 0.75rem;
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 70px;
}

/* Scrollable layer */
.scroll-layer {
  position: relative;
  z-index: 2;

  height: 120%;
  overflow-y: auto;

  padding-top: 30vh;
  padding-bottom: 120vh;
}

/* Work cards */
.work-card {
  width: 30%;
  height: 50vh;

  margin: 90vh auto;

  border-radius: 1.5rem;

  color: white;
}

/* Hide scrollbar but keep scroll */
.scroll-layer {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE / Edge */
}

.scroll-layer::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
