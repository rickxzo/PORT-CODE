<template>
  <section class="text-white px-12 grid grid-cols-12 gap-8">

    <!-- LEFT -->
    <div class="col-span-4 pl-4">
      <h1 class="text-[clamp(3rem,7vw,6rem)] font-medium tracking-tight leading-none mt-3">
        BACKGROUND
      </h1>
    </div>

    <!-- RIGHT -->
    <div class="col-span-8 relative">

      <!-- Vertical Spine -->
      <div class="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>

      <div class="space-y-24 pl-12 mt-10">

        <div v-for="item in background" :key="item.title" class="relative">

          <!-- Dot -->
          <div class="absolute -left-[7px] top-2 w-3 h-3 bg-white rounded-full"></div>

          <!-- Year -->
          <div class="text-xs tracking-widest text-white/40 mb-3">
            {{ item.year }}
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-medium mb-1">
            {{ item.title }}
          </h3>

          <!-- Org -->
          <div class="text-white/60 mb-3">
            {{ item.org }}
          </div>

          <!-- Desc -->
          <p class="text-white/80 max-w-xl leading-relaxed">
            {{ item.description }}
          </p>

        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
const background = [
  {
    year: "2025 — Present",
    title: "AI Engineer",
    org: "EqoinneAI",
    description:
      "Leading backend systems and AI model deployment. Building scalable infrastructure and mentoring interns.",
  },
  {
    year: "2024",
    title: "Smart India Hackathon Finalist",
    org: "Government of India",
    description:
      "Built ARGO, a marine investigative chatbot for water data analysis and research assistance.",
  },
];
</script>
