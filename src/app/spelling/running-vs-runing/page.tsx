import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Running vs Runing - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;running&quot; and &quot;runing&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RunningVsRuningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Running vs Runing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Running&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Runing&quot; is always incorrect - remember to double the &quot;n&quot; when adding &quot;ing&quot; to &quot;run&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Runing</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Running</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning the present participle of &quot;run&quot; or &quot;the act of running.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Run&quot; (Base Verb)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;to move quickly&quot;</li>
                <li>• Ends with single &quot;n&quot;</li>
                <li>• Base form of the word</li>
                <li>• Used for present tense</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Running&quot; (Present Participle)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;in the act of running&quot;</li>
                <li>• Add &quot;ing&quot; to &quot;run&quot;</li>
                <li>• Double the &quot;n&quot;</li>
                <li>• Used for continuous action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Spelling Rule</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Double final consonant</li>
                <li>• Before adding &quot;ing&quot;</li>
                <li>• When verb ends in consonant-vowel-consonant</li>
                <li>• Follow the CVC rule</li>
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
                <p className="text-lg text-green-800">&quot;She is <strong>running</strong> in the marathon.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I love <strong>running</strong> in the morning.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The dog is <strong>running</strong> in the park.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He enjoys <strong>running</strong> for exercise.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is <strong>runing</strong> in the marathon&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;running&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I love <strong>runing</strong> in the morning&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;running&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The dog is <strong>runing</strong> in the park&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;running&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He enjoys <strong>runing</strong> for exercise&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;running&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">CVC Rule</h3>
              <p className="text-yellow-800">Consonant-Vowel-Consonant = double the last letter</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Double</h3>
              <p className="text-green-800">Run + n + ing = Running (double the n)</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;running&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Running late</strong> - behind schedule</li>
                <li>• <strong>Running errands</strong> - doing tasks</li>
                <li>• <strong>Running smoothly</strong> - working well</li>
                <li>• <strong>Running out of</strong> - depleting supply</li>
                <li>• <strong>Running into</strong> - encountering</li>
                <li>• <strong>Running around</strong> - being busy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present participle:</strong> &quot;I am running&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Running is good exercise&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Running water&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The running of the race&quot;</li>
                <li>• <strong>Continuous tense:</strong> &quot;She was running&quot;</li>
                <li>• <strong>Perfect continuous:</strong> &quot;I have been running&quot;</li>
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
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people drop one &quot;n&quot; in &quot;running&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not knowing the CVC (Consonant-Vowel-Consonant) rule. When a verb ends in CVC and you add &quot;ing,&quot; you double the final consonant. Many people forget this rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;running&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Running&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the CVC rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The CVC rule states that when a verb ends in Consonant-Vowel-Consonant (like &quot;run&quot;), you double the final consonant before adding &quot;ing.&quot; Examples: run → running, sit → sitting, hop → hopping.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;running&quot; is spelled the same way across all English-speaking regions. The spelling &quot;runing&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the CVC rule: &quot;Run&quot; ends in CVC (r-u-n), so double the final consonant &quot;n&quot; before adding &quot;ing.&quot; Remember: &quot;Run&quot; + &quot;n&quot; + &quot;ing&quot; = &quot;Running.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;running&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: jogging, sprinting, dashing, racing, moving quickly, and when used metaphorically: operating, functioning, managing, and conducting.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;running&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Running&quot; can function as a noun (gerund) meaning &quot;the act or sport of running.&quot; Examples: &quot;Running is my favorite exercise&quot; or &quot;The running of the marathon.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;running&quot; and &quot;ran&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Running&quot; is the present participle (used for continuous actions), while &quot;ran&quot; is the simple past tense. Example: &quot;I am running&quot; (current action) vs &quot;I ran yesterday&quot; (completed action).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Do all verbs follow the CVC rule?</h3>
              <p className="text-lg text-gray-700">A: No, only verbs ending in CVC follow this rule. Verbs ending in other patterns (like &quot;play&quot; ending in vowel-consonant) don&apos;t double: play → playing, not playying.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Running&quot;</strong> doubles the &quot;n&quot; from &quot;run.&quot; 
          <br />
          <strong>&quot;Runing&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RUN + N + ING = RUNNING&quot;</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Running</strong> is the correct spelling with double &quot;n&quot;. It means moving swiftly on foot. The misspelling &quot;runing&quot; with single &quot;n&quot; is never correct. Always use &quot;running&quot; when referring to the act of moving quickly on foot.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
