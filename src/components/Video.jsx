"use client";

import { useEffect, useState } from "react";

const Video = () => {
	const [video, setVideo] = useState();
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		setVideo(document.querySelector("video"));
	}, []);

	const playVideo = () => {
		setPlaying(true);
		video.play();
	};

	const pauseVideo = () => {
		setPlaying(false);
		video.pause();
	};

	const enableFullscreen = () => {
		video.requestFullscreen();
	};

	return (
		<div className="video-container">
			<div className="video-overlay">
				<div className="video-play-pause">
					{!playing && 
						<button className="video-overlay-icon" onClick={() => playVideo()}>
							<i className="fa-solid fa-play"></i>
						</button>
					}
					{playing && 
						<button className="video-overlay-icon" onClick={() => pauseVideo()}>
							<i className="fa-solid fa-pause"></i>
						</button>
					}
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