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
                        <h1><input type="text" v-model="title" placeholder="제목" /></h1>
                        <div class="modify">
                            <button @click="openCompleteModal">완료</button>
                            <button @click="openCancelModal">취소</button>
                        </div>
                    </div>
                    <p><input type="text" v-model="author" placeholder="저자" /></p>
                    <p><input type="text" v-model="category" placeholder="카테고리" /></p>
                </div>
                <p class="textarea"><textarea name="review" v-model="review" placeholder="리뷰"></textarea></p>
            </div>
        </div>
    </div>
    <Modal v-if="isCompleteModalOpen" @close="closeCompleteModal" @confirm="completeReview" @cancel="closeCompleteModal">
        <template #question>
            <h2>완료하시겠습니까?</h2>
        </template>
        <template #details>
            <p>리뷰 내용은 추후에 수정할 수 있습니다.</p>
        </template>
    </Modal>

    <Modal v-if="isCancelModalOpen" @close="closeCancelModal" @confirm="cancelReview" @cancel="closeCancelModal">
        <template #question>
            <h2>취소하시겠습니까?</h2>
        </template>
        <template #details>
            <p>취소하면 모든 변경 사항을 잃게 됩니다.</p>
        </template>
    </Modal>
</template>

<style scoped>
@import '../css/global.css';
@import '../css/write.css';
</style>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' // axios import
import Modal from '../components/ModalItem.vue'

const router = useRouter()
const previewImage = ref(null)
const fileInput = ref(null)
const isCompleteModalOpen = ref(false)
const isCancelModalOpen = ref(false)
const title = ref('')
const author = ref('')
const category = ref('')
const review = ref('')
const file = ref(null) // 파일을 저장할 ref 추가

const openCompleteModal = () => {
    isCompleteModalOpen.value = true
}

const openCancelModal = () => {
    isCancelModalOpen.value = true
}

const closeCompleteModal = () => {
    isCompleteModalOpen.value = false
}

const closeCancelModal = () => {
    isCancelModalOpen.value = false
}

const completeReview = async () => {
    const formData = new FormData()

    formData.append('img', file.value)
    formData.append('name', title.value)
    formData.append('author', author.value)
    formData.append('category', category.value)
    formData.append('review', review.value)

    const response = await axios.post('http://localhost:3000/create', formData)

    console.log(response.data)

    router.push('/')
}

const cancelReview = () => {
    console.log('cancelled')
    router.push('/')
}

const openFileChooser = () => {
    fileInput.value.click()
}

const onFileChange = (e) => {
    const fileObj = e.target.files[0] // 변수 이름 변경
    previewImage.value = URL.createObjectURL(fileObj)
    file.value = fileObj // 파일 저장
}

const onDrop = (e) => {
    e.preventDefault()
    const fileObj = e.dataTransfer.files[0] // 변수 이름 변경
    previewImage.value = URL.createObjectURL(fileObj)
    file.value = fileObj // 파일 저장
}
</script>
