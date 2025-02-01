import styled from 'styled-components';
import { media } from 'theme/media';
import Text from 'components/atoms/Text';

export const WrapLeftImgDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 20px;
  align-items: center;

  ${media.up('lg')} {
    flex-direction: row;
    justify-content: space-between;
    gap: 90px;
    margin-block: 70px;
    align-items: start;
  }
`;

export const TextStyle = styled(Text)`
  font-size: 14px;
  letter-spacing: 0.7px;
`;

export const ProductUsedStyle = styled.div`
  display: flex;
  margin-block: 20px;
  gap: 8px;

  ${media.up('lg')} {
    margin-block: 20px 70px;
  }
`;

export const WrapperDescription = styled.div`
  max-width: 613px;
  margin-top: 20px;

  ${media.up('lg')} {
    margin-top: 0;
  }
`;

export const WrapperImage = styled.div`
  max-width: 712px;
`;
