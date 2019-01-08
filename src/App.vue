<template>
    <div id="app">
        <!--<nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>-->

        <router-view/>
    </div>
</template>

<style lang="scss">
    html, body {
        margin: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    #app {
        font-family: 'MuseoSansRounded', Helvetica, Arial, sans-serif;
        color: #343b3f;
    }

    ul {
        margin: 0 0 1em 0;
        padding: 0;
    }

    li {
        margin-left: 1.6em;
    }
</style>
