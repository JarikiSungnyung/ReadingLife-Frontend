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
                    <h1><input type="text" :placeholder="props.book.name" /></h1>
                    <div class="modify">
                        <button>완료</button>
                        <button @click="clickCancel">취소</button>
                    </div>
                </div>
                <p><input type="text" :placeholder="props.book.author" /></p>
                <p><input type="text" :placeholder="props.book.category" /></p>
            </div>
            <p class="textarea"><textarea name="review" :placeholder="props.book.review"></textarea></p>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const emit = defineEmits(['clickCancel'])

const props = defineProps({
    isModify: Boolean,
    book: Object,
    clickCancel: Function,
})

const previewImage = ref(null)
const fileInput = ref(null)

const clickCancel = () => {
    emit('clickCancel')
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
