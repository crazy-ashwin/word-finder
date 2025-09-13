import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Against or Againsts - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;against&quot; and &quot;againsts&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AgainstVsAgainstsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Against or Againsts</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Understanding the difference between &quot;Against&quot; or &quot;Againsts&quot;: these commonly confused spellings and how to use them properly.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Againsts</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Againsts&quot; is a misspelling. The correct spelling is &quot;against&quot; with no &apos;s&apos; at the end.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Against</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Against&quot; is the correct spelling. It means in opposition to or in contact with something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Against</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4"><strong>Against</strong> (preposition): In opposition to; in contrast to; in contact with; as a protection from.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-blue-900">Examples:</h4>
            <ul className="text-lg md:text-xl text-blue-800 space-y-2">
              <li>• The law is <strong>against</strong> stealing.</li>
              <li>• He pressed his hand <strong>against</strong> the glass.</li>
              <li>• They are <strong>against</strong> the proposal.</li>
              <li>• The team played <strong>against</strong> their rivals.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Against</h2>
        <div className="bg-blue-100 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Common Synonyms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Opposed to</li>
                <li>• Versus</li>
                <li>• Contrasted with</li>
                <li>• Counter to</li>
                <li>• Versing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Related Terms:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• In opposition</li>
                <li>• In contrast</li>
                <li>• In resistance</li>
                <li>• In defiance</li>
                <li>• In defense</li>
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
            <li>• <strong>Against</strong> is spelled with no &apos;s&apos; at the end.</li>
            <li>• Commonly used to show opposition or contact.</li>
            <li>• Can be used in both literal and figurative senses.</li>
            <li>• The word comes from Old English &quot;ongean&quot; meaning &quot;opposite, toward&quot;.</li>
            <li>• The noun form is &quot;opposition&quot;.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;againsts&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;againsts&quot; is never correct. The proper spelling is always &quot;against&quot; with no &apos;s&apos; at the end.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;against&quot; ends with &quot;st&quot; like &quot;first&quot; or &quot;list&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between against and opposed to?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: They are synonyms, but &quot;against&quot; is more general and can also mean physical contact.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can against be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;against&quot; is appropriate in both formal and informal writing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is against always about opposition?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, it can also mean in contact with or as a protection from something.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;againsts&quot; likely occurs because of confusion about the ending or unfamiliarity with the word.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;against&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Common phrases include: against the law, against the wall, against all odds, and go against the grain.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;against&quot; be used in business writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;against&quot; is commonly used in business, legal, and everyday contexts.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Against</strong> is the correct spelling with no &apos;s&apos; at the end. It means in opposition to or in contact with something. The misspelling &quot;againsts&quot; is never correct. Use this word when talking about opposition, contact, or protection.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 