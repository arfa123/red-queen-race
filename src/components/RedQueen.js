import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";

const spriteFrames = [
	{ transform: "translateY(0)" },
	{ transform: "translateY(-100%)" }
];

const RedQueen = ({ playbackRate }) => {

	const { ref, getAnimation } = useWebAnimations({
		keyframes: spriteFrames,
		timing: {
			duration: 600,
			direction: "reverse",
			iterations: Infinity,
			easing: "steps(7, end)"
		},
	});

	useEffect(() => {
		getAnimation().updatePlaybackRate(playbackRate);
	}, [playbackRate]);

	return (
		<div id="red-queen_and_alice">
			<img ref={ref}
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
				srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
				alt="Alice and the Red Queen running to stay in place." />
		</div>
	);
};

export default RedQueen;