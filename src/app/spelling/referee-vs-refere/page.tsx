import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Referee vs Refere - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;referee&quot; and &quot;refere&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RefereeVsReferePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Referee vs Refere
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Referee&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Refere&quot; is always incorrect - remember the &quot;ee&quot; at the end of &quot;referee&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Refere</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Referee</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;a sports official&quot; or &quot;umpire.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Referee&quot; (Noun)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;sports official&quot;</li>
                <li>• Has &quot;ee&quot; at the end</li>
                <li>• Related to &quot;refer&quot;</li>
                <li>• Used in sports context</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Refere&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;ee&quot; at end</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Etymology</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• From Latin &quot;referre&quot;</li>
                <li>• Related to &quot;refer&quot;</li>
                <li>• Always has &quot;ee&quot; at end</li>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>referee</strong> made the call.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;Ask the <strong>referee</strong> about the rule.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The <strong>referee</strong> blew the whistle.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;Good <strong>referees</strong> are fair and consistent.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>refere</strong> made the call&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referee&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Ask the <strong>refere</strong> about the rule&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referee&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>refere</strong> blew the whistle&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referee&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Good <strong>referes</strong> are fair and consistent&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referees&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-50 border-slate-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">EE at End Rule</h3>
              <p className="text-slate-800">&quot;Referee&quot; has &quot;ee&quot; at the end</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Think Refer</h3>
              <p className="text-gray-800">&quot;Refer&quot; + &quot;ee&quot; = &quot;referee&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Write It Out</h3>
              <p className="text-zinc-800">Practice writing &quot;referee&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-50 border-neutral-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Proofread</h3>
              <p className="text-neutral-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Head referee</strong> - main official</li>
                <li>• <strong>Assistant referee</strong> - supporting official</li>
                <li>• <strong>Referee decision</strong> - official ruling</li>
                <li>• <strong>Referee call</strong> - official decision</li>
                <li>• <strong>Referee whistle</strong> - official signal</li>
                <li>• <strong>Referee uniform</strong> - official attire</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The referee was fair&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A referee&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Good referee&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Referee for&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Become referee&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many referees&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people confuse &quot;referee&quot; and &quot;refere&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the final &quot;ee&quot; thinking it follows a different pattern. The word can sound like it ends with just &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Can &quot;referee&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Referee&quot; is perfectly acceptable in formal writing, sports reports, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: What&apos;s the difference between &quot;referee&quot; and &quot;refere&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Referee&quot; is the correct spelling meaning &quot;a sports official&quot; or &quot;umpire.&quot; &quot;Refere&quot; is missing the final &quot;ee&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-neutral-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Q: Is &quot;referee&quot; always about sports?</h3>
              <p className="text-lg text-gray-700">A: While &quot;referee&quot; often refers to sports officials, it can also describe any person who settles disputes, mediates conflicts, or acts as an impartial judge in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;refer&quot; - &quot;referee&quot; has &quot;ee&quot; at the end. Remember: &quot;Refer&quot; + &quot;ee.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: What are some synonyms for &quot;referee&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: umpire, official, judge, arbitrator, mediator, and adjudicator. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: Can &quot;referee&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Referee&quot; is used in sports contexts, business disputes, academic peer review, legal proceedings, and any situation requiring impartial judgment.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-neutral-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Q: What&apos;s the origin of the word &quot;referee&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Referee&quot; comes from Latin &quot;referre&quot; meaning &quot;to carry back&quot; or &quot;to bring back,&quot; which is related to &quot;refer&quot; meaning &quot;to direct attention.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Is &quot;referee&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Referee&quot; follows a regular pattern. It&apos;s formed by adding &quot;ee&quot; to the verb &quot;refer,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: How can I avoid spelling &quot;referee&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;refer + ee,&quot; and always proofread your work. Remember: the &quot;ee&quot; at the end is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: What&apos;s the difference between referee and umpire?</h3>
              <p className="text-lg text-gray-700">A: A referee typically oversees team sports like soccer, basketball, or football, while an umpire usually officiates individual sports like tennis, baseball, or cricket. Both are sports officials but in different contexts.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Referee&quot;</strong> has &quot;ee&quot; at the end and means &quot;sports official.&quot; 
          <br />
          <strong>&quot;Refere&quot;</strong> is missing the final &quot;ee&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REFER + EE&quot; - &quot;referee&quot; has &quot;ee&quot; at the end!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
