<template>
    <div class="container">
        <LoadingSpinner v-if="portfolioItems == null" />

        <transition name="fade">
            <div v-if="portfolioItems != null" class="cards">
                <Card v-for="item in portfolioItems"
                      :slug="item.slug"
                      :thumbnail="item.thumbnail"
                      :title="item.title"
                      :summary="item.summary" />
            </div>
        </transition>
    </div>
</template>

<script type="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";
    import Card from '@/components/Card.vue'
    import LoadingSpinner from './LoadingSpinner';

    @Component({
        components: {
            Card,
            LoadingSpinner,
        },
        data() {
            return {
                portfolioItems: null
            }
        },
        mounted() {
            fetch("/api/items.json")
                .then(res => res.json())
                .then(res => {
                    this.portfolioItems = res;
                })
                .catch(err => {
                    console.log(err)
                });
        }
    })

    export default class Cards extends Vue {}

</script>

<style scoped type="scss">

    .container {
        margin-top: -2px;
        border-top: 2px solid #f3f3f7;
        background-color: #f3f3f7;
    }

    .cards {
        max-width: 960px;
        margin: 0 auto;
        padding: 24px;

        column-count: 2;
        column-gap: 36px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    @media screen and (max-width: 1000px) {
        .cards {
            column-gap: 24px;
        }
    }

    @media screen and (max-width: 719px) {
        .cards {
            column-count: 1;
            padding: 20px;
        }
    }

</style>