<template>
	<SectionRow mode="full">
		<template #section-title>{{ $t('services.title') }}</template>
		<template #full>
			<div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
				<ServiceTile>
					<template #title>Full-Stack Development</template>
					<template #content>I build complete web applications handling both backend and frontend development. From API design to user interfaces, I deliver end-to-end solutions using modern technologies like Node.js, Java, Vue, React, and TypeScript.</template>
				</ServiceTile>
				<ServiceTile>
					<template #title>Cloud Architecture & System Design</template>
					<template #content>I design and implement scalable cloud architectures on AWS, leveraging services like RDS, SQS, Redis, and Kubernetes. I specialize in microservices architecture, distributed systems, and optimizing for performance and reliability.</template>
				</ServiceTile>
				<ServiceTile>
					<template #title>Performance Optimization & Technical Consulting</template>
					<template #content>I help teams improve code quality, optimize application performance, and implement best practices. From database optimization to CI/CD pipelines, I provide hands-on technical guidance to enhance your development processes.</template>
				</ServiceTile>
			</div>
		</template>
	</SectionRow>
</template>
