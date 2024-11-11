<script>
    import '$lib/typography/fonts.css'
    import './reset.css'
    import './styles.css'
	
    import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
    <title>Bear & Sheep Co.</title>
</svelte:head>

<main>
    <slot />
</main>

<Footer />