import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    return (
        <div className="video">
            <video className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://player.vimeo.com/external/144566593.mobile.mp4?s=c8a454a726c3c9d1459abad37bffe9c4fcc279cc&profile_id=116">
            </video>
            <VideoFooter
                channel="hookypoo"
                description="Come on you Gooners"
                song="Jay Z....run this town"
            />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    );
}

export default Video;

