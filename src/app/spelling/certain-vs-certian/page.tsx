"use client";

// Certain vs Certian spelling comparison page
import React from "react";
import Head from "next/head";

export default function CertainVsCertian() {
  return (
    <>
      <Head>
        <title>Certain or Certian - Which is Correct? Spelling Comparison</title>
        <meta name="description" content="Learn the difference between 'certain' and 'certian'. Find out the correct spelling, definitions, usage, and common mistakes." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Certain or Certian</h1>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <p className="text-lg md:text-xl text-gray-800">
            Unsure if you should write <strong>&quot;certain&quot;</strong> or <strong>&quot;certian&quot;</strong>? Here&apos;s a quick guide to help you use the correct spelling every time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Incorrect Card */}
          <div className="flex-1 bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❌</span>
              <span className="text-xl font-bold text-red-700">Certian</span>
            </div>
            <p className="text-lg md:text-xl text-red-800">Incorrect spelling</p>
          </div>
          {/* Correct Card */}
          <div className="flex-1 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">✅</span>
              <span className="text-xl font-bold text-green-700">Certain</span>
            </div>
            <p className="text-lg md:text-xl text-green-800">Correct spelling</p>
          </div>
        </div>
        {/* Definitions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Definitions</h2>
          <div className="mb-4">
            <p className="text-lg md:text-xl"><strong>Certain</strong>: Known for sure; established beyond doubt.</p>
          </div>
          <div>
            <p className="text-lg md:text-xl"><strong>Certian</strong>: <span className="text-red-700">(Incorrect spelling)</span></p>
          </div>
        </section>
        {/* Synonyms Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Certain</h2>
          <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-lg md:text-xl text-blue-800">
            <span>Sure</span>
            <span>Confident</span>
            <span>Positive</span>
            <span>Convinced</span>
          </div>
        </section>
        {/* Notes Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>&quot;Certain&quot; is the correct and standard spelling in English.</li>
            <li>&quot;Certian&quot; is a common typo or misspelling and should be avoided.</li>
            <li>Use &quot;certain&quot; in all academic, professional, and everyday writing.</li>
          </ul>
        </div>
        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Is &quot;certian&quot; ever correct?</p>
            <p className="text-lg md:text-xl">A: No, &quot;certian&quot; is always a misspelling of &quot;certain&quot;.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: What does &quot;certain&quot; mean?</p>
            <p className="text-lg md:text-xl">A: It means something is known for sure or is definite.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg md:text-xl">Q: Can &quot;certain&quot; be used in different contexts?</p>
            <p className="text-lg md:text-xl">A: Yes, it can refer to people, things, or facts that are definite or specific.</p>
          </div>
          <div>
            <p className="font-semibold text-lg md:text-xl">Q: Are there related words?</p>
            <p className="text-lg md:text-xl">A: Yes, &quot;certainty&quot; (noun), &quot;certainly&quot; (adverb).</p>
          </div>
        </section>
        {/* Summary Section (at the end) */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
          <p className="text-lg md:text-xl text-green-800 leading-relaxed">
            <strong>Certain</strong> is the correct spelling for something definite or sure. <strong>Certian</strong> is a misspelling and should not be used in any context.
          </p>
        </div>
      </main>
    </>
  );
} 