<template>
	<div class="mb-20">
		<div class="mb-2">
			<slot name="period" />
		</div>
		<h4 class="text-xl font-bold white text-amber-500">
			<slot name="title" />
		</h4>
		<div class="text-white mb-10 flex gap-2">
			Company:
			<slot name="company" />
		</div>
		<div>
			<slot name="description" />
		</div>
	</div>
</template>