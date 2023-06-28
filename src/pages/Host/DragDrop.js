import React from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './StyleDragDrop';

function DragDrop({ handleFileChange }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: acceptedFiles => {
      const event = { target: { files: acceptedFiles } };
      handleFileChange(event);
    },
  });

  const files = acceptedFiles.map(file => (
    <S.FileList key={file.path}>{file.path}</S.FileList>
  ));

  return (
    <S.Container {...getRootProps({ className: 'dropzone' })}>
      <S.InputZone {...getInputProps()} name="image" />
      <S.TextBox className="text-center">
        <S.TextContent>마우스로 드래그해서 이미지를 추가해주세요</S.TextContent>
        <S.ImgUploadBtn>가져오기</S.ImgUploadBtn>
        {files.length > 0 && (
          <S.FileNameBox>
            <S.TextContent>첨부된 파일:</S.TextContent>
            <S.ListBox>{files}</S.ListBox>
          </S.FileNameBox>
        )}
      </S.TextBox>
    </S.Container>
  );
}

export default DragDrop;
