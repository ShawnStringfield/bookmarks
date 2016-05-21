<template>
    <div class="container bookmark-list">
        <div v-for="bookmark in bookmarks">
            <bookmark-item :bookmark="bookmark"></bookmark-item>
        </div>
    </div>
</template>

<script>
    import BookmarkItem from './BookmarkItem';

    export default {
        props: ['bookmarks'],
        components: { 'bookmark-item': BookmarkItem }
    }
</script>
