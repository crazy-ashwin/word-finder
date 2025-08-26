import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Renowned vs Renouned - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;renowned&quot; and &quot;renouned&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RenownedVsRenounedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Renowned vs Renouned
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-teal-600">&quot;Renowned&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Renouned&quot; is always incorrect - remember the &quot;ed&quot; in &quot;renowned&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Renouned</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;ed&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Renowned</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                This is the proper spelling meaning &quot;famous or well-known.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Renowned&quot; (Adjective)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;famous&quot;</li>
                <li>• Has &quot;ed&quot; ending</li>
                <li>• Related to &quot;renown&quot;</li>
                <li>• Used in formal contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Renouned&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;ed&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Etymology</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From &quot;re&quot; + &quot;known&quot;</li>
                <li>• Related to &quot;renown&quot;</li>
                <li>• Always has &quot;ed&quot;</li>
                <li>• Common in formal writing</li>
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
            <h3 className="text-2xl font-bold text-teal-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;He is a <strong>renowned</strong> scientist.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;She is a <strong>renowned</strong> artist.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;The city is <strong>renowned</strong> for its cuisine.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;They are <strong>renowned</strong> experts.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is a <strong>renouned</strong> scientist&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;renowned&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is a <strong>renouned</strong> artist&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;renowned&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The city is <strong>renouned</strong> for its cuisine&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;renowned&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They are <strong>renouned</strong> experts&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;renowned&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">ED Ending Rule</h3>
              <p className="text-yellow-800">&quot;Renowned&quot; has &quot;ed&quot; like &quot;known&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Known</h3>
              <p className="text-blue-800">&quot;Known&quot; has &quot;ed&quot; - same pattern!</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;renowned&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Renowned scientist</strong> - famous researcher</li>
                <li>• <strong>Renowned artist</strong> - famous creator</li>
                <li>• <strong>Renowned expert</strong> - famous specialist</li>
                <li>• <strong>Renowned institution</strong> - famous organization</li>
                <li>• <strong>Renowned for</strong> - famous because of</li>
                <li>• <strong>World-renowned</strong> - internationally famous</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Attributive:</strong> &quot;The renowned author&quot;</li>
                <li>• <strong>Predicative:</strong> &quot;She is renowned&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Renowned for&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More renowned&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most renowned&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Renownedly&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;renowned&quot; and &quot;renouned&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that some English words have silent letters. People might drop the &quot;ed&quot; thinking it follows a different pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;renowned&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Renowned&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;renowned&quot; and &quot;renouned&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Renowned&quot; is the correct spelling meaning &quot;famous or well-known.&quot; &quot;Renouned&quot; is missing the &quot;ed&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;renowned&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;renowned&quot; typically has positive connotations (being famous for good reasons), it can be used in neutral contexts. The word itself implies recognition and fame.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;known&quot; - &quot;known&quot; has &quot;ed&quot; and &quot;renowned&quot; follows the same rule. Both have the &quot;ed&quot; ending pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;renowned&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: famous, celebrated, distinguished, eminent, illustrious, and well-known. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;renowned&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Renowned&quot; is used in academic contexts, business descriptions, cultural discussions, professional profiles, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;renowned&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Renowned&quot; comes from the combination of &quot;re&quot; (again) + &quot;known&quot; (recognized), meaning &quot;well-known&quot; or &quot;famous.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;renowned&quot; a regular or irregular adjective?</h3>
              <p className="text-lg text-gray-700">A: &quot;Renowned&quot; follows a regular pattern for adjectives. It&apos;s formed by adding &quot;ed&quot; to the base form, similar to other past participle adjectives.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Renowned&quot;</strong> has &quot;ed&quot; and means &quot;famous or well-known.&quot; 
          <br />
          <strong>&quot;Renouned&quot;</strong> is missing &quot;ed&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ED ENDING&quot; - &quot;renowned&quot; has &quot;ed&quot; like &quot;known&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/renowned-vs-renound" className="text-blue-700 hover:text-blue-900 underline">Renowned vs Renound</a></li>
            <li><a href="/spelling/renowned-vs-reknowned" className="text-blue-700 hover:text-blue-900 underline">Renowned vs Reknowned</a></li>
            <li><a href="/spelling/renowned-vs-reknown" className="text-blue-700 hover:text-blue-900 underline">Renowned vs Reknown</a></li>
            <li><a href="/spelling/renovation-vs-rennovation" className="text-blue-700 hover:text-blue-900 underline">Renovation vs Rennovation</a></li>
            <li><a href="/spelling/repair-vs-repare" className="text-blue-700 hover:text-blue-900 underline">Repair vs Repare</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/known-vs-knon" className="text-purple-700 hover:text-purple-900 underline">Known vs Knon</a></li>
            <li><a href="/spelling/owned-vs-own" className="text-purple-700 hover:text-purple-900 underline">Owned vs Own</a></li>
            <li><a href="/spelling/learned-vs-learnd" className="text-purple-700 hover:text-purple-900 underline">Learned vs Learnd</a></li>
            <li><a href="/spelling/earned-vs-earnd" className="text-purple-700 hover:text-purple-900 underline">Earned vs Earnd</a></li>
            <li><a href="/spelling/concerned-vs-concernd" className="text-purple-700 hover:text-purple-900 underline">Concerned vs Concernd</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/pronunciation" className="text-green-700 hover:text-green-900 underline">Pronunciation</a></li>
            <li><a href="/grammar/latin-origins" className="text-green-700 hover:text-green-900 underline">Latin Origins</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
