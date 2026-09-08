<script setup>
import { siteContent } from '../data/siteContent'
</script>

<template>
  <main>
    <section class="hero-modern">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="hero-kicker"><span></span> Yangon · Myanmar · Since 2014</div>
          <h1>Language.<br /><em>Opportunity.</em><br />Direction.</h1>
          <p class="hero-lead">Supporting people and businesses through Japanese language training and trusted employment agency services.</p>
          <div class="mt-9 flex flex-wrap items-center gap-5">
            <RouterLink to="/services" class="hero-action">Explore our work <span>↗</span></RouterLink>
            <span class="hero-note">Global F.O.R Co., Ltd</span>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-wrap"><img src="/images/asset-003.jpg" alt="Global F.O.R company visual" /></div>
          <div class="hero-stamp"><span>GLOBAL</span><strong>F.O.R</strong><small>CO., LTD</small></div>
          <div class="hero-vertical">人材派遣 · LANGUAGE &amp; CAREER</div>
        </div>
      </div>
      <div class="hero-bottom">
        <span>01 / 05</span><span class="hero-scroll">Scroll to discover <b>↓</b></span><span>Japanese language · Employment</span>
      </div>
    </section>

    <section class="modern-section">
      <div class="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="eyebrow">What we do</p>
          <h2 class="section-title">Two disciplines.<br /><span>One clear direction.</span></h2>
          <p class="mt-7 max-w-sm text-sm leading-7 text-slate-600">We connect language, skills, and opportunity with a professional approach shaped in Myanmar and focused on international futures.</p>
        </div>
        <div class="modern-service-grid">
          <article class="modern-service-card"><span>01</span><div><h3>Japanese language training</h3><p>Preparation that supports skill development and specialized knowledge for overseas opportunities.</p><RouterLink to="/services">Discover <b>↗</b></RouterLink></div></article>
          <article class="modern-service-card dark"><span>02</span><div><h3>Employment agency services</h3><p>Human-resource placement focused on Japan, Singapore, and other destinations.</p><RouterLink to="/services">Discover <b>↗</b></RouterLink></div></article>
        </div>
      </div>
    </section>

    <section class="manifesto-section">
      <div class="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p class="eyebrow text-red-300">{{ siteContent.home.heading }}</p>
          <h2 class="manifesto-title">Professionalism is not a promise. <em>It is a practice.</em></h2>
        </div>
        <div class="space-y-5 text-base leading-8 text-slate-300">
          <p v-for="paragraph in siteContent.home.english" :key="paragraph">{{ paragraph }}</p>
          <RouterLink to="/about" class="inline-flex font-semibold text-white hover:text-red-300">Read about the company <span class="ml-2">↗</span></RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
