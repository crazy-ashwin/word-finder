import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reside vs Recide - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reside&quot; and &quot;recide&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ResideVsRecidePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Reside vs Recide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Reside&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Recide&quot; is always incorrect - remember the &quot;s&quot; in &quot;reside&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Recide</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Reside</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to live in a particular place.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Reside&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;s&quot; in middle</li>
                <li>• Means to live somewhere</li>
                <li>• Verb form</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Recide&quot; (Wrong)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing the &quot;s&quot;</li>
                <li>• Not a real word</li>
                <li>• Common misspelling</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Tip</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;RE + SIDE&quot;</li>
                <li>• The &quot;s&quot; is crucial</li>
                <li>• Like &quot;inside&quot; with &quot;s&quot;</li>
                <li>• Practice writing it out</li>
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
                <p className="text-lg text-green-800">&quot;I <strong>reside</strong> in New York.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>reside</strong> in the suburbs.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>resides</strong> in a small town.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We <strong>reside</strong> near the beach.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>recide</strong> in New York&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reside&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>recide</strong> in the suburbs&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reside&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>recides</strong> in a small town&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;resides&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We <strong>recide</strong> near the beach&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reside&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">S Rule</h3>
              <p className="text-yellow-800">&quot;Reside&quot; has &quot;s&quot; like &quot;inside&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Break It Down</h3>
              <p className="text-blue-800">RE + SIDE = Reside</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;reside&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Reside in</strong> - live in a place</li>
                <li>• <strong>Reside at</strong> - live at an address</li>
                <li>• <strong>Reside near</strong> - live close to</li>
                <li>• <strong>Reside with</strong> - live together</li>
                <li>• <strong>Reside permanently</strong> - live long-term</li>
                <li>• <strong>Reside temporarily</strong> - live short-term</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> &quot;I reside&quot;</li>
                <li>• <strong>Past:</strong> &quot;I resided&quot;</li>
                <li>• <strong>Future:</strong> &quot;I will reside&quot;</li>
                <li>• <strong>Third person:</strong> &quot;He resides&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Residing here&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To reside&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;reside&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people forget the &quot;s&quot; in the middle. The word is commonly used in formal contexts, making it easy to misspell.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;recide&quot; ever correct?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;recide&quot; is never correct in any context. It&apos;s always a misspelling of &quot;reside.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;reside&quot; and &quot;live&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reside&quot; is more formal and means &quot;to live in a particular place,&quot; while &quot;live&quot; is more casual and general.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;reside&quot; has &quot;s&quot; in the middle, just like &quot;inside.&quot; Think: &quot;You reside inside a place.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there similar words that follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Words like &quot;inside,&quot; &quot;outside,&quot; and &quot;beside&quot; all follow the same pattern with &quot;s&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;reside&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reside&quot; comes from the Latin &quot;residere&quot; meaning &quot;to remain&quot; and is related to the word &quot;residual.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;reside&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Reside&quot; is a formal word commonly used in legal, academic, and professional contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;reside&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: live, dwell, inhabit, occupy, stay, and lodge.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Reside&quot;</strong> has &quot;s&quot; in the middle: re-si-de. 
          <br />
          <strong>&quot;Recide&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RE + SIDE&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/separate-vs-seperate" className="text-blue-700 hover:text-blue-900 underline">Separate vs Seperate</a></li>
            <li><a href="/spelling/definitely-vs-definately" className="text-blue-700 hover:text-blue-900 underline">Definitely vs Definately</a></li>
            <li><a href="/spelling/occurred-vs-occured" className="text-blue-700 hover:text-blue-900 underline">Occurred vs Occured</a></li>
            <li><a href="/spelling/privilege-vs-priviledge" className="text-blue-700 hover:text-blue-900 underline">Privilege vs Priviledge</a></li>
            <li><a href="/spelling/embarrass-vs-embarass" className="text-blue-700 hover:text-blue-900 underline">Embarrass vs Embarass</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/inside-vs-inside" className="text-purple-700 hover:text-purple-900 underline">Inside vs Inside</a></li>
            <li><a href="/spelling/outside-vs-outside" className="text-purple-700 hover:text-purple-900 underline">Outside vs Outside</a></li>
            <li><a href="/spelling/beside-vs-beside" className="text-purple-700 hover:text-purple-900 underline">Beside vs Beside</a></li>
            <li><a href="/spelling/decide-vs-decide" className="text-purple-700 hover:text-purple-900 underline">Decide vs Decide</a></li>
            <li><a href="/spelling/divide-vs-divide" className="text-purple-700 hover:text-purple-900 underline">Divide vs Divide</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/formal-language" className="text-green-700 hover:text-green-900 underline">Formal Language</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
