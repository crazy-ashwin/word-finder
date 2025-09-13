import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Awful or Aweful - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;awful&quot; and &quot;aweful&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AwfulVsAwefulPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Awful or Aweful</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;awful&quot; and &quot;aweful&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Aweful</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Aweful&quot; is a misspelling. The correct spelling is &quot;awful&quot; without the &quot;e&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Awful</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Awful&quot; is the correct spelling. It means extremely bad, unpleasant, or terrible.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Awful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Extremely bad, unpleasant, or terrible; inspiring fear or dread.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The weather was <strong>awful</strong> yesterday.</li>
                  <li>• That movie was absolutely <strong>awful</strong>.</li>
                  <li>• I had an <strong>awful</strong> headache all day.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Aweful (adjective):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Aweful&quot; is a misspelling of &quot;awful&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Aweful&quot; is not used in standard English.</li>
                  <li>• Always use <strong>awful</strong> when referring to something terrible.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Awful:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Terrible</li>
                <li>• Horrible</li>
                <li>• Dreadful</li>
                <li>• Appalling</li>
                <li>• Atrocious</li>
                <li>• Ghastly</li>
                <li>• Frightful</li>
                <li>• Shocking</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Aweful:</h4>
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
          <li>• <strong>Awful</strong> is spelled without an &quot;e&quot;, not &quot;aweful.&quot;</li>
          <li>• The word comes from Old English &quot;egefull&quot; meaning full of fear or dread.</li>
          <li>• Originally meant &quot;inspiring awe&quot; but now primarily means &quot;very bad.&quot;</li>
          <li>• Commonly used in informal speech and writing.</li>
          <li>• &quot;Aweful&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;aweful&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aweful&quot; is never correct. The proper spelling is always &quot;awful&quot; without the &quot;e.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;aw-ful&quot; - the word &quot;aw&quot; (expression of dismay) plus the suffix &quot;-ful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between awful and awesome?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Awful&quot; means very bad, while &quot;awesome&quot; means very good or impressive.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can awful be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Awful&quot; is more appropriate in informal contexts. In formal writing, consider using &quot;terrible&quot; or &quot;dreadful.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;aweful&quot; likely occurs because of confusion with the word &quot;awe&quot; or pronunciation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;awful&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: awful weather, awful mistake, awful feeling, and awful experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is awful always about negative things?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;awful&quot; always refers to something negative, bad, or unpleasant.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the adverb form of awful?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The adverb form is &quot;awfully&quot; - meaning very or extremely (e.g., &quot;awfully sorry&quot;).</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Awful</strong> is the correct spelling without an &quot;e&quot;. It means extremely bad, unpleasant, or terrible. The misspelling &quot;aweful&quot; is never correct. Use &quot;awful&quot; to describe very bad experiences, situations, or feelings.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 