import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'August or Agust - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;August&quot; and &quot;Agust&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AugustVsAgustPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">August or Agust</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;August&quot; or &quot;Agust&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Agust</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Agust&quot; is a common misspelling. The correct spelling is &quot;August&quot; with a &apos;u&apos; after the &apos;g&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: August</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;August&quot; is the correct spelling. It is the eighth month of the year in the Gregorian calendar, or can mean respected and impressive.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of August</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>August</strong> (noun): The eighth month of the year in the Gregorian calendar. <br/><strong>August</strong> (adjective): Respected and impressive; majestic.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• My birthday is in <strong>August</strong>.</li>
              <li>• The weather in <strong>August</strong> is usually hot.</li>
              <li>• The ceremony was held in the <strong>august</strong> hall of the palace.</li>
              <li>• She was an <strong>august</strong> presence in the community.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for August</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms (adjective):</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Majestic</li>
                <li>• Grand</li>
                <li>• Dignified</li>
                <li>• Noble</li>
                <li>• Stately</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Imposing</li>
                <li>• Distinguished</li>
                <li>• Celebrated</li>
                <li>• Illustrious</li>
                <li>• Eminent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>August</strong> is spelled with a &apos;u&apos; after the &apos;g&apos;, not &quot;agust&quot;.</li>
            <li>• Used as both a noun (month) and adjective (majestic).</li>
            <li>• The noun form refers to the calendar month.</li>
            <li>• The adjective form means respected or impressive.</li>
            <li>• The word comes from Latin &quot;augustus&quot; meaning &quot;venerable&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;agust&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;agust&quot; is never correct. The proper spelling is always &quot;August&quot; with a &apos;u&apos; after the &apos;g&apos;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;August&quot; has a &apos;u&apos; after the &apos;g&apos;, just like &quot;Augustus&quot; the Roman emperor.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;August&quot; be used as an adjective?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;august&quot; as an adjective means respected and impressive.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;August&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: August vacation, August heat, august presence, august company.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;agust&quot; happens because the &apos;u&apos; is sometimes forgotten or omitted.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>August</strong> is the correct spelling with &quot;u&quot;: Au-gust. It means the eighth month of the year. The misspelling &quot;agust&quot; is never correct. Always use &quot;August&quot; when referring to the month or as a proper name.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 