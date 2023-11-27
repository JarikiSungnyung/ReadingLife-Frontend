<template>
    <div class="modal">
        <div class="modal-content">
            <div class="content">
                <h1>
                    <slot name="question"> </slot>
                </h1>
                <p>
                    <slot name="details"> </slot>
                </p>
                <div class="btns">
                    <button class="confirm-btn" @click="confirm">예</button>
                    <button class="cancel-btn" @click="cancel">아니요</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
    emit('confirm')
}

const cancel = () => {
    emit('cancel')
}
</script>

<style scoped>
@import '../css/global.css';
@import '../css/modal.css';
</style>
