import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Remember vs Rember - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;remember&quot; and &quot;rember&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RememberVsRemberPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Remember vs Rember
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Remember&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rember&quot; is always incorrect - remember the &quot;mem&quot; in &quot;remember&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rember</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;mem&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Remember</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;to recall to mind.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Remember&quot; (Verb)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;recall&quot;</li>
                <li>• Has &quot;mem&quot; in the middle</li>
                <li>• Related to &quot;memory&quot;</li>
                <li>• Used in daily speech</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Rember&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;mem&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Etymology</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• From Old French &quot;remembrer&quot;</li>
                <li>• Related to &quot;memory&quot;</li>
                <li>• Always has &quot;mem&quot;</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;I <strong>remember</strong> our first meeting.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;Do you <strong>remember</strong> what happened?&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;She will <strong>remember</strong> this day forever.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;They <strong>remembered</strong> to bring the keys.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>rember</strong> our first meeting&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remember&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Do you <strong>rember</strong> what happened?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remember&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She will <strong>rember</strong> this day forever&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remember&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>rembered</strong> to bring the keys&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remembered&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">MEM in Middle</h3>
              <p className="text-emerald-800">&quot;Remember&quot; has &quot;mem&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Think Memory</h3>
              <p className="text-teal-800">&quot;Memory&quot; also has &quot;mem&quot; - same pattern!</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Write It Out</h3>
              <p className="text-cyan-800">Practice writing &quot;remember&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Remember to</strong> - don&apos;t forget to</li>
                <li>• <strong>Remember when</strong> - recall a time</li>
                <li>• <strong>Remember that</strong> - keep in mind</li>
                <li>• <strong>Remember how</strong> - recall method</li>
                <li>• <strong>Remember why</strong> - recall reason</li>
                <li>• <strong>Remember where</strong> - recall location</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> &quot;I remember&quot;</li>
                <li>• <strong>Past:</strong> &quot;I remembered&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;I am remembering&quot;</li>
                <li>• <strong>With objects:</strong> &quot;Remember the date&quot;</li>
                <li>• <strong>With infinitives:</strong> &quot;Remember to call&quot;</li>
                <li>• <strong>With clauses:</strong> &quot;Remember that...&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people confuse &quot;remember&quot; and &quot;rember&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;mem&quot; thinking it follows a different pattern. The word can sound like it starts with &quot;rem&quot; instead of &quot;remem.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;remember&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Remember&quot; is perfectly acceptable in formal writing, academic papers, literature, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;remember&quot; and &quot;rember&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remember&quot; is the correct spelling meaning &quot;to recall to mind.&quot; &quot;Rember&quot; is missing the &quot;mem&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;remember&quot; always about the past?</h3>
              <p className="text-lg text-gray-700">A: While &quot;remember&quot; often refers to past events, it can also be used for future reminders (&quot;Remember to call tomorrow&quot;) and present awareness (&quot;Remember that you&apos;re important&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;memory&quot; - both &quot;remember&quot; and &quot;memory&quot; have &quot;mem&quot;. Remember: &quot;Re&quot; + &quot;mem&quot; + &quot;ber.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;remember&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: recall, recollect, reminisce, retain, and memorize. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;remember&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Remember&quot; is used in casual conversation, formal writing, instructions, and any context where people discuss memory or recall.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;remember&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remember&quot; comes from Old French &quot;remembrer&quot; meaning &quot;to remember&quot; or &quot;to recall,&quot; which is related to &quot;membrer&quot; meaning &quot;to mention.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;remember&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remember&quot; follows a regular pattern for verbs. It&apos;s formed by adding &quot;ed&quot; for past tense and &quot;ing&quot; for present participle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I avoid spelling &quot;remember&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;memory,&quot; and always proofread your work. The &quot;mem&quot; in the middle is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Remember&quot;</strong> has &quot;mem&quot; in the middle and means &quot;to recall.&quot; 
          <br />
          <strong>&quot;Rember&quot;</strong> is missing the &quot;mem&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;MEMORY&quot; - both &quot;remember&quot; and &quot;memory&quot; have &quot;mem&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/remember-vs-remeber" className="text-blue-700 hover:text-blue-900 underline">Remember vs Remeber</a></li>
            <li><a href="/spelling/remember-vs-rimember" className="text-blue-700 hover:text-blue-900 underline">Remember vs Rimember</a></li>
            <li><a href="/spelling/reminisce-vs-reminence" className="text-blue-700 hover:text-blue-900 underline">Reminisce vs Reminence</a></li>
            <li><a href="/spelling/remittance-vs-remitance" className="text-blue-700 hover:text-blue-900 underline">Remittance vs Remitance</a></li>
            <li><a href="/spelling/remuneration-vs-renumeration" className="text-blue-700 hover:text-blue-900 underline">Remuneration vs Renumeration</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/memory-vs-memmory" className="text-purple-700 hover:text-purple-900 underline">Memory vs Memmory</a></li>
            <li><a href="/spelling/recall-vs-recall" className="text-purple-700 hover:text-purple-900 underline">Recall vs Recall</a></li>
            <li><a href="/spelling/recollect-vs-recollect" className="text-purple-700 hover:text-purple-900 underline">Recollect vs Recollect</a></li>
            <li><a href="/spelling/retain-vs-retain" className="text-purple-700 hover:text-purple-900 underline">Retain vs Retain</a></li>
            <li><a href="/spelling/memorize-vs-memorise" className="text-purple-700 hover:text-purple-900 underline">Memorize vs Memorise</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/old-french-origins" className="text-green-700 hover:text-green-900 underline">Old French Origins</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/memory-words" className="text-green-700 hover:text-green-900 underline">Memory Words</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
