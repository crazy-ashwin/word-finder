import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rehearsal vs Rehersal - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rehearsal&quot; and &quot;rehersal&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RehearsalVsRehersalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
          Rehearsal vs Rehersal
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
            <span className="text-2xl font-bold text-fuchsia-600">&quot;Rehearsal&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rehersal&quot; is always incorrect - remember the &quot;ar&quot; in &quot;rehearsal&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rehersal</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-fuchsia-50 to-fuchsia-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-fuchsia-800 mb-4">Rehearsal</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-fuchsia-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-fuchsia-700 leading-relaxed">
                This is the proper spelling meaning &quot;a practice session for a performance.&quot;
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
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">&quot;Rehearsal&quot; (Noun)</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Means &quot;practice session&quot;</li>
                <li>• Has &quot;ar&quot; in the middle</li>
                <li>• Related to &quot;rehearse&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Rehersal&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;a&quot;</li>
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
                <li>• From Old French &quot;rehercier&quot;</li>
                <li>• Related to &quot;rehearse&quot;</li>
                <li>• Always has &quot;ar&quot;</li>
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
            <h3 className="text-2xl font-bold text-fuchsia-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-fuchsia-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                <p className="text-lg text-fuchsia-800">&quot;The <strong>rehearsal</strong> is tomorrow at 3 PM.&quot;</p>
              </div>
              <div className="bg-fuchsia-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                <p className="text-lg text-fuchsia-800">&quot;We need more <strong>rehearsal</strong> time.&quot;</p>
              </div>
              <div className="bg-fuchsia-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                <p className="text-lg text-fuchsia-800">&quot;The <strong>rehearsal</strong> went well.&quot;</p>
              </div>
              <div className="bg-fuchsia-50 p-4 rounded-lg border-l-4 border-fuchsia-500">
                <p className="text-lg text-fuchsia-800">&quot;This is our final <strong>rehearsal</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rehersal</strong> is tomorrow at 3 PM&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rehearsal&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We need more <strong>rehersal</strong> time&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rehearsal&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rehersal</strong> went well&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rehearsal&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is our final <strong>rehersal</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rehearsal&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">AR Rule</h3>
              <p className="text-fuchsia-800">&quot;Rehearsal&quot; has &quot;ar&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Hearse</h3>
              <p className="text-purple-800">&quot;Re&quot; + &quot;hearse&quot; + &quot;al&quot; = &quot;rehearsal&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Write It Out</h3>
              <p className="text-violet-800">Practice writing &quot;rehearsal&quot; to build muscle memory</p>
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
                <li>• <strong>Dress rehearsal</strong> - final practice in costume</li>
                <li>• <strong>Technical rehearsal</strong> - practice with equipment</li>
                <li>• <strong>Run-through rehearsal</strong> - complete practice</li>
                <li>• <strong>Blocking rehearsal</strong> - practice movements</li>
                <li>• <strong>Music rehearsal</strong> - practice music</li>
                <li>• <strong>Final rehearsal</strong> - last practice</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rehearsal was successful&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A rehearsal&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Long rehearsal&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Rehearsal for&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Attend rehearsal&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many rehearsals&quot;</li>
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
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Why do people confuse &quot;rehearsal&quot; and &quot;rehersal&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;a&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;rehers&quot; to &quot;al.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;rehearsal&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rehearsal&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What&apos;s the difference between &quot;rehearsal&quot; and &quot;rehersal&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rehearsal&quot; is the correct spelling meaning &quot;a practice session for a performance.&quot; &quot;Rehersal&quot; is missing the &quot;a&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;rehearsal&quot; always about performances?</h3>
              <p className="text-lg text-gray-700">A: While &quot;rehearsal&quot; often refers to performances, it can also describe practice sessions for speeches, presentations, interviews, and any activity that benefits from practice.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;hearse&quot; - &quot;rehearsal&quot; has &quot;ar&quot; in the middle. Remember: &quot;Re&quot; + &quot;hearse&quot; + &quot;al.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;rehearsal&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: practice, run-through, dry run, preparation, warm-up, and trial. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Can &quot;rehearsal&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rehearsal&quot; is used in academic writing, business communication, casual conversation, and any discussion about practice or preparation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;rehearsal&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rehearsal&quot; comes from Old French &quot;rehercier&quot; meaning &quot;to go over again,&quot; which is related to &quot;rehearse&quot; meaning &quot;to practice.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Is &quot;rehearsal&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rehearsal&quot; follows a regular pattern. It&apos;s formed by adding &quot;al&quot; to the verb &quot;rehearse,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I avoid spelling &quot;rehearsal&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;re + hearse + al,&quot; and always proofread your work. The &quot;a&quot; in &quot;ar&quot; is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rehearsal&quot;</strong> has &quot;ar&quot; in the middle and means &quot;practice session.&quot; 
          <br />
          <strong>&quot;Rehersal&quot;</strong> is missing the &quot;a&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RE + HEARSE + AL&quot; - &quot;rehearsal&quot; has &quot;ar&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
