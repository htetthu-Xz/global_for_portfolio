<script setup>
import PageIntro from '../components/PageIntro.vue'
import { siteContent } from '../data/siteContent'
</script>

<template>
  <main>
    <PageIntro eyebrow="Our members" title="The people behind Global F.O.R Co., Ltd." description="A young professional team working together toward shared goals." />
    <section class="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="member in siteContent.members" :key="member[0]" class="border border-slate-200 bg-white p-6"><div class="mb-6 grid h-16 w-16 place-items-center bg-[#e9edf2] text-xl font-semibold text-[#a51f2b]">{{ member[0].charAt(0) }}</div><h2 class="font-semibold text-slate-900">{{ member[0] }}</h2><p class="mt-2 text-sm text-slate-500">{{ member[1] }}</p></article>
      </div>
    </section>
  </main>
</template>
