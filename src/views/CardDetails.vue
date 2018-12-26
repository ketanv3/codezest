<template>
    <div class="card-details">
        <Header />

        <div class="content">
            <img class="banner-image" src="https://www.codezest.in/img/projects/zzd-full.png" />

            <div class="wrapper">
                <div class="title">ZipZap Deals</div>
                <div class="tags">Startup&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Mobile</div>

                <div class="description">
                    <p>Founded in 2014 by young university students, ZipZap Deals is a startup that deals in the space of providing exclusive discounts to students at hundreds of outlets around the city.</p>
                    <p>My role here was to single-handedly reinvent their entire platform from scratch. Read more about the work I did in this organisation by clicking on the Resume link on top-right of this page.</p>
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
            Footer
        }
    })

    export default class CardDetails extends Vue {};

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

    .description {
        font-weight: 300;
        color: #595e69;
        font-size: 1rem;
        line-height: 1.4em;
        text-align: justify;
        margin-top: 24px;
    }

    @media screen and (max-width: 719px) {
        .wrapper {
            margin: 28px 24px;
        }
    }

</style>