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

const Foreground2 = ({ playbackRate }) => {

	const { ref, getAnimation } = useWebAnimations({
		keyframes: sceneryFrames,
		timing: sceneryTimingForeground
	});

	useEffect(() => {
		if (playbackRate < 0.8) {
			getAnimation().updatePlaybackRate(playbackRate / 2 * -1);
		} else if (playbackRate > 1.2) {
			getAnimation().updatePlaybackRate(playbackRate / 2);
		} else {
			getAnimation().updatePlaybackRate(0);
		}
	}, [playbackRate]);

	return (
		<div class="scenery" id="foreground2" ref={ref}>
			<img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
			<img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
		</div>
	);
};

export default Foreground2;