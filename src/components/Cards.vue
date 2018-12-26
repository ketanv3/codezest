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
        data: function() {
            return {
                portfolioItems: [
                    {
                        slug: "limetray-imprint",
                        thumbnail: "https://www.codezest.in/img/projects/lt-imprint.png",
                        title: "LimeTray Imprint",
                        summary: "POS printing right from your Android device"
                    },
                    {
                        slug: "beatbook",
                        thumbnail: "https://www.codezest.in/img/projects/beatbook-featured.png",
                        title: "Beatbook",
                        summary: "An interactive way to learn your favourite musical instrument, for free!"
                    },
                    {
                        slug: "sightcontrol",
                        thumbnail: "https://www.codezest.in/img/projects/sightcontrol-featured.png",
                        title: "SightControl",
                        summary: "Detect and control smart devices around you over an augmented overlay"
                    },
                    {
                        slug: "touchlock",
                        thumbnail: "https://www.codezest.in/img/projects/touchlock-featured.png",
                        title: "TouchLock",
                        summary: "Interactive door-lock that unlocks with your phone's fingerprint scanner"
                    },
                    {
                        slug: "prope",
                        thumbnail: 'https://www.codezest.in/img/projects/prope-featured.png',
                        title: 'Prope',
                        summary: "Universal protocol for discovering IoT devices around you"
                    }
                ]
            }
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