import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Thanks or Thenks - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;thanks&quot; and &quot;thenks&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ThanksVsThenksPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Thanks or Thenks</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;thanks&quot; and &quot;thenks&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Thenks</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Thenks&quot; is a misspelling. The correct spelling is &quot;thanks&quot; with &quot;th&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Thanks</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Thanks&quot; is the correct spelling. It means gratitude or appreciation.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Thanks (noun/interjection):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An expression of gratitude; acknowledgment of a favor or kindness received.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Thanks</strong> for your help!</li>
                  <li>• I owe you many <strong>thanks</strong>.</li>
                  <li>• <strong>Thanks</strong> a lot for the gift.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Thenks (noun/interjection):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Thenks&quot; is a misspelling of &quot;thanks&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Thenks&quot; is not used in standard English.</li>
                  <li>• Always use <strong>thanks</strong> when expressing gratitude.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Thanks:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Thank you</li>
                <li>• Gratitude</li>
                <li>• Appreciation</li>
                <li>• Acknowledgment</li>
                <li>• Recognition</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Thenks:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Thanks</strong> is spelled with &quot;th&quot; at the beginning: th-anks.</li>
            <li>• It is a common expression of gratitude.</li>
            <li>• &quot;Thenks&quot; is never correct in any context.</li>
            <li>• The word comes from Old English &quot;þanc&quot; meaning &quot;thought, gratitude.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thenks&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thenks&quot; is never correct. The proper spelling is always &quot;thanks.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;thanks&quot; starts with &quot;th&quot; - think of it as &quot;th-anks.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between &quot;thanks&quot; and &quot;thank you&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both express gratitude, but &quot;thank you&quot; is more formal, while &quot;thanks&quot; is more casual.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thanks&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Thanks&quot; is more casual; use &quot;thank you&quot; or &quot;gratitude&quot; in formal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;thanks&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;thenks&quot; often happens by replacing &quot;th&quot; with &quot;th&quot; at the beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;thanks&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: thanks a lot, thanks so much, thanks anyway, and thanks in advance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;thanks&quot; always about gratitude?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;thanks&quot; always expresses gratitude or appreciation for something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;thanks&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;thanks&quot; is only used as a noun or interjection in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Thanks</strong> is the correct spelling with &quot;th&quot; at the beginning: th-anks. It means an expression of gratitude or appreciation. The misspelling &quot;thenks&quot; is never correct. Always use &quot;thanks&quot; when expressing gratitude, though &quot;thank you&quot; is more formal.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 