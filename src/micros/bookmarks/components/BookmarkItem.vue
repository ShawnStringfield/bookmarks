<template>
    <div class="bookmark">
        <h4><a href="http://{{bookmark.url}}" target="_blank">{{bookmark.title}}</a></h4>
        <p>{{bookmark.url}}</p>
        <p>{{bookmark.description}}</p>
        <p>{{bookmark.date | date}}</p>
        <toolbar :bookmark="bookmark"></toolbar>
    </div>
</template>

<script>
    import Toolbar from './Toolbar';
    import filters from './common/Filters';

    export default {
        props: ['bookmark'],
        components: { 'toolbar': Toolbar }
    }
</script>
