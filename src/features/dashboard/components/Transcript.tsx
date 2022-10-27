import { useGetTranscriptListQuery } from "~/features/dashboard/store";
import { useAppSelector } from "~/config/store";

const Transcript = () => {
	const { data, isLoading } = useGetTranscriptListQuery("453447");
	const { transcriptList } = useAppSelector((state: any) => state.dashboard);

	return (
		<div className="col-span-12 lg:col-span-4">
			<div className="text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 mb-4">
				Transcript
			</div>
			<div className="grid grid-row-4 gap-6">
				<div className="hidden lg:block">
					<img src="/assets/images/transcript.svg" alt="transcript" />
				</div>
				<div className="p-4 rounded-lg bg-white">
					<div className="flex items-center">
						<div className="hidden lg:block">
							<img src="/assets/images/goldcoin.svg" alt="" />
						</div>
						<span className="ml-4">
							<p className="text-lg font-bold font-inter lg:text-lg">
								{transcriptList && transcriptList[0]?.TotalCertificates}
							</p>
							<p className="text-xs font-inter lg:text-sm">Course Points</p>
						</span>
					</div>
				</div>
				<div className="p-4 rounded-lg bg-white">
					<div className="flex items-center">
						<div className="hidden lg:block">
							<img src="/assets/images/goldcoin.svg" alt="" />
						</div>
						<span className="ml-4">
							<p className="text-lg font-bold font-inter lg:text-lg">
								{transcriptList && transcriptList[0]?.TotalAssessments}
							</p>
							<p className="text-xs font-inter lg:text-sm">Assessments Points</p>
						</span>
					</div>
				</div>
				<div className="p-4 rounded-lg bg-white border-primary border-l-4">
					<div className="flex items-center">
						<span className="ml-16">
							<p className="text-lg text-primary font-bold font-inter lg:text-lg">Expert Level</p>
							<p className="text-xs font-inter lg:text-sm">Level Acheived</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transcript;
