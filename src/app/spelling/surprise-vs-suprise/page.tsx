import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Surprise vs Suprise - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;surprise&quot; and &quot;suprise&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SurpriseVsSuprisePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Surprise vs Suprise
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
            <span className="text-2xl mr-3">🎈</span>
            <span className="text-2xl font-bold text-green-600">&quot;Surprise&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suprise&quot; is always incorrect - remember the &quot;r&quot; in &quot;surprise&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suprise</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Surprise</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;an unexpected event or gift.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Surprise&quot; (Noun/Verb)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;unexpected event&quot;</li>
                <li>• Has &quot;r&quot; after &quot;su&quot;</li>
                <li>• Ends with &quot;-se&quot;</li>
                <li>• Related to &quot;surprised&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Common Error</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• &quot;Suprise&quot; is wrong</li>
                <li>• Missing &quot;r&quot; after &quot;su&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Memory Aid</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Think &quot;SUR + PRI + SE&quot;</li>
                <li>• &quot;sur&quot; like &quot;surface&quot;</li>
                <li>• &quot;-se&quot; ending pattern</li>
                <li>• Related to &quot;surprised&quot;</li>
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
                <p className="text-lg text-green-800">&quot;What a nice <strong>surprise</strong>!&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I want to <strong>surprise</strong> her.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The party was a <strong>surprise</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Don&apos;t <strong>surprise</strong> me like that.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What a nice <strong>suprise</strong>!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprise&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I want to <strong>suprise</strong> her&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprise&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The party was a <strong>suprise</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprise&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Don&apos;t <strong>suprise</strong> me like that&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surprise&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">R Rule</h3>
              <p className="text-yellow-800">&quot;Surprise&quot; has &quot;r&quot; like &quot;surface&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Surface</h3>
              <p className="text-blue-800">&quot;Surprise&quot; starts like &quot;surface&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words starting with &quot;sur&quot; are common</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUR + PRI + SE = Surprise</p>
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
                <li>• <strong>Surprise party</strong> - unexpected celebration</li>
                <li>• <strong>Surprise attack</strong> - unexpected assault</li>
                <li>• <strong>Surprise visit</strong> - unexpected arrival</li>
                <li>• <strong>Surprise ending</strong> - unexpected conclusion</li>
                <li>• <strong>Surprise gift</strong> - unexpected present</li>
                <li>• <strong>Surprise announcement</strong> - unexpected news</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The surprise was amazing&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I will surprise you&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Surprise is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love surprises&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Surprised&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Surprisingly&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;surprise&quot; as &quot;suprise&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;r&quot; sound in &quot;surprise&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the &quot;sur&quot; prefix pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;surprise&quot; related to &quot;surface&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words share the &quot;sur&quot; prefix, which comes from Latin &quot;super-&quot; meaning &quot;above&quot; or &quot;over.&quot; &quot;Surface&quot; means the top layer, while &quot;surprise&quot; means taken over by surprise.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;surprise&quot; and &quot;shock&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surprise&quot; refers to an unexpected event or feeling, which can be positive or negative. &quot;Shock&quot; implies a more intense, often negative reaction to something unexpected or traumatic.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;surprise&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Surprise&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;surprise&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: astonishment, amazement, shock, wonder, revelation, and unexpected event. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;surface&quot; (which has the same &quot;sur&quot; beginning) and remember that &quot;surprise&quot; starts the same way. The &quot;r&quot; after &quot;su&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When you&apos;re SURPRISED, you&apos;re on the SURface of your emotions&quot; - both words start with &quot;sur.&quot; Or remember: &quot;SUR + PRI + SE&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the adjective form of &quot;surprise&quot;?</h3>
              <p className="text-lg text-gray-700">A: The adjective form is &quot;surprised.&quot; For example: &quot;A surprised person&quot; or &quot;She looked surprised.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the etymology of &quot;surprise&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surprise&quot; comes from Old French &quot;surprendre&quot; meaning &quot;to overtake&quot; or &quot;to seize.&quot; The &quot;sur&quot; prefix means &quot;over&quot; and &quot;prise&quot; means &quot;to take.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;surprise&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Surprise&quot; can be both a noun and a verb. As a verb, it means &quot;to cause someone to feel surprise.&quot; For example: &quot;I will surprise you with a gift.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Surprise&quot;</strong> has &quot;r&quot; after &quot;su&quot; and means &quot;unexpected event.&quot; 
          <br />
          <strong>&quot;Suprise&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUR + PRI + SE&quot; and remember the &quot;r&quot; like in &quot;surface&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
