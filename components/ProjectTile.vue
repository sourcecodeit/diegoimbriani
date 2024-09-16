<template>
	<div class="flex flex-col gap-4">
		<img :src="image" alt="title" />
		<h3 class="text-white">{{ title }}</h3>
		<p>{{ description }}</p>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	image: String,
	title: String,
	description: String,
});
</script>