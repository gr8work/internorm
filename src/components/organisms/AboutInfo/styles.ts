import styled from "styled-components";
import { media } from "theme/media";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 1194px;
    padding: 126px 30px 70px;
    margin: 0 auto;
    ${media.up('md')}{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 60px;
    }
    ${media.up('lg')}{
        justify-content: center;
    }
`

export { StyledWrapper }