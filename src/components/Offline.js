import React from "react";

function Offline() {
	return (
		<div className="bg-yellow-500 border-l-4 border-yellow-400 p-4">
			<div className="flex">
				<div className="flex-shring-0"></div>
				<div className="ml-3">
					<p className="text-sm text-yellow-700">
						You are offline. Don't you worry, you still can do things.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Offline;
