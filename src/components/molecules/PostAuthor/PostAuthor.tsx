import { WpImageType } from 'components/atoms/WpImage';
import React from 'react';
import { Avatar, WrapperAuthor } from './PostAuthor.styles';

export type PostAuthorType = {
  image: WpImageType;
  className?: string;
} & Record<'firstName' | 'lastName' | 'position' | 'email' | 'phone', string>;

const PostAuthor = ({
  image,
  firstName,
  lastName,
  position,
  email,
  phone,
  className,
}: PostAuthorType) => (
  <WrapperAuthor {...{ className }}>
    <Avatar {...image} />
    <p>
      <strong>{`${firstName} ${lastName}`}</strong>
    </p>
    <p>{position}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </WrapperAuthor>
);

export default PostAuthor;
