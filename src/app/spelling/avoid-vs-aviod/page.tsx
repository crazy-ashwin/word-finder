import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Avoid or Aviod - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;avoid&quot; and &quot;aviod&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AvoidVsAviodPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Avoid or Aviod</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;avoid&quot; and &quot;aviod&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aviod</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aviod&quot; is a misspelling. The correct spelling is &quot;avoid&quot; with the &quot;o&quot; before the &quot;i&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Avoid</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Avoid&quot; is the correct spelling. It means to keep away from or prevent something from happening.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Avoid (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">To keep away from; to prevent from happening; to evade or escape.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Try to <strong>avoid</strong> rush hour traffic.</li>
                  <li>• She wanted to <strong>avoid</strong> confrontation.</li>
                  <li>• We should <strong>avoid</strong> making the same mistakes.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aviod (verb):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aviod&quot; is a misspelling of &quot;avoid&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aviod&quot; is not used in standard English.</li>
                  <li>• Always use <strong>avoid</strong> when referring to keeping away from something.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Avoid:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Evade</li>
                <li>• Escape</li>
                <li>• Shun</li>
                <li>• Elude</li>
                <li>• Prevent</li>
                <li>• Dodge</li>
                <li>• Steer clear of</li>
                <li>• Keep away from</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aviod:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Avoid</strong> is spelled with &quot;o&quot; before &quot;i&quot;, not &quot;aviod&quot;.</li>
          <li>• The word comes from Old French &quot;esvuidier&quot; meaning to empty out.</li>
          <li>• Can be used both literally (avoid obstacles) and figuratively (avoid problems).</li>
          <li>• Commonly used in everyday conversation and formal writing.</li>
          <li>• &quot;Aviod&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aviod&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aviod&quot; is never correct. The proper spelling is always &quot;avoid&quot; with &quot;o&quot; before &quot;i&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;a-void&quot; - the prefix &quot;a&quot; plus the word &quot;void&quot; (empty space).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between avoid and prevent?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Avoid&quot; means to keep away from something, while &quot;prevent&quot; means to stop something from happening.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can avoid be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;avoid&quot; is appropriate in both formal and informal contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aviod&quot; likely occurs because of confusion about the vowel order or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;avoid&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: avoid contact, avoid conflict, avoid detection, and avoid responsibility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is avoid always about negative things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: While &quot;avoid&quot; often refers to negative things, it can also be used neutrally (avoid rush hour) or positively (avoid overeating).</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the noun form of avoid?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The noun form is &quot;avoidance&quot; - the act of avoiding something.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Avoid</strong> is the correct spelling with &quot;o&quot; before &quot;i&quot;. It means to keep away from or prevent something from happening. The misspelling &quot;aviod&quot; is never correct. Use &quot;avoid&quot; to describe keeping away from people, places, situations, or actions.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 