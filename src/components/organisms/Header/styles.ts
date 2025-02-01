import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  .icon-link-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-decoration: none;
    align-items: center;
    img {
      width: 30px;
    }
  }
`;

export { Wrapper };
