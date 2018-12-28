<template>
    <div class="card-details">
        <Header />

        <div v-if="details == null" class="loading-container">
            <img src="../assets/spinner.svg" class="loading-spinner" />
        </div>

        <div v-else class="content">
            <img class="banner-image" :src="details.banner" />

            <div class="wrapper">
                <div class="title">{{details.title}}</div>
                <div class="tags">
                    <div class="tag" v-for="tag in details.tags">{{tag}}</div>
                </div>

                <div class="description">
                    <p v-for="desc in details.description">{{desc}}</p>
                </div>

                <div class="actions">
                    <div class="action" v-for="action in details.actions">{{action}}</div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script type="ts">

    import { Vue, Component } from 'vue-property-decorator';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    @Component({
        components: {
            Header,
            Footer,
        },
        mounted() {
            const slug = this.$route.params.slug;

            fetch(`/api/${slug}.json`)
                .then(res => res.json())
                .then(res => {
                    this.details = res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        data() {
            return {
                details: null
            }
        }
    })

    export default class CardDetails extends Vue {}

</script>

<style scoped type="scss">

    .content {
        max-width: 960px;
        margin: 0 auto;
    }

    .banner-image {
        width: 100%;
    }

    .wrapper {
        margin: 36px 32px;
    }

    .title {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.4em;
    }

    .tags {
        color: #a2a9b4;
        font-size: 1rem;
        line-height: 1.4em;
        font-weight: 400;
        margin-top: 4px;
    }

    .tag {
        display: inline-block;
    }

    .tag + .tag {
        margin-left: 0.8rem;
    }

    .tag + .tag::before {
        content: '•';
        margin-right: 0.8rem;
    }

    .description {
        font-weight: 300;
        color: #595e69;
        font-size: 1rem;
        line-height: 1.4em;
        text-align: justify;
        margin-top: 24px;
    }

    .action {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 5px;
        font-weight: 500;
        font-size: 0.9rem;
        cursor: pointer;
        color: #319FD4;
        transition: 0.1s all linear;
        border: 1px solid #319FD4;
    }

    .action:hover {
        color: #FFF;
        background-color: #319FD4;
    }

    .action:active {
        background-color: #318ec3;
        border: 1px solid #318ec3;
    }

    .action + .action {
        margin-left: 12px;
    }

    .loading-container {
        text-align: center;
        padding: 128px 0;
    }

    .loading-spinner {
        width: 64px;
        height: 64px;
    }

    @media screen and (max-width: 719px) {
        .wrapper {
            margin: 28px 24px;
        }
    }

</style>