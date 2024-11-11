<script>
	import Form from "$lib/components/form.svelte";
</script>

<div class="intro-content">	
	<h1>Welcome to Bear & Sheep Co.! </h1>
	<p>
		We’re all about creating cozy, custom rugs that add a personal touch to any space. Our shop is still under construction, but we’re open for custom inquiries—just fill out the form below, and we’ll help bring your dream rug to life!
	</p>
</div>

<Form />

<style>
	.intro-content {
		padding-top: 80px;
		max-width: 800px;
		margin: 0 auto;
		margin-bottom: 40px;
	}

	.intro-content h1 {
		font-family: var(--font);
		text-transform: uppercase;
		font-size: 75px;
		text-align: center;
		margin-bottom: 10px;
	}

	.intro-content p {
		text-align: center;
		margin-top: 30px;
		font-size: 20px;
		line-height: 26px;
		font-family: var(--font-body);
	}
</style>