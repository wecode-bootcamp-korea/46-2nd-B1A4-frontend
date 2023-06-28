import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { hostId } from '../../recoilState';
import { Background, Button, Header } from './StyleHostSignUp';

const HostSignUp = () => {
  const navigate = useNavigate();
  const [myHostId, setMyHostId] = useRecoilState(hostId);

  const handleHostSignUp = () => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/hosts`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setMyHostId(data.data);
          navigate('/host-upload');
        } else {
          alert('다시 시도해주세요 🥲');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <Background>
      <Header>
        당신의 공간을 <br />
        스페이스 어라운드하세요
      </Header>
      <Button onClick={handleHostSignUp}>호스트로 등록하기</Button>
    </Background>
  );
};

export default HostSignUp;
