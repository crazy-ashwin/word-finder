import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Appreciate or Appriciate - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;appreciate&quot; and &quot;appriciate&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AppreciateVsAppriciatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Appreciate or Appriciate</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;appreciate&quot; and &quot;appriciate&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Appriciate</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Appriciate&quot; is a misspelling. The correct spelling is &quot;appreciate&quot; with &quot;pre&quot; not &quot;pri.&quot;</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Appreciate</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Appreciate&quot; is the correct spelling. It means to recognize the value or quality of something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Appreciate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To recognize the value or quality of something; to be grateful for; to understand or be aware of.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• I really <strong>appreciate</strong> your help.</li>
                  <li>• She <strong>appreciates</strong> fine art and music.</li>
                  <li>• We <strong>appreciate</strong> your patience.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Appriciate (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Appriciate&quot; is a misspelling of &quot;appreciate&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Appriciate&quot; is not used in standard English.</li>
                  <li>• Always use <strong>appreciate</strong> when expressing gratitude.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Appreciate:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Value</li>
                <li>• Recognize</li>
                <li>• Understand</li>
                <li>• Be grateful for</li>
                <li>• Acknowledge</li>
                <li>• Respect</li>
                <li>• Treasure</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Appriciate:</h4>
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
            <li>• <strong>Appreciate</strong> is spelled with &quot;pre&quot; not &quot;pri.&quot;</li>
            <li>• Used to express gratitude or recognize value.</li>
            <li>• Can be used in both formal and informal contexts.</li>
            <li>• The word comes from Latin &quot;appretiare&quot; meaning &quot;to value.&quot;</li>
            <li>• &quot;Appriciate&quot; is never correct in any context.</li>
            <li>• Often used in phrases like &quot;I appreciate&quot; or &quot;appreciate your.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;appriciate&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appriciate&quot; is never correct. The proper spelling is always &quot;appreciate&quot; with &quot;pre&quot; not &quot;pri.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;ap-pre-ci-ate&quot; - it has &quot;pre&quot; in the middle, not &quot;pri.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between appreciate and like?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Appreciate&quot; suggests deeper understanding and value recognition, while &quot;like&quot; is more casual preference.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appreciate be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appreciate&quot; is very appropriate in formal writing and business communications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;appriciate&quot; likely occurs because of confusion with words that have &quot;pri&quot; in them.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;appreciate&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: I appreciate, appreciate your help, appreciate the opportunity, and greatly appreciate.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is appreciate always positive?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;appreciate&quot; always has a positive connotation and expresses gratitude or value recognition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can appreciate be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;appreciate&quot; is a verb. The noun form is &quot;appreciation&quot; (showing appreciation).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Appreciate</strong> is the correct spelling with &quot;ci&quot; in the middle. It means to be grateful for or value something. The misspelling &quot;appriciate&quot; with &quot;ci&quot; is never correct. Always use &quot;appreciate&quot; when expressing gratitude.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 