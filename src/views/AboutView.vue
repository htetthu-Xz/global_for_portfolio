<script setup>
import PageIntro from '../components/PageIntro.vue'
import { siteContent } from '../data/siteContent'
</script>

<template>
  <main>
    <PageIntro eyebrow="About us" title="A dynamic team guided by trust, diligence, and integrity." description="Global F.O.R Co., Ltd is committed to professionalism, accountability, quality, and teamwork." />
    <section class="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p class="eyebrow">Our values / 弊社の強み</p>
      <div class="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="value in siteContent.about.values" :key="value[0]" class="bg-white p-7"><h2 class="font-semibold text-slate-900">{{ value[0] }}</h2><p class="mt-2 text-sm text-slate-500">{{ value[1] }}</p></article>
      </div>
      <div class="mt-20 grid gap-12 lg:grid-cols-2">
        <div><p class="eyebrow">Company vision</p><h2 class="section-title">A credible and reliable overseas recruitment agency of choice worldwide.</h2><p class="mt-6 leading-8 text-slate-600">{{ siteContent.about.vision }}</p></div>
        <div class="japanese-panel"><p class="text-sm font-semibold text-[#a51f2b]">弊社のビジョン</p><p v-for="line in siteContent.about.japaneseVision" :key="line" class="mt-4 leading-8">{{ line }}</p></div>
      </div>
    </section>
  </main>
</template>
