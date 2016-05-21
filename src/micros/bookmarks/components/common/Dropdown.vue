<template>

    <div class="dropdown-container">
        <div class="btn-group">
            <button type="button" class="btn btn-text" @click="toggle = !toggle">{{selected_item}}</button>
            <button type="button" v-bind:class="classObject" class="btn btn-dropdown" @click="toggle = !toggle"></button>
        </div>

        <div v-if="toggle">
            <ul class="dropdown-list">

                <li>
                    <i class="material-icons">playlist_add</i>
                    <span @click="displayCategoryInput">Add New Category</span>
                </li>

                <li v-show="displayCategoryField">
                    <input
                        @change="dispatchChangeEventAndSetButtonText(category)"
                        placeholder="Add Category"
                        class="form-control"
                        type="text"
                        v-model="category">
                </li>
                <li v-for="item in items" @click="dispatchChangeEventAndSetButtonText(item)">{{item.category_name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected_item: this.item || 'Make a Selection',
                toggle: false,
                category: '',
                displayCategoryField: false
            }
        },
        props: ['items', 'item'],
        methods: {
            dispatchChangeEventAndSetButtonText(item) {
                this.selected_item = item.category_name ? item.category_name : item;
                this.toggle = false;
                this.category = '';
                this.$dispatch('item-set', item)
            },
            displayCategoryInput() {
                this.displayCategoryField = true;
            }
        },
        computed: {
            classObject: function() {
                return {
                    'down': this.toggle === false,
                    'up': this.toggle === true
                }
            }
        }
    }
</script>
