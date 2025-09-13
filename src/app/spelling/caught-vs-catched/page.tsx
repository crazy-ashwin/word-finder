import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Caught or Catched - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;caught&quot; and &quot;catched&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CaughtVsCatchedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Caught or Catched</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;caught&quot; and &quot;catched&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Catched</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Catched&quot; is a common misspelling and nonstandard form. The correct past tense of &quot;catch&quot; is &quot;caught&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Caught</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Caught&quot; is the correct past tense and past participle of &quot;catch&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Caught (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The past tense and past participle of &quot;catch&quot;; to have seized, captured, or taken hold of something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>caught</strong> the ball.</li>
                  <li>• He <strong>caught</strong> a cold last week.</li>
                  <li>• The police <strong>caught</strong> the thief.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Catched (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Catched&quot; is a nonstandard and incorrect past tense of &quot;catch&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Catched&quot; is not used in standard English.</li>
                  <li>• Always use <strong>caught</strong> as the past tense of &quot;catch&quot;.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Caught:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Seized</li>
                <li>• Captured</li>
                <li>• Grasped</li>
                <li>• Snagged</li>
                <li>• Trapped</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Catched:</h4>
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
            <li>• <strong>Caught</strong> is always the correct past tense of &quot;catch&quot;.</li>
            <li>• <strong>Catched</strong> is never correct in modern English.</li>
            <li>• The word &quot;catch&quot; comes from the Old North French &quot;cachier&quot; meaning &quot;to chase&quot;.</li>
            <li>• Always use &quot;caught&quot; in both formal and informal writing.</li>
            <li>• Double-check verb forms when writing in English.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;catched&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;catched&quot; is never correct. The proper past tense is always &quot;caught&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct past tense?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;catch&quot; becomes &quot;caught&quot; in the past tense, not &quot;catched&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;caught&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;caught&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Caught</strong> is the correct past tense of &quot;catch&quot;. The misspelling &quot;catched&quot; is never correct. Use &quot;caught&quot; in all contexts.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 