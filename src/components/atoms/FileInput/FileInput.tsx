import React, { useRef, useState } from 'react';

import Text from 'components/atoms/Text';

import FileIcon from './icons/FileIcon';
import DeleteIcon from './icons/DeleteIcon';

import * as Styled from './FileInput.styled';

type FileInputType = {
  files: File[];
  setFieldValue: (field: string, value: File[], shouldValidate?: boolean) => void;
};

const FileInput = ({ setFieldValue, files }: FileInputType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allowedExtensions = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];

    const fileList = e.target.files ? [...e.target.files] : null;

    if (fileList) {
      const areFilesInvalidType = fileList.some((file) => !allowedExtensions.includes(file.type));

      if (areFilesInvalidType) {
        setError('Dozwolony format plików: .png, .pdf, .jpg');
        return;
      }

      if (fileList.some((file) => file.size > 1000000)) {
        setError('Maksymalna waga jednego pliku to 1MB');
        return;
      }
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setFieldValue('files', [...files, ...fileList]);
      setError('');
    }
  };

  const handleFileRemove = (name: string) => {
    const tempArr = files.filter((file: File) => file.name !== name);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setFieldValue('files', tempArr);
  };

  return (
    <Styled.Content>
      <Styled.Wrapper>
        <Styled.InputWrapper>
          <input
            ref={inputRef}
            type="file"
            name="file-upload"
            id="file-upload"
            className="hidden"
            accept="application/pdf, image/png, image/jpg, image/jpeg"
            multiple
            onChange={handleFileChange}
          />
          <Styled.InputContent>
            <p>Dodaj pliki</p>
            <p>
              <b>(opcjonalne)</b>
            </p>
          </Styled.InputContent>
        </Styled.InputWrapper>
        <Styled.FileList>
          {files.map((file, index) => (
            <Styled.ListItem key={index}>
              <FileIcon />
              <p>
                {file.name.length > 10 ? `${file.name.substring(0, 10)}...` : file.name}
                <button type="button" onClick={() => handleFileRemove(file.name)}>
                  <DeleteIcon />
                </button>
              </p>
            </Styled.ListItem>
          ))}
          <Styled.CustomButton type="button" onClick={() => inputRef.current?.click()}>
            dodaj kolejny +
          </Styled.CustomButton>
        </Styled.FileList>
      </Styled.Wrapper>
      <Text className="erro-form" text={error} />
    </Styled.Content>
  );
};

export default FileInput;
