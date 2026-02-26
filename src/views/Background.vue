<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="text-white px-16 pt-10 pb-32">

    <!-- TITLE -->
    <div>
      <h1
        class="text-[clamp(4rem,8vw,7rem)] font-medium tracking-tight leading-none"
      >
        BACKGROUND
      </h1>

      <div class="h-px bg-white/10 mt-6 w-full"></div>
    </div>

    <!-- ENTRIES -->
    <div class="mt-24 space-y-28">

      <div
        v-for="item in background"
        :key="item.title"
        class="grid grid-cols-12 gap-10 group transition-all duration-500 hover:translate-x-2"
      >
        <!-- YEAR COLUMN -->
        <div class="col-span-3 text-white/40 text-sm tracking-widest">
          {{ item.year }}
        </div>

        <!-- CONTENT COLUMN -->
        <div class="col-span-9 max-w-3xl">

          <h3 class="text-3xl font-medium mb-2 group-hover:text-white transition">
            {{ item.title }}
          </h3>

          <div class="text-white/60 mb-5">
            {{ item.org }}
          </div>

          <p class="text-white/80 leading-relaxed">
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
  {
    year: "2022 — 2026",
    title: "B.Tech in Information Technology",
    org: "XYZ University",
    description:
      "Focused on backend engineering, applied AI, distributed systems, and machine learning research.",
  },
  {
    year: "2023",
    title: "AI Fellowship",
    org: "Some Fellowship Org",
    description:
      "Selected for advanced applied AI research and system-level model experimentation.",
  },
];
</script>
