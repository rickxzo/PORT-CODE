<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <section class="text-white px-12 grid grid-cols-12 gap-8">
    <!-- LEFT: INFO TEXT -->
    <div class="col-span-5 pl-4">
      <!-- Title -->
      <h1 class="text-[clamp(3rem,7vw,6rem)] font-medium tracking-tight leading-none mb-10 mt-3">
        INFO
      </h1>

      <!-- Body -->
      <div class="space-y-6 text-[18px] leading-relaxed text-white/90 max-w-md mt-24">
        <p>
          I’m <span class="text-white">Gourav Jana</span>, a developer focused on backend systems
          and applied AI. I build reliable, scalable solutions that solve real problems — from APIs
          and full-stack applications to automation and LLM-powered tools.
        </p>

        <p>
          My work sits at the intersection of Python, Flask, Vue, and machine learning, with a
          strong emphasis on clarity, maintainability, and purpose. I enjoy turning abstract ideas
          into systems that actually work.
        </p>

        <p>
          If you’re looking to collaborate, build something meaningful, or simply understand how I
          think, feel free to get in touch.
        </p>
      </div>
    </div>

    <!-- RIGHT: EMPTY IMAGE SPACE (INTENTIONAL) -->
    <div class="col-span-7 flex flex-col items-end justify-between">
      <!-- IMAGE -->
      <div class="w-[500px] max-w-full mr-1">
        <div class="grid grid-cols-3 gap-x-28 gap-y-20 justify-items-center mr-40 mt-10">
          <!-- Vue -->
          <div class="group relative">
            <img
              src="/src/views/icons/Vue2.png"
              class="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
            >
              Vue
            </span>
          </div>

          <div class="group relative">
            <img
              src="/src/views/icons/JS.png"
              class="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              JavaScript
            </span>
          </div>

          <!-- Flask -->
          <!-- Python -->
          <div class="group relative">
            <img
              src="/src/views/icons/Python.png"
              class="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              Python
            </span>
          </div>

          <div class="group relative">
            <img
              src="/src/views/icons/Flask.png"
              class="w-11 h-11 grayscale opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              Flask
            </span>
          </div>

          <!-- JavaScript -->

          <!-- Tailwind -->
          <div class="group relative">
            <img
              src="/src/views/icons/CSS.png"
              class="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              TailwindCSS
            </span>
          </div>

          <!-- LangGraph -->
          <div class="group relative">
            <img
              src="/src/views/icons/langgraph.png"
              class="w-10 h-15 opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              LangGraph
            </span>
          </div>

          <!-- Daytona -->
          <div class="group relative">
            <img
              src="/src/views/icons/Daytona.png"
              class="w-10 h-10 grayscale opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              Daytona
            </span>
          </div>

          <!-- Pinecone -->
          <div class="group relative">
            <img
              src="/src/views/icons/Pine.png"
              class="w-10 h-10 grayscale opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              Pinecone
            </span>
          </div>

          <div class="group relative">
            <img
              src="/src/views/icons/sql.png"
              class="w-10 h-10 opacity-70 group-hover:opacity-100 transition"
            />
            <span
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition"
            >
              MySQL
            </span>
          </div>
        </div>
      </div>

      <!-- CONTACTS -->
      <div
        class="mt-12 mr-8 grid grid-cols-2 gap-x-32 gap-y-8 text-[13px] tracking-widest uppercase text-white/80"
      >
        <div>
          <div class="font-bold">Email ↗</div>
          <div class="opacity-60 normal-case tracking-normal">rickxzo.perz@email.com</div>
        </div>

        <div>
          <div class="font-bold">GitHub ↗</div>
          <div class="opacity-60 normal-case tracking-normal">github.com/rickxzo</div>
        </div>

        <div>
          <div class="font-bold">LinkedIn ↗</div>
          <div class="opacity-60 normal-case tracking-normal">linkedin.com/in/gourav-jana-xzo</div>
        </div>

        <div>
          <div class="font-bold">Resume ↗</div>
          <div class="opacity-60 normal-case tracking-normal">Download PDF</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
