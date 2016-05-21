<template>
    <div class="toolbar">
        <delete-bookmark
            :bookmark="bookmark"
            v-on:on-delete="deleteBookmark">
        </delete-bookmark>

        <favorite-bookmark
            :key="bookmark['.key']"
            :is-favorite="bookmark['favorite']"
            v-on:on-fav="favorite">
        </favorite-bookmark>

        <edit-bookmark
            :bookmark="bookmark">
        </edit-bookmark>
    </div>
</template>

<script>
import Store from '../../../micros/store/bookmarks.js';
import EditBookmark from './common/EditBookmark';
import DeleteBookmark from './common/DeleteBookmark';
import FavoriteBookmark from './common/Favorite';

export default {
    props: ['bookmark'],
    components: {
        'edit-bookmark': EditBookmark,
        'delete-bookmark': DeleteBookmark,
        'favorite-bookmark': FavoriteBookmark
    },
    methods: {
        //-- TODO:: Add Category
        edit(bookmark) {
            Store.editBookmark(bookmark)
        },
        deleteBookmark(key) {
            Store.deleteBookmark(key);
        },
        favorite(fav) {
            Store.setFavorite(fav);
        }
    }
}
</script>
