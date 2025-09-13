"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { misspellingFolders } from "@/lib/misspellings";

export default function SpellingPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [displayCount, setDisplayCount] = useState(6);
	const [selectedCategory, setSelectedCategory] = useState("All");

	// Get category and display count from URL parameter on page load
	useEffect(() => {
		if (typeof window !== "undefined") {
			const urlParams = new URLSearchParams(window.location.search);
			const categoryFromUrl = urlParams.get("category");
			const displayFromUrl = urlParams.get("display");

			if (categoryFromUrl) {
				setSelectedCategory(categoryFromUrl);
			}

			if (displayFromUrl) {
				const displayCount = parseInt(displayFromUrl);
				if (!isNaN(displayCount)) {
					setDisplayCount(displayCount);
				}
			}
		}
	}, []);

	// Categories for spelling topics - All and A-Z
	const categories = [
		"All",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	// Filter and search logic
	const filteredPages = useMemo(() => {
		let filtered = misspellingFolders;

		// Apply search filter
		if (searchTerm) {
			filtered = filtered.filter((page) =>
				prettify(page).toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		// Apply category filter
		if (selectedCategory !== "All") {
			filtered = filtered.filter((page) => {
				const title = prettify(page);
				return title.startsWith(selectedCategory);
			});
		}

		return filtered;
	}, [searchTerm, selectedCategory]);

	const displayedPages = filteredPages.slice(0, displayCount);
	const hasMorePages = displayCount < filteredPages.length;

	const handleCategoryChange = (category: string) => {
		// Update URL with category parameter and reload
		const url = new URL(window.location.href);
		if (category === "All") {
			url.searchParams.delete("category");
		} else {
			url.searchParams.set("category", category);
		}
		window.location.href = url.toString();
	};

	const handleSearch = () => {
		// Search functionality - can be enhanced later
		setDisplayCount(6);
	};

	const handleReload = () => {
		// Force reload of all data
		setDisplayCount(6);
		setSelectedCategory("All");
		setSearchTerm("");
	};

	function prettify(name: string) {
		return name
			.replace(/-/g, " ")
			.replace(/\bvs\b/i, "or")
			.replace(/\b(\w)/g, (m) => m.toUpperCase());
	}
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
			{/* Hero Section */}
			<div className='relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 transform -skew-y-3 origin-top-left'></div>
				<div className='relative z-10 container mx-auto px-4 py-16'>
					<div className='text-center text-white'>
						<div className='inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 mb-6'>
							<span className='text-4xl'>📝</span>
						</div>
						<h1 className='text-6xl md:text-7xl font-black mb-6 tracking-tight'>
							Misspelling Guide
						</h1>
						<p className='text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-8'>
							Master the art of spelling with our comprehensive
							collection of commonly confused words and their
							correct spellings
						</p>

						{/* Search Section - Moved to Hero Section */}
						<div className='max-w-md mx-auto mb-8'>
							<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20'>
								<div className='relative'>
									<input
										type='text'
										placeholder='Search spelling comparisons...'
										value={searchTerm}
										onChange={(e) =>
											setSearchTerm(e.target.value)
										}
										className='w-full pl-12 pr-20 py-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-white focus:border-transparent transition-all text-gray-900 placeholder-gray-600'
										onKeyPress={(e) =>
											e.key === "Enter" && handleSearch()
										}
									/>
									<span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl'>
										🔍
									</span>
									<button
										onClick={handleSearch}
										className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors'>
										Search
									</button>
								</div>
							</div>
						</div>

						<div className='flex flex-wrap justify-center gap-4'>
							<div className='bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium'>
								📚 Spelling Comparisons
							</div>
							<div className='bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium'>
								🎯 Interactive Learning
							</div>
							<div className='bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium'>
								💡 Memory Tips
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='container mx-auto px-4 pb-16'>
				{/* Category Filter */}
				<div className='mb-8'>
					<div className='flex flex-wrap gap-3 justify-center'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryChange(category)}
								className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
									selectedCategory === category
										? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
										: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
								}`}>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Refresh Button */}
				<div className='text-center mb-6'>
					<button
						onClick={() => {
							handleReload();
							window.location.reload();
						}}
						className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm'>
						🔄 Refresh Data
					</button>
				</div>

				{/* Spelling Comparisons Grid */}
				<div className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-6 flex items-center'>
						<span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
							Spelling Comparisons
						</span>
						<div className='ml-4 h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent'></div>
					</h2>

					{filteredPages.length === 0 ? (
						<div className='text-center py-12'>
							<div className='text-gray-400 text-6xl mb-4'>
								🔍
							</div>
							<p className='text-xl text-gray-600'>
								No spelling comparisons found for &quot;
								{selectedCategory}&quot; category.
							</p>
						</div>
					) : (
						<>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
								{displayedPages.map((folder) => (
									<Link
										key={folder}
										href={`/spelling/${folder}`}
										className='group block'>
										<div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden'>
											<div className='p-6'>
												<div className='flex items-center justify-between mb-4'>
													<span className='text-3xl'>
														📝
													</span>
													<span className='px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700'>
														Spelling
													</span>
												</div>
												<h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
													{searchTerm
														? (() => {
																const pretty =
																	prettify(
																		folder
																	);
																const trimmedSearch =
																	searchTerm.trim();
																if (
																	!trimmedSearch
																)
																	return pretty;
																const lowerPretty =
																	pretty.toLowerCase();
																const lowerSearch =
																	trimmedSearch.toLowerCase();
																const matchIndex =
																	lowerPretty.indexOf(
																		lowerSearch
																	);
																if (
																	matchIndex ===
																	-1
																)
																	return pretty;
																return (
																	<>
																		{pretty.slice(
																			0,
																			matchIndex
																		)}
																		<span className='bg-yellow-300 text-black rounded px-1 font-bold'>
																			{pretty.slice(
																				matchIndex,
																				matchIndex +
																					trimmedSearch.length
																			)}
																		</span>
																		{pretty.slice(
																			matchIndex +
																				trimmedSearch.length
																		)}
																	</>
																);
														  })()
														: prettify(folder)}
												</h3>
												<p className='text-gray-600 text-sm leading-relaxed mb-4'>
													Learn the correct spelling
													and common mistakes for this
													word comparison.
												</p>
												<div className='flex items-center justify-between'>
													<span className='text-blue-600 font-semibold group-hover:text-blue-600 transition-colors'>
														Learn More
													</span>
													<span className='text-blue-600 group-hover:translate-x-1 transition-transform'>
														→
													</span>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>

							{/* Load More Button */}
							{hasMorePages && (
								<div className='text-center'>
									<button
										onClick={() => {
											// Update URL with display count and reload
											const url = new URL(
												window.location.href
											);
											url.searchParams.set(
												"display",
												String(displayCount + 6)
											);
											window.location.href =
												url.toString();
										}}
										className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
										<span className='flex items-center justify-center gap-2'>
											📚 Load More Spelling Comparisons
										</span>
									</button>
								</div>
							)}

							{/* Show Less Button */}
							{displayCount > 6 && (
								<div className='text-center mt-4'>
									<button
										onClick={() => {
											// Update URL with display count and reload
											const url = new URL(
												window.location.href
											);
											url.searchParams.set(
												"display",
												"6"
											);
											window.location.href =
												url.toString();
										}}
										className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
										<span className='flex items-center justify-center gap-2'>
											🔽 Show Less
										</span>
									</button>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
