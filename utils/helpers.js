module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    ifEquals: (arg1, arg2,) => {
      return (arg1 == arg2) ? true : false ;
    }
  };
  