import styled from "styled-components";
import { media } from "theme/media";

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors.heavenlyWhite};
    gap: 13px;
    position: relative;
    align-items: start;
    &::before{
        content: '';
        display: block;
        width: 64px;
        height: 2.5px;
        background: ${({theme}) => theme.colors.redLink};
        position: absolute;
        bottom: -1.5px;
        left: 45px;
        z-index: 2;
    }
    ${media.up('md')}{
        width: calc(50% - 25px);
    }
`

const StyledImage = styled.div`
    width: 125px;
    img{
        width: 100%;
    }
`

const StyledContent = styled.div`
    padding-top: 20px;
    max-width: calc(100% - 138px);
    display: flex;
    flex-direction: column;
    p{
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        color: ${({theme}) => theme.colors.grayBar};
    }
    a{
        font-size: 14px;
        line-height: 26px;
        color: ${({theme}) => theme.colors.grayBar};
        text-decoration: none;
    }
`

export { StyledWrapper, StyledImage, StyledContent }