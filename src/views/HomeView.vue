<template>
    <div class="search-bar">
        <input type="text" v-model="searchTerm" @keyup.enter="onSearch()" placeholder="책 제목으로 검색" />
        <button @click="onSearch()">검색</button>
    </div>
    <div class="container">
        <div class="box">
            <router-link :to="book.name" v-for="(book, index) in Books" :key="index">
                <div class="books">
                    <img :src="book.imgUrl" alt="bookImg" />
                    <h3>{{ book.name }}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
@import '../css/global.css';
@import '../css/home.css';
</style>

<script setup>
import { ref } from 'vue'

const firstBooks = ref([
    {
        name: '이기적 유전자',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: '이기적 유전자',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: '이기적 유전자',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: '이기적 유전자',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test2',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test3',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test4',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test5',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test6',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test7',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test8',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test9',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test10',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test11',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
    {
        name: 'test12',
        imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
        category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    },
])

const searchTerm = ref()
const Books = ref([...firstBooks.value])

const onSearch = () => {
    if (!searchTerm.value) {
        Books.value = [...firstBooks.value]
    } else {
        Books.value = firstBooks.value.filter((book) => book.name.includes(searchTerm.value))
    }
}
</script>
