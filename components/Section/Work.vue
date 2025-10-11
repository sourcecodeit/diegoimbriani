<template>
	<SectionRow>
		<template #section-title>Work experience</template>
		<template #title></template>
		<template #content>
			<WorkExperience>
				<template #period>From Mar 2018 - Current</template>
				<template #title>Full Stack Developer | Technical Lead</template>
				<template #company>
					Volta Analytics SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Designed and developed the architecture of a SaaS platform (Java + Vue) handling millions of daily records</li>
						<li>Responsible for backend development (Spring, MySQL, Redis, SQS, Node.js services) and portions of the Vue frontend</li>
						<li>Focus on performance optimization, security, and code quality</li>
						<li>Led the evolution of the system towards a microservices architecture</li>
						<li>Introduced TimescaleDB for time-series data management</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Mar 2020 - Sept 2023</template>
				<template #title>Full Stack Developer | Technical Lead</template>
				<template #company>
					Source Code SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Founded and managed a small software development agency, designing and building web applications for dozens of clients</li>
						<li>Developed full-stack solutions using Laravel, Node.js, React, and Vue, with MySQL, MongoDB, and PostgreSQL databases</li>
						<li>Managed containerized environments (Docker, Kubernetes), CI/CD pipelines, and deployments on AWS and DigitalOcean</li>
						<li>Strengthened ability to deliver end-to-end projects: from technical analysis to production release</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Jan 2015 - Feb 2020</template>
				<template #title>Full Stack Developer</template>
				<template #company>
					Freelance
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Worked as a freelance developer for various clients, handling backend and frontend development on PHP, Node.js, and .NET stacks</li>
						<li>Developed and maintained several open source WordPress plugins, installed on tens of thousands of websites</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Aug 2008 - Dec 2015</template>
				<template #title>Full Stack Developer</template>
				<template #company>
					LSVmultimedia SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Worked as a full-stack developer in .NET/C# environment, building a proprietary headless CMS used for most company projects</li>
						<li>Handled software architecture, data modeling, and performance optimization</li>
						<li>Built solid foundations in software design and design patterns, essential for subsequent projects</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Sept 2007 - Aug 2008</template>
				<template #title>Full Stack Developer</template>
				<template #company>
					Cubica SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Worked as a full stack developer, primarily with PHP</li>
						<li>Built a headless CMS in CakePHP for Enrico Letta's website</li>
						<li>Gained skills in advanced CSS and jQuery usage</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Sept 2006 - Sept 2007</template>
				<template #title>Full Stack Developer</template>
				<template #company>
					Zero Computing SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Contributed to the development of Repubblica.it's classifieds portal, working with PHP and MySQL</li>
						<li>Handled backend performance, caching, full-text search with Solr, and code versioning</li>
						<li>Gained experience in team development on high-traffic projects</li>
					</ul>
				</template>
			</WorkExperience>
		</template>
	</SectionRow>
</template>
<style scoped>
li {
	@apply mb-2;
}
</style>
