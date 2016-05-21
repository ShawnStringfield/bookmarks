<template>
    <bookmark-add
        :showmodal="show_modal"
        v-on:on-add="showModal">
    </bookmark-add>

    <bookmark-form
        v-if="show_modal"
        v-on:on-close="closeModal"
        :mode="mode"
        :categories="categories"
        :bookmark="bookmark">
    </bookmark-form>

    <bookmark-list
        :bookmarks="bookmarks"
        v-on:on-edit="showModal">
    </bookmark-list>
</template>

<script>
    import Store from '../../micros/store/bookmarks.js';
    import BookMarkAdd from './components/AddBookmark';
    import BookmarkForm from './components/BookmarkForm';
    import BookmarkList from './components/BookmarkList';

    export default {
        data() {
            return {
                store: Store,
                show_modal: false,
                mode: '',
                bookmark: null
            }
        },
        components: {
            'bookmark-add': BookMarkAdd,
            'bookmark-form': BookmarkForm,
            'bookmark-list': BookmarkList
        },
        firebase: {
            bookmarks: Store.db.child('bookmarks'),
            categories: Store.db.child('categories')
        },
        methods: {
            closeModal() {
                this.show_modal = false;
            },
            showModal(bookmark, mode) {
                this.bookmark = bookmark || {};
                this.mode = mode;
                this.show_modal = true;
            }
        }
    }
</script>
