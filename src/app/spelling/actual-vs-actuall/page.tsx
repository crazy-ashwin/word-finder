import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Actual or Actuall - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;actual&quot; and &quot;actuall&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActualVsActuallPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">
        Actual or Actuall
      </h1>
      
      {/* Subtitle */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Which Spelling is Correct?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Understanding the difference between Actual or Actuall these commonly confused spellings and how to use them properly.
        </p>
      </div>

      {/* Correct or Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Actuall</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Actuall&quot; is a misspelling. The correct spelling has only one &apos;l&apos; at the end.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Actual</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Actual&quot; is the correct spelling. It means existing in fact, real, or genuine.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Definition Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Actual</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Actual</strong> (adjective): Existing in fact, real, genuine, or true. It refers to something that is real or factual rather than imagined or supposed.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The <strong>actual</strong> cost was much higher than estimated.</li>
              <li>• What is the <strong>actual</strong> time of arrival?</li>
              <li>• The <strong>actual</strong> size of the room surprised us.</li>
              <li>• In <strong>actual</strong> fact, the project was completed on time.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synonyms Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Actual</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Real</li>
                <li>• Genuine</li>
                <li>• True</li>
                <li>• Authentic</li>
                <li>• Factual</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Existing</li>
                <li>• Current</li>
                <li>• Present</li>
                <li>• Concrete</li>
                <li>• Tangible</li>
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
            <li>• <strong>Actual</strong> is always spelled with one &apos;l&apos; at the end, never two.</li>
            <li>• It&apos;s commonly used to emphasize that something is real or factual.</li>
            <li>• Often used in phrases like &quot;in actual fact&quot; or &quot;the actual cost.&quot;</li>
            <li>• Can be used as an adjective to modify nouns.</li>
            <li>• The word comes from the Latin &quot;actualis&quot; meaning &quot;active, practical.&quot;</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;actuall&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: No, &quot;actuall&quot; is never correct. The proper spelling is always &quot;actual&quot; with one &apos;l&apos;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Think of &quot;actual&quot; as being related to &quot;fact&quot; - both have single consonants at the end. The word &quot;actual&quot; means &quot;real&quot; or &quot;factual,&quot; so it follows the same pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;actual&quot; and &quot;current&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Actual&quot; refers to what is real or factual, while &quot;current&quot; refers to what is happening now or at the present time. Something can be actual but not current, and vice versa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;actual&quot; be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: &quot;Actual&quot; is primarily used as an adjective. However, in some contexts, it can be used as a noun meaning &quot;the real thing&quot; or &quot;reality.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;actually&quot; related to &quot;actual&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: Yes! &quot;Actually&quot; is the adverb form of &quot;actual.&quot; It means &quot;in fact&quot; or &quot;really.&quot; Both words share the same root and correct spelling pattern.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              A: The misspelling &quot;actuall&quot; likely occurs because many English words end with double consonants (like &quot;all,&quot; &quot;call,&quot; &quot;fall&quot;). People may apply this pattern incorrectly to &quot;actual.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          Remember: <strong>Actual</strong> is the correct spelling with one &apos;l&apos;. It means real, genuine, or existing in fact. The misspelling &quot;actuall&quot; with two &apos;l&apos;s is never correct. Use this word when you want to emphasize that something is real or factual rather than imagined or supposed.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}