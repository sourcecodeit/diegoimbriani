<template>
	<SectionRow id="projects">
		<template #section-title>Projects</template>
		<template #title>Something I'm really proud of</template>
		<template #content>
			<p class="mb-2">A list of recent projects I've been involved in.</p>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<ProjectTile :image="imgVolta" title="Volta Analytics"
					description="Energy and production Analytics dashboard" />
				<ProjectTile :image="imgPolylai" title="WP PolylAi" description="AI Translation WordPress Plugin" />
				<ProjectTile :image="imgMarketplace" title="NOKU Marketplace"
					description="A Node.js/React NFTs marketplace" />
			</div>
		</template>
	</SectionRow>
</template>
<script setup>
import imgPolylai from '@/assets/images/wp-polylai.jpg';
import imgMarketplace from '@/assets/images/marketplace.jpg';
import imgVolta from '@/assets/images/volta-analytics.jpg';
</script>