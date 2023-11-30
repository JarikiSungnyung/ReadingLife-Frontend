<template>
    <div class="bookcontainer">
        <BookDetail v-if="!isModify" :book="book" :isModify="isModify" @clickModify="isModify = true" @clickDelete="openModal('정말 삭제하시겠습니까?', '삭제한 리뷰는 복구할 수 없습니다.', 'deleted')" @commentAdded="fetchBook" />
        <BookEdit
            v-else
            :book="book"
            :isModify="isModify"
            @clickComplete="openModalWithData('정말 완료하시겠습니까?', '수정된 정보는 복구할 수 없습니다.', 'modified', $event)"
            @clickCancel="openModal('정말 취소하시겠습니까?', '취소하시면 모든 변경 사항을 잃게됩니다.', 'cancelled')"
        />
    </div>
    <ConfirmModal v-if="isModalOpen" @confirm="confirm" @cancel="cancel">
        <template #question>{{ modalContent.title }}</template>
        <template #details>{{ modalContent.details }}</template>
    </ConfirmModal>
</template>

<style scoped>
@import '../css/global.css';
@import '../css/detail.css';
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import BookDetail from '../components/BookDetail.vue'
import BookEdit from '../components/BookEdit.vue'
import ConfirmModal from '../components/ModalItem.vue'

const router = useRouter()
let isModify = ref(false)
let isModalOpen = ref(false)
let modalContent = ref({ title: '', details: '', action: '' })
let book = ref({})

const fetchBook = async () => {
    const bookName = router.currentRoute.value.params.book
    try {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/${bookName}`)
        book.value = response.data
    } catch (error) {
        console.error(error)
    }
}

onMounted(fetchBook)

const openModal = (title, details, action) => {
    modalContent.value = { title, details, action }
    isModalOpen.value = true
}

const openModalWithData = (title, details, action, data) => {
    modalContent.value = { title, details, action, data }
    isModalOpen.value = true
}

const confirmDelete = async () => {
    try {
        const encodedBookName = encodeURIComponent(book.value.name)
        await axios.delete(`${process.env.VUE_APP_BACKEND_URL}/${encodedBookName}`)
        router.push('/')
    } catch (error) {
        console.error(error)
    }
}

const confirmEdit = async (data) => {
    try {
        const encodedBookName = encodeURIComponent(book.value.name)
        await axios.put(`${process.env.VUE_APP_BACKEND_URL}/${encodedBookName}`, data)
        console.log('Book successfully updated')
        await fetchBook()
        router.push('/')
    } catch (error) {
        console.error(error)
    }
}

const confirm = async () => {
    if (modalContent.value.action === 'deleted') {
        await confirmDelete()
    } else if (modalContent.value.action === 'modified') {
        await confirmEdit(modalContent.value.data)
    } else if (modalContent.value.action === 'cancelled') {
        cancel()
        isModify.value = false
        await fetchBook()
    }
}

const cancel = () => {
    isModalOpen.value = false
}
</script>
