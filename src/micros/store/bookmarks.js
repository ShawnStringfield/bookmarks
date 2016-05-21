import Vue from 'vue';
import Firebase from 'firebase';
import VueFire from 'vuefire';
import VueResource from 'vue-resource';

const db = new Firebase('https://ss-bookmarks.firebaseio.com/');

Vue.use(VueFire);

let store = {};
store.db = db;

db.bookmarks = db.child('bookmarks');
db.categories = db.child('categories');

store.createBookmark = function(bookmark) {
    //-- TODO:: we are dealing with categories all wrong here.
    //-- We need to make the category call separate from the
    //-- category call to keep it all decoupled

    var bookmarkRef = db.bookmarks.push();
    var bookmarkKey = bookmarkRef.key();
    var catkey = bookmark.category['.key'] || false;

    var bookmarkData = {
        title: bookmark.title,
        url: bookmark.url,
        category: catkey || bookmark.category,
        description: bookmark.description,
        date: Firebase.ServerValue.TIMESTAMP
    }

    bookmarkRef.set(bookmarkData);

    // If we already have a category, we don't
    // want to create a new one. We just want
    // to add the bookmark to it.
    if ( catkey ) {
        store.addExistingCategory(bookmark, bookmarkKey, catkey)
    }

    // If we do not have a category yet, we set a new one.
    if (!catkey) {
        store.addNewCategory(bookmark, bookmarkKey)
    }
}

store.addExistingCategory = function(bookmark, bookmarkKey, catkey) {
    var bookmarkObj = {};
    bookmarkObj[bookmarkKey] = true;
    db.categories.child(catkey).child('bookmarks').update(bookmarkObj)
}

store.addNewCategory = function(bookmark, bookmarkKey) {
    var category = db.categories.child(bookmark.category);
    var bookmarkObj = {}
    category.set({category_name: bookmark.category});

    bookmarkObj[bookmarkKey] = true;
    category.child('bookmarks').set(bookmarkObj);
}

store.updateBookmark = function(bookmark) {
    // Grab the bookmark key and update the new bookmark
    // Then add the bookmark key to the category object
    // Here is the point where a multi update will be fitting
    var bookmarkKey = bookmark['.key'];
    var catkey = bookmark.category['.key'];
    var bookmarkContainer = {}
    bookmarkContainer['/categories/' + catkey + '/bookmarks/' + bookmarkKey] = true;
    db.update(bookmarkContainer);
}

store.deleteBookmark = function( key ) {
    db.bookmarks.child(key).remove();
}

store.setFavorite = function( fav ) {
    var key = fav.key;
    var favorite = fav.toggle
    db.child('bookmarks').child(key).child('favorite').set(favorite);
}

export default store;
