import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Repair vs Repare - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;repair&quot; and &quot;repare&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepairVsReparePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Repair vs Repare
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-indigo-600">&quot;Repair&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Repare&quot; is always incorrect - remember the &quot;ai&quot; in &quot;repair&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Repare</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;i&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-indigo-800 mb-4">Repair</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-indigo-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-indigo-700 leading-relaxed">
                This is the proper spelling meaning &quot;to fix or mend.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Repair&quot; (Verb)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Means &quot;fix or mend&quot;</li>
                <li>• Has &quot;ai&quot; sound</li>
                <li>• Related to &quot;repairman&quot;</li>
                <li>• Common in daily speech</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Repare&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;i&quot;</li>
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
                <li>• From Latin &quot;reparare&quot;</li>
                <li>• Related to &quot;repairman&quot;</li>
                <li>• Always has &quot;ai&quot;</li>
                <li>• Common in everyday use</li>
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
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;I need to <strong>repair</strong> my car.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;He will <strong>repair</strong> the broken window.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;She can <strong>repair</strong> electronics.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;They will <strong>repair</strong> the damage.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I need to <strong>repare</strong> my car&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repair&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He will <strong>repare</strong> the broken window&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repair&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She can <strong>repare</strong> electronics&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repair&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They will <strong>repare</strong> the damage&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repair&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AI Sound Rule</h3>
              <p className="text-yellow-800">&quot;Repair&quot; has &quot;ai&quot; like &quot;chair&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Chair</h3>
              <p className="text-blue-800">&quot;Chair&quot; has &quot;ai&quot; - same pattern!</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;repair&quot; to build muscle memory</p>
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
                <li>• <strong>Repair the damage</strong> - fix the harm</li>
                <li>• <strong>Repair the car</strong> - fix the vehicle</li>
                <li>• <strong>Repair the relationship</strong> - fix the connection</li>
                <li>• <strong>Repair the mistake</strong> - fix the error</li>
                <li>• <strong>Repair the system</strong> - fix the mechanism</li>
                <li>• <strong>Repair the damage</strong> - fix the harm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I repair&quot;</li>
                <li>• <strong>Future tense:</strong> &quot;He will repair&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;She repaired&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Repairing is important&quot;</li>
                <li>• <strong>Participle:</strong> &quot;The repairing process&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Repair for me&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;repair&quot; and &quot;repare&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that some English words have silent letters. People might drop the &quot;i&quot; thinking it follows a different pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;repair&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Repair&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;repair&quot; and &quot;repare&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repair&quot; is the correct spelling meaning &quot;to fix or mend.&quot; &quot;Repare&quot; is missing the &quot;i&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;repair&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;repair&quot; typically has positive connotations (fixing something), it can be used in neutral contexts. The word itself implies improvement or restoration.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;chair&quot; - &quot;chair&quot; has &quot;ai&quot; and &quot;repair&quot; follows the same rule. Both have the &quot;ai&quot; sound pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;repair&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: fix, mend, restore, restore, patch up, and refurbish. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;repair&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Repair&quot; is used in mechanical contexts, relationship counseling, medical situations, construction, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;repair&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repair&quot; comes from Latin &quot;reparare&quot; meaning &quot;to restore&quot; or &quot;to make ready again,&quot; which is related to the verb &quot;parare&quot; meaning &quot;to prepare.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;repair&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repair&quot; follows a regular pattern for verbs. The rule is: add &quot;ed&quot; for past tense and past participle forms: &quot;repaired.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Repair&quot;</strong> has &quot;ai&quot; and means &quot;to fix or mend.&quot; 
          <br />
          <strong>&quot;Repare&quot;</strong> is missing &quot;i&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;AI SOUND&quot; - &quot;repair&quot; has &quot;ai&quot; like &quot;chair&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
