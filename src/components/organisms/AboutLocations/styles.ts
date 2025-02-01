import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    padding: 100px 0;
    background-color: ${({theme}) => theme.colors.grayBar};
    h6{
        color: ${({theme}) => theme.colors.pink};
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`

const StyledContent = styled.div`
    width: 100%;
    max-width: 1487px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
`

const StyledList = styled.div`
    width: 100%;
    max-width: 1427px;
    position: relative;
    margin: 0 auto;
`

export { StyledWrapper, StyledContent, StyledList }