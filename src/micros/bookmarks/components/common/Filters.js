import moment from 'moment';
import Vue from 'vue';

Vue.filter('date', function(value) {
    var date = moment(value);
    return date.fromNow();
});
