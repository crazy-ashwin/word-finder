import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rely vs Relly - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rely&quot; and &quot;relly&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RelyVsRellyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Rely vs Relly
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Rely&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Relly&quot; is always incorrect - remember the &quot;y&quot; in &quot;rely&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Relly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling has double &quot;l&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-sky-50 to-sky-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-sky-800 mb-4">Rely</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-sky-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-sky-700 leading-relaxed">
                This is the proper spelling meaning &quot;to depend on&quot; or &quot;to trust.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Rely&quot; (Verb)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;depend on&quot;</li>
                <li>• Has single &quot;l&quot;</li>
                <li>• Related to &quot;reliable&quot;</li>
                <li>• Used in daily speech</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Relly&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Double &quot;l&quot;</li>
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
                <li>• From Old French &quot;relier&quot;</li>
                <li>• Related to &quot;reliable&quot;</li>
                <li>• Always single &quot;l&quot;</li>
                <li>• Common in English</li>
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
            <h3 className="text-2xl font-bold text-sky-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;I <strong>rely</strong> on your help.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;You can <strong>rely</strong> on me.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;They <strong>rely</strong> on technology.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;She <strong>relies</strong> on public transport.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>relly</strong> on your help&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;You can <strong>relly</strong> on me&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>relly</strong> on technology&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rely&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>rellies</strong> on public transport&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relies&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Single L</h3>
              <p className="text-sky-800">&quot;Rely&quot; has single &quot;l&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Reliable</h3>
              <p className="text-blue-800">&quot;Reliable&quot; also has single &quot;l&quot; - same pattern!</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;rely&quot; to build muscle memory</p>
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
                <li>• <strong>Rely on</strong> - depend on</li>
                <li>• <strong>Rely heavily</strong> - depend greatly</li>
                <li>• <strong>Rely completely</strong> - depend entirely</li>
                <li>• <strong>Rely solely</strong> - depend only on</li>
                <li>• <strong>Rely primarily</strong> - depend mainly on</li>
                <li>• <strong>Rely exclusively</strong> - depend only on</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> &quot;I rely&quot;</li>
                <li>• <strong>Past:</strong> &quot;I relied&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;I am relying&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Rely on&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;Rely heavily&quot;</li>
                <li>• <strong>With objects:</strong> &quot;Rely on someone&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people confuse &quot;rely&quot; and &quot;relly&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might add an extra &quot;l&quot; thinking it follows a different pattern. Many words in English have double letters, but &quot;rely&quot; is not one of them.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;rely&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rely&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;rely&quot; and &quot;relly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rely&quot; is the correct spelling meaning &quot;to depend on&quot; or &quot;to trust.&quot; &quot;Relly&quot; has double &quot;l&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;rely&quot; always about trust?</h3>
              <p className="text-lg text-gray-700">A: While &quot;rely&quot; often involves trust, it can also describe depending on something for support, help, or functionality. It&apos;s about having confidence in something or someone.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;reliable&quot; - both &quot;rely&quot; and &quot;reliable&quot; have single &quot;l.&quot; Remember: &quot;Re&quot; + &quot;ly&quot; with single &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;rely&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: depend, trust, count on, lean on, and bank on. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;rely&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rely&quot; is used in casual conversation, formal writing, business contexts, and any situation where people discuss dependence or trust.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;rely&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rely&quot; comes from Old French &quot;relier&quot; meaning &quot;to fasten&quot; or &quot;to attach,&quot; which evolved to mean &quot;to depend on&quot; or &quot;to trust.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;rely&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rely&quot; follows a regular pattern. It&apos;s formed by adding &quot;ed&quot; for past tense and &quot;ing&quot; for present participle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I avoid spelling &quot;rely&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;reliable,&quot; and always proofread your work. The single &quot;l&quot; is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rely&quot;</strong> has single &quot;l&quot; and means &quot;to depend on.&quot; 
          <br />
          <strong>&quot;Relly&quot;</strong> has double &quot;l&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RELIABLE&quot; - both &quot;rely&quot; and &quot;reliable&quot; have single &quot;l&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/remain-vs-remian" className="text-blue-700 hover:text-blue-900 underline">Remain vs Remian</a></li>
            <li><a href="/spelling/remained-vs-remaned" className="text-blue-700 hover:text-blue-900 underline">Remained vs Remaned</a></li>
            <li><a href="/spelling/remaining-vs-remaning" className="text-blue-700 hover:text-blue-900 underline">Remaining vs Remaning</a></li>
            <li><a href="/spelling/remember-vs-rember" className="text-blue-700 hover:text-blue-900 underline">Remember vs Rember</a></li>
            <li><a href="/spelling/reminisce-vs-reminence" className="text-blue-700 hover:text-blue-900 underline">Reminisce vs Reminence</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/depend-vs-depend" className="text-purple-700 hover:text-purple-900 underline">Depend vs Depend</a></li>
            <li><a href="/spelling/trust-vs-trust" className="text-purple-700 hover:text-purple-900 underline">Trust vs Trust</a></li>
            <li><a href="/spelling/count-vs-count" className="text-purple-700 hover:text-purple-900 underline">Count vs Count</a></li>
            <li><a href="/spelling/lean-vs-lean" className="text-purple-700 hover:text-purple-900 underline">Lean vs Lean</a></li>
            <li><a href="/spelling/bank-vs-bank" className="text-purple-700 hover:text-purple-900 underline">Bank vs Bank</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/double-letters" className="text-green-700 hover:text-green-900 underline">Double Letters</a></li>
            <li><a href="/grammar/verb-conjugation" className="text-green-700 hover:text-green-900 underline">Verb Conjugation</a></li>
            <li><a href="/grammar/old-french-origins" className="text-green-700 hover:text-green-900 underline">Old French Origins</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
