<script setup>
import PageIntro from '../components/PageIntro.vue'
import { siteContent } from '../data/siteContent'
</script>

<template>
  <main>
    <PageIntro eyebrow="Services" title="Skills, language, and employment pathways." description="Our services connect training and overseas employment preparation with the needs of people and organizations." />
    <section class="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2">
        <article class="feature-card border-t-4 border-[#a51f2b]"><p class="card-number">01</p><h2>Japanese language training</h2><p>Supporting the acquisition of advanced skills and specialized knowledge for employment opportunities in Japan.</p></article>
        <article class="feature-card border-t-4 border-slate-700"><p class="card-number">02</p><h2>Employment agency services</h2><p>Human-resource placement for Japan, Singapore, and other countries through relevant employment pathways.</p></article>
      </div>
      <div class="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p class="eyebrow">{{ siteContent.services.japaneseHeading }}</p><h2 class="section-title">Connecting people with opportunity.</h2></div>
        <div class="japanese-panel"><p v-for="paragraph in siteContent.services.japanese" :key="paragraph" class="mt-4 first:mt-0 leading-8">{{ paragraph }}</p></div>
      </div>
    </section>
  </main>
</template>
