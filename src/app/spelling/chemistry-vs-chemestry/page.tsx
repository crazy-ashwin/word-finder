import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemistry vs Chemestry - Which is Correct? Spelling Comparison & Meaning",
  description:
    "Learn the correct spelling between 'chemistry' and 'chemestry', see definitions, usage, FAQs, and tips for remembering the difference.",
  robots: "index, follow",
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
        Chemistry or Chemestry
      </h1>
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg p-4 mb-6">
        <p className="text-lg md:text-xl text-yellow-900 font-semibold">
          Which is correct: <span className="font-bold">&quot;chemistry&quot;</span> or <span className="font-bold">&quot;chemestry&quot;</span>?
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Incorrect Card */}
        <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">❌</span>
          <div className="text-xl font-bold text-red-700 mb-1">INCORRECT</div>
          <div className="text-lg md:text-xl text-red-800">Chemestry</div>
        </div>
        {/* Correct Card */}
        <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6 flex flex-col items-center">
          <span className="text-4xl mb-2">✅</span>
          <div className="text-xl font-bold text-green-700 mb-1">CORRECT</div>
          <div className="text-lg md:text-xl text-green-800">Chemistry</div>
        </div>
      </div>
      {/* Definition Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Chemistry</h2>
        <div className="text-lg md:text-xl text-green-800 leading-relaxed mb-2">
          <span className="font-semibold">Noun:</span> The branch of science that deals with the identification of the substances of which matter is composed
        </div>
        <div className="text-lg md:text-xl text-green-800 leading-relaxed">
          <span className="font-semibold">Example:</span> She studied chemistry in college and became a research scientist.
        </div>
      </section>
      {/* Synonyms Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Chemistry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg">
          <div className="text-lg md:text-xl text-blue-800">chemical science</div>
          <div className="text-lg md:text-xl text-blue-800">molecular science</div>
          <div className="text-lg md:text-xl text-blue-800">atomic science</div>
          <div className="text-lg md:text-xl text-blue-800">reaction science</div>
        </div>
      </section>
      {/* Notes Section */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Chemistry&quot; is the only correct spelling in standard English.</li>
          <li>&quot;Chemestry&quot; is a common misspelling and is not accepted in dictionaries.</li>
          <li>Remember: The word comes from the Greek &quot;chēmeia&quot; and has always been spelled with an &quot;i&quot;.</li>
        </ul>
      </div>
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: Is it chemestry or chemistry?</div>
            <div className="text-lg md:text-xl">A: The correct word is <span className="font-bold">chemistry</span>.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: How to pronounce chemistry?</div>
            <div className="text-lg md:text-xl">A: The correct pronunciation is <span className="font-mono">ˈkemɪstri</span>.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: What does chemistry mean?</div>
            <div className="text-lg md:text-xl">A: The branch of science that deals with the identification of the substances of which matter is composed.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: Can &quot;chemistry&quot; be used figuratively?</div>
            <div className="text-lg md:text-xl">A: Yes, &quot;chemistry&quot; can also refer to the way two people interact or the atmosphere between them.</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold text-lg md:text-xl mb-2">Q: What are the main branches of chemistry?</div>
            <div className="text-lg md:text-xl">A: Organic chemistry, inorganic chemistry, physical chemistry, analytical chemistry, and biochemistry.</div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            The correct spelling is <span className="font-bold">chemistry</span>. <span className="font-bold">Chemestry</span> is a common misspelling. Use <span className="font-bold">chemistry</span> when referring to the branch of science that deals with the composition of matter.
          </p>
        </div>

        {/* Three Column Layout */}
        
      </section>
    </main>
  );
} 