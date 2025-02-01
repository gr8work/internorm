import React from "react";
import Vimeo from '@u-wave/react-vimeo';

import { IVideoIntro } from "./interface";
import { Wrapper, WrapperSpace } from "./styles";

const VideoIntro = ({id}: IVideoIntro) => (
    <Wrapper>
        <WrapperSpace />
        <Vimeo
            video={id}
            volume={0}
            autoplay
            paused={false}
            controls={false}
            className="vimeo-full-screen"
            loop
        />
    </Wrapper>
)

export default VideoIntro;