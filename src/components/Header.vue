<template>
    <div class="header">
        <RouterLink to="/"><div class="title">CodeZest</div></RouterLink>
        <div class="links">
            <a class="link" href="https://blog.codezest.in">Blog</a>
            <a class="link" href="https://www.codezest.in/Ketan%20Verma%20-%20Resume.pdf">Resume</a>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Header extends Vue {}

</script>

<style scoped lang="scss">

    .header {
        max-width: 960px;
        margin: 24px auto;
        display: flex;
    }

    .title {
        font-size: 2rem;
        line-height: 2rem;
        font-weight: 700;
        margin: 12px 36px;
        color: #343b3f;
        transition: 0.1s all linear;
    }

    .title:hover {
        color: #319FD4;
    }

    .links {
        flex: 1;
        text-align: right;
        line-height: 2rem;
        margin: 12px 36px 12px 0;
    }

    .link {
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        color: inherit;
        line-height: 2rem;
        transition: 0.1s all linear;
    }

    .link + .link {
        margin-left: 1.4rem;
    }

    .link:hover {
        color: #319FD4;
    }

    a {
        text-decoration: none;
    }

</style>
