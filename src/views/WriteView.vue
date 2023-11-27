<template>
    <div class="createcontainer">
        <div class="createbox">
            <div class="image-upload" @dragover.prevent @drop="onDrop($event)" @click="openFileChooser">
                <input type="file" ref="fileInput" @change="onFileChange($event)" />
                <img v-if="previewImage" :src="previewImage" alt="preview" />
                <div v-else class="image-upload-placeholder">
                    <span>드래그 앤 드롭 또는 클릭하여 이미지 선택</span>
                </div>
            </div>
            <div class="edits">
                <div class="edit">
                    <div class="bookname">
                        <h1><input type="text" placeholder="제목" /></h1>
                        <div class="modify">
                            <button>완료</button>
                            <button @click="clickCancel()">취소</button>
                        </div>
                    </div>
                    <p><input type="text" placeholder="저자" /></p>
                    <p><input type="text" placeholder="카테고리" /></p>
                </div>
                <p class="textarea"><textarea name="review" placeholder="리뷰"></textarea></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../css/global.css';
@import '../css/write.css';
</style>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const previewImage = ref(null)
const fileInput = ref(null)

const clickCancel = () => {
    router.go(-1)
}

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
</script>
