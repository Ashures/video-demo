"use client";

import { useEffect, useState } from "react";

const Video = () => {
	const [video, setVideo] = useState();
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		setVideo(document.querySelector("video"));
	}, []);

	const changeVideo = () => {
		if (playing) video.pause();
		else video.play();
		
		setPlaying(current => !current);
	};

	const enableFullscreen = () => {
		video.requestFullscreen();
	};

	return (
		<div className="video-container">
			<div className="video-overlay">
				<div className="video-play-pause">
					<button className="video-overlay-icon" onClick={() => changeVideo()}>
						<i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`}></i>
					</button>
				</div>
				<div className="video-fullscreen">
					<button className="video-overlay-icon" onClick={() => enableFullscreen()}>
						<i className="fa-solid fa-expand"></i>
					</button>
				</div>
			</div>
			<div className="video-content">
				<video>
					<source src="video/hologram.mp4" type="video/mp4" />
					Sorry, you suck!
				</video>
			</div>
		</div>
	);
}

export default Video;