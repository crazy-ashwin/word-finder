import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recollection vs Recolection - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recollection&quot; and &quot;recolection&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecollectionVsRecolectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Recollection vs Recolection
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Recollection&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Recolection&quot; is always incorrect - remember the double &quot;l&quot; in &quot;recollection&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Recolection</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Recollection</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;a memory&quot; or &quot;the act of remembering.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Recollection&quot; (Noun)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;a memory&quot;</li>
                <li>• Has double &quot;l&quot;</li>
                <li>• Related to &quot;collect&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Recolection&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing second &quot;l&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Etymology</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• From Latin &quot;recollectio&quot;</li>
                <li>• Related to &quot;collect&quot;</li>
                <li>• Always has double &quot;l&quot;</li>
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
            <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;My <strong>recollection</strong> of that day.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;Clear <strong>recollection</strong> of events.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;Vague <strong>recollection</strong> of the past.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;Do you have any <strong>recollection</strong>?&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My <strong>recolection</strong> of that day&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recollection&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Clear <strong>recolection</strong> of events&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recollection&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Vague <strong>recolection</strong> of the past&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recollection&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Do you have any <strong>recolection</strong>?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recollection&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Double L Rule</h3>
              <p className="text-violet-800">&quot;Recollection&quot; has double &quot;l&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Collect</h3>
              <p className="text-purple-800">&quot;Collect&quot; has double &quot;l&quot; - so does &quot;recollection&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Write It Out</h3>
              <p className="text-fuchsia-800">Practice writing &quot;recollection&quot; to build muscle memory</p>
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
                <li>• <strong>Clear recollection</strong> - vivid memory</li>
                <li>• <strong>Vague recollection</strong> - unclear memory</li>
                <li>• <strong>Fond recollection</strong> - pleasant memory</li>
                <li>• <strong>Dim recollection</strong> - faint memory</li>
                <li>• <strong>Vivid recollection</strong> - sharp memory</li>
                <li>• <strong>Hazy recollection</strong> - unclear memory</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The recollection was clear&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A recollection&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Clear recollection&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Recollection of&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Have recollection&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many recollections&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people confuse &quot;recollection&quot; and &quot;recolection&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the second &quot;l&quot; thinking it follows a different pattern. The word can sound like it only has one &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;recollection&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recollection&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between &quot;recollection&quot; and &quot;recolection&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recollection&quot; is the correct spelling meaning &quot;a memory&quot; or &quot;the act of remembering.&quot; &quot;Recolection&quot; is missing the second &quot;l&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;recollection&quot; always about personal memories?</h3>
              <p className="text-lg text-gray-700">A: While &quot;recollection&quot; often refers to personal memories, it can also refer to collective memories, historical recollections, and any act of remembering or recalling information.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;collect&quot; - &quot;recollection&quot; has double &quot;l&quot;. Remember: &quot;Collect&quot; has double &quot;l&quot; - so does &quot;recollection.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;recollection&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: memory, remembrance, recall, reminiscence, and retrospection. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can &quot;recollection&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recollection&quot; is used in personal narratives, historical accounts, legal testimony, academic writing, and any context where you need to describe remembering or recalling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;recollection&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recollection&quot; comes from Latin &quot;recollectio&quot; meaning &quot;the act of collecting again&quot; or &quot;gathering together,&quot; which is related to &quot;collect&quot; meaning &quot;to gather.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Is &quot;recollection&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recollection&quot; follows a regular pattern. It&apos;s formed by adding &quot;ion&quot; to the verb &quot;recollect,&quot; which is a common English suffix for nouns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I avoid spelling &quot;recollection&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;collect,&quot; and always proofread your work. Remember: the double &quot;l&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between recollection and memory?</h3>
              <p className="text-lg text-gray-700">A: While both refer to remembering, &quot;recollection&quot; often implies a more conscious effort to remember, while &quot;memory&quot; can be more general and automatic.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can recollection be used in plural form?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recollection&quot; can be used in plural form: &quot;Many recollections&quot; or &quot;Several recollections.&quot; It&apos;s a countable noun in English.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recollection&quot;</strong> has double &quot;l&quot; and means &quot;a memory&quot; or &quot;the act of remembering.&quot; 
          <br />
          <strong>&quot;Recolection&quot;</strong> is missing the second &quot;l&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;COLLECT&quot; - &quot;recollection&quot; has double &quot;l&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}