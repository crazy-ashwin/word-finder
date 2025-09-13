import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Represent vs Repersent - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;represent&quot; and &quot;repersent&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepresentVsRepersentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Represent vs Repersent
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
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Represent&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Repersent&quot; is always incorrect - remember the &quot;e&quot; before &quot;r&quot; in &quot;represent&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Repersent</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;e&quot; before &quot;r&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Represent</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;to stand for or symbolize.&quot;
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
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Represent&quot; (Verb)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to stand for&quot;</li>
                <li>• Has &quot;e&quot; before &quot;r&quot;</li>
                <li>• Related to &quot;presentation&quot;</li>
                <li>• Used in formal contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Repersent&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;e&quot; before &quot;r&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Etymology</h3>
              <ul className="text-red-800 space-y-2">
                <li>• From Latin &quot;repraesentare&quot;</li>
                <li>• Related to &quot;present&quot;</li>
                <li>• Always has &quot;e&quot; before &quot;r&quot;</li>
                <li>• Common in formal writing</li>
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
                <p className="text-lg text-amber-800">&quot;She will <strong>represent</strong> our company at the conference.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The flag <strong>represents</strong> our nation&apos;s values.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;He was chosen to <strong>represent</strong> the team.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;This symbol <strong>represents</strong> peace and harmony.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She will <strong>repersent</strong> our company at the conference&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;represent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The flag <strong>repersents</strong> our nation&apos;s values&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;represents&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He was chosen to <strong>repersent</strong> the team&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;represent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This symbol <strong>repersents</strong> peace and harmony&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;represents&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Before R Rule</h3>
              <p className="text-yellow-800">&quot;Represent&quot; has &quot;e&quot; before &quot;r&quot; like &quot;present&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Present</h3>
              <p className="text-blue-800">&quot;Represent&quot; comes from &quot;re&quot; + &quot;present&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;represent&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Proofread</h3>
              <p className="text-purple-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Represent a company</strong> - act on behalf of</li>
                <li>• <strong>Represent an idea</strong> - symbolize a concept</li>
                <li>• <strong>Represent a group</strong> - speak for others</li>
                <li>• <strong>Represent a country</strong> - act as ambassador</li>
                <li>• <strong>Represent a cause</strong> - advocate for</li>
                <li>• <strong>Represent a period</strong> - exemplify an era</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Transitive verb:</strong> &quot;He represents the team&quot;</li>
                <li>• <strong>Intransitive:</strong> &quot;She represents well&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I represent&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;He represented&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Representing is important&quot;</li>
                <li>• <strong>Participle:</strong> &quot;The representing lawyer&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;represent&quot; and &quot;repersent&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many English words have silent letters. People might drop the &quot;e&quot; before &quot;r&quot; because it&apos;s not strongly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Can &quot;represent&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Represent&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;represent&quot; and &quot;repersent&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Represent&quot; is the correct spelling meaning &quot;to stand for or symbolize.&quot; &quot;Repersent&quot; is not a real word and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;represent&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;represent&quot; typically has neutral connotations, it can be used in both positive and negative contexts. Context determines whether it&apos;s seen as positive or negative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;present&quot; - &quot;represent&quot; is &quot;re&quot; + &quot;present.&quot; Also remember that &quot;present&quot; has &quot;e&quot; before &quot;r&quot;, so &quot;represent&quot; should too.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;represent&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: symbolize, stand for, embody, exemplify, denote, and signify. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;represent&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Represent&quot; is used in legal contexts, business discussions, academic writing, artistic expression, political discourse, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;represent&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Represent&quot; comes from Latin &quot;repraesentare&quot; meaning &quot;to present again&quot; or &quot;to show,&quot; which is related to the verb &quot;praesentare&quot; meaning &quot;to present.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Is &quot;represent&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Represent&quot; is a regular verb. It follows the standard pattern: represent (present), represented (past), represented (past participle), representing (present participle).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Represent&quot;</strong> has &quot;e&quot; before &quot;r&quot; and means &quot;to stand for.&quot; 
          <br />
          <strong>&quot;Repersent&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RE + PRESENT&quot; - both have &quot;e&quot; before &quot;r&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
