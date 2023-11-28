<template>
    <div class="search-bar">
        <input type="text" v-model="searchTerm" @keyup.enter="onSearch()" placeholder="책 제목으로 검색" />
        <button @click="onSearch()">검색</button>
    </div>
    <div class="container">
        <div class="box">
            <router-link :to="book.name" v-for="(book, index) in Books" :key="index">
                <div class="books">
                    <img :src="book.img_path" alt="book image" />
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
import { ref, onMounted } from 'vue'
import axios from 'axios'

const firstBooks = ref([])
const searchTerm = ref()
const Books = ref([])

const fetchBooks = async () => {
    try {
        const response = await axios.get('http://localhost:3000')
        firstBooks.value = response.data
        Books.value = [...firstBooks.value]
    } catch (error) {
        console.error(error)
    }
}

onMounted(fetchBooks)

const onSearch = () => {
    if (!searchTerm.value) {
        Books.value = [...firstBooks.value]
    } else {
        Books.value = firstBooks.value.filter((book) => book.name.includes(searchTerm.value))
    }
}
</script>
