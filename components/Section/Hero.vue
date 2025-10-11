<template>
	<div class="flex xl:flex-row flex-col xl:items-center items-start xl:gap-10 gap-2 w-full px-4">
		<img src="@/assets/images/diego-imbriani.jpg"
			class="w-[120px] h-[120px] xl:w-[300px] xl:h-[300px] rounded-full" />
		<div>
			<p class="xl:text-3xl text-xl font-bold uppercase xl:mb-10">Diego Imbriani</p>
			<h2 class="xl:text-[40px] text-2xl text-zinc-400 uppercase font-bold xl:mb-4">Senior Full Stack Developer</h2>
			<h2 class="xl:text-[40px] text-2xl text-zinc-400 uppercase font-bold xl:mb-10">Cloud & System Design</h2>
			<div class="flex gap-4 mt-4 flex-wrap">
				<UiButton to="#contacts" highlight>{{ $t('hero.contact') }}
					<Icon name="mdi:arrow-top-right" />
				</UiButton>
				<ScheduleButton />
				<UiButton to="https://www.linkedin.com/in/diegoimbriani/" blank>LinkedIn
				</UiButton>
			</div>
		</div>
	</div>
</template>
