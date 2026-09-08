<script setup>
import PageIntro from '../components/PageIntro.vue'
import { siteContent } from '../data/siteContent'
</script>

<template>
  <main>
    <PageIntro eyebrow="Contact us" title="Let’s speak about your next step." description="Call or email to book an appointment with Global F.O.R Co., Ltd." />
    <section class="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
      <div class="space-y-8">
        <div><p class="eyebrow">Hours & appointments</p><p v-for="line in siteContent.contact.hours" :key="line" class="mt-3 text-lg text-slate-700">{{ line }}</p></div>
        <div><p class="eyebrow">Contact details</p><a class="contact-link" :href="`tel:${siteContent.contact.phone.replaceAll(' ', '')}`">{{ siteContent.contact.phone }}</a><a class="contact-link" :href="`mailto:${siteContent.contact.email}`">{{ siteContent.contact.email }}</a></div>
        <div><p class="eyebrow">Visit us</p><p class="leading-8 text-slate-600">{{ siteContent.contact.address }}</p><a :href="siteContent.contact.mapUrl" target="_blank" rel="noreferrer" class="mt-5 inline-flex font-semibold text-[#a51f2b] hover:underline">Open map →</a></div>
      </div>
      <div class="min-h-80 bg-[#e9edf2] p-8"><p class="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Yangon, Myanmar</p><p class="mt-6 text-2xl font-semibold leading-9 text-slate-900">Room No(6-D), 6th Floor<br />Pannita Mini Condo</p><p class="mt-6 text-slate-600">Hlaing Township, Yangon, Myanmar, 11051</p></div>
    </section>
  </main>
</template>
