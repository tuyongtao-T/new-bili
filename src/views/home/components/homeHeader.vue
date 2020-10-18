<template>
    <div class="home-header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="search-input">
            <van-search
                    style="height: 12.5vw"
                    v-model="searchText"
                    autofocus
                    shape="round"
                    placeholder="请输入"
            />
        </div>
        <div class="upload">
            <img v-if="imgUrl" :src="imgUrl" alt="">
            <img v-else src="@/assets/default.png" alt="">
            <p>
                下载APP
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-header",
    props: {
        imgUrl: String,
    },
    data() {
        return {
            searchText: ''
        }
    }
}
</script>

<style scoped lang="less">
.home-header {
    height: 12.5vw;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22.22vw;
        cursor: pointer;
        img {
            width: 90%;
        }
    }
    .search-input {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .upload {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
            display: block;
            border-radius: 50%;
            width: 7.61vw;
            height: 7.61vw;
        }
        p {
            width: 15vw;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1.39vw;
            padding: 1.39vw 2.78vw;
            background-color: #fb7299;
            color: white;
            font-size: 13px;
            border-radius: 0.83vw;
        }
    }
}

</style>