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

const Background1 = ({ playbackRate }) => {

	const { ref, getAnimation } = useWebAnimations({
		keyframes: sceneryFrames,
		timing: sceneryTimingBackground
	});

	useEffect(() => {
		getAnimation().currentTime = getAnimation().effect.getTiming().duration / 2;
	}, []);

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
		<div class="scenery" id="background1" ref={ref}>
			<img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
			<img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
			<img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
				srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
		</div>
	);
};

export default Background1;