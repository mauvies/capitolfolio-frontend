import moment from 'moment';

const formatDate = (date: string) => {
  return moment(date, 'YYYY-MM-DD').fromNow();
};
export default formatDate;
