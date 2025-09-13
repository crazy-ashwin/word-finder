import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Coming or Comming - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;coming&quot; and &quot;comming&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ComingVsCommingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Coming or Comming</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;coming&quot; and &quot;comming&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Comming</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Comming&quot; is a misspelling. The correct spelling is &quot;coming&quot; with a single &quot;m&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Coming</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Coming&quot; is the correct spelling. It is the present participle of &quot;come&quot; and means due to happen, just beginning, or an arrival.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Coming (adjective/noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Adjective: Due to happen or just beginning. Noun: An arrival or approach.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Work is due to start in the <strong>&quot;coming&quot;</strong> year.</li>
                  <li>• The <strong>&quot;coming&quot;</strong> of a new age.</li>
                  <li>• She is <strong>&quot;coming&quot;</strong> to the party tonight.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Comming:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Comming&quot; is a misspelling of &quot;coming&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Comming&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;coming&quot;</strong> when referring to an arrival or something about to happen.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Coming:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Forthcoming</li>
                <li>• Imminent</li>
                <li>• Impending</li>
                <li>• Approaching</li>
                <li>• Arrival</li>
                <li>• Advent</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Comming:</h4>
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
            <li>• <strong>&quot;Coming&quot;</strong> is always spelled with a single &quot;m&quot;.</li>
            <li>• Used as both an adjective and a noun in English.</li>
            <li>• &quot;Comming&quot; is never correct in any context.</li>
            <li>• Remember: just add &quot;-ing&quot; to &quot;come&quot; without doubling the &quot;m&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;comming&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;comming&quot; is never correct. The proper spelling is always &quot;coming.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;coming&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: It means due to happen, just beginning, or an arrival or approach.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Just add &quot;-ing&quot; to &quot;come&quot; without doubling the &quot;m&quot;: co<strong>m</strong>ing.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Coming</strong> is the correct spelling with single &quot;m&quot;. It means approaching or arriving. The misspelling &quot;comming&quot; with double &quot;m&quot; is never correct. Always use &quot;coming&quot; when referring to future arrivals or approaches.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 