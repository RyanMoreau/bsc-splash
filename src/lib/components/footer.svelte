<script>
    import Logo from './logo.svelte'
</script>

<footer>
    <div class="container flex">
        <div class="left-column"></div>
        <div class="center footer-logo">
            <a href="/">
                <Logo />
            </a>
        </div>
        <div class="right-column"></div>
        <div class="bottom-row">
            Made with 🩷 by Bear & Sheep Co.
        </div>
    </div>
</footer>


<style>
    footer {
        width: 100%;
        display: flex;
        background-color: var(--yellow);
        padding: 60px 0;
        justify-content: center;
        margin-top: 60px;
    }

    footer .left-column,
    footer .right-column {
        width: calc(33.33% - 20px);
        display: flex;
        flex-direction: column;
    }

    footer .footer-logo {
        width: 200px;
    }

    @media(max-width: 992px) {
        footer {
            flex-direction: column;
            border-radius: calc(var(--border-radius) * 2) calc(var(--border-radius) * 2) 0 0;
        }

        footer .footer-logo {
            margin: 40px auto 20px;
        }

        footer .left-column,
        footer .right-column {
            width: calc(100% - 120px);
            text-align: center;
            padding: 0 60px;
        }
    }

    .bottom-row {
        display: flex;
        margin-top: 20px;
        font-family: var(--font-body);
    }
</style>