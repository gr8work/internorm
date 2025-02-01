import React from 'react';

import Title from 'components/atoms/Title';
import Icon from 'components/atoms/Icon';

import pdfIcon from 'assets/icons/pdf.svg';

import {
  StyledContent,
  StyledDownloadLink,
  StyledFileName,
  StyledFileSize,
  StyledImage,
  StyledMaterialFile,
  StyledMaterialList,
  StyledText,
  StyledWrapper,
} from './DownloadableMaterials.styles';
import { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import DownloadIcon from 'assets/icon-components/DownloadIcon';
import prettyBytes from 'pretty-bytes';

export type DownloadableMaterialsType = {
  subTitle: string;
  title: string;
  text: string;
  materials: {
    file: {
      publicUrl: string;
      fileSize: string;
      localFile?: {
        publicURL: string;
        prettySize: string;
        extension?: string;
      };
    };
    fileName: string;
  }[];
  image: WpImageType;
  id?: string;
};

const DownloadableMaterials = ({
  subTitle,
  title,
  text,
  materials,
  image,
  id,
}: DownloadableMaterialsType) => (
  <StyledWrapper id={id || ''}>
    <StyledContent>
      <FadeIn>
        <Title {...{ subTitle, title, type: 'product-title' }} />
      </FadeIn>
      <FadeIn>
        <StyledText {...{ text }} />
      </FadeIn>
      <FadeIn>
        {materials?.length ? (
          <StyledMaterialList role="list">
            {materials.map((material) => {
              const downloadLink = material.file.localFile?.publicURL
                ? material.file.localFile?.publicURL
                : material.file.publicUrl;

              return (
                <li key={material.fileName}>
                  <StyledMaterialFile>
                    <Icon src={pdfIcon} />
                    <StyledFileName>{material.fileName}</StyledFileName>
                    <StyledFileSize>
                      {material.file.localFile?.prettySize
                        ? material.file.localFile?.prettySize
                        : prettyBytes(+material.file.fileSize)}
                    </StyledFileSize>
                    <StyledDownloadLink href={downloadLink} download={material.fileName}>
                      <DownloadIcon />
                    </StyledDownloadLink>
                  </StyledMaterialFile>
                </li>
              );
            })}
          </StyledMaterialList>
        ) : null}
      </FadeIn>
    </StyledContent>
    <FadeIn>
      <StyledImage {...image} {...{ objectFit: 'contain' }} />
    </FadeIn>
  </StyledWrapper>
);

export default DownloadableMaterials;
