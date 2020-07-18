import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";

const sceneryFrames = [
	{ transform: 'translateX(100%)' },
	{ transform: 'translateX(-100%)' }
];

const sceneryTimingForeground = {
	duration: 12000,
	iterations: Infinity
};

const Foreground1 = ({ playbackRate }) => {

	const { ref, getAnimation } = useWebAnimations({
		keyframes: sceneryFrames,
		timing: sceneryTimingForeground
	});

	useEffect(() => {
		getAnimation().currentTime = getAnimation().effect.getTiming().duration / 2;
	}, [getAnimation]);

	useEffect(() => {
		if (playbackRate < 0.8) {
			getAnimation().updatePlaybackRate(playbackRate / 2 * -1);
		} else if (playbackRate > 1.2) {
			getAnimation().updatePlaybackRate(playbackRate / 2);
		} else {
			getAnimation().updatePlaybackRate(0);
		}
	}, [playbackRate, getAnimation]);

	return (
		<div class="scenery" id="foreground1" ref={ref}>
			<img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
		</div>
	);
};

export default Foreground1;