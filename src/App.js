import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";

function App() {

	useEffect(() => {
		document.addEventListener("click", goFaster);

		return () => {
			document.removeEventListener("click", goFaster);
		};
	});

	const spriteFrames = [
		{ transform: "translateY(0)" },
		{ transform: "translateY(-100%)" }
	];

	const { ref, getAnimation } = useWebAnimations({
		keyframes: spriteFrames,
		timing: {
			duration: 600,
			direction: "reverse",
			fill: "forwards",
			iterations: Infinity,
			easing: "steps(7, end)"
		},
	});

	const goFaster = () => {
		getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.1);
	};

	return (
		<div className="wrapper">
			<div className="sky"></div>
			<div className="earth">
				<div id="red-queen_and_alice">
					<img ref={ref}
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
						srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
						alt="Alice and the Red Queen running to stay in place." />
				</div>
			</div>
		</div>
	);
}

export default App;
