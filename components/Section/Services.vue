<template>
	<SectionRow mode="full">
		<template #section-title>Services</template>
		<template #full>
			<div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
				<ServiceTile>
					<template #title>Consulting</template>
					<template #content>I provide expert consulting to help you choose the best technical stack for your
						project,
						tailored to the strengths of your current development team. This ensures smoother
						implementation, higher productivity, and long-term scalability from day one.</template>
				</ServiceTile>
				<ServiceTile>
					<template #title>Tech Leadership</template>
					<template #content>As a seasoned technical leader, I can oversee and guide external development
						teams, ensuring alignment with your business goals, high-quality delivery, and smooth
						collaboration across all project phases.</template>
				</ServiceTile>
				<ServiceTile>
					<template #title>Software Architecture Design</template>
					<template #content>I specialize in designing robust, scalable software architectures that are
						tailored to your business requirements. My focus is on optimizing performance, security, and
						future scalability, ensuring a solid foundation for your technology.</template>
				</ServiceTile>
			</div>
		</template>
	</SectionRow>
</template>