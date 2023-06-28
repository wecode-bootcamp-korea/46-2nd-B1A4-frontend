import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { CloseBtn, Container, PostCodeBox } from './StylePostCode';

const PostCode = ({
  setIsPopupOpen,
  setIsAddrEntered,
  studioInfo,
  setStudioInfo,
  setMainAddress,
}) => {
  const handlePostCode = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setMainAddress(fullAddress);
    setStudioInfo({
      ...studioInfo,
      addressCity: data.sido,
      addressNeighborHood: data.bname2,
    });
    setIsPopupOpen(false);
    setIsAddrEntered(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };

  return (
    <Container>
      <PostCodeBox>
        <DaumPostcode onComplete={handlePostCode} />
      </PostCodeBox>
      <CloseBtn onClick={closeModal}>닫기</CloseBtn>
    </Container>
  );
};

export default PostCode;
