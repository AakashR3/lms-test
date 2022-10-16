const items = [
	{
		name: "Dassault Systems"
	},
	{
		name: "Seimens PLM"
	},
	{
		name: "Engineering topics"
	},
	{
		name: "Autodesk"
	},
	{
		name: "PTC Training"
	}
];
const Catalog = () => {
	return (
		<div className="mt-8 w-full">
			<div className="text-[18px] font-bold text-title mb-4">Catalog</div>
			<div className="mt-5 rounded-lg bg-white flex">
				{items.map(item => (
					<div className=""></div>
				))}
			</div>
		</div>
	);
};

export default Catalog;
