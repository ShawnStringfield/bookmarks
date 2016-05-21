<template>
    <button
        type="button"
        class="btn-delete btn-icon"
        @click="delete">
        <i class="material-icons">delete</i>
    </button>
</template>

<script>
    export default {
        props: ['bookmark'],
        methods: {
            delete() {
                this.$dispatch('on-delete', this.bookmark['.key']);
            }
        }
    }
</script>
