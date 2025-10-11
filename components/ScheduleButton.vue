<template>
	<UiButton @click="schedule" highlight>{{ $t('hero.schedule') }}
		<Icon name="mdi:calendar" />
	</UiButton>
</template>
<script setup>
function schedule() {
	Calendly.initPopupWidget({ url: 'https://calendly.com/source-code/call-1' })
}
</script>