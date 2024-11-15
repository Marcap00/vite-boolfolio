<script>
export default {
    data() {
        return {

        }
    },
}

</script>

<template>
    <div class="loader"></div>
</template>

<style lang="scss" scoped>
/* HTML: <div class="loader"></div> */
.loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background:
        radial-gradient(farthest-side, #ffffff 94%, #0000) top/8px 8px no-repeat,
        conic-gradient(#0000 30%, #ffffff);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: l13 1s infinite linear;
    /* Centering */
    position: absolute;
    top: 50%;
    left: 50%;
}

@keyframes l13 {
    100% {
        transform: rotate(1turn)
    }
}
</style>