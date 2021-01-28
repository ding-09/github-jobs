// a function that accepts a date in string format
// and returns a relative time format using momentjs

const moment = require('moment');

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const relativeDate = moment(date).fromNow();
  const relativeDateArr = relativeDate.split(' ');
  let formattedDate = '';
  relativeDateArr[0] === 'a' || relativeDateArr[0] === 'an'
    ? (formattedDate += '1')
    : (formattedDate += relativeDateArr[0]);
  formattedDate += relativeDateArr[1][0];

  return formattedDate;
};

export default formatDate;
