<template>
    <div class="focus form-container">
        <div class="close"@click="close"><i class="material-icons">close</i></div>
        <form>
            <div class="form-group clearfix">
                <bookmark-categories
                    :categories="categories"
                    :category="category"
                    v-on:on-bookmarkset="assignCategoryToBookmark">
                </bookmark-categories>
            </div>

            <div class="form-group">
                <label for="">Url</label>
                <input type="text" class="form-control" v-model="bookmark.url">
            </div>

            <div class="form-group">
                <label for="">Title</label>
                <input type="text" class="form-control" v-model="bookmark.title">
            </div>

            <div class="form-group">
                <label for="">Description</label>
                <textarea class="form-control" v-model="bookmark.description"></textarea>
            </div>
            <button v-if="mode === 'add'" type="button" class="btn" @click="createBookmark">Create Bookmark</button>
            <button v-if="mode === 'edit'" type="button" class="btn" @click="close">Save</button>
        </form>
    </div>
</template>

<script>
    import Store from '../../../micros/store/bookmarks.js';
    import BookmarkCategories from './BookmarkCategories';

    export default {
        data() {
            return {
                category: this.bookmark.category
            }
        },
        props: ['bookmark', 'categories', 'mode'],
        components: {
            'bookmark-categories': BookmarkCategories
        },
        methods: {
            assignCategoryToBookmark(category) {
                this.bookmark.category = category
            },
            createBookmark() {
                Store.createBookmark(this.bookmark);
                this.$dispatch('on-close');
                this.bookmark = {};
            },
            close() {
                Store.updateBookmark(this.bookmark);
                this.$dispatch('on-close');
            }
        }
    }
</script>
