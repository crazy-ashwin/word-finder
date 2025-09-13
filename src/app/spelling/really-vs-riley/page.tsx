import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Really vs Riley - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;really&quot; and &quot;riley&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReallyVsRileyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Really vs Riley
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Two Different Words
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">Both are Correct - Different Words!</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Really&quot; is an adverb meaning &quot;truly&quot;, &quot;Riley&quot; is a proper noun (name)!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Really</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT - Adverb</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                An adverb meaning &quot;truly&quot;, &quot;very&quot;, or &quot;indeed.&quot; Used to emphasize or confirm something.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Riley</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT - Proper Noun</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                A proper noun (name) for a person. Can be used for both males and females.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Really&quot; (Adverb)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;truly&quot; or &quot;very&quot;</li>
                <li>• Used for emphasis</li>
                <li>• Modifies verbs/adjectives</li>
                <li>• Common in everyday speech</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Riley&quot; (Proper Noun)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• A person&apos;s name</li>
                <li>• Always capitalized</li>
                <li>• Can be male or female</li>
                <li>• Used as a given name</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Key Differences</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Part of speech: Adverb vs Noun</li>
                <li>• Meaning: Truly vs Name</li>
                <li>• Usage: Emphasis vs Identity</li>
                <li>• Capitalization: Lowercase vs Uppercase</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Real-World Examples</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ &quot;Really&quot; Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;I <strong>really</strong> enjoyed that movie.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Are you <strong>really</strong> going to the party?&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;That was <strong>really</strong> difficult!&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;I <strong>really</strong> need to study tonight.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ &quot;Riley&quot; Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;<strong>Riley</strong> is my best friend.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Have you met <strong>Riley</strong> yet?&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;<strong>Riley</strong> won the competition!&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I&apos;m going to <strong>Riley</strong>&apos;s house.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Really = Truly</h3>
              <p className="text-yellow-800">&quot;Really&quot; means &quot;truly&quot; - both start with &quot;tr&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Riley = Name</h3>
              <p className="text-blue-800">Riley is a name - always capitalize names!</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Context Matters</h3>
              <p className="text-green-800">Think about what you&apos;re trying to say</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Proofread</h3>
              <p className="text-amber-800">Always double-check your spelling and context</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases with &quot;Really&quot;</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Really well</strong> - very well</li>
                <li>• <strong>Really bad</strong> - very bad</li>
                <li>• <strong>Really good</strong> - very good</li>
                <li>• <strong>Really fast</strong> - very fast</li>
                <li>• <strong>Really slow</strong> - very slow</li>
                <li>• <strong>Really important</strong> - very important</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Really (adverb):</strong> &quot;I really like it&quot;</li>
                <li>• <strong>Riley (noun):</strong> &quot;Riley is here&quot;</li>
                <li>• <strong>Really (emphasis):</strong> &quot;That&apos;s really cool&quot;</li>
                <li>• <strong>Riley (subject):</strong> &quot;Riley went home&quot;</li>
                <li>• <strong>Really (confirmation):</strong> &quot;Really?&quot;</li>
                <li>• <strong>Riley (object):</strong> &quot;I saw Riley&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Can &quot;really&quot; and &quot;riley&quot; be used interchangeably?</h3>
              <p className="text-lg text-gray-700">A: No! They are completely different words with different meanings. &quot;Really&quot; is an adverb meaning &quot;truly&quot;, while &quot;Riley&quot; is a proper noun (a person&apos;s name).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: When should I capitalize &quot;riley&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Riley&quot; should always be capitalized because it&apos;s a proper noun (a name). &quot;Really&quot; is never capitalized unless it&apos;s at the beginning of a sentence.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of these words?</h3>
              <p className="text-lg text-gray-700">A: &quot;Really&quot; comes from Old English &quot;rēal&quot; meaning &quot;real&quot; + &quot;-ly&quot; suffix. &quot;Riley&quot; is of Irish origin, from &quot;Raghallach&quot; meaning &quot;valiant.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: &quot;Really&quot; is used the same way across all English-speaking regions. &quot;Riley&quot; as a name is popular in English-speaking countries but may have different pronunciations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Explain that &quot;really&quot; is a word that means &quot;very&quot; or &quot;truly&quot;, while &quot;Riley&quot; is someone&apos;s name. Use examples in sentences to show the difference.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;really&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: truly, very, indeed, actually, genuinely, sincerely, and absolutely.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;really&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;really&quot; is only used as an adverb in standard English. It modifies verbs, adjectives, or other adverbs to add emphasis.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;really&quot; and &quot;very&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both are adverbs of degree, but &quot;really&quot; often implies truth or sincerity (&quot;I really mean it&quot;), while &quot;very&quot; simply intensifies (&quot;very hot&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How popular is the name &quot;Riley&quot;?</h3>
              <p className="text-lg text-gray-700">A: Riley is a popular unisex name in English-speaking countries. It ranked in the top 100 names for both boys and girls in the US in recent years.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Can &quot;really&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;really&quot; is acceptable in formal writing, though alternatives like &quot;truly&quot;, &quot;indeed&quot;, or &quot;genuinely&quot; might be more appropriate in very formal contexts.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Remember: <strong>&quot;Really&quot;</strong> is an adverb meaning &quot;truly&quot; or &quot;very&quot;.
          <br />
          <strong>&quot;Riley&quot;</strong> is a proper noun (a person&apos;s name) that should always be capitalized.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Really = truly, Riley = name&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
