import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Advisable or Adviseable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;advisable&quot; and &quot;adviseable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AdvisableVsAdviseablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Advisable or Adviseable
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between &quot;Advisable&quot; or &quot;Adviseable&quot;: these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Adviseable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Adviseable&quot; is a misspelling. The correct spelling is &quot;advisable&quot; with &apos;able&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Advisable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Advisable&quot; is the correct spelling. It means worthy of being recommended or suggested.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Advisable</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Advisable</strong> (adjective): Worthy of being recommended or suggested; prudent or wise to do; sensible or appropriate; something that should be done or considered.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• It is <strong>advisable</strong> to book your flight early during peak season.</li>
              <li>• It would be <strong>advisable</strong> to consult a lawyer before signing the contract.</li>
              <li>• Taking a break is <strong>advisable</strong> when you&apos;re feeling overwhelmed.</li>
              <li>• It&apos;s <strong>advisable</strong> to save money for emergencies.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Advisable</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Recommended</li>
                <li>• Prudent</li>
                <li>• Wise</li>
                <li>• Sensible</li>
                <li>• Appropriate</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Desirable</li>
                <li>• Beneficial</li>
                <li>• Suitable</li>
                <li>• Judicious</li>
                <li>• Expedient</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Advisable</strong> is spelled with &apos;able&apos; at the end, not &apos;eable&apos;.</li>
            <li>• It&apos;s commonly used in formal and professional contexts.</li>
            <li>• Often used with &quot;it is&quot; or &quot;it would be&quot; constructions.</li>
            <li>• The word suggests something is worth recommending.</li>
            <li>• The word comes from the verb &quot;advise&quot; + the suffix &quot;-able.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;adviseable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;adviseable&quot; is never correct. The proper spelling is always &quot;advisable&quot; with &apos;able&apos; at the end.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;advisable&quot; as coming from &quot;advise&quot; + &quot;able.&quot; The verb &quot;advise&quot; ends in &apos;se&apos;, so the adjective form is &quot;advis-able.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between advisable and recommended?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Advisable&quot; suggests something is worth recommending, while &quot;recommended&quot; means something has been specifically suggested or endorsed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can advisable be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;advisable&quot; is only used as an adjective. The noun form would be &quot;advice&quot; or &quot;recommendation.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is advisable always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;advisable&quot; always has a positive connotation, indicating something is worth doing or considering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;adviseable&quot; likely occurs because people may add an extra &apos;e&apos; before &apos;able&apos; or may not be familiar with the correct spelling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;advisable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Common phrases include: it is advisable, it would be advisable, highly advisable, strongly advisable, and not advisable.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;advisable&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes, &quot;advisable&quot; is appropriate in formal writing. It&apos;s a standard English word that can be used in academic, business, and professional contexts.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Advisable</strong> is the correct spelling with &apos;able&apos; at the end. It means worthy of being recommended or suggested. The misspelling &quot;adviseable&quot; with an extra &apos;e&apos; is never correct. Use this word when you want to indicate that something is worth doing or considering.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 