import styled from "styled-components";
import { media } from "theme/media";

export const Wrapper = styled.div`
    width: 100%;
    height: 240px;
    position: relative;
    .vimeo-full-screen, .vimeo-full-screen iframe{
        width: 100% !important;
        height: 100% !important;
        position: relative;
        transform: scale(1.2);
    }
    @media(min-width: 550px){
        height: 420px;
    }
    @media(min-width: 967px){
        height: 820px;
    }
    @media(min-width: 1340px){
        height: 920px;
    }
    @media(min-width: 2000px){
        transform: scale(1.4);
    }
`

export const WrapperSpace = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 10;
`