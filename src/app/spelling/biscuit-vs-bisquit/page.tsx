import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Biscuit or Bisquit - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;biscuit&quot; and &quot;bisquit&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BiscuitVsBisquitPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Biscuit or Bisquit</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;biscuit&quot; and &quot;bisquit&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Bisquit</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Bisquit&quot; is a misspelling. The correct spelling is &quot;biscuit&quot; with &quot;ui&quot; not &quot;ui.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Biscuit</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Biscuit&quot; is the correct spelling. It means a small baked bread product or a cookie.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Biscuit (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A small, soft bread product, typically round and made with baking powder; in British English, a sweet baked good similar to a cookie.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She baked fresh <strong>biscuits</strong> for breakfast.</li>
                  <li>• The children enjoyed chocolate <strong>biscuits</strong> with milk.</li>
                  <li>• He ordered <strong>biscuits</strong> and gravy at the diner.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Bisquit (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Bisquit&quot; is a misspelling of &quot;biscuit&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Bisquit&quot; is not used in standard English.</li>
                  <li>• Always use <strong>biscuit</strong> when referring to the baked good.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Biscuit:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Cookie (British usage)</li>
                <li>• Cracker</li>
                <li>• Scone</li>
                <li>• Roll</li>
                <li>• Pastry</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Bisquit:</h4>
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
            <li>• <strong>Biscuit</strong> is spelled with &quot;ui&quot; (not &quot;ui&quot;) - this is the standard English spelling.</li>
            <li>• The word comes from French &quot;bescuit&quot; meaning twice-baked.</li>
            <li>• &quot;Bisquit&quot; is never correct in any context.</li>
            <li>• In American English, biscuit refers to a soft bread roll; in British English, it refers to a sweet cookie.</li>
            <li>• The &quot;ui&quot; spelling is consistent with other words like &quot;build&quot; and &quot;guilt.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;bisquit&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;bisquit&quot; is never correct. The proper spelling is always &quot;biscuit.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does biscuit mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Biscuit means a small baked bread product or, in British English, a sweet cookie-like treat.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;biscuit&quot; has &quot;ui&quot; like &quot;build&quot; - think of building a biscuit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between American and British biscuits?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: In America, biscuits are soft bread rolls; in Britain, biscuits are sweet cookies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with biscuit?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: biscuit and gravy, tea and biscuits, and biscuit tin.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is biscuit used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;biscuit&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can biscuit be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;biscuit&quot; is only used as a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the origin of the word biscuit?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It comes from French &quot;bescuit&quot; meaning twice-baked, originally referring to bread that was baked twice to preserve it.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Biscuit</strong> is the correct spelling with &quot;sc&quot;: bis-cuit. It means a small, soft bread product. The misspelling &quot;bisquit&quot; is never correct. Always use &quot;biscuit&quot; when referring to this type of bread product.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 