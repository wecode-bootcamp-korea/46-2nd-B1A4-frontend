import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { studioId } from '../../recoilState';
import DragDrop from './DragDrop';
import * as S from './StyleImageUpload';

const ImageUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState([]);
  const [myStudioId, setMyStudioId] = useRecoilState(studioId);

  const handleFileChange = e => {
    setSelectedFile(e.target.files);
  };

  const handleFileUpload = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.values(selectedFile).forEach(file => {
      formData.append('image', file, file.name);
    });
    fetch(`${process.env.REACT_APP_SERVER_HOST}/hosts/images/${myStudioId}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'POST_STUDIO_PHOTOS_SUCCESS') {
          alert(`성공적으로 등록되었습니다. 축하드립니다 🎉`);
          navigate('/?limit=9&studioCategoryId=1');
        } else {
          alert('다시 시도해주세요 🥲');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <S.Background>
      <S.Header>환상적인 공간을 사진으로 담아주세요</S.Header>
      <DragDrop handleFileChange={handleFileChange} />
      <S.UploadBtn
        onClick={e => {
          handleFileUpload(e);
        }}
      >
        스페이스 등록하기
      </S.UploadBtn>
    </S.Background>
  );
};

export default ImageUpload;
