import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recurrence vs Recurrance - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recurrence&quot; and &quot;recurrance&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecurrenceVsRecurrancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Recurrence vs Recurrance
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-teal-600">&quot;Recurrence&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Recurrance&quot; is always incorrect - remember the &quot;e&quot; in &quot;recurrence&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Recurrance</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Recurrence</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of recurring&quot; or &quot;repetition.&quot;
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
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Recurrence&quot; (Noun)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;repetition&quot;</li>
                <li>• Has &quot;e&quot; in the middle</li>
                <li>• Related to &quot;recur&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Recurrance&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;e&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Etymology</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• From Latin &quot;recurrere&quot;</li>
                <li>• Related to &quot;recur&quot;</li>
                <li>• Always has &quot;e&quot;</li>
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
            <h3 className="text-2xl font-bold text-teal-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;The <strong>recurrence</strong> of symptoms.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;A pattern of <strong>recurrence</strong>.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;The <strong>recurrence</strong> of events.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;Frequent <strong>recurrence</strong> of problems.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>recurrance</strong> of symptoms&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recurrence&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A pattern of <strong>recurrance</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recurrence&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>recurrance</strong> of events&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recurrence&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Frequent <strong>recurrance</strong> of problems&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recurrence&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">E Rule</h3>
              <p className="text-teal-800">&quot;Recurrence&quot; has &quot;e&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Think Recur</h3>
              <p className="text-cyan-800">&quot;Recur&quot; + &quot;rence&quot; = &quot;recurrence&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;recurrence&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Proofread</h3>
              <p className="text-sky-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Recurrence of symptoms</strong> - symptoms returning</li>
                <li>• <strong>Pattern of recurrence</strong> - repeated pattern</li>
                <li>• <strong>Frequent recurrence</strong> - happening often</li>
                <li>• <strong>Risk of recurrence</strong> - chance of returning</li>
                <li>• <strong>Prevent recurrence</strong> - stop from happening again</li>
                <li>• <strong>History of recurrence</strong> - past occurrences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The recurrence was unexpected&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A recurrence&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Frequent recurrence&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Recurrence of&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Prevent recurrence&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many recurrences&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people confuse &quot;recurrence&quot; and &quot;recurrance&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;e&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;recurr&quot; to &quot;ance.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;recurrence&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recurrence&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between &quot;recurrence&quot; and &quot;recurrance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recurrence&quot; is the correct spelling meaning &quot;the act of recurring&quot; or &quot;repetition.&quot; &quot;Recurrance&quot; is missing the &quot;e&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;recurrence&quot; always about medical symptoms?</h3>
              <p className="text-lg text-gray-700">A: While &quot;recurrence&quot; is often used in medical contexts, it can refer to any event, pattern, or situation that happens again. It&apos;s used in business, science, literature, and many other fields.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;recur&quot; - &quot;recurrence&quot; has &quot;e&quot; in the middle. Remember: &quot;Recur&quot; + &quot;rence.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;recurrence&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: repetition, return, reappearance, reoccurrence, relapse, and resurgence. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;recurrence&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recurrence&quot; is used in medical, business, scientific, literary, and any context where you need to describe something happening again or repeating.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What&apos;s the origin of the word &quot;recurrence&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recurrence&quot; comes from Latin &quot;recurrere&quot; meaning &quot;to run back&quot; or &quot;to return,&quot; which is related to &quot;recur&quot; meaning &quot;to happen again.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;recurrence&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recurrence&quot; follows a regular pattern. It&apos;s formed by adding &quot;ence&quot; to the verb &quot;recur,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I avoid spelling &quot;recurrence&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;recur + rence,&quot; and always proofread your work. Remember: the &quot;e&quot; in the middle is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between recurrence and reoccurrence?</h3>
              <p className="text-lg text-gray-700">A: While both refer to something happening again, &quot;recurrence&quot; is more commonly used and generally preferred. &quot;Reoccurrence&quot; is also correct but less frequent in usage. Both can be used interchangeably in most contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Can recurrence be prevented?</h3>
              <p className="text-lg text-gray-700">A: Yes! In many contexts, recurrence can be prevented through proper planning, treatment, maintenance, or preventive measures. For example, medical recurrences can often be prevented with ongoing care and lifestyle changes.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recurrence&quot;</strong> has &quot;e&quot; in the middle and means &quot;the act of recurring.&quot; 
          <br />
          <strong>&quot;Recurrance&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RECUR + RENCE&quot; - &quot;recurrence&quot; has &quot;e&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
