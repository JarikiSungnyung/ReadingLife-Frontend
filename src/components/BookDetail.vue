<template>
    <div class="bookbox">
        <img :src="props.book.img_path" alt="bookImg" />
        <div class="intros">
            <div class="intro">
                <div class="bookname">
                    <h1>{{ props.book.name }}</h1>
                    <div class="modify">
                        <button @click="clickModify">수정</button>
                        <button @click="clickDelete">삭제</button>
                    </div>
                </div>
                <p>{{ props.book.author }}</p>
                <p>{{ props.book.category }}</p>
            </div>
            <p>{{ props.book.review }}</p>
        </div>
    </div>
    <div class="commentbox">
        <textarea name="comment" rows="3" placeholder="여러분의 소중한 댓글을 남겨주세요" v-model="comment"></textarea>
        <button @click="addComment">댓글 달기</button>
        <div class="comments">
            <div class="comment" v-for="(comment, index) in props.book.comments" :key="index">
                <p>{{ comment }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
import axios from 'axios'

const emit = defineEmits(['clickModify', 'clickDelete', 'commentAdded'])

const props = defineProps({
    isModify: Boolean,
    book: Object,
    clickModify: Function,
})

const comment = ref('')

const clickModify = () => {
    emit('clickModify')
}

const clickDelete = () => {
    emit('clickDelete')
}

const addComment = async () => {
    try {
        const encodedBookName = encodeURIComponent(props.book.name)
        await axios.post(`http://localhost:3000/comment/${encodedBookName}`, { comment: comment.value })
        comment.value = ''
        emit('commentAdded')
    } catch (error) {
        console.error(error)
    }
}
</script>
