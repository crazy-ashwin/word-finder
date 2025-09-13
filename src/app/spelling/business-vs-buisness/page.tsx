import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Business or Buisness - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;business&quot; and &quot;buisness&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function BusinessVsBuisnessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Business or Buisness</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;business&quot; and &quot;buisness&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Buisness</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Buisness&quot; is a misspelling. The correct spelling is &quot;business&quot; with &quot;i&quot; not &quot;ui.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Business</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Business&quot; is the correct spelling. It means commercial activity or a company.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Business (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Commercial activity; a company or organization engaged in trade; one&apos;s occupation or profession.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• She runs her own <strong>business</strong> from home.</li>
                  <li>• The <strong>business</strong> is doing well this year.</li>
                  <li>• He&apos;s in the restaurant <strong>business</strong>.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Buisness (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Buisness&quot; is a misspelling of &quot;business&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Buisness&quot; is not used in standard English.</li>
                  <li>• Always use <strong>business</strong> when referring to commercial activity.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Business:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Company</li>
                <li>• Enterprise</li>
                <li>• Firm</li>
                <li>• Organization</li>
                <li>• Trade</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Buisness:</h4>
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
            <li>• <strong>Business</strong> is spelled with &quot;i&quot; between &quot;u&quot; and &quot;n&quot; (not &quot;ui&quot;) - this is the standard English spelling.</li>
            <li>• The word comes from Old English &quot;bisignes&quot; meaning busyness or occupation.</li>
            <li>• &quot;Buisness&quot; is never correct in any context.</li>
            <li>• The word can be used as both a countable and uncountable noun.</li>
            <li>• Common in both formal and informal contexts.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;buisness&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;buisness&quot; is never correct. The proper spelling is always &quot;business.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What does business mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Business means commercial activity, a company, or one&apos;s occupation or profession.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember that &quot;business&quot; has &quot;i&quot; between &quot;u&quot; and &quot;n&quot; - think of &quot;busy&quot; + &quot;ness.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can business be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;business&quot; is only used as a noun.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases with business?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: business plan, business meeting, business hours, and business partner.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is business used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;business&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between business and company?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;business&quot; is more general, while &quot;company&quot; specifically refers to an organization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can business refer to personal matters?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;business&quot; can refer to personal affairs or matters, as in &quot;mind your own business.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Business</strong> is the correct spelling with &quot;si&quot; in the middle. It means commercial activity or trade. The misspelling &quot;buisness&quot; with &quot;ui&quot; is never correct. Always use &quot;business&quot; when referring to commercial matters.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 