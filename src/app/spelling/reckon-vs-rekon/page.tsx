import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reckon vs Rekon - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reckon&quot; and &quot;rekon&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReckonVsRekonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Reckon vs Rekon
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Reckon&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rekon&quot; is always incorrect - remember the proper spelling &quot;reckon&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rekon</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Reckon</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;to think&quot; or &quot;to calculate.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Reckon&quot; (Verb)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to think&quot;</li>
                <li>• Has &quot;ck&quot; sound</li>
                <li>• Related to &quot;reckoning&quot;</li>
                <li>• Used in informal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Rekon&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;c&quot; in &quot;ck&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Etymology</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• From Old English &quot;recanian&quot;</li>
                <li>• Related to &quot;reckoning&quot;</li>
                <li>• Always has &quot;ck&quot;</li>
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
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;I <strong>reckon</strong> it&apos;s time to go.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;What do you <strong>reckon</strong>?&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;I <strong>reckon</strong> he&apos;s right.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;Let me <strong>reckon</strong> the cost.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>rekon</strong> it&apos;s time to go&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reckon&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What do you <strong>rekon</strong>?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reckon&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>rekon</strong> he&apos;s right&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reckon&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Let me <strong>rekon</strong> the cost&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reckon&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">CK Sound Rule</h3>
              <p className="text-amber-800">&quot;Reckon&quot; has &quot;ck&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Reckoning</h3>
              <p className="text-orange-800">&quot;Reckoning&quot; has &quot;ck&quot; - so does &quot;reckon&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Write It Out</h3>
              <p className="text-red-800">Practice writing &quot;reckon&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Proofread</h3>
              <p className="text-yellow-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>I reckon</strong> - I think</li>
                <li>• <strong>What do you reckon</strong> - What do you think</li>
                <li>• <strong>Reckon with</strong> - consider seriously</li>
                <li>• <strong>Reckon up</strong> - calculate</li>
                <li>• <strong>Reckon on</strong> - depend on</li>
                <li>• <strong>Reckon without</strong> - fail to consider</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;I reckon it&apos;s true&quot;</li>
                <li>• <strong>With objects:</strong> &quot;Reckon the cost&quot;</li>
                <li>• <strong>With clauses:</strong> &quot;I reckon that...&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Reckon with&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;Reckoned&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;Reckoning&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people confuse &quot;reckon&quot; and &quot;rekon&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;c&quot; in the &quot;ck&quot; sound. The word can sound like it only has one letter.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;reckon&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reckon&quot; is generally considered informal and is more commonly used in casual conversation, regional dialects, and creative writing. For formal writing, consider alternatives like &quot;think&quot; or &quot;calculate.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;reckon&quot; and &quot;rekon&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reckon&quot; is the correct spelling meaning &quot;to think&quot; or &quot;to calculate.&quot; &quot;Rekon&quot; is missing the &quot;c&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Is &quot;reckon&quot; always about thinking?</h3>
              <p className="text-lg text-gray-700">A: While &quot;reckon&quot; often refers to thinking or believing, it can also mean calculating, considering, or estimating. It has multiple meanings depending on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;reckoning&quot; - &quot;reckon&quot; has &quot;ck&quot;. Remember: &quot;Reckoning&quot; has &quot;ck&quot; - so does &quot;reckon.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;reckon&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: think, believe, suppose, calculate, estimate, consider, and figure. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;reckon&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Reckon&quot; is used in casual conversation, regional speech, creative writing, and any context where you need to express thinking or calculating informally.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the origin of the word &quot;reckon&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reckon&quot; comes from Old English &quot;recanian&quot; meaning &quot;to explain&quot; or &quot;to count,&quot; which is related to &quot;reckoning&quot; meaning &quot;calculation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Is &quot;reckon&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reckon&quot; is a regular verb. It follows the standard pattern: reckon (present), reckoned (past), reckoning (present participle).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I avoid spelling &quot;reckon&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;reckoning,&quot; and always proofread your work. Remember: the &quot;ck&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between reckon and think?</h3>
              <p className="text-lg text-gray-700">A: While both refer to mental processes, &quot;reckon&quot; often implies a more considered or calculated opinion, while &quot;think&quot; is more general and can be more casual.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Can reckon be used in passive voice?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Reckon&quot; can be used in passive voice: &quot;It was reckoned&quot; or &quot;This is reckoned.&quot; It&apos;s a verb that can be used in various grammatical constructions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between reckon and calculate?</h3>
              <p className="text-lg text-gray-700">A: While both can refer to mathematical operations, &quot;reckon&quot; often implies estimation or rough calculation, while &quot;calculate&quot; is more precise and mathematical.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How is reckon used in regional dialects?</h3>
              <p className="text-lg text-gray-700">A: In regional dialects, &quot;reckon&quot; is commonly used to mean &quot;think&quot; or &quot;believe,&quot; especially in Southern American English, Australian English, and some British dialects.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between reckon and suppose?</h3>
              <p className="text-lg text-gray-700">A: While both refer to thinking something, &quot;reckon&quot; often implies a more confident opinion, while &quot;suppose&quot; suggests more uncertainty or speculation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Can reckon be used in questions?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Reckon&quot; is commonly used in questions: &quot;What do you reckon?&quot; or &quot;How do you reckon?&quot; It&apos;s a versatile verb that works in various sentence structures.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between reckon and figure?</h3>
              <p className="text-lg text-gray-700">A: While both refer to thinking or calculating, &quot;reckon&quot; often implies a more considered opinion, while &quot;figure&quot; suggests working something out or coming to a conclusion.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How is reckon used in creative writing?</h3>
              <p className="text-lg text-gray-700">A: In creative writing, &quot;reckon&quot; is used to add authenticity to dialogue, create regional character voices, and convey informal or folksy speech patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between reckon and believe?</h3>
              <p className="text-lg text-gray-700">A: While both refer to thinking something is true, &quot;reckon&quot; often implies a more considered or calculated opinion, while &quot;believe&quot; suggests faith or conviction.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Reckon&quot;</strong> has &quot;ck&quot; and means &quot;to think&quot; or &quot;to calculate.&quot; 
          <br />
          <strong>&quot;Rekon&quot;</strong> is missing the &quot;c&quot; and is never a real word.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RECKONING&quot; - &quot;reckon&quot; has &quot;ck&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
