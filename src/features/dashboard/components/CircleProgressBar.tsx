import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = (props: any) => {
	return (
		<>
			<CircularProgressbar
				value={60}
				text={"60%"}
				styles={buildStyles({
					textColor: "#FFFFFF",
					pathColor: "#FFFFFF",
					trailColor: "rgba(233, 236, 239, 0.5)"
				})}
			/>
		</>
	);
};

export default CircularProgress;
