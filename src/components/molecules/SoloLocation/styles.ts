import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const StyledImage = styled.div`
    width: 100%;
    max-width: 326px;
    overflow: hidden;
    border-radius: 10px;
`

const StyledContent = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const StyledContentText = styled.div`
    p{
        font-size: 18px;
        line-height: 36px;
        color: ${({theme}) => theme.colors.white};
        &.title{
            color: ${({theme}) => theme.colors.pink};
            font-size: 14px;
            line-height: 30px;
            text-transform: uppercase;
        }
    }
`

export { StyledWrapper, StyledImage, StyledContent, StyledContentText }