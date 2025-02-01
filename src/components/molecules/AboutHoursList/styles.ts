import styled from "styled-components";

const StyledWrapper = styled.ul`
    width: auto;
    display: flex;
    flex-direction: column;
    list-style: none;
    li{
        font-size: 18px;
        line-height: 36px;
        color: ${({theme}) => theme.colors.grayBar};
    }
`

export { StyledWrapper }