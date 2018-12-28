<template>
    <div class="loading-container">
        <img src="../assets/spinner.svg" class="loading-spinner" />
    </div>
</template>

<script type="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class LoadingSpinner extends Vue{}

</script>

<style scoped type="scss">

    .loading-container {
        text-align: center;
        padding: 128px 0;
    }

    .loading-spinner {
        width: 64px;
        height: 64px;
    }

</style>