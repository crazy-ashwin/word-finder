import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chef vs Cheff - Which is Correct? Spelling Comparison & Meaning",
  description:
    "Learn the correct spelling between 'chef' and 'cheff', see definitions, usage, FAQs, and tips for remembering the difference.",
  robots: "index, follow",
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
        Chef or Cheff
      </h1>
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg p-4 mb-6">
        <p className="text-lg md:text-xl text-yellow-900 font-semibold">
          Which is correct: <span className="font-bold">&quot;chef&quot;</span> or <span className="font-bold">&quot;cheff&quot;</span>?
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Incorrect Card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">❌</span>
          <div className="text-xl font-bold text-red-700 mb-1">INCORRECT</div>
          <div className="text-lg md:text-xl text-red-800">Cheff</div>
        </div>
        {/* Correct Card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">✅</span>
          <div className="text-xl font-bold text-green-700 mb-1">CORRECT</div>
          <div className="text-lg md:text-xl text-green-800">Chef</div>
        </div>
      </div>
      {/* Definition Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Chef</h2>
        <div className="text-lg md:text-xl text-green-800 leading-relaxed mb-2">
          <span className="font-semibold">Noun:</span> A professional cook, typically the chief cook in a restaurant or hotel
        </div>
        <div className="text-lg md:text-xl text-green-800 leading-relaxed">
          <span className="font-semibold">Example:</span> The chef prepared a delicious meal for the guests.
        </div>
      </section>
      {/* Synonyms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chef</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg">
          <div className="text-lg md:text-xl text-blue-800">cook</div>
          <div className="text-lg md:text-xl text-blue-800">cordon bleu cook</div>
          <div className="text-lg md:text-xl text-blue-800">food preparer</div>
        </div>
      </section>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Chef&quot; is the only correct spelling in standard English.</li>
          <li>&quot;Cheff&quot; is a common misspelling and is not accepted in dictionaries.</li>
          <li>The word &quot;chef&quot; comes from the French phrase &quot;chef de cuisine&quot; meaning head of the kitchen.</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: Is it cheff or chef?</div>
            <div className="text-lg md:text-xl">A: The correct word is <span className="font-bold">chef</span>.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: How to pronounce chef?</div>
            <div className="text-lg md:text-xl">A: The correct pronunciation is <span className="font-mono">ʃɛf</span>.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: What does chef mean?</div>
            <div className="text-lg md:text-xl">A: A professional cook, typically the chief cook in a restaurant or hotel.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: Is &quot;chef&quot; a French word?</div>
            <div className="text-lg md:text-xl">A: Yes, &quot;chef&quot; comes from the French phrase &quot;chef de cuisine,&quot; meaning head of the kitchen.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: Why is spelling &quot;chef&quot; correctly important?</div>
            <div className="text-lg md:text-xl">A: Using the correct term respects the role of culinary professionals who have dedicated years to mastering their craft.</div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            The correct spelling is <span className="font-bold">chef</span>. <span className="font-bold">Cheff</span> is a common misspelling. Use <span className="font-bold">chef</span> when referring to a professional cook or head of a kitchen.
          </p>
        </div>

        {/* Three Column Layout */}
        
      </section>
    </main>
  );
} 