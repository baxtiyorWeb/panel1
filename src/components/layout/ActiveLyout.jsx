import { Container } from "./../shared/Container"

import { Outlet } from "react-router-dom";

export const EventsLyout = () => {
	return (
		<Container>
			<div className="chart-progress ">
				<Outlet />
			</div>
		</Container>
	);
};
