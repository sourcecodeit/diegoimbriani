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
			}
		},
		it: {
			welcome: 'Benvenuto'
		}
	}
}))
