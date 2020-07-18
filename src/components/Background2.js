import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";

const sceneryFrames = [
	{ transform: 'translateX(100%)' },
	{ transform: 'translateX(-100%)' }
];

const sceneryTimingBackground = {
	duration: 36000,
	iterations: Infinity
};

const Background2 = ({ playbackRate }) => {

	const { ref, getAnimation } = useWebAnimations({
		keyframes: sceneryFrames,
		timing: sceneryTimingBackground
	});

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
		<div class="scenery" id="background2" ref={ref}>
			<img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
			<img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
			<img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
		</div>
	);
};

export default Background2;