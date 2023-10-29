const Video = () => {
	return (
		<div className="video-container">
			<div className="video-overlay">
				<div className="video-content">
					<video>
						<source src="video/hologram.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	);
}

export default Video;