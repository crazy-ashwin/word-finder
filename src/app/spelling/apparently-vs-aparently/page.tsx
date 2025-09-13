import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apparently or Aparently - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apparently&quot; and &quot;aparently&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApparentlyVsAparentlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apparently or Aparently</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apparently&quot; and &quot;aparently&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aparently</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aparently&quot; is a misspelling. The correct spelling is &quot;apparently&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apparently</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apparently&quot; is the correct spelling. It means as far as one knows or can see; seemingly.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apparently (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">As far as one knows or can see; seemingly; based on what appears to be true.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• <strong>Apparently</strong>, she didn&apos;t get the message.</li>
                  <li>• He was <strong>apparently</strong> unaware of the problem.</li>
                  <li>• <strong>Apparently</strong>, the meeting has been postponed.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aparently (adverb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aparently&quot; is a misspelling of &quot;apparently&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aparently&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apparently</strong> when referring to what seems to be true.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apparently:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Seemingly</li>
                <li>• Evidently</li>
                <li>• Ostensibly</li>
                <li>• Supposedly</li>
                <li>• Allegedly</li>
                <li>• Presumably</li>
                <li>• Reportedly</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aparently:</h4>
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
            <li>• <strong>Apparently</strong> is spelled with two &quot;p&quot;s at the beginning.</li>
            <li>• The word comes from &quot;apparent&quot; + &quot;ly&quot;.</li>
            <li>• Often used to introduce information that may not be certain.</li>
            <li>• Can express surprise or disbelief about a situation.</li>
            <li>• &quot;Aparently&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aparently&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aparently&quot; is never correct. The proper spelling is always &quot;apparently.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;apparent&quot; + &quot;ly&quot; - apparently means in an apparent manner.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apparently and obviously?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Apparently suggests something seems to be true but may not be certain, while obviously means something is clearly evident.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparently be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apparently&quot; is appropriate in both formal and informal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aparently&quot; likely occurs because of confusion about the double &quot;p&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apparently&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: apparently not, apparently so, and apparently unaware.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apparently always about uncertainty?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, apparently typically indicates that something seems to be true but may not be certain or verified.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparently be used at the beginning of a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apparently&quot; is commonly used at the beginning of sentences to introduce information.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apparently</strong> is the correct spelling with two &quot;p&quot;s. It means as far as one knows or can see; seemingly. The misspelling &quot;aparently&quot; is never correct. Use &quot;apparently&quot; when referring to information that seems to be true but may not be certain.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 