import React, { useEffect, useState } from 'react';

import Title from 'components/atoms/Title';

import {
  StyledContainer,
  StyledContent,
  StyledImage,
  StyledItem,
  StyledMaterialList,
  StyledPagination,
  StyledText,
  StyledWrapper,
} from './DownloadableMaterialsZone.styles';
import FadeIn from 'components/atoms/FadeIn';

import { DownloadableMaterialsType } from 'components/organisms/DownloadableMaterials';
import { DownloadNewsletterType } from 'components/organisms/DownloadMaterial';
import MaterialFile from './MaterialFile';

export type DownloadableMaterialsZoneType = {
  downloadNewsletter: DownloadNewsletterType;
} & DownloadableMaterialsType;

const DownloadableMaterialsZone = ({
  subTitle,
  title,
  text,
  materials,
  image,
  id,
  downloadNewsletter,
}: DownloadableMaterialsZoneType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const itemsPerPage = 5;

  const paginatedMaterials =
    currentPage === 1
      ? materials.slice(0, itemsPerPage)
      : materials.slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage);

  useEffect(() => {
    const emailFromLocalStorage = localStorage.getItem('email');

    if (emailFromLocalStorage) {
      setEmail(emailFromLocalStorage);
    }
  }, []);

  return (
    <StyledWrapper id={id || ''}>
      <StyledContainer>
        <StyledContent>
          <FadeIn>
            <Title {...{ subTitle, title, type: 'product-title' }} />
          </FadeIn>
          <FadeIn>
            <StyledText {...{ text }} />
          </FadeIn>
          <FadeIn>
            {paginatedMaterials?.length ? (
              <StyledMaterialList role="list">
                {paginatedMaterials.map((material) => (
                  <StyledItem key={material.fileName}>
                    <MaterialFile {...material} {...{ downloadNewsletter, email, setEmail }} />
                  </StyledItem>
                ))}
              </StyledMaterialList>
            ) : null}
            <StyledPagination
              {...{
                total: materials.length,
                itemsPerPage,
                currentPage,
                setCurrentPage,
              }}
            />
          </FadeIn>
        </StyledContent>
      </StyledContainer>
      <StyledImage {...image} {...{ objectFit: 'contain' }} />
    </StyledWrapper>
  );
};

export default DownloadableMaterialsZone;
