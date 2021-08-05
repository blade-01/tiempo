import moment from 'moment';
export default {
  methods: {
    isToday(date) {
      return moment(date).format('ddd, D MMM');
    }
  } 
}