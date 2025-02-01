import styled from "styled-components";
import { media } from "theme/media";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1486px;
    padding: 0 30px 160px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    iframe{
        width: 100%;
        height: 300px;
        border: none;
    }
    ${media.up('md')}{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 100px;
        align-items: center;
        iframe{
            width: 50%;
            height: 406px;
        }
        div{
            max-width: calc(50% - 100px);
        }
    }
`

export { StyledWrapper }