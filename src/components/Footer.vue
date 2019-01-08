<template>

    <div class="footer">
        <div class="footer__content">
            <div class="credits">
                Crafted with
                <svg style="vertical-align: bottom; margin: 0 8px;" fill="#D770AD" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                </svg>
                Ketan Verma
            </div>

            <div class="social">
                <a class="icon-link" target="_blank" href="https://www.linkedin.com/in/ketanv3"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a class="icon-link" target="_blank" href="https://instagram.com/ketanv3"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a class="icon-link" target="_blank" href="https://facebook.com/ketan9495"><i class="fa fa-facebook-f" aria-hidden="true"></i></a>
                <a class="icon-link" target="_blank" href="https://plus.google.com/+KetanVerma1"><i class="fa fa-google" aria-hidden="true"></i></a>
                <a class="icon-link" target="_blank" href="https://github.com/ketanv3"><i class="fa fa-github" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>

</template>

<script type="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Footer extends Vue {}

</script>

<style scoped type="scss">

    .footer {
        background-color: #FFF;
    }

    .footer__content {
        max-width: 960px;
        margin: 0 auto;
        padding: 32px;
        display: flex;
        font-size: 1rem;
        line-height: 1.4em;
        font-weight: 300;
        color: #595e69;
        box-sizing: border-box;
    }

    .credits {
        flex: 2;
    }

    .social {
        flex: 1;
        text-align: right;
    }

    .fa {
        font-size: 1.2rem;
        line-height: 1.4em;
        width: 1.4em;
        text-align: center;
        vertical-align: top;
    }

    .icon-link {
        text-decoration: none;
        color: #595e69;
        transition: 0.1s all linear;
    }

    .icon-link:hover {
        color: #319FD4;
    }

    .icon-link + .icon-link {
        margin-left: 4px;
    }

    @media screen and (max-width: 719px) {

        .footer__content {
            flex-direction: column;
        }

        .credits {
            text-align: center;
        }

        .social {
            margin-top: 16px;
            text-align: center;
        }

    }


</style>