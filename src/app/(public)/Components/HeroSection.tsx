const HeroSection = () => {
    const submenuItems = [
        { label: "Women's Fashion", hasDropdown: true },
        { label: "Men's Fashion", hasDropdown: true },
        { label: "Electronics", hasDropdown: false },
        { label: "Home & Lifestyle", hasDropdown: false },
        { label: "Sports & Outdoor", hasDropdown: false },
        { label: "Toys & Games", hasDropdown: false },
        { label: "Groceries & Pets", hasDropdown: false },
        { label: "Health & Beauty", hasDropdown: false },
    ];

    return (
        <section className="bg-white">
            {/* Horizontal line under the header */}
            <div className="border-b border-gray-300"></div>

            <div className="container mx-auto flex items-start px-6 py-6 relative">
                {/* Submenu */}
                <div className="w-1/4 z-8">
                    <ul className="bg-white">
                        {submenuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 flex items-center justify-between text-sm font-medium text-gray-600 hover:bg-gray-100 ${index === submenuItems.length - 1 ? '' : ''
                                    }`}
                            >
                                {item.label}
                                {item.hasDropdown && (
                                    <span className="text-gray-400">
                                        {/* Arrow Icon */}
                                        &#9662;
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Vertical line placed after submenu */}
                <div className="absolute top-0 left-[25%] h-full border-r border-gray-300"></div>

                {/* Banner */}
                <div className="w-[75%] pl-6">
                    <div className="relative h-72 bg-gray-200 rounded-md overflow-hidden shadow-sm">
                        <img
                            src="/images/hero-banner.png"
                            alt="Hero Banner"
                            className="w-full h-full object-cover"
                        />
                        {/* Red Tag */}
                        {/* <div className="absolute top-0 left-0 bg-red-500 text-white font-semibold text-xs px-4 py-2 rounded-br-md">
                            Up to 10% Off
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
