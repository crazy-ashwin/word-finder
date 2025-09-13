import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complement vs Compalement - Correct Spelling and Usage Guide",
  description:
    "Learn the difference between 'complement' and 'compalement'. See which is correct, common misspellings, definitions, synonyms, usage notes, FAQs, and a summary to help you write with confidence.",
};

export default function ComplementVsCompalementPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Complement or Compalement</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;complement&quot; or &quot;compalement&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-900">Compalement</h3>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              &quot;Compalement&quot; is a common misspelling and is not a recognized English word. Always use &quot;complement&quot; when referring to something that completes or goes well with something else.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-900">Complement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Complement&quot; is a noun or verb meaning something that completes or enhances something else, or to add to something in a way that enhances or improves it.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Complement</h2>
        <p className="text-lg md:text-xl text-green-900 mb-2">
          <strong>Complement</strong> (noun/verb):
        </p>
        <ul className="list-disc ml-8 text-lg md:text-xl text-green-900 space-y-2">
          <li>Something that completes or goes well with something.</li>
          <li>To add to something in a way that enhances or improves it.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Complement</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-900">
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Counterpart</li>
              <li>Companion</li>
              <li>Match</li>
              <li>Supplement</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Enhancement</li>
              <li>Addition</li>
              <li>Accessory</li>
              <li>Augmentation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Complement&quot; is the only correct spelling in standard English for something that completes or enhances.</li>
          <li>&quot;Compalement&quot; is a misspelling and should be avoided in all contexts.</li>
          <li>Remember: &quot;Complement&quot; with an &quot;e&quot; means something that completes; &quot;compliment&quot; with an &quot;i&quot; means praise.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Is &quot;compalement&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-800">No, &quot;compalement&quot; is not a word in English. The correct spelling is &quot;complement&quot; (for something that completes) or &quot;compliment&quot; (for praise).</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">What does &quot;complement&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-800">A &quot;complement&quot; is something that completes or enhances something else.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">How do you use &quot;complement&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-800">Example: &quot;The sauce is a perfect complement to the dish.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Complement</strong> is the correct spelling with &quot;le&quot;: com-ple-ment. It means something that completes or enhances. The misspelling &quot;compalement&quot; is never correct. Always use &quot;complement&quot; when referring to something that completes or enhances.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 