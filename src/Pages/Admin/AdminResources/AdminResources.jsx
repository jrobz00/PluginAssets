const AdminResources = () => {
    return (
        <div className="mx-auto lg:w-[900px] rounded-lg p-4">
            <div className="grid grid-cols-5 items-center gap-4 text-lg font-bold text-[#092334] px-2 py-3">
                <div className="col-span-2 md:col-span-1">Name</div>
                <div>Price</div>
                <div>Sold</div>
                <div>Total Profit</div>
                <div>Action</div>
            </div>

            {/* Data Rows */}
            {[...Array(4)].map((_, index) => (
                <div
                    key={index}
                    className="grid grid-cols-5 items-center gap-4 shadow rounded-lg bg-gray-50 py-4 px-2 md:px-8 mb-2"
                >
                    <div className="col-span-2 md:col-span-1 text-black/70 md:text-left">
                        {index === 0 ? 'Auto-Moderator' : `Product ${index + 1}`}
                    </div>
                    <div className="text-black/70">$18.99</div>
                    <div className="text-black/70">127</div>
                    <div className="text-black/70">$2411.73</div>
                    <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666] hover:bg-[#d6e9ff]/75 transition">
                        Edit
                    </button>
                </div>
            ))}

            {/* New Button */}
            <div className="mt-4 flex justify-center">
                <button className="rounded-lg border-2 w-full border-dashed border-[#092334]/25 px-6 py-2 font-medium text-[#092334]/75 hover:bg-[#d6e9ff]/50 transition">
                    New
                </button>
            </div>
        </div>
    );
};

export default AdminResources;