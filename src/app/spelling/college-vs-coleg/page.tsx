import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'College or Coleg - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;college&quot; and &quot;coleg&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CollegeVsColegPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">College or Coleg</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;college&quot; and &quot;coleg&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Coleg</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Coleg&quot; is a misspelling. The correct spelling is &quot;college&quot; with a double &quot;l&quot; and a final &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: College</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;College&quot; is the correct spelling. It refers to an educational institution or establishment, especially one providing higher education or specialized professional or vocational training.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">College (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">An educational institution or establishment, especially one providing higher education or specialized professional or vocational training.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She is going to <strong>&quot;college&quot;</strong> next year.</li>
                  <li>• He teaches at a community <strong>&quot;college&quot;</strong>.</li>
                  <li>• The <strong>&quot;college&quot;</strong> offers many courses.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Coleg (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Coleg&quot; is a misspelling of &quot;college&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Coleg&quot; is not used in standard English.</li>
                  <li>• Always use <strong>&quot;college&quot;</strong> when referring to an educational institution.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">College:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• University</li>
                <li>• Institute</li>
                <li>• Academy</li>
                <li>• School</li>
                <li>• Conservatory</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Coleg:</h4>
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
            <li>• <strong>&quot;College&quot;</strong> is spelled with a double &quot;l&quot; and a final &quot;e&quot;.</li>
            <li>• Used to describe institutions of higher learning or specialized training.</li>
            <li>• The word comes from Latin &quot;collegium&quot; meaning &quot;society, guild&quot;.</li>
            <li>• &quot;Coleg&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;coleg&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;coleg&quot; is never correct. The proper spelling is always &quot;college.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember the double &quot;l&quot; and the final &quot;e&quot; in &quot;college&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;college&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;College&quot; means an educational institution or establishment, especially one providing higher education or specialized training.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;coleg&quot; may occur due to omitting one of the &quot;l&quot; letters or the final &quot;e&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>College</strong> is the correct spelling with &quot;ge&quot; at the end. It means an educational institution or a group of people with shared interests. The misspelling &quot;coleg&quot; is never correct. Always use &quot;college&quot; when referring to educational institutions.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 