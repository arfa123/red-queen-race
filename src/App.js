import React, { useEffect, useState } from "react";
import RedQueen from "./components/RedQueen";
import Foreground1 from "./components/Foreground1";
import Foreground2 from "./components/Foreground2";
import Background1 from "./components/Background1";
import Background2 from "./components/Background2";
import "./App.css";

function App() {

	const [playbackRate, setPlaybackrate] = useState(1.5);

	useEffect(() => {
		document.addEventListener("click", goFaster);

		return () => {
			document.removeEventListener("click", goFaster);
		};
	});

	const goFaster = () => setPlaybackrate(playbackRate * 1.1);

	return (
		<div className="wrapper">
			<div className="sky">
				<h2 style={{ textAlign: "center" }}>Click to increase speed</h2>
			</div>
			<div className="earth">
				<RedQueen playbackRate={playbackRate} />
				<Foreground1 playbackRate={playbackRate} />
				<Foreground2 playbackRate={playbackRate} />
				<Background1 playbackRate={playbackRate} />
				<Background2 playbackRate={playbackRate} />
			</div>
		</div>
	);
}

export default App;
