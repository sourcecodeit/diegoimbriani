export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'en',
	messages: {
		en: {
			hero: {
				contact: 'Get in touch',
				schedule: 'Schedule time with me'
			},
			about: {
				title: 'About me',
			},
			skills: {
				title: 'Skills'
			},
			work: {
				title: 'Work experience'
			},
			projects: {
				title: 'Projects',
				subtitle: 'Something I\'m really proud of'
			},
			services: {
				title: 'Services'
			},
			contacts: {
				title: 'About your project',
				subtitle: 'Get in touch'
			}
		},
		it: {
			hero: {
				contact: 'Contattami',
				schedule: 'Prenota un incontro'
			},
			about: {
				title: 'Chi sono',
			},
			skills: {
				title: 'Competenze'
			},
			work: {
				title: 'Esperienza lavorativa'
			},
			projects: {
				title: 'Progetti',
				subtitle: 'Qualcosa di cui sono davvero orgoglioso'
			},
			services: {
				title: 'Servizi'
			},
			contacts: {
				title: 'Il tuo progetto',
				subtitle: 'Contattami'
			}
		}
	}
}))
