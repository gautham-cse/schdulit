<svelte:head>
    <title>Schdulit</title>
</svelte:head>

<script>
    import './styles/page.css'
    import "tailwindcss/tailwind.css";
    import AppBar from "./layouts/appbar/AppBar.svelte";
    import Footer from "./layouts/footer/Footer.svelte";
</script>

<div class="no-scrollbar">
    <AppBar />
    <div class="app-context">
        
    </div>
    <Footer />
</div>