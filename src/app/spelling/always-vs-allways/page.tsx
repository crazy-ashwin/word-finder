import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Always or Allways - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;always&quot; and &quot;allways&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlwaysVsAllwaysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Always or Allways</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;always&quot; and &quot;allways&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Allways</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Allways&quot; is a misspelling. The correct spelling is &quot;always&quot; with one &quot;l&quot; at the beginning.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Always</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Always&quot; is the correct spelling. It means at all times, on every occasion, or forever.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Always (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">At all times, on every occasion, or forever; without exception.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>always</strong> brush my teeth before bed.</li>
                  <li>• She <strong>always</strong> arrives on time.</li>
                  <li>• The sun <strong>always</strong> rises in the east.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Allways (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Allways&quot; is a misspelling of &quot;always&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Allways&quot; is not used in standard English.</li>
                  <li>• Always use <strong>always</strong> when referring to time.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Always:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Forever</li>
                <li>• Constantly</li>
                <li>• Continuously</li>
                <li>• Perpetually</li>
                <li>• Invariably</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Allways:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Always</strong> is spelled with one &quot;l&quot; at the beginning, not two.</li>
            <li>• Used to indicate something happens at all times or without exception.</li>
            <li>• Can be used in both positive and negative contexts.</li>
            <li>• The word comes from Old English &quot;ealne weg&quot; meaning &quot;all the way.&quot;</li>
            <li>• &quot;Allways&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allways&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allways&quot; is never correct. The proper spelling is always &quot;always.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;al-ways&quot; - it has only one &quot;l&quot; like the word &quot;always.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between always and forever?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Always&quot; refers to every time or occasion, while &quot;forever&quot; refers to an infinite duration of time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;always&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: always and forever, always on time, always ready, and always there.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;allways&quot; occurs because people think it should have two &quot;l&quot;s like the word &quot;all.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can always be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;always&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is always always about time?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;always&quot; always refers to time - indicating something happens at all times or on every occasion.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can always be used in negative sentences?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;always&quot; can be used in negative contexts, such as &quot;I always forget&quot; or &quot;It always rains.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Always</strong> is the correct spelling with one &quot;l&quot; at the beginning. It means at all times or without exception. The misspelling &quot;allways&quot; is never correct. Use &quot;always&quot; to indicate consistency or permanence.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 