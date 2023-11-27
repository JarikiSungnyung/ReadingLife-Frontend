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
.modal {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    width: 35%;
    height: 200px;
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btns {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.confirm-btn,
.cancel-btn {
    margin-top: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.confirm-btn {
    background-color: #4caf50;
    color: white;
}

.cancel-btn {
    background-color: #f44336;
    color: white;
}

.confirm-btn:hover {
    background-color: #45a049;
}

.cancel-btn:hover {
    background-color: #da190b;
}
</style>
