import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Believes or Beleaves - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;believes&quot; and &quot;beleaves&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BelievesVsBeleavesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Believes or Beleaves</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;believes&quot; and &quot;beleaves&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beleaves</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beleaves&quot; is a misspelling. The correct spelling is &quot;believes&quot; with &quot;ie&quot; after the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Believes</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Believes&quot; is the correct spelling. It is the third person singular form of &quot;believe&quot;.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Believes (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Third person singular of believe; to accept as true or to have faith in something.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She <strong>believes</strong> in hard work.</li>
                  <li>• He <strong>believes</strong> the story is true.</li>
                  <li>• The team <strong>believes</strong> they can win.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beleaves (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beleaves&quot; is a misspelling of &quot;believes&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beleaves&quot; is not used in standard English.</li>
                  <li>• Always use <strong>believes</strong> when referring to accepting something as true.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Believes:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Trusts</li>
                <li>• Accepts</li>
                <li>• Has faith</li>
                <li>• Is convinced</li>
                <li>• Regards as true</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beleaves:</h4>
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
            <li>• <strong>Believes</strong> is spelled with &quot;ie&quot; after the &quot;l&quot; - this is the standard English spelling.</li>
            <li>• The word comes from Old English &quot;belȳfan&quot; meaning to trust or have faith.</li>
            <li>• &quot;Beleaves&quot; is never correct in any context.</li>
            <li>• Used as a verb to express acceptance or faith.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beleaves&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beleaves&quot; is never correct. The proper spelling is always &quot;believes.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does believes mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Believes means to accept as true, to have faith or confidence in something or someone (third person singular).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;believes&quot; has &quot;ie&quot; after the &quot;l&quot; - think of &quot;I before E except after C.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with believes?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: believes in, believes that, and believes so.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is believes used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;believes&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can believes be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;believes&quot; is only used as a verb. The noun form is &quot;belief.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Believes</strong> is the correct spelling with &quot;ie&quot; in the middle. It means to accept something as true. The misspelling &quot;beleaves&quot; with &quot;ea&quot; is never correct. Always use &quot;believes&quot; when referring to accepting something as true.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 