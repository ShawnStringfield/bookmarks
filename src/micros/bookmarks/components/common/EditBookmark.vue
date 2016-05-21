<template>
    <button
        class="btn btn-icon"
        type="button"
        @click="edit">
            <i class="material-icons">edit</i>
    </button>
</template>

<script>
    export default {
        props: ['bookmark'],
        methods: {
            edit() {
                this.$dispatch('on-edit', this.bookmark, 'edit');
            }
        }
    }
</script>
