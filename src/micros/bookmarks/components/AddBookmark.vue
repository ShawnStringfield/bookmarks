<template>
    <div>
        <button
            @click="show"
            type="button"
            class="btn-add btn-icon">
                <i class="material-icons">add_circle</i>
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            show() {
                this.$dispatch('on-add', {}, 'add');
            }
        }
    }
</script>
