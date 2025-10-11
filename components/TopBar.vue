<template>
	<div class="border-b border-zinc-700 sticky top-0 z-50 bg-white/90 text-zinc-900">
		<div class="flex inner-w xl:py-8 py-4 gap-10 items-center justify-between">
			<h1 class="xl:text-xl text-sm font-bold uppercase">Diego Imbriani</h1>

			<div class="flex gap-4 items-center">
				<UiButton to="#contacts" highlight class="uppercase hidden xl:block">Get in touch</UiButton>
				<NuxtLink v-for="current in locales" :key="current" class="border-b-2 uppercase" :class="{
					'border-amber-500': locale === current,
					'border-transparent': locale !== current,
				}" :to="switchLocalePath(current)">{{ current }}</NuxtLink>
			</div>

			<div class="flex gap-2 items-center xl:hidden">
				<UiButton to="tel:+393333474908" highlight>
					<Icon name="mdi:phone" size="24" />
				</UiButton>

				<UiButton to="mailto:diego.imbriani@gmail.com" highlight>
					<Icon name="mdi:email" size="24" />
				</UiButton>
			</div>
		</div>
	</div>
</template>
<script setup>
const { setLocale, locale } = useI18n()

const locales = ['en', 'it']
const switchLocalePath = useSwitchLocalePath()

</script>