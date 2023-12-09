import { format, parseISO } from 'date-fns';

export const getReservationString = ({
  date,
  time,
  guestsNumber,
  occasion,
}) => {
  let dateObject = parseISO(date);
  let dateHumanString = format(dateObject, 'EEEE, LLLL dd, yyyy');
  return `a table on ${dateHumanString} at ${time} for ${guestsNumber} guests for the ${occasion}.`;
};
