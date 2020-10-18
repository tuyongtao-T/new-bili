<template>
    <div id="app">
        <router-link to="/"></router-link>
        <router-view/>
    </div>
</template>

<style lang="less">
/*初始化标签样式*/
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}
body {
    background-color: #f4f4f4;
}
body,ul,li {
    margin: 0;
    padding: 0;
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}

</style>
