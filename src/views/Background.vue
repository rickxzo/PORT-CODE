<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="text-white px-12 grid grid-cols-12 gap-8">

    <!-- LEFT SIDE TITLE -->
    <div class="col-span-5 pl-4">
      <h1
        class="text-[clamp(3rem,7vw,6rem)] font-medium tracking-tight leading-none mt-3"
      >
        BACKGROUND
      </h1>
    </div>

    <!-- RIGHT SIDE CONTENT -->
    <div class="col-span-7 pr-10">

      <div class="space-y-20 mt-16">

        <div
          v-for="item in background"
          :key="item.title"
          class="border-t border-white/10 pt-10 group"
        >
          <!-- Year -->
          <div class="text-sm text-white/40 tracking-widest mb-4">
            {{ item.year }}
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-medium mb-1 group-hover:text-white transition">
            {{ item.title }}
          </h3>

          <!-- Org -->
          <div class="text-white/60 mb-4">
            {{ item.org }}
          </div>

          <!-- Description -->
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
  {
    year: "2022 — 2026",
    title: "B.Tech in Information Technology",
    org: "Your University Name",
    description:
      "Focused on backend engineering, applied AI, and distributed systems.",
  },
];
</script>
