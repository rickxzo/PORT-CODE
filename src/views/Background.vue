<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="text-white px-16 pt-10 pb-32">

    <!-- TITLE -->
    <div>
      <h1
        class="text-[clamp(4rem,4vw,4rem)] font-medium tracking-tight leading-none"
      >
        A timeline, perhaps
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
    year: "2023 — Present",
    title: "B.Tech (IT)",
    org: "Techno Main Saltlake",
    description:
      "Learning the necessary skills for being an IT professional.",
  },
  {
    year: "2023 - Present",
    title: "B.S. (Data Science & Applications)",
    org: "I.I.T. Madras",
    description:
      "A second online degree to diversify skill set and undertake practical learning.",
  },
  {
    year: "Aug 2024 - Dec 2024",
    title: "AI Trainer - DSA & SQL",
    org: "Shipd by Datacurve",
    description:
      "Created complex DSA & SQL problems & solutions to be used as training data for LLMs capable of advanced reasoning.",
  },
  {
    year: "Jul 2025 - Aug 2025",
    title: "Buildcore Engineer Fellowship",
    org: "Headstarter",
    description:
      "Worked on creating AI Agents capable of solving industry problems faced by client startups.",
  },
  {
    year: "Aug 2025 - Sep 2025",
    title: "AI Trainer - SWE",
    org: "Shipd by Datacurve",
    description:
      "Created complex full-stack projects to be used as training data for client organization's LLM.",
  },
];
</script>
