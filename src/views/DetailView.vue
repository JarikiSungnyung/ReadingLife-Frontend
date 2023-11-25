<template>
    <div class="bookcontainer">
        <BookDetail v-if="!isModify" :book="book" :isModify="isModify" @clickModify="isModify = true" />
        <BookEdit v-else :book="book" :isModify="isModify" @clickCancel="isModify = false" />
    </div>
</template>

<style scoped>
@import '../css/global.css';
@import '../css/detail.css';
</style>

<script setup>
import { ref } from 'vue'
import BookDetail from '../components/BookDetail.vue'
import BookEdit from '../components/BookEdit.vue'

let isModify = ref(false)

const book = ref({
    name: '이기적 유전자',
    imgUrl: 'https://i.namu.wiki/i/UxD_9cOzH9CXx7S3ySYRLNGbvj6jAQu7U3BBZeJqkmHeakkld0gg7QBLf7VAbT19oSebiELjKjG3XL6KsTnmjxwDtMdZcNI5ktId8p4E8VZm37PL1AQjp8SZQdAQKv97c2msx04vYJDj_CTNyhkEekyAE67N6twYXIzmlWUk1Vo.webp',
    category: '국내도서 > 자연과학 > 생명과학 > 유전자/진화/바이러스',
    author: '리처드 도킨스',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    comment: [
        '좋은  리뷰 감사합니다.',
        '감사합니다.',
        '좋은 하루 보내세요.',
        '좋은  리뷰 감사합니다.',
        '감사합니다.',
        '좋은 하루 보내세요.',
        '좋은  리뷰 감사합니다.',
        '감사합니다.',
        '좋은 하루 보내세요.',
        '좋은  리뷰 감사합니다.',
        '감사합니다.',
        '좋은 하루 보내세요.',
        '좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.좋은 하루 보내세요.',
    ],
})
</script>
