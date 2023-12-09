import { createContext, useContext, useState } from 'react';

const ReservationDataContext = createContext(undefined);

export const ReservationDataProvider = ({ children }) => {
  const [state, setState] = useState({
    reservationString: '',
  });

  return (
    <ReservationDataContext.Provider
      value={{
        ...state,
        setReservationString: newString =>
          setState({ reservationString: newString }),
      }}
    >
      {children}
    </ReservationDataContext.Provider>
  );
};

export const useReservationDataContext = () =>
  useContext(ReservationDataContext);
