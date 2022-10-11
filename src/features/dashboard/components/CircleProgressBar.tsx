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
					trailColor: "#93CBF1"
				})}
			/>
		</>
	);
};

export default CircularProgress;
