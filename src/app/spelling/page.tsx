"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpellingEntry } from "@/lib/supabase";
import {
	Search,
	Sparkles,
	Brain,
	Lightbulb,
	RefreshCw,
	FileText,
} from "lucide-react";
import { spellingAPI } from "@/lib/api";
import { misspellingFolders } from "@/lib/misspellings"; // TODO: Remove this import when static pages are no longer needed

export default function SpellingIndexPage() {
	const [entries, setEntries] = useState<SpellingEntry[]>([]);
	const [filteredEntries, setFilteredEntries] = useState<SpellingEntry[]>([]);
	const [filteredStaticPages, setFilteredStaticPages] = useState<string[]>(
		[]
	); // TODO: Remove this state when static pages are no longer needed
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedLetter, setSelectedLetter] = useState("All");
	const [loading, setLoading] = useState(true);
	const [displayCount, setDisplayCount] = useState(12);

	// Fetch entries on component mount
	useEffect(() => {
		const fetchEntries = async () => {
			try {
				const data = await spellingAPI.getEntries();
				setEntries(data || []);
				setFilteredEntries(data || []);
			} catch (error) {
				console.error("Error fetching spelling entries:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchEntries();
	}, []);

	// Filter entries based on search term and selected letter
	useEffect(() => {
		let filtered = entries;
		let filteredStatic = misspellingFolders;

		// Filter by search term
		if (searchTerm.trim()) {
			filtered = filtered.filter(
				(entry) =>
					entry.title
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					entry.correct_word
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					entry.incorrect_word
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					entry.description
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
			);

			filteredStatic = filteredStatic.filter((page) =>
				prettifyStaticPage(page)
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			);
		}

		// Filter by selected letter
		if (selectedLetter !== "All") {
			filtered = filtered.filter((entry) =>
				entry.title
					.toLowerCase()
					.startsWith(selectedLetter.toLowerCase())
			);

			filteredStatic = filteredStatic.filter((page) =>
				prettifyStaticPage(page)
					.toLowerCase()
					.startsWith(selectedLetter.toLowerCase())
			);
		}

		setFilteredEntries(filtered);
		setFilteredStaticPages(filteredStatic);
		setDisplayCount(12); // Reset display count when filters change
	}, [entries, searchTerm, selectedLetter]);

	const handleRefresh = async () => {
		setLoading(true);
		try {
			const data = await spellingAPI.getEntries();
			setEntries(data || []);
			setDisplayCount(12); // Reset display count on refresh
		} catch (error) {
			console.error("Error refreshing entries:", error);
		} finally {
			setLoading(false);
		}
	};

	// Helper function to prettify static page names - TODO: Remove when static pages are no longer needed
	const prettifyStaticPage = (name: string) => {
		return name
			.replace(/-/g, " ")
			.replace(/\bvs\b/i, "or")
			.replace(/\b(\w)/g, (m) => m.toUpperCase());
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
			{/* Hero Section with Purple Gradient */}
			<div className='bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-16 px-4'>
				<div className='max-w-7xl mx-auto text-center'>
					{/* Icon */}
					<div className='flex justify-center mb-4'>
						<div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
							<FileText className='w-6 h-6 text-white' />
						</div>
					</div>

					{/* Title */}
					<h1 className='text-5xl md:text-6xl font-bold mb-6'>
						Misspelling Guide
					</h1>

					{/* Description */}
					<p className='text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto'>
						Master the art of spelling with our comprehensive
						collection of commonly confused words and their correct
						spellings.
					</p>

					{/* Search Bar */}
					<div className='max-w-2xl mx-auto mb-8'>
						<div className='relative'>
							<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
							<Input
								placeholder='Search spelling comparisons...'
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className='pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg'
							/>
							<Button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full px-6'>
								Search
							</Button>
						</div>
					</div>

					{/* Navigation Tabs */}
					<div className='flex justify-center gap-4'>
						<Button className='bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full flex items-center gap-2'>
							<Sparkles className='w-4 h-4' />
							Spelling Comparisons
						</Button>
						<Button className='bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full flex items-center gap-2'>
							<Brain className='w-4 h-4' />
							Interactive Learning
						</Button>
						<Button className='bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full flex items-center gap-2'>
							<Lightbulb className='w-4 h-4' />
							Memory Tips
						</Button>
					</div>
				</div>
			</div>

			{/* Alphabetical Navigation */}
			<div className='bg-gray-50 py-6 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='flex flex-wrap justify-center gap-2'>
						<Button
							onClick={() => setSelectedLetter("All")}
							className={`px-4 py-2 rounded-full transition-colors ${
								selectedLetter === "All"
									? "bg-blue-600 text-white hover:bg-blue-700"
									: "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
							}`}>
							All
						</Button>
						{Array.from({ length: 26 }, (_, i) =>
							String.fromCharCode(65 + i)
						).map((letter) => (
							<Button
								key={letter}
								onClick={() => setSelectedLetter(letter)}
								variant='outline'
								className={`px-4 py-2 rounded-full transition-colors ${
									selectedLetter === letter
										? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
										: "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
								}`}>
								{letter}
							</Button>
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto py-12 px-4'>
				{/* Section Header */}
				<div className='flex items-center justify-between mb-8'>
					<div className='flex items-center gap-4'>
						<h2 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
							All Spelling Comparisons
						</h2>
						<div className='flex gap-2'>
							<Badge className='bg-purple-100 text-purple-800 border-0'>
								{filteredEntries.length +
									filteredStaticPages.length}{" "}
								Spelling Comparisons
							</Badge>
						</div>
					</div>
					<Button
						onClick={handleRefresh}
						disabled={loading}
						className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 disabled:opacity-50'>
						<RefreshCw
							className={`w-4 h-4 ${
								loading ? "animate-spin" : ""
							}`}
						/>
						{loading ? "Refreshing..." : "Refresh Data"}
					</Button>
				</div>

				{/* Database Entries Section */}
				{filteredEntries.length > 0 && (
					<div className='mb-12'>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{filteredEntries
								.slice(0, displayCount)
								.map((entry) => (
									<Link
										key={entry.id}
										href={`/spelling/${entry.slug}`}
										className='group'>
										<Card className='h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer border-0 shadow-lg'>
											<CardHeader>
												<div className='flex items-start justify-between mb-3'>
													<div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center'>
														<FileText className='w-4 h-4 text-purple-600' />
													</div>
													<Badge className='bg-purple-100 text-purple-800 border-0'>
														Spelling
													</Badge>
												</div>
												<CardTitle className='text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors'>
													{entry.title}
												</CardTitle>
											</CardHeader>
											<CardContent className='pt-0'>
												<p className='text-gray-600 mb-4 line-clamp-3 leading-relaxed'>
													{entry.description}
												</p>
												<div className='flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors'>
													<span>Learn More</span>
													<svg
														className='w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform'
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M9 5l7 7-7 7'
														/>
													</svg>
												</div>
											</CardContent>
										</Card>
									</Link>
								))}
						</div>
					</div>
				)}

				{/* Static Pages Section - TODO: Remove this entire section when static pages are no longer needed */}
				{filteredStaticPages.length > 0 && (
					<div className='mb-12'>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{filteredStaticPages
								.slice(0, displayCount)
								.map((page) => (
									<Link
										key={page}
										href={`/spelling/${page}`}
										className='group'>
										<Card className='h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer border-0 shadow-lg'>
											<CardHeader>
												<div className='flex items-start justify-between mb-3'>
													<div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center'>
														<FileText className='w-4 h-4 text-blue-600' />
													</div>
													<Badge className='bg-blue-100 text-blue-800 border-0'>
														Spelling
													</Badge>
												</div>
												<CardTitle className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors'>
													{prettifyStaticPage(page)}
												</CardTitle>
											</CardHeader>
											<CardContent className='pt-0'>
												<p className='text-gray-600 mb-4 line-clamp-3 leading-relaxed'>
													Learn the correct spelling
													and common mistakes for this
													word comparison.
												</p>
												<div className='flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors'>
													<span>Learn More</span>
													<svg
														className='w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform'
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M9 5l7 7-7 7'
														/>
													</svg>
												</div>
											</CardContent>
										</Card>
									</Link>
								))}
						</div>
					</div>
				)}

				{/* Load More / Show Less Buttons */}
				{filteredEntries.length + filteredStaticPages.length > 12 && (
					<div className='text-center mb-8'>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							{/* Load More Button */}
							{(filteredEntries.length > displayCount ||
								filteredStaticPages.length > displayCount) && (
								<Button
									onClick={() =>
										setDisplayCount(displayCount + 12)
									}
									className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
									<span className='flex items-center justify-center gap-2'>
										📚 Load More (
										{Math.min(
											12,
											filteredEntries.length +
												filteredStaticPages.length -
												displayCount
										)}{" "}
										more)
									</span>
								</Button>
							)}

							{/* Show Less Button */}
							{displayCount > 12 && (
								<Button
									onClick={() => setDisplayCount(12)}
									className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
									<span className='flex items-center justify-center gap-2'>
										🔽 Show Less (Showing {displayCount} of{" "}
										{filteredEntries.length +
											filteredStaticPages.length}
										)
									</span>
								</Button>
							)}
						</div>
					</div>
				)}

				{/* No Results Message */}
				{filteredEntries.length === 0 &&
					filteredStaticPages.length === 0 && (
						<div className='text-center py-16'>
							<div className='bg-white p-12 rounded-2xl shadow-lg max-w-md mx-auto'>
								<div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
									<FileText className='w-8 h-8 text-gray-400' />
								</div>
								<h3 className='text-2xl font-semibold text-gray-800 mb-4'>
									{searchTerm || selectedLetter !== "All"
										? "No Results Found"
										: "No Spelling Entries Available"}
								</h3>
								<p className='text-lg text-gray-600'>
									{searchTerm || selectedLetter !== "All"
										? "Try adjusting your search or filter criteria."
										: "Check back later for spelling guides and tips!"}
								</p>
								{(searchTerm || selectedLetter !== "All") && (
									<Button
										onClick={() => {
											setSearchTerm("");
											setSelectedLetter("All");
											setDisplayCount(12);
										}}
										className='mt-4 bg-purple-600 hover:bg-purple-700 text-white'>
										Clear Filters
									</Button>
								)}
							</div>
						</div>
					)}
				{/* Learning Tips */}
				<div className='mt-10 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200'>
					<h2 className='text-3xl font-bold text-emerald-900 mb-6 flex items-center'>
						<span className='mr-3'>💡</span>
						Pro Spelling Tips
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<div className='bg-emerald-500 text-white rounded-full p-2 text-sm font-bold'>
									1
								</div>
								<div>
									<h4 className='font-semibold text-emerald-800 mb-1'>
										Sound It Out
									</h4>
									<p className='text-emerald-700 text-sm'>
										Break words into syllables and sound
										them out to identify spelling patterns.
									</p>
								</div>
							</div>
							<div className='flex items-start space-x-3'>
								<div className='bg-emerald-500 text-white rounded-full p-2 text-sm font-bold'>
									2
								</div>
								<div>
									<h4 className='font-semibold text-emerald-800 mb-1'>
										Visual Memory
									</h4>
									<p className='text-emerald-700 text-sm'>
										Write words multiple times to create
										visual memory patterns.
									</p>
								</div>
							</div>
						</div>
						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<div className='bg-emerald-500 text-white rounded-full p-2 text-sm font-bold'>
									3
								</div>
								<div>
									<h4 className='font-semibold text-emerald-800 mb-1'>
										Rule Patterns
									</h4>
									<p className='text-emerald-700 text-sm'>
										Learn common spelling rules like &quot;i
										before e except after c.&quot;
									</p>
								</div>
							</div>
							<div className='flex items-start space-x-3'>
								<div className='bg-emerald-500 text-white rounded-full p-2 text-sm font-bold'>
									4
								</div>
								<div>
									<h4 className='font-semibold text-emerald-800 mb-1'>
										Practice Daily
									</h4>
									<p className='text-emerald-700 text-sm'>
										Regular practice with challenging words
										improves spelling accuracy.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className='text-center mt-12'>
					<div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white'>
						<h3 className='text-2xl font-bold mb-4'>
							Ready to Master Spelling?
						</h3>
						<p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
							Start with any spelling comparison that interests
							you. Each guide includes correct spellings, common
							mistakes, and memory tricks to help you learn
							effectively.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/grammar'
								className='bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors'>
								Explore Grammar Topics
							</Link>
							<Link
								href='/confusing-words'
								className='bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors border border-white/20'>
								Confusing Words
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
