import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cylinder or Cilender - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;cylinder&quot; and &quot;cilender&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CylinderVsCilenderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Cylinder or Cilender</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;cylinder&quot; and &quot;cilender&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Cilender</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Cilender&quot; is a common misspelling. The correct spelling is &quot;cylinder&quot; with a &quot;y&quot; after the &quot;l&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Cylinder</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Cylinder&quot; is the correct spelling. It refers to a solid geometric figure with straight parallel sides and a circular or oval cross section.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Cylinder (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A solid geometric figure with straight parallel sides and a circular or oval cross section.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The gas is stored in a <strong>&quot;cylinder&quot;</strong>.</li>
                  <li>• The engine has four <strong>&quot;cylinders&quot;</strong>.</li>
                  <li>• The <strong>&quot;cylinder&quot;</strong> was made of steel.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Cilender (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Cilender&quot; is a misspelling of &quot;cylinder&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Cilender&quot; is not used in standard English.</li>
                  <li>• Always use <strong>cylinder</strong> when referring to the geometric shape.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Cylinder:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Tube</li>
                <li>• Pipe</li>
                <li>• Drum</li>
                <li>• Barrel</li>
                <li>• Canister</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Cilender:</h4>
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
            <li>• <strong>Cylinder</strong> is spelled with a &quot;y&quot; after the &quot;l&quot;.</li>
            <li>• Refers to a solid geometric figure or a part of an engine.</li>
            <li>• &quot;Cilender&quot; is never correct in any context.</li>
            <li>• The word &quot;cylinder&quot; comes from the Greek &quot;kylindros&quot; meaning roller or tumbler.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;cilender&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;cilender&quot; is never correct. The proper spelling is always &quot;cylinder.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does &quot;cylinder&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Cylinder&quot; is a solid geometric figure with straight parallel sides and a circular or oval cross section.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;cylinder&quot; has a &quot;y&quot; after the &quot;l&quot; and is related to the word &quot;cycle&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Are there other common misspellings of &quot;cylinder&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, but &quot;cilender&quot; is one of the most frequent. Always use &quot;cylinder&quot;.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Cylinder</strong> is the correct spelling for the geometric shape or engine part. &quot;Cilender&quot; is never correct. Always use &quot;cylinder&quot; in your writing.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 