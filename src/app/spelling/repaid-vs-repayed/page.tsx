import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Repaid vs Repayed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;repaid&quot; and &quot;repayed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepaidVsRepayedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Repaid vs Repayed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Repaid&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Repayed&quot; is always incorrect - remember the &quot;ai&quot; not &quot;ay&quot; in &quot;repaid&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Repayed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling has &quot;ay&quot; instead of &quot;ai&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Repaid</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;paid back&quot; (past tense of repay).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Repaid&quot; (Past Tense)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;paid back&quot;</li>
                <li>• Has &quot;ai&quot; sound</li>
                <li>• Past tense of &quot;repay&quot;</li>
                <li>• Common in financial contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Repayed&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Has &quot;ay&quot; instead of &quot;ai&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Etymology</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• From &quot;re&quot; + &quot;pay&quot;</li>
                <li>• Related to &quot;payment&quot;</li>
                <li>• Always has &quot;ai&quot;</li>
                <li>• Common in financial use</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;I have <strong>repaid</strong> the loan.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;She has <strong>repaid</strong> her debt.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;They have <strong>repaid</strong> the favor.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;He has <strong>repaid</strong> the kindness.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have <strong>repayed</strong> the loan&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repaid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has <strong>repayed</strong> her debt&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repaid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They have <strong>repayed</strong> the favor&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repaid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has <strong>repayed</strong> the kindness&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repaid&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AI Not AY Rule</h3>
              <p className="text-yellow-800">&quot;Repaid&quot; has &quot;ai&quot; not &quot;ay&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Paid</h3>
              <p className="text-blue-800">&quot;Paid&quot; has &quot;ai&quot; - same pattern!</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;repaid&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Proofread</h3>
              <p className="text-amber-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Repaid the loan</strong> - paid back the money</li>
                <li>• <strong>Repaid the debt</strong> - paid back the obligation</li>
                <li>• <strong>Repaid the favor</strong> - returned the kindness</li>
                <li>• <strong>Repaid the kindness</strong> - returned the help</li>
                <li>• <strong>Repaid the trust</strong> - returned the confidence</li>
                <li>• <strong>Repaid the investment</strong> - returned the money</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I repaid&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have repaid&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I repay&quot;</li>
                <li>• <strong>Future tense:</strong> &quot;I will repay&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Repaying is important&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Repaid to me&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;repaid&quot; and &quot;repayed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that some English words have &quot;ay&quot; endings. People might mix up the letter order thinking it follows a different pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;repaid&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Repaid&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;repaid&quot; and &quot;repayed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repaid&quot; is the correct spelling meaning &quot;paid back&quot; (past tense of repay). &quot;Repayed&quot; has the wrong letter order (&quot;ay&quot; instead of &quot;ai&quot;) and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;repaid&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;repaid&quot; typically has positive connotations (fulfilling obligations), it can be used in neutral contexts. The word itself implies completion of a debt or obligation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;paid&quot; - &quot;paid&quot; has &quot;ai&quot; and &quot;repaid&quot; follows the same rule. Both have the &quot;ai&quot; sound pattern, not &quot;ay.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;repaid&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: paid back, returned, reimbursed, compensated, and settled. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;repaid&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Repaid&quot; is used in financial contexts, relationship situations, business transactions, personal favors, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;repaid&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repaid&quot; comes from the combination of &quot;re&quot; (again) + &quot;pay&quot; (to give money), meaning &quot;to pay again&quot; or &quot;to pay back.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;repaid&quot; a regular or irregular verb form?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repaid&quot; follows the irregular pattern of &quot;pay&quot; - &quot;pay&quot; becomes &quot;paid&quot; in past tense, and &quot;repay&quot; becomes &quot;repaid.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Repaid&quot;</strong> has &quot;ai&quot; and means &quot;paid back.&quot; 
          <br />
          <strong>&quot;Repayed&quot;</strong> has &quot;ay&quot; instead of &quot;ai&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;AI NOT AY&quot; - &quot;repaid&quot; has &quot;ai&quot; like &quot;paid&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
