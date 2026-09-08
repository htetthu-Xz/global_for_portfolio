<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { siteContent } from './data/siteContent'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="site-shell min-h-screen bg-[#f4f4f0] text-[#172235]">
    <header class="site-header">
      <div class="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-10">
        <RouterLink to="/" class="brand-mark" @click="closeMenu">
          <span class="brand-symbol">F</span>
          <span class="brand-copy"><strong>GLOBAL F.O.R</strong><small>CO., LTD</small></span>
        </RouterLink>
        <button
          class="rounded border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">Toggle navigation</span><span class="menu-lines"><i></i><i></i></span>
        </button>
        <nav class="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          <RouterLink v-for="item in siteContent.navigation" :key="item.to" :to="item.to" class="nav-link">{{ item.label }}</RouterLink>
          <RouterLink to="/contact" class="header-cta">Start a conversation <span>↗</span></RouterLink>
        </nav>
      </div>
      <nav v-if="menuOpen" class="border-t border-slate-200 px-5 py-4 lg:hidden" aria-label="Mobile navigation">
        <div class="mx-auto flex max-w-7xl flex-col gap-1">
          <RouterLink v-for="item in siteContent.navigation" :key="item.to" :to="item.to" class="mobile-nav-link" @click="closeMenu">{{ item.label }}</RouterLink>
          <RouterLink to="/contact" class="button-primary mt-3 text-center" @click="closeMenu">Start a conversation</RouterLink>
        </div>
      </nav>
    </header>

    <RouterView />

    <footer class="site-footer">
      <div class="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.16em] text-white">{{ siteContent.companyName }}</p>
          <p class="mt-4 max-w-sm text-sm leading-7 text-slate-300">{{ siteContent.positioning }}.</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <a class="footer-link mt-4 block" :href="`tel:${siteContent.contact.phone.replaceAll(' ', '')}`">{{ siteContent.contact.phone }}</a>
          <a class="footer-link mt-2 block" :href="`mailto:${siteContent.contact.email}`">{{ siteContent.contact.email }}</a>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Appointments</p>
          <p v-for="line in siteContent.contact.hours" :key="line" class="mt-2 text-sm text-slate-300">{{ line }}</p>
        </div>
      </div>
      <div class="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">© {{ new Date().getFullYear() }} {{ siteContent.companyName }}</div>
    </footer>
  </div>
</template>
