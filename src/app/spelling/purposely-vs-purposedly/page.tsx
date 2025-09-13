import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Purposely vs Purposedly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;purposely&quot; and &quot;purposedly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function PurposelyVsPurposedlyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Purposely vs Purposedly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Purposely&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Purposedly&quot; is always incorrect - remember the &quot;ly&quot; ending in &quot;purposely&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Purposedly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Purposely</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;intentionally&quot; or &quot;on purpose.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Purposely&quot; (Correct)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Ends with &quot;ly&quot;</li>
                <li>• Adverb form of &quot;purpose&quot;</li>
                <li>• Standard English</li>
                <li>• Used globally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Purposedly&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Has extra &quot;ed&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Key Differences</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Spelling: ly vs edly</li>
                <li>• Meaning: Valid vs invalid</li>
                <li>• Usage: Common vs never</li>
                <li>• Origin: Purpose + ly vs error</li>
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
            <h3 className="text-2xl font-bold text-green-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>purposely</strong> ignored the warning.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>purposely</strong> arrived late to the meeting.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>purposely</strong> avoided the difficult topic.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The team <strong>purposely</strong> kept the plan secret.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>purposedly</strong> ignored the warning&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;purposely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>purposedly</strong> arrived late to the meeting&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;purposely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>purposedly</strong> avoided the difficult topic&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;purposely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The team <strong>purposedly</strong> kept the plan secret&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;purposely&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">LY for Adverb</h3>
              <p className="text-yellow-800">&quot;Purposely&quot; ends with &quot;ly&quot; - adverb!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Purpose + ly&quot;</h3>
              <p className="text-blue-800">Purposely = Purpose + ly (noun + ly)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;purposely&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Purposely ignore</strong> - intentionally overlook</li>
                <li>• <strong>Purposely avoid</strong> - intentionally dodge</li>
                <li>• <strong>Purposely delay</strong> - intentionally postpone</li>
                <li>• <strong>Purposely mislead</strong> - intentionally deceive</li>
                <li>• <strong>Purposely exclude</strong> - intentionally leave out</li>
                <li>• <strong>Purposely confuse</strong> - intentionally bewilder</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He acted purposely&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Purposely difficult&quot;</li>
                <li>• <strong>After Verb:</strong> &quot;She spoke purposely&quot;</li>
                <li>• <strong>Before Adjective:</strong> &quot;Purposely vague&quot;</li>
                <li>• <strong>Sentence Adverb:</strong> &quot;Purposely, he left&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More purposely&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;purposely&quot; as &quot;purposedly&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;purposedly&quot; often occurs because people confuse it with other adverbs that end in &quot;edly&quot; like &quot;supposedly&quot; or &quot;allegedly.&quot; However, &quot;purposely&quot; follows the rule: purpose + ly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;purposely&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;purposely&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard adverb form of &quot;purpose.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the base form of &quot;purposely&quot;?</h3>
              <p className="text-lg text-gray-700">A: The base form is &quot;purpose&quot; (noun). The word follows the rule: for nouns ending in &quot;e,&quot; simply add &quot;ly&quot; to form the adverb: purpose + ly = purposely.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, the spelling &quot;purposely&quot; is standard across all English-speaking regions. The adverb formation rule is consistent worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Teach the rule: &quot;purpose&quot; + &quot;ly&quot; = &quot;purposely.&quot; Emphasize that it&apos;s an adverb and ends with &quot;ly.&quot; Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;purposely&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: intentionally, deliberately, knowingly, willfully, consciously, and designedly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;purposely&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;purposely&quot; is only used as an adverb in standard English. The adjective form would be &quot;purposeful.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between &quot;purposely&quot; and &quot;intentionally&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words mean the same thing - &quot;on purpose&quot; or &quot;with intent.&quot; &quot;Purposely&quot; is slightly more formal, while &quot;intentionally&quot; is more commonly used in everyday speech.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How is &quot;purposely&quot; used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: In legal contexts, &quot;purposely&quot; often refers to actions done with specific intent or purpose, such as &quot;purposely causing harm&quot; or &quot;purposely avoiding responsibility.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the comparative form of &quot;purposely&quot;?</h3>
              <p className="text-lg text-gray-700">A: The comparative form is &quot;more purposely&quot; and the superlative is &quot;most purposely.&quot; This follows the standard English rule for adverbs with more than two syllables.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Purposely&quot;</strong> ends with &quot;ly&quot; and means &quot;intentionally&quot; or &quot;on purpose.&quot; 
          <br />
          <strong>&quot;Purposedly&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Purposely = Purpose + ly (adverb rule)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
