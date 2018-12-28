<template>
    <div class="container">
        <div class="cards">

            <Card v-for="item in portfolioItems"
                  :slug="item.slug"
                  :thumbnail="item.thumbnail"
                  :title="item.title"
                  :summary="item.summary" />

        </div>
    </div>
</template>

<script type="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";
    import Card from '@/components/Card.vue'

    @Component({
        components: {
            Card
        },
        data() {
            return {
                portfolioItems: []
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