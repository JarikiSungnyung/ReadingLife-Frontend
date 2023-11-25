<template>
    <div class="bookbox">
        <img :src="props.book.imgUrl" alt="bookImg" />
        <div class="intros">
            <div class="intro">
                <div class="bookname">
                    <h1>{{ props.book.name }}</h1>
                    <div class="modify">
                        <button @click="clickModify">수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                <p>{{ props.book.author }}</p>
                <p>{{ props.book.category }}</p>
            </div>
            <p>{{ props.book.review }}</p>
        </div>
    </div>
    <div class="commentbox">
        <textarea name="comment" rows="3" placeholder="여러분의 소중한 댓글을 남겨주세요"></textarea>
        <button>댓글 달기</button>
        <div class="comments">
            <div class="comment" v-for="(comment, index) in props.book.comment" :key="index">
                <p>{{ comment }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const emit = defineEmits(['clickModify'])

const props = defineProps({
    isModify: Boolean,
    book: Object,
    clickModify: Function,
})

const clickModify = () => {
    emit('clickModify')
}
</script>
