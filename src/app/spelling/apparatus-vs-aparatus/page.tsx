import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apparatus or Aparatus - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apparatus&quot; and &quot;aparatus&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApparatusVsAparatusPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apparatus or Aparatus</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apparatus&quot; and &quot;aparatus&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aparatus</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aparatus&quot; is a misspelling. The correct spelling is &quot;apparatus&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apparatus</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apparatus&quot; is the correct spelling. It means equipment or machinery for a particular purpose.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apparatus (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Equipment or machinery designed for a particular purpose; a complex device or system.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The laboratory was equipped with sophisticated <strong>apparatus</strong>.</li>
                  <li>• The fire department brought their rescue <strong>apparatus</strong>.</li>
                  <li>• The gym has modern exercise <strong>apparatus</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aparatus (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aparatus&quot; is a misspelling of &quot;apparatus&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aparatus&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apparatus</strong> when referring to equipment.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apparatus:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Equipment</li>
                <li>• Machinery</li>
                <li>• Device</li>
                <li>• Instrument</li>
                <li>• Tool</li>
                <li>• System</li>
                <li>• Mechanism</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aparatus:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Apparatus</strong> is spelled with two &quot;p&quot;s at the beginning.</li>
            <li>• The word comes from Latin &quot;apparatus&quot; meaning equipment.</li>
            <li>• Often used in scientific, medical, or technical contexts.</li>
            <li>• Can refer to both simple tools and complex systems.</li>
            <li>• &quot;Aparatus&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aparatus&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aparatus&quot; is never correct. The proper spelling is always &quot;apparatus.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;app&quot; + &quot;aratus&quot; - apparatus is equipment that helps you accomplish tasks.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apparatus and equipment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Apparatus often refers to more complex or specialized equipment, while equipment is a broader term for tools and devices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparatus be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apparatus&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aparatus&quot; likely occurs because of confusion about the double &quot;p&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apparatus&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: breathing apparatus, laboratory apparatus, and rescue apparatus.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apparatus always complex equipment?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, apparatus can refer to both simple tools and complex systems, depending on context.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparatus be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apparatus&quot; is only a noun. The verb form would be &quot;apparatus&quot; (to equip).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apparatus</strong> is the correct spelling with double &quot;p&quot;. It means equipment or machinery for a specific purpose. The misspelling &quot;aparatus&quot; with single &quot;p&quot; is never correct. Always use &quot;apparatus&quot; when referring to equipment.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 