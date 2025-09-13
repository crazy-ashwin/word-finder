import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Apparent or Aparent - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;apparent&quot; and &quot;aparent&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ApparentVsAparentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Apparent or Aparent</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;apparent&quot; and &quot;aparent&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aparent</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aparent&quot; is a misspelling. The correct spelling is &quot;apparent&quot; with two &quot;p&quot;s.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Apparent</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Apparent&quot; is the correct spelling. It means clearly visible, obvious, or seeming to be true.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Apparent (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Clearly visible or understood; obvious; seeming to be true or real.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• It was <strong>apparent</strong> that she was upset.</li>
                  <li>• The solution became <strong>apparent</strong> after careful study.</li>
                  <li>• There was an <strong>apparent</strong> contradiction in his story.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aparent (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aparent&quot; is a misspelling of &quot;apparent&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aparent&quot; is not used in standard English.</li>
                  <li>• Always use <strong>apparent</strong> when referring to what is obvious.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Apparent:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Obvious</li>
                <li>• Clear</li>
                <li>• Evident</li>
                <li>• Visible</li>
                <li>• Seeming</li>
                <li>• Plain</li>
                <li>• Manifest</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aparent:</h4>
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
            <li>• <strong>Apparent</strong> is spelled with two &quot;p&quot;s at the beginning.</li>
            <li>• The word comes from Latin &quot;apparens&quot; meaning visible.</li>
            <li>• Can mean both &quot;obvious&quot; and &quot;seeming to be true.&quot;</li>
            <li>• Often used in formal writing and academic contexts.</li>
            <li>• &quot;Aparent&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aparent&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aparent&quot; is never correct. The proper spelling is always &quot;apparent.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;appear&quot; + &quot;ent&quot; - apparent means something that appears to be true.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between apparent and obvious?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Apparent can mean both &quot;obvious&quot; and &quot;seeming to be true,&quot; while obvious only means clearly evident.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparent be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;apparent&quot; is very appropriate in formal writing and academic contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aparent&quot; likely occurs because of confusion about the double &quot;p&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;apparent&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: apparent contradiction, apparent success, and apparent reason.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is apparent always about visual things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, apparent can refer to anything that seems to be true, not just visual things.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can apparent be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;apparent&quot; is only an adjective. The noun form would be &quot;appearance.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Apparent</strong> is the correct spelling with double &quot;p&quot;: ap-par-ent. It means clearly visible or obvious. The misspelling &quot;aparent&quot; is never correct. Always use &quot;apparent&quot; when referring to something that is obvious or clearly visible.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}