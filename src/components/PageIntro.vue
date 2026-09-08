<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <section class="border-b border-slate-200 bg-white">
    <div class="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">{{ title }}</h1>
      <p v-if="description" class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{{ description }}</p>
    </div>
  </section>
</template>
