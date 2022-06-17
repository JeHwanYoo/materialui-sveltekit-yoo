<script lang="ts">
    import Button from '@smui/button'

    let cnt = 0

    function handleClick() {
        cnt++
    }
</script>

<main>
    <Button id="count-button" variant="raised" on:click={handleClick}>Click me!</Button>
    <div id="count-text">{cnt}</div>
</main>
