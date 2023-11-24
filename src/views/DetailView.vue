<template>
    <div class="bookcontainer">
        <div class="bookbox" v-if="!isModify">
            <img :src="book.imgUrl" alt="bookImg" />
            <div class="intros">
                <div class="intro">
                    <div class="bookname">
                        <h1>{{ book.name }}</h1>
                        <div class="modify">
                            <button @click="clickModify()">수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                    <p>{{ book.author }}</p>
                    <p>{{ book.category }}</p>
                </div>
                <p>{{ book.review }}</p>
            </div>
        </div>
        <div class="bookbox" v-else>
            <div class="image-upload" @dragover.prevent @drop="onDrop($event)" @click="openFileChooser">
                <input type="file" ref="fileInput" @change="onFileChange($event)" />
                <img v-if="previewImage" :src="previewImage" alt="preview" />
                <div v-else class="image-upload-placeholder">
                    <span>드래그 앤 드롭 또는 클릭하여 이미지 선택</span>
                </div>
            </div>
            <div class="intros">
                <div class="intro">
                    <div class="bookname">
                        <h1><input type="text" :placeholder="book.name" /></h1>
                        <div class="modify">
                            <button>완료</button>
                            <button @click="clickCancel()">취소</button>
                        </div>
                    </div>
                    <p><input type="text" :placeholder="book.author" /></p>
                    <p><input type="text" :placeholder="book.category" /></p>
                </div>
                <p class="textarea"><textarea name="review" :placeholder="book.review"></textarea></p>
            </div>
        </div>
        <div class="commentbox" v-if="!isModify">
            <textarea name="comment" rows="3" placeholder="여러분의 소중한 댓글을 남겨주세요"></textarea>
            <button>댓글 달기</button>
            <div class="comments">
                <div class="comment" v-for="(comment, index) in book.comment" :key="index">
                    <p>{{ comment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../css/global.css';
@import '../css/detail.css';
</style>

<script setup>
import { ref } from 'vue'
const previewImage = ref(null)
const fileInput = ref(null)
let isModify = ref(false)

const openFileChooser = () => {
    fileInput.value.click()
}

const onFileChange = (e) => {
    const file = e.target.files[0]
    previewImage.value = URL.createObjectURL(file)
}

const onDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    previewImage.value = URL.createObjectURL(file)
}

const clickModify = () => {
    isModify.value = true
}

const clickCancel = () => {
    isModify.value = false
}

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
