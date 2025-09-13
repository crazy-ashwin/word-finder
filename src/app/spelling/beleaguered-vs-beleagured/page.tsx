import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Beleaguered or Beleagured - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;beleaguered&quot; and &quot;beleagured&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BeleagueredVsBeleaguredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Beleaguered or Beleagured</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;beleaguered&quot; and &quot;beleagured&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Beleagured</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Beleagured&quot; is a misspelling. The correct spelling is &quot;beleaguered&quot; with &quot;ue&quot; before the &quot;r&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Beleaguered</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Beleaguered&quot; is the correct spelling. It means beset with difficulties or under siege.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Beleaguered (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Beset with difficulties; under attack or siege; experiencing a lot of problems.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>beleaguered</strong> company struggled to survive.</li>
                  <li>• The city was <strong>beleaguered</strong> by enemy forces.</li>
                  <li>• She felt <strong>beleaguered</strong> by constant demands.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Beleagured (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Beleagured&quot; is a misspelling of &quot;beleaguered&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Beleagured&quot; is not used in standard English.</li>
                  <li>• Always use <strong>beleaguered</strong> when referring to being beset with difficulties.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Beleaguered:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Besieged</li>
                <li>• Harassed</li>
                <li>• Troubled</li>
                <li>• Under attack</li>
                <li>• Overwhelmed</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Beleagured:</h4>
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
            <li>• <strong>Beleaguered</strong> is spelled with &quot;ue&quot; before the &quot;r&quot; - this is the standard English spelling.</li>
            <li>• The word comes from Dutch &quot;belegeren&quot; meaning to besiege.</li>
            <li>• &quot;Beleagured&quot; is never correct in any context.</li>
            <li>• Used as an adjective to describe someone or something under attack or facing difficulties.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;beleagured&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beleagured&quot; is never correct. The proper spelling is always &quot;beleaguered.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does beleaguered mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Beleaguered means beset with difficulties, under attack, or experiencing a lot of problems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;beleaguered&quot; has &quot;ue&quot; before the &quot;r&quot; - think of &quot;be-league-red.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with beleaguered?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: beleaguered city, beleaguered leader, and beleaguered company.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is beleaguered used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;beleaguered&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can beleaguered be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;beleaguered&quot; is only used as an adjective. The verb form is &quot;beleaguer.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Beleaguered</strong> is the correct spelling with &quot;ue&quot; before the &quot;r&quot;. It means beset with difficulties or under siege. The misspelling &quot;beleagured&quot; is never correct in English.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 