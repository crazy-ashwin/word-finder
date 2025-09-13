import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Believe or Beleave - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;believe&quot; and &quot;beleave&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BelieveVsBeleavePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Believe or Beleave</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;believe&quot; and &quot;beleave&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beleave</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beleave&quot; is a misspelling. The correct spelling is &quot;believe&quot; with &quot;ie&quot; after the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Believe</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Believe&quot; is the correct spelling. It means to accept as true or to have faith in something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Believe (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To accept as true; to have faith or confidence in something or someone.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I <strong>believe</strong> in you.</li>
                  <li>• She couldn&apos;t <strong>believe</strong> her eyes.</li>
                  <li>• Do you <strong>believe</strong> in miracles?</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beleave (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beleave&quot; is a misspelling of &quot;believe&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beleave&quot; is not used in standard English.</li>
                  <li>• Always use <strong>believe</strong> when referring to accepting something as true.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Believe:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Trust</li>
                <li>• Accept</li>
                <li>• Have faith</li>
                <li>• Be convinced</li>
                <li>• Regard as true</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beleave:</h4>
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
            <li>• <strong>Believe</strong> is spelled with &quot;ie&quot; after the &quot;l&quot; - this is the standard English spelling.</li>
            <li>• The word comes from Old English &quot;belȳfan&quot; meaning to trust or have faith.</li>
            <li>• &quot;Beleave&quot; is never correct in any context.</li>
            <li>• Used as a verb to express acceptance or faith.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beleave&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beleave&quot; is never correct. The proper spelling is always &quot;believe.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does believe mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Believe means to accept as true, to have faith or confidence in something or someone.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;believe&quot; has &quot;ie&quot; after the &quot;l&quot; - think of &quot;I before E except after C.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with believe?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: believe in yourself, believe it or not, and make believe.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is believe used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;believe&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can believe be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;believe&quot; is only used as a verb. The noun form is &quot;belief.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Believe</strong> is the correct spelling with &quot;ie&quot; after the &quot;l&quot;. It means to accept as true or to have faith in something. The misspelling &quot;beleave&quot; is never correct in English.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 