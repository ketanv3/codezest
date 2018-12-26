<template>
    <div class="home">

        <Header />
        <Skyline />
        <Cards />
        <Footer />

    </div>
</template>

<script lang="ts">

    import { Vue, Component } from 'vue-property-decorator';
    import Header from '@/components/Header.vue'
    import Skyline from '@/components/Skyline.vue'
    import Cards from '@/components/Cards.vue'
    import Footer from '@/components/Footer.vue'

    @Component({
        components: {
            Header,
            Skyline,
            Cards,
            Footer
        }
    })

    export default class Home extends Vue {};

</script>

<style scoped lang="scss">

</style>
