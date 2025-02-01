import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 54px;
`

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
        font-size: 14px;
        line-height: 28px;
        color: ${({theme}) => theme.colors.redLink};
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;
    }
`

const StyledList = styled.ul`
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

export { StyledWrapper, StyledContent, StyledList }