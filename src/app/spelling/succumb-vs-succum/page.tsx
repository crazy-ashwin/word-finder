import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Succumb vs Succum - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;succumb&quot; and &quot;succum&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuccumbVsSuccumPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Succumb vs Succum
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Succumb&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Succum&quot; is always incorrect - remember the &quot;b&quot; ending in &quot;succumb&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Succum</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Succumb</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to give way to superior force; to yield.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Succumb&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Ends with &quot;b&quot;</li>
                <li>• Follows Latin pattern</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">Common Error</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• &quot;Succum&quot; is wrong</li>
                <li>• Missing &quot;b&quot; ending</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Memory Aid</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Think &quot;SUCC + UMB&quot;</li>
                <li>• &quot;succ&quot; like &quot;sub&quot;</li>
                <li>• &quot;umb&quot; for ending</li>
                <li>• Related to yielding</li>
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
                <p className="text-lg text-green-800">&quot;He refused to <strong>succumb</strong> to pressure.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>succumbed</strong> to temptation.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They <strong>succumbed</strong> to the disease.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Don&apos;t <strong>succumb</strong> to fear.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He refused to <strong>succum</strong> to pressure.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succumb&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>succumed</strong> to temptation.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succumbed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>succumed</strong> to the disease.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succumbed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t <strong>succum</strong> to fear.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;succumb&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">B Ending Rule</h3>
              <p className="text-green-800">&quot;Succumb&quot; ends with &quot;b&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Think Yielding</h3>
              <p className="text-sky-800">&quot;Succumb&quot; = yield</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Pattern Recognition</h3>
              <p className="text-blue-800">Verbs ending with &quot;-umb&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Break It Down</h3>
              <p className="text-indigo-800">SUCC + UMB = Succumb</p>
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
                <li>• <strong>Succumb to pressure</strong> - yield to pressure</li>
                <li>• <strong>Succumb to temptation</strong> - yield to temptation</li>
                <li>• <strong>Succumb to disease</strong> - die from disease</li>
                <li>• <strong>Succumb to fear</strong> - yield to fear</li>
                <li>• <strong>Succumb to sleep</strong> - fall asleep</li>
                <li>• <strong>Succumb to exhaustion</strong> - collapse from tiredness</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense:</strong> &quot;I succumb&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;I succumbed&quot;</li>
                <li>• <strong>Future:</strong> &quot;Will succumb&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Succumbing&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To succumb&quot;</li>
                <li>• <strong>Imperative:</strong> &quot;Don&apos;t succumb&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;succumb&quot; as &quot;succum&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people may forget that &quot;succumb&quot; ends with &quot;b&quot;. They might accidentally drop the &quot;b&quot; when typing quickly or think it only needs &quot;um&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;succumb&quot; related to &quot;succumbing&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Succumb&quot; is the base form (verb), while &quot;succumbing&quot; is the gerund form. Think of it as &quot;to succumb&quot; (verb) and &quot;the act of succumbing&quot; (gerund) - they share the same spelling pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between &quot;succumb&quot; and &quot;yield&quot;?</h3>
              <p className="text-lg text-gray-700">A: Both words mean to give way, but &quot;succumb&quot; emphasizes giving way to superior force or pressure, often with negative consequences, while &quot;yield&quot; is more neutral and can simply mean to give way or produce. &quot;Succumb&quot; often implies defeat.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;succumb&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Succumb&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, business documents, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;succumb&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: yield, give in, give way, surrender, submit, and capitulate. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;succumb&quot; as ending with &quot;umb&quot; and remember that it has a &quot;b&quot; at the end. The &quot;b&quot; ending is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUCCUMB ends with B&quot;. Or remember: &quot;SUCC + UMB&quot; breaks down the word into manageable parts with the &quot;b&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the base form of &quot;succumb&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succumb&quot; is the base form (infinitive) of the verb. For example: &quot;I succumb&quot; (present), &quot;I succumbed&quot; (past), &quot;I have succumbed&quot; (past participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;succumb&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succumb&quot; comes from the Latin &quot;succumbere&quot; meaning &quot;to lie down, fall down, yield&quot;, from &quot;sub&quot; (under) + &quot;cumbere&quot; (to lie down). It entered English in the late 15th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;succumb&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;succumb&quot; is only a verb. The noun form would be &quot;succumbing&quot; (gerund). For example: &quot;I succumb&quot; (verb), &quot;The act of succumbing&quot; (noun).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I use &quot;succumb&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Succumb&quot; can be used in various contexts: emotional (succumb to fear), physical (succumb to disease), social (succumb to pressure), and metaphorical (succumb to temptation). It always refers to giving way to superior force or pressure.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Succumb&quot;</strong> ends with &quot;b&quot; and means &quot;to give way to superior force; to yield.&quot; 
          <br />
          <strong>&quot;Succum&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUCC + UMB&quot; and remember the &quot;b&quot; ending!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
