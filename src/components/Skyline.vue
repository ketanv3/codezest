<template>
    <div class="skyline">
        <div class="tag-line">I love making <span class="highlight">beautiful apps!</span></div>
    </div>
</template>

<script type="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Skyline extends Vue {}

</script>

<style scoped type="scss">

    .skyline {
        text-align: center;
        background: url("../assets/skyline.svg") center bottom / auto 100% repeat-x;
        background-size: cover;
        padding: 100px 32px 160px 32px;
    }

    .tag-line {
        color: #a2a9b4;
        font-weight: 500;
        font-size: 4rem;
        line-height: 1.2em;
    }

    .highlight {
        color: #343b3f;
    }

    @media screen and (max-width: 1000px) {
        .tag-line {
            font-size: 3.6rem;
        }
    }

    @media screen and (max-width: 719px) {
        .tag-line {
            font-size: 3rem;
        }

        .skyline {
            padding: 60px 32px 120px 32px;
        }
    }

</style>