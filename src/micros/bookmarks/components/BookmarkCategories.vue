<template>
    <dropdown
        :item="category"
        :items="categories"
        v-on:item-set="dispatchNewCategoryEvent">
    </dropdown>
</template>

<script>
    import Dropdown from './common/Dropdown';
    import Store from '../../../micros/store/bookmarks.js';

    export default {
        props: ['categories', 'category'],
        components: { 'dropdown': Dropdown },
        methods: {
            dispatchNewCategoryEvent( category ) {
                this.$dispatch( 'on-bookmarkset', category );
            }
        }
    }
</script>
