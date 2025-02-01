import styled from "styled-components";
import { media } from "theme/media";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1486px;
    padding: 0 30px 140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    ${media.up('lg')}{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 100px;
    }
`

const StyledContent = styled.div`
    width: 100%;
    max-width: 536px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    
`

const StyledList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 90px;
    ${media.up('lg')}{
        width: calc(100% - 636px);
    }
`

const StyledListTitle = styled.p`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 2px;
    color: ${({theme}) => theme.colors.redLink};
    text-transform: uppercase;
`

const StyledListContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    ${media.up('md')}{
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export { StyledWrapper, StyledContent, StyledList, StyledListTitle, StyledListContent }