import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Carrying or Carring - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;carrying&quot; and &quot;carring&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CarryingVsCarringPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Carrying or Carring</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;carrying&quot; and &quot;carring&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Carring</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Carring&quot; is a misspelling. The correct spelling is &quot;carrying&quot; with two &quot;r&quot;s and &quot;ying&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Carrying</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Carrying&quot; is the correct spelling. It is the present participle form of &quot;carry.&quot;</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Carrying (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Present participle of &quot;carry&quot;; the act of transporting or supporting something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She was <strong>carrying</strong> the heavy bags.</li>
                  <li>• The wind was <strong>carrying</strong> the leaves away.</li>
                  <li>• He was <strong>carrying</strong> the responsibility well.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Carring (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Carring&quot; is a misspelling of &quot;carrying&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Carring&quot; is not used in standard English.</li>
                  <li>• Always use <strong>carrying</strong> when referring to transport.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Carrying:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Transporting</li>
                <li>• Bearing</li>
                <li>• Holding</li>
                <li>• Supporting</li>
                <li>• Conveying</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Carring:</h4>
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
            <li>• <strong>Carrying</strong> is spelled with two &quot;r&quot;s and &quot;ying&quot; at the end.</li>
            <li>• The word is the present participle form of &quot;carry.&quot;</li>
            <li>• Can be used in various contexts including physical transport and abstract concepts.</li>
            <li>• Often used in everyday conversation and formal writing.</li>
            <li>• &quot;Carring&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;carring&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carring&quot; is never correct. The proper spelling is always &quot;carrying.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;carry&quot; + &quot;ing&quot; - the word has two &quot;r&quot;s like &quot;carry&quot; and ends with &quot;ing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between carrying and transporting?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both refer to moving things, but &quot;carrying&quot; often implies personal effort while &quot;transporting&quot; is more formal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;carring&quot; likely occurs because people forget the second &quot;r&quot; or the &quot;y&quot; before &quot;ing.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;carrying&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: carrying on, carrying out, and carrying forward.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can carrying be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;carrying&quot; can be used as a noun meaning the act of carrying something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is carrying only used for physical objects?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;carrying&quot; can be used for physical objects, ideas, responsibilities, or emotions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word carrying?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The word comes from Old French &quot;carier&quot; and was first used in English in the 14th century.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Carrying</strong> is the correct spelling with double &quot;r&quot; and &quot;y&quot;. It means transporting or holding something. The misspelling &quot;carring&quot; with single &quot;r&quot; is never correct. Always use &quot;carrying&quot; when referring to transporting items.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 