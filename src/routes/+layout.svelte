<script>
    import '$lib/typography/fonts.css'
    import './reset.css'
    import './styles.css'
	
    import Footer from '$lib/components/footer.svelte';
</script>

<main>
    <slot />
</main>

<Footer />