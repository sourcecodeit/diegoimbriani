<template>
	<div class="border-b border-zinc-700 sticky top-0 z-50 bg-white/90 text-zinc-900">
		<div class="flex inner-w xl:py-8 py-4 gap-10 items-center justify-between">
			<h1 class="xl:text-xl text-sm font-bold uppercase">Diego Imbriani</h1>
			<UiButton highlight class="uppercase hidden xl:block">Get in touch</UiButton>

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