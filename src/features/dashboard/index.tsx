import { Spinner } from "~/components/spinner";
import RoleDashboard from "./layout/RoleDashboard";
import BasicDashboard from "./layout/BasicDashboard";
import { useUserIsSubscribedQuery } from "~/config/api";

function DashboardPage() {
	const { data: isUserSubscribed, isLoading, isError } = useUserIsSubscribedQuery();
	if (isLoading || isError)
		return (
			<section className="flex w-full h-full items-center justify-center">
				{isLoading && <Spinner />}
				{isError && <span>Error fetching dashboard</span>}
			</section>
		);
	return isUserSubscribed ? <RoleDashboard /> : <BasicDashboard />;
}

export default DashboardPage;
