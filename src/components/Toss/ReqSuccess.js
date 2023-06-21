import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CircularIndeterminate from '../../pages/Loading/Spinner';
import {
  LoadingContainer,
  LoadingText,
} from '../../pages/Loading/StyleLoading';

export default function ReqSuccess() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/bookings/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        studioId: 1,
        userId: 7,
        startTime: '2023-06-25 14:00:00',
        endTime: '2023-06-25 15:00:00',
        totalPrice: 100,
        totalGuest: 4,
        paymentKey: searchParams.get('paymentKey'),
        amount: searchParams.get('amount'),
        orderId: searchParams.get('orderId'),
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'BOOKING_SUCCESS') {
          fetch(
            `${process.env.REACT_APP_SERVER_HOST}/bookings/${result.data}`,
            {
              method: 'GET',
            }
          )
            .then(res => res.json())
            .then(rep => {
              window.location.href = `/order/res_success?bookingId=${result.data}`;
            });
        }
      });
  }, []);

  return (
    <LoadingContainer>
      <CircularIndeterminate />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
}
