import { css } from 'styled-components';

export const breadcrumbStyles = css`
  .breadcrumb {
    padding-inline: ${({ theme }) => theme.gap.side};
    text-transform: uppercase;
    text-align: center;

    &__list {
      font-family: ${({ theme }) => theme.font};
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 2px;
      justify-content: center;

      &__item {
        a {
          color: ${({ theme }) => theme.colors.grayBar};
          transition: color 0.3s ease-in-out;

          &:hover {
            color: ${({ theme }) => theme.colors.redLink};
          }
        }

        a[aria-current='page'] {
          font-weight: 700;
          color: ${({ theme }) => theme.colors.redLink};
        }
      }
    }
  }
`;
