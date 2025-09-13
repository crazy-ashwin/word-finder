import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tenement or Tenament - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tenement&quot; and &quot;tenament&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TenementVsTenamentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tenement or Tenament</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tenement&quot; and &quot;tenament&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tenament</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tenament&quot; is a misspelling. The correct spelling is &quot;tenement&quot; with &quot;ment&quot; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tenement</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tenement&quot; is the correct spelling. It means a building divided into apartments.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tenement (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A building divided into apartments, especially one in a poor area; a house or building occupied by tenants; a dwelling place.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The old <strong>tenement</strong> building was demolished.</li>
                  <li>• Many families lived in the crowded <strong>tenement</strong>.</li>
                  <li>• The <strong>tenement</strong> had poor living conditions.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tenament (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tenament&quot; is a misspelling of &quot;tenement&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tenament&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tenement</strong> when referring to apartment buildings.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tenement:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Apartment building</li>
                <li>• Multi-family dwelling</li>
                <li>• Rooming house</li>
                <li>• Boarding house</li>
                <li>• Residential building</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tenament:</h4>
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
            <li>• <strong>Tenement</strong> is spelled with &quot;ment&quot; at the end: ten-e-ment.</li>
            <li>• It is commonly used in urban and historical contexts.</li>
            <li>• &quot;Tenament&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;tenere&quot; meaning &quot;to hold.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tenament&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tenament&quot; is never correct. The proper spelling is always &quot;tenement.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tenement&quot; ends with &quot;ment&quot; - think of it as &quot;ten-e-ment.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between tenement and apartment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Tenement often implies older, poorer quality housing, while apartment is more general.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tenement&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tenement&quot; is appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tenement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tenament&quot; often happens by replacing &quot;ment&quot; with &quot;mant&quot; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tenement&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tenement building, tenement housing, tenement district, and tenement law.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tenement&quot; always about poor housing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While often associated with poor conditions, tenement can refer to any multi-family dwelling.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tenement&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tenement&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tenement</strong> is the correct spelling with &quot;e&quot;: ten-e-ment. It means a building divided into apartments or a run-down apartment building. The misspelling &quot;tenament&quot; is never correct. Always use &quot;tenement&quot; when referring to multi-family housing.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 