<template>
	<SectionRow>
		<template #section-title>Work experience</template>
		<template #title></template>
		<template #content>
			<WorkExperience>
				<template #period>From Mar 2018 - Current</template>
				<template #title>Technical Lead, Fractional CTO</template>
				<template #company>
					Volta Analytics SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Technical Lead and Fractional CTO. We work with Node, Java, Vue and Nuxt</li>
						<li>Built a complex SaaS for managing large quantities of data processed in real time</li>
						<li>Integration of services as RDS, SQS, Elasticsearch, CloudWatch, and Redis for data ingestion
							and processing</li>
						<li>I designed and developed the prototype in 2018. In 2020 the product was acquired and entered
							the market, since then I have been managing a development team. Leading transition from
							monolithic to microservices</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Mar 2020 - Sept 2023</template>
				<template #title>CTO</template>
				<template #company>
					Source Code SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Created and managed a small software agency with 2 employees and several contractors</li>
						<li>Worked for several clients, mainly to build web applications such as CRMs and CMSs</li>
						<li>Designed the architecture and led the development of an NFT Marketplace</li>
						<li>Extensively worked with PHP (Laravel), Node.js, Vue, React, TypeScript, MySQL and MongoDB
						</li>
						<li>Open Source contributor (Fastify, ApexCharts)</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Jan 2015 - Dec 2019</template>
				<template #title>Full Stack Developer</template>
				<template #company>
					Freelancer
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Created and marketed a few successful WordPress plugins</li>
						<li>Worked for many companies to develop websites and web applications using Java, Node.js and
							c#</li>
					</ul>
				</template>
			</WorkExperience>

			<WorkExperience>
				<template #period>From Sep 2002 - Dec 2014</template>
				<template #title>Full Stack Developer</template>
				<template #company>
					Cubica SRL, Zero Computing SRL, Mediatica SRL
				</template>
				<template #description>
					<ul class="list-disc list-inside">
						<li>Designed and developed one of the first headless CMSs, called Ruds, I used c# and JavaScript
							(jQuery)</li>
						<li>Developed dozens of websites based on Ruds CMS</li>
						<li>Ported Ruds to Node.js and AngularJS</li>
						<li>Designed and developed a CMS based on CakePHP and jQuery</li>
						<li>Website development in PHP and MySQL using OOP and different frameworks: Code Igniter,
							CakePHP
						</li>
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