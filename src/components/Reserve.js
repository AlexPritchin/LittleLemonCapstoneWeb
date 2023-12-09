import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { getISODate, getISODateCurrentPlus6Months } from '../utils/utils';
import restaurant from '../images/Restaurant.jpg';
import AlertConfirm from './AlertConfirm';
import { useReservationDataContext } from '../context/reservationDataContext';
import { getReservationString } from '../helpers/helpers';

const Reserve = () => {
  const { setReservationString } = useReservationDataContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const {
    getFieldProps,
    errors,
    touched,
    handleSubmit,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      date: getISODate(),
      time: '15:00',
      guestsNumber: 1,
      occasion: 'birthday',
    },
    onSubmit: values => {
      const resString = getReservationString(values);
      setReservationString(resString);
      onOpen();
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(getISODate(), 'Date must not be less than today')
        .max(
          getISODateCurrentPlus6Months(),
          'Date must not be greater than today + 6 months'
        )
        .required('This field is required'),
      guestsNumber: Yup.number()
        .typeError('This field must be a number')
        .min(1, 'Guests number must be not less than 1')
        .max(10, 'Guests number must be not greater than 10')
        .required('This field is required'),
    }),
  });

  const onReservationConfirmed = () => navigate('/reservation-successful');

  return (
    <main>
      <Stack
        direction={['column', 'column', 'column', 'row', 'row']}
        pl='40px'
        pt='30px'
        pb='80px'
        justify={['flex-start', 'flex-start', 'flex-start', 'center', 'center']}
        align={['center', 'center', 'center', 'flex-start', 'flex-start']}
      >
        <VStack mr={['0px', '0px', '0px', '150px', '150px']}>
          <Heading size='xl' color='#495E57' mb='50px'>
            Reserve a table
          </Heading>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <VStack spacing={8}>
              <FormControl isInvalid={errors.date && touched.date}>
                <FormLabel htmlFor='date' fontSize='20px'>
                  Date
                </FormLabel>
                <Input
                  id='date'
                  name='date'
                  type='date'
                  min={getISODate()}
                  max={getISODateCurrentPlus6Months()}
                  {...getFieldProps('date')}
                />
                <FormErrorMessage maxW='14vw'>{errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='time' fontSize='20px'>
                  Time
                </FormLabel>
                <Select id='time' name='time' {...getFieldProps('time')}>
                  <option value='15:00'>15:00</option>
                  <option value='16:00'>16:00</option>
                  <option value='17:00'>17:00</option>
                  <option value='18:00'>18:00</option>
                  <option value='19:00'>19:00</option>
                  <option value='20:00'>20:00</option>
                  <option value='21:00'>21:00</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={errors.guestsNumber && touched.guestsNumber}
              >
                <FormLabel htmlFor='guestsNumber' fontSize='20px'>
                  Number of guests
                </FormLabel>
                <NumberInput
                  id='guestsNumber'
                  name='guestsNumber'
                  min={1}
                  max={10}
                  {...getFieldProps('guestsNumber')}
                  onChange={value => setFieldValue('guestsNumber', value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage maxW='14vw'>
                  {errors.guestsNumber}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='occasion' fontSize='20px'>
                  Occasion
                </FormLabel>
                <Select
                  id='occasion'
                  name='occasion'
                  {...getFieldProps('occasion')}
                >
                  <option value='birthday'>Birthday</option>
                  <option value='anniversary'>Anniversary</option>
                  <option value='familyParty'>Family Party</option>
                  <option value='businessMeeting'>Business Meeting</option>
                  <option value='other'>Other</option>
                </Select>
              </FormControl>
              <Button
                type='submit'
                isDisabled={!isValid}
                backgroundColor='#F4CE14'
                _hover={{
                  backgroundColor: '#D4AE04',
                }}
              >
                Reserve
              </Button>
            </VStack>
          </form>
        </VStack>
        <Image
          src={restaurant}
          mt={['40px', '40px', '40px', '10px', '10px']}
          w={['50vw', '43vw', '35vw', '35vw', '35vw']}
          borderRadius='20px'
        />
      </Stack>
      <AlertConfirm
        isOpen={isOpen}
        onClose={onClose}
        confirmCallback={onReservationConfirmed}
      />
    </main>
  );
};

export default Reserve;
