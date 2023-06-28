import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { FaXmark } from 'react-icons/fa6';

const EmailModal = ({ setIsMailModalShow }) => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rpgdgzd',
        'template_lt2984o',
        form.current,
        'yCxVTTGr-c42KPQ7v'
      )
      .then(
        result => {
          alert('전송되었습니다 💌');
          setIsMailModalShow(false);
        },
        error => {
          alert('전송을 실패했습니다 🥲');
        }
      );
  };

  return (
    <ContainerBox>
      <Container ref={form} onSubmit={sendEmail}>
        <div>
          <Icon
            onClick={() => {
              setIsMailModalShow(false);
            }}
          />
          <p>Name</p>
          <Input
            type="text"
            name="user_name"
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div>
          <p>Email</p>
          <Input
            type="email"
            name="user_email"
            placeholder="받으실 메일 주소를 입력해주세요"
          />
        </div>
        <div>
          <p>Message</p>
          <Textarea name="message" placeholder="메세지를 입력해주세요" />
        </div>
        <Button type="submit" value="Send" />
      </Container>
    </ContainerBox>
  );
};

export default EmailModal;

const ContainerBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Container = styled.form`
  margin: 200px auto;
  width: 500px;
  height: 500px;
  background-color: white;
  padding: 30px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 20px;
  border: 1px solid #b0b0b0;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-top: 10px;
  resize: none;
  width: 100%;
  height: 80px;
`;

const Button = styled.input`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  padding: 20px;
  font-size: 20px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(FaXmark)`
  position: relative;
  right: 25px;
  bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;
