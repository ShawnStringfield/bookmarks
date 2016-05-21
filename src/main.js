import Vue from 'vue'
import Bookmarks from './micros/bookmarks/App'

require('./assets/sass/styles.scss');

new Vue({
    el: 'body',
    components: { 'bookmarks': Bookmarks }
});
