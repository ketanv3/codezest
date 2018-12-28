<template>

    <div class="card">
        <router-link :to="cardDetailsUrl">
            <div class="card__content">
                <img class="card__thumbnail" :src="thumbnail"/>
                <div class="card__title">{{ title }}</div>
                <div class="card__summary">{{ summary }}</div>
            </div>
        </router-link>
    </div>

</template>

<script type="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        props: ['slug', 'thumbnail', 'title', 'summary'],
        data() {
            return {
                cardDetailsUrl: "/portfolio/" + this.slug
            }
        }
    })

    export default class Card extends Vue {}

</script>

<style scoped type="scss">

    .card {
        break-inside: avoid;
        overflow: auto;
    }

    .card__content {
        padding: 24px;
        margin-bottom: 40px;
        margin-left: 2px;
        margin-right: 2px;
        background-color: #FFF;
        box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

    .card__thumbnail {
        width: 100%;
    }

    .card__title {
        margin-top: 24px;
        text-align: center;
        line-height: 1.4em;
        color: #343b3f;
        font-weight: 700;
        font-size: 1.4rem;
        transition: 0.1s all linear;
    }

    .card__content:hover > .card__title {
        color: #319FD4;
    }

    .card__summary {
        margin: 8px 0;
        text-align: center;
        line-height: 1.4em;
        font-size: 1rem;
        font-weight: 300;
        color: #595e69;
    }

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 1000px) {
        .card__content {
            margin-bottom: 28px;
        }
    }

    @media screen and (max-width: 719px) {
        .card__content {
            margin-bottom: 24px;
        }
    }

</style>