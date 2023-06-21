import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CircularIndeterminate from '../../pages/Loading/Spinner';
import {
  LoadingContainer,
  LoadingText,
} from '../../pages/Loading/StyleLoading';

export default function ReqSuccess() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const studioId = params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/bookings/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        studioId: studioId,
        bookingDate: searchParams.get('bookingDate'),
        timeSlot: searchParams.get('timeSlot'),
        totalPrice: searchParams.get('amount'),
        totalGuest: searchParams.get('guest'),
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
              window.location.href = `/order/${studioId}/res_success?bookingId=${result.data}`;
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
