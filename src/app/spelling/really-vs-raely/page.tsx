import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Really vs Raely - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;really&quot; and &quot;raely&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReallyVsRaelyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
          Really vs Raely
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-fuchsia-100 via-purple-100 to-violet-100 p-8 rounded-2xl mb-10 border border-fuchsia-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Really&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Raely&quot; is always incorrect - remember the proper spelling with &quot;e&quot; and &quot;l&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Raely</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Really</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;truly&quot;, &quot;very&quot;, or &quot;indeed.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">&quot;Really&quot; (Correct)</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Has &quot;e&quot; and &quot;l&quot;</li>
                <li>• Means &quot;truly&quot; or &quot;very&quot;</li>
                <li>• From Old English &quot;rēal&quot;</li>
                <li>• Used for emphasis</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Raely&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;e&quot; and &quot;l&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Key Differences</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Spelling: &quot;e&quot; and &quot;l&quot; vs missing</li>
                <li>• Meaning: Valid vs invalid</li>
                <li>• Usage: Common vs never</li>
                <li>• Origin: Old English vs error</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>really</strong> appreciate your help.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Are you <strong>really</strong> going to do that?&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;That&apos;s <strong>really</strong> impressive!&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I <strong>really</strong> hope you succeed.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>raely</strong> appreciate your help&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;really&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Are you <strong>raely</strong> going to do that?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;really&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That&apos;s <strong>raely</strong> impressive!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;really&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>raely</strong> hope you succeed&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;really&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E and L Rule</h3>
              <p className="text-yellow-800">&quot;Really&quot; has &quot;e&quot; and &quot;l&quot; - really well!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Real&quot;</h3>
              <p className="text-blue-800">Really = Real + ly (truly real)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;really&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Adverb:</strong> &quot;I really like it&quot;</li>
                <li>• <strong>Emphasis:</strong> &quot;That&apos;s really cool&quot;</li>
                <li>• <strong>Confirmation:</strong> &quot;Really?&quot;</li>
                <li>• <strong>Intensifier:</strong> &quot;Really difficult&quot;</li>
                <li>• <strong>Truth:</strong> &quot;I really mean it&quot;</li>
                <li>• <strong>Degree:</strong> &quot;Really hot&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Why do people misspell &quot;really&quot; as &quot;raely&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;raely&quot; often occurs because people forget the &quot;e&quot; and &quot;l&quot; in the middle. The word has a common structure that can be confusing to spell correctly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;really&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;really&quot; is acceptable in formal writing, though alternatives like &quot;truly&quot;, &quot;indeed&quot;, or &quot;genuinely&quot; might be more appropriate in very formal contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;really&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Really&quot; comes from Old English &quot;rēal&quot; meaning &quot;real&quot; + the &quot;-ly&quot; suffix. It originally meant &quot;in a real manner&quot; and evolved to mean &quot;truly&quot; or &quot;very.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;really&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word: &quot;real-ly.&quot; Emphasize the &quot;e&quot; and &quot;l&quot; sounds and have them practice writing it multiple times. Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;really&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: truly, very, indeed, actually, genuinely, sincerely, absolutely, and certainly.</p>
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

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How is &quot;really&quot; used in questions?</h3>
              <p className="text-lg text-gray-700">A: &quot;Really?&quot; is commonly used as a question to express surprise, disbelief, or to ask for confirmation. It&apos;s a versatile interjection.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the comparative form of &quot;really&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Really&quot; doesn&apos;t have a comparative form since it&apos;s an adverb of degree. You would use &quot;more really&quot; or rephrase the sentence.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Really&quot;</strong> has &quot;e&quot; and &quot;l&quot; and means &quot;truly&quot; or &quot;very.&quot; 
          <br />
          <strong>&quot;Raely&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Really = Real + ly (truly real)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/technology-vs-tecnology" className="text-blue-700 hover:text-blue-900 underline">Technology vs Tecnology</a></li>
            <li><a href="/spelling/strength-vs-strengh" className="text-blue-700 hover:text-blue-900 underline">Strength vs Strengh</a></li>
            <li><a href="/spelling/biscuit-vs-bisquit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Bisquit</a></li>
            <li><a href="/spelling/their-vs-thier" className="text-blue-700 hover:text-blue-900 underline">Their vs Thier</a></li>
            <li><a href="/spelling/weight-vs-weigth" className="text-blue-700 hover:text-blue-900 underline">Weight vs Weigth</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/too-vs-to" className="text-purple-700 hover:text-purple-900 underline">Too vs To</a></li>
            <li><a href="/spelling/your-vs-youre" className="text-purple-700 hover:text-purple-900 underline">Your vs You&apos;re</a></li>
            <li><a href="/spelling/its-vs-its" className="text-purple-700 hover:text-purple-900 underline">Its vs It&apos;s</a></li>
            <li><a href="/spelling/there-vs-their" className="text-purple-700 hover:text-purple-900 underline">There vs Their</a></li>
            <li><a href="/spelling/weather-vs-whether" className="text-purple-700 hover:text-purple-900 underline">Weather vs Whether</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adverbs" className="text-green-700 hover:text-green-900 underline">Adverbs Guide</a></li>
            <li><a href="/grammar/parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/word-usage" className="text-green-700 hover:text-green-900 underline">Word Usage</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
