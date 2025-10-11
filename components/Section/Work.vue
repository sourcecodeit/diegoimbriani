<template>
	<SectionRow>
		<template #section-title>{{ $t('work.title') }}</template>
		<template #title></template>
		<template #content>
			<div v-if="locale === 'en'">
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
			</div>

			<div v-if="locale === 'it'">
				<WorkExperience>
					<template #period>Da Mar 2018 - Presente</template>
					<template #title>Full Stack Developer | Technical Lead</template>
					<template #company>
						Volta Analytics SRL
					</template>
					<template #description>
						<ul class="list-disc list-inside">
							<li>Ho progettato e sviluppato l'architettura di un SaaS (Java + Vue) con milioni di record giornalieri</li>
							<li>Mi occupo del backend (Spring, MySQL, Redis, SQS, servizi in Node.js) e di parti del frontend in Vue</li>
							<li>Curo performance, sicurezza e qualità del codice</li>
							<li>Ho guidato l'evoluzione del sistema verso una struttura a microservizi</li>
							<li>Ho introdotto TimescaleDB per la gestione dei dati time-series</li>
						</ul>
					</template>
				</WorkExperience>

				<WorkExperience>
					<template #period>Da Mar 2020 - Set 2023</template>
					<template #title>Full Stack Developer | Technical Lead</template>
					<template #company>
						Source Code SRL
					</template>
					<template #description>
						<ul class="list-disc list-inside">
							<li>Ho fondato e gestito una piccola agenzia di sviluppo software, progettando e realizzando applicazioni web per decine di clienti</li>
							<li>Ho sviluppato soluzioni full-stack utilizzando Laravel, Node.js, React e Vue, con database MySQL, MongoDB e PostgreSQL</li>
							<li>Mi sono occupato della gestione di ambienti containerizzati (Docker, Kubernetes), pipeline CI/CD e deploy su AWS e DigitalOcean</li>
							<li>Ho consolidato la capacità di realizzare progetti end-to-end: dall'analisi tecnica al rilascio in produzione</li>
						</ul>
					</template>
				</WorkExperience>

				<WorkExperience>
					<template #period>Da Gen 2015 - Feb 2020</template>
					<template #title>Full Stack Developer</template>
					<template #company>
						Freelance
					</template>
					<template #description>
						<ul class="list-disc list-inside">
							<li>Ho lavorato come sviluppatore freelance per diversi clienti, occupandomi di backend e frontend su stack PHP, Node.js e .NET</li>
							<li>Ho sviluppato e mantenuto diversi plugin open source per WordPress, installati su decine di migliaia di siti web</li>
						</ul>
					</template>
				</WorkExperience>

				<WorkExperience>
					<template #period>Da Ago 2008 - Dic 2015</template>
					<template #title>Full Stack Developer</template>
					<template #company>
						LSVmultimedia SRL
					</template>
					<template #description>
						<ul class="list-disc list-inside">
							<li>Ho lavorato come sviluppatore full-stack in ambiente .NET/C#, realizzando un CMS headless proprietario utilizzato per la maggior parte dei progetti aziendali</li>
							<li>Ho curato l'architettura software, la modellazione dei dati e l'ottimizzazione delle performance</li>
							<li>Ho acquisito solide basi di progettazione e design pattern, fondamentali per i progetti successivi</li>
						</ul>
					</template>
				</WorkExperience>

				<WorkExperience>
					<template #period>Da Set 2007 - Ago 2008</template>
					<template #title>Full Stack Developer</template>
					<template #company>
						Cubica SRL
					</template>
					<template #description>
						<ul class="list-disc list-inside">
							<li>Ho lavorato come sviluppatore full stack, principalmente con PHP</li>
							<li>Ho realizzato un headless CMS in CakePHP per la realizzazione del sito di Enrico Letta</li>
							<li>Ho acquisito skill riguardo l'uso avanzato di CSS e jQuery</li>
						</ul>
					</template>
				</WorkExperience>

				<WorkExperience>
					<template #period>Da Set 2006 - Set 2007</template>
					<template #title>Full Stack Developer</template>
					<template #company>
						Zero Computing SRL
					</template>
					<template #description>
						<ul class="list-disc list-inside">
							<li>Ho partecipato allo sviluppo del portale di annunci di Repubblica.it, lavorando su PHP e MySQL</li>
							<li>Mi sono occupato di performance backend, caching, ricerche full-text con Solr e versionamento del codice</li>
							<li>Ho acquisito esperienza nello sviluppo in team su progetti ad alto traffico</li>
						</ul>
					</template>
				</WorkExperience>
			</div>
		</template>
	</SectionRow>
</template>
<script setup>
const { locale } = useI18n()
</script>
<style scoped>
li {
	@apply mb-2;
}
</style>
