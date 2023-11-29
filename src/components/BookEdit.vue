<template>
    <div class="bookbox">
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
                    <h1><input type="text" name="name" :placeholder="props.book.name" /></h1>
                    <div class="modify">
                        <button @click="clickComplete">완료</button>
                        <button @click="clickCancel">취소</button>
                    </div>
                </div>
                <p><input type="text" name="author" :placeholder="props.book.author" /></p>
                <p><input type="text" name="category" :placeholder="props.book.category" /></p>
            </div>
            <p class="textarea"><textarea name="review" :placeholder="props.book.review"></textarea></p>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
    isModify: Boolean,
    book: Object,
})

const emit = defineEmits(['clickComplete', 'clickCancel'])

const previewImage = ref(null)
const fileInput = ref(null)
const file = ref(null)

const openFileChooser = () => {
    fileInput.value.click()
}

const onFileChange = (e) => {
    const fileObj = e.target.files[0]
    previewImage.value = URL.createObjectURL(fileObj)
    file.value = fileObj
}

const onDrop = (e) => {
    e.preventDefault()
    const fileObj = e.dataTransfer.files[0]
    previewImage.value = URL.createObjectURL(fileObj)
    file.value = fileObj
}

const clickComplete = async () => {
    const formData = new FormData()
    let isEmpty = true

    const file = fileInput.value.files[0]
    if (file) {
        isEmpty = false
        formData.append('img', file)
    }
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        if (input.type == 'file') {
            return
        } else if (input.value) {
            isEmpty = false
            formData.append(input.name, input.value)
        } else {
            formData.append(input.name, input.placeholder)
        }
    })

    const textarea = document.querySelector('textarea')
    if (textarea.value) {
        isEmpty = false
        formData.append(textarea.name, textarea.value)
    } else {
        formData.append(textarea.name, textarea.placeholder)
    }

    if (isEmpty) {
        alert('변경사항이 없습니다.')
        return
    }

    emit('clickComplete', formData)
}

const clickCancel = () => {
    emit('clickCancel')
}
</script>
