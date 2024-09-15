<template>
	<h4 class="text-xl font-bold mb-10 flex flex-col">
		<span class="text-lime-300">
			<Icon name="ph:code-duotone" size="28" />
		</span>
		<slot name="title" />
	</h4>
	<div class="text-zinc-400">
		<slot />
	</div>
</template>