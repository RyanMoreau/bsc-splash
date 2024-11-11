<script lang="ts">
    import { form } from "./formSchema";

    async function handleFormSubmission(e: Event) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        await fetch('api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
</script>

<form on:submit={handleFormSubmission}>
    <div>
    {#each form as input}
        {#if input.type === 'textarea'}
            <span class={input.size}>
                <label for={input.name}>{input.label}</label>
                <textarea name={input.name} id={input.name} class={input.size} required></textarea>
            </span>
        {:else}
            <span class={input.size}>
                <label for={input.name}>{input.label}</label>
                <input required type={input.type} name={input.name} id={input.name} class={input.size} />
            </span>
        {/if}
    {/each}
    </div>
    <button type="submit">
        Send Message
    </button>
</form>


<style>
    form {
        display: flex;
        max-width: 800px;
        width: 75%;
        margin: 0 auto;
    }

    label {
        font-family: var(--font);
        font-size: 30px;
        margin-top: 30px;
    }
</style>
