import React, { useEffect, useRef, useState } from 'react';

import pdfIcon from 'assets/icons/pdf.svg';
import bimIcon from 'assets/icons/bim.svg';
import Icon from 'components/atoms/Icon';
import DownloadIcon from 'assets/icon-components/DownloadIcon';
import {
  StyledDownloadLink,
  StyledDownloadMaterial,
  StyledFileName,
  StyledFileSize,
  StyledMaterialFile,
  StyledMaterialFileWrapper,
} from './DownloadableMaterialsZone.styles';
import { DownloadNewsletterType } from 'components/organisms/DownloadMaterial';
import { getWindowWidth } from 'utils/browser';
import prettyBytes from 'pretty-bytes';

const icon = {
  bim: bimIcon,
  pdf: pdfIcon,
};

export type MaterialFileType = {
  file: {
    publicUrl: string;
    fileSize: string;
    localFile?: {
      publicURL: string;
      prettySize: string;
    };
  };
  fileName: string;
  downloadNewsletter: DownloadNewsletterType;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  fileExtension?: string;
};

const MaterialFile = ({
  file,
  fileName,
  downloadNewsletter,
  email,
  setEmail,
  fileExtension = 'pdf',
}: MaterialFileType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('');
  const width = getWindowWidth();
  const hiddenContentRef = useRef<HTMLDivElement | null>(null);

  const downloadLink = file.localFile?.publicURL ? file.localFile?.publicURL : file.publicUrl;

  useEffect(() => {
    if (email) {
      setIsOpen(false);
    }
  }, [email]);

  useEffect(() => {
    const hiddenContentHeight = `${hiddenContentRef?.current?.scrollHeight}px`;
    setHeight(hiddenContentHeight);
  }, [width]);

  return (
    <StyledMaterialFileWrapper>
      <StyledMaterialFile>
        <Icon src={icon[fileExtension]} />
        <StyledFileName>{fileName}</StyledFileName>
        <StyledFileSize>
          {file.localFile?.prettySize ? file.localFile?.prettySize : prettyBytes(+file.fileSize)}
        </StyledFileSize>
        <StyledDownloadLink
          href={email ? downloadLink : undefined}
          download={email ? fileName : undefined}
          onClick={() => (!email ? setIsOpen(true) : undefined)}
        >
          <DownloadIcon />
        </StyledDownloadLink>
      </StyledMaterialFile>
      <StyledDownloadMaterial
        ref={hiddenContentRef}
        {...downloadNewsletter}
        {...{ setEmail, isOpen, height }}
      />
    </StyledMaterialFileWrapper>
  );
};

export default MaterialFile;
