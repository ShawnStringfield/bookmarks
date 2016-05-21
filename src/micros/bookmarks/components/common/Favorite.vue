<template>
    <button
    class="btn btn-icon"
    type="button">
        <i class="material-icons" @click="toggleEvent">{{toggleFavoriteText}}</i>
    </button>
</template>

<script>
    export default {
        data() {
            return {
                toggle: this.isFavorite,
                toggleFavoriteText: (this.isFavorite === true) ? 'favorite' : 'favorite_border'
            }
        },
        props: ['key', 'isFavorite'],
        methods: {
            toggleEvent() {
                //-- We are just returning a truthy value here
                //-- It's up to the store to do something with it.
                this.toggle = !this.toggle;
                this.$dispatch('on-fav', {toggle: this.toggle, key: this.key} );
            }
        }
    }
</script>
