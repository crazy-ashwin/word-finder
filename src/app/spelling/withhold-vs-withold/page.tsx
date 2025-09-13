import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withhold vs Withold - Correct Spelling and Usage Guide",
  description:
    "Learn the difference between 'withhold' and 'withold'. See which is correct, common misspellings, definitions, synonyms, usage notes, FAQs, and a summary to help you write with confidence.",
};

export default function WithholdVsWitholdPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Withhold or Withold</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;withhold&quot; or &quot;withold&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-900">Withold</h3>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              &quot;Withold&quot; is a common misspelling and is not a recognized English word. The correct spelling is &quot;withhold&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-900">Withhold</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Withhold&quot; is the correct spelling and means to refuse to give something that is due or desired by another.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Withhold</h2>
        <p className="text-lg md:text-xl text-green-900 mb-2">
          <strong>Withhold</strong> (verb):
        </p>
        <ul className="list-disc ml-8 text-lg md:text-xl text-green-900 space-y-2">
          <li>To refuse to give something that is due or desired by another.</li>
          <li>To keep back or restrain.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Withhold</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-900">
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Retain</li>
              <li>Keep</li>
              <li>Reserve</li>
              <li>Hold back</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Suppress</li>
              <li>Refuse</li>
              <li>Deny</li>
              <li>Restrain</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Withhold&quot; is the only correct spelling in standard English.</li>
          <li>&quot;Withold&quot; is a misspelling and should be avoided in all contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Is &quot;withold&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-800">No, &quot;withold&quot; is not a word in English. The correct spelling is &quot;withhold&quot;.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">What does &quot;withhold&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-800">It means to refuse to give something that is due or desired by another.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">How do you use &quot;withhold&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-800">Example: &quot;The company decided to withhold the bonus until next year.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Withhold</strong> is the correct spelling with double &quot;h&quot;: with-hold. It means to refuse to give or grant something. The misspelling &quot;withold&quot; is never correct. Always use &quot;withhold&quot; when referring to refusing to give or grant.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 