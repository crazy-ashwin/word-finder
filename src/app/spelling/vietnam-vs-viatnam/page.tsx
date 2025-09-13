import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Vietnam or Viatnam - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between "Vietnam" and "Viatnam". Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function VietnamVsViatnamPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Vietnam or Viatnam</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;Vietnam&quot; and &quot;Viatnam&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Viatnam</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Viatnam&quot; is a misspelling. The correct spelling is &quot;Vietnam&quot; with the &quot;e&quot; after the &quot;Vi&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Vietnam</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Vietnam&quot; is the correct spelling for the Southeast Asian country.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Vietnam (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A country in Southeast Asia, officially known as the Socialist Republic of Vietnam.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I visited <strong>Vietnam</strong> last summer.</li>
                  <li>• <strong>Vietnam</strong> has a rich cultural heritage.</li>
                  <li>• The cuisine of <strong>Vietnam</strong> is famous worldwide.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Viatnam:</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Viatnam&quot; is a misspelling of &quot;Vietnam&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Viatnam&quot; is not used in standard English.</li>
                  <li>• Always use <strong>Vietnam</strong> for the country name.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Vietnam:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Socialist Republic of Vietnam</li>
                <li>• Southeast Asian country</li>
                <li>• Indochina (historical region)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Viatnam:</h4>
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
            <li>• <strong>Vietnam</strong> is spelled with the &quot;e&quot; after the &quot;Vi&quot;.</li>
            <li>• &quot;Viatnam&quot; is never correct in any context.</li>
            <li>• The name comes from Vietnamese &quot;Việt Nam&quot; meaning &quot;Southern Viet&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;Viatnam&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;Viatnam&quot; is never correct. The proper spelling is always &quot;Vietnam&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;Vietnam&quot; has the &quot;e&quot; after the &quot;Vi&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does Vietnam mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Vietnam is a country in Southeast Asia, known for its history, culture, and cuisine.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Vietnam</strong> is the correct spelling with &quot;ie&quot; in the middle. It means the country in Southeast Asia. The misspelling &quot;viatnam&quot; with &quot;ia&quot; is never correct. Always use &quot;Vietnam&quot; when referring to the country.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 