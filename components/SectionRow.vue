<template>
	<section class="section-row w-full pt-10">
		<div class="flex flex-col items-start w-full mb-20 top-[140px] inner-w">
			<SubTitle class="mb-10 xl:mb-0 section-title">
				<slot name="section-title" />
			</SubTitle>
			<div class="xl:grid grid-cols-2 xl:mt-10 w-full">
				<div></div>
				<div>
					<TextBlock>
						<template #title>
							<slot name="title" />
						</template>
						<slot name="content" />
					</TextBlock>
				</div>
			</div>
			<div v-if="mode === 'full'">
				<slot name="full" />
			</div>
		</div>
	</section>
</template>
<script setup>
const props = defineProps({
	mode: {
		type: String,
		default: 'default',
	},
});
</script>