import { addMonths, formatISO } from 'date-fns';

export const getISODate = (date = new Date()) =>
  formatISO(date, { representation: 'date' });

export const getISODateCurrentPlus6Months = () => {
  let datePlus6Months = addMonths(new Date(), 6);
  return getISODate(datePlus6Months);
};
