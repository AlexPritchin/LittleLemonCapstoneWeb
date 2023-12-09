import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

import { useReservationDataContext } from '../context/reservationDataContext';

const AlertConfirm = ({ isOpen, onClose, confirmCallback }) => {
  const { reservationString } = useReservationDataContext();
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Reserve a table</AlertDialogHeader>

          <AlertDialogBody>
            You want to reserve {reservationString} Is this correct?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              backgroundColor='#F4CE14'
              _hover={{
                backgroundColor: '#D4AE04',
              }}
              onClick={() => {
                onClose();
                confirmCallback();
              }}
              ml='30px'
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertConfirm;
