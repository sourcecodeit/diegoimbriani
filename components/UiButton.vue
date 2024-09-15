<template>
	<a :href="to" :target="blank ? '_blank' : '_self'"
		class="px-4 py-2 border flex items-center justify-center transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer"
		:class="{
			'bg-amber-500 border-amber-500 text-black hover:bg-slate-100 hover:text-black hover:border-slate-100': highlight,
			'bg-zinc-700/90 border-white': !highlight,
		}">
		<slot />
	</a>
</template>

<script setup>
const props = defineProps({
	highlight: {
		type: Boolean,
		default: false,
	},
	to: {
		type: String,
		default: null,
	},
	blank: {
		type: Boolean,
		default: false,
	},
});
</script>