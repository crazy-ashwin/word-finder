import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Repellent vs Repellant - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;repellent&quot; and &quot;repellant&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepellentVsRepellantPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Repellent vs Repellant
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Repellent&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Repellant&quot; is always incorrect - remember the &quot;e&quot; before &quot;l&quot; in &quot;repellent&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Repellant</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;e&quot; before &quot;l&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Repellent</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;a substance that drives away pests.&quot;
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Repellent&quot; (Noun/Adjective)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;driving away&quot;</li>
                <li>• Has &quot;e&quot; before &quot;l&quot;</li>
                <li>• Related to &quot;repel&quot;</li>
                <li>• Used in formal contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Repellant&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;e&quot; before &quot;l&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Etymology</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• From Latin &quot;repellere&quot;</li>
                <li>• Related to &quot;repel&quot;</li>
                <li>• Always has &quot;e&quot; before &quot;l&quot;</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Use insect <strong>repellent</strong> to avoid mosquito bites.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>repellent</strong> spray keeps bugs away.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;She found the behavior <strong>repellent</strong>.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Natural <strong>repellents</strong> are safer for children.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Use insect <strong>repellant</strong> to avoid mosquito bites&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repellent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>repellant</strong> spray keeps bugs away&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repellent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She found the behavior <strong>repellant</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repellent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Natural <strong>repellants</strong> are safer for children&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;repellents&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Before L Rule</h3>
              <p className="text-yellow-800">&quot;Repellent&quot; has &quot;e&quot; before &quot;l&quot; like &quot;repel&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Repel</h3>
              <p className="text-blue-800">&quot;Repellent&quot; comes from &quot;repel&quot; + &quot;ent&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;repellent&quot; to build muscle memory</p>
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
                <li>• <strong>Insect repellent</strong> - bug deterrent</li>
                <li>• <strong>Mosquito repellent</strong> - mosquito deterrent</li>
                <li>• <strong>Natural repellent</strong> - organic deterrent</li>
                <li>• <strong>Chemical repellent</strong> - synthetic deterrent</li>
                <li>• <strong>Repellent spray</strong> - deterrent spray</li>
                <li>• <strong>Repellent lotion</strong> - deterrent lotion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The repellent works well&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The smell was repellent&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Repellent is essential&quot;</li>
                <li>• <strong>Object:</strong> &quot;I bought repellent&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Repellent against&quot;</li>
                <li>• <strong>Countable noun:</strong> &quot;Many repellents&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;repellent&quot; and &quot;repellant&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many English words have silent letters. People might drop the &quot;e&quot; before &quot;l&quot; because it&apos;s not strongly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;repellent&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Repellent&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;repellent&quot; and &quot;repellant&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repellent&quot; is the correct spelling meaning &quot;a substance that drives away pests.&quot; &quot;Repellant&quot; is not a real word and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;repellent&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;repellent&quot; typically has neutral connotations when referring to substances, it can have negative connotations when used as an adjective to describe behavior or qualities.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;repel&quot; - &quot;repellent&quot; is &quot;repel&quot; + &quot;ent.&quot; Also remember that &quot;repel&quot; has &quot;e&quot; before &quot;l&quot;, so &quot;repellent&quot; should too.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;repellent&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: deterrent, repulsive, offensive, disgusting, and off-putting. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;repellent&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Repellent&quot; is used in outdoor activities, pest control, personal care products, behavioral descriptions, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;repellent&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repellent&quot; comes from Latin &quot;repellere&quot; meaning &quot;to drive back&quot; or &quot;to repel,&quot; which is related to the verb &quot;repellere&quot; meaning &quot;to push away.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;repellent&quot; countable or uncountable?</h3>
              <p className="text-lg text-gray-700">A: &quot;Repellent&quot; can be both countable and uncountable. You can have &quot;a repellent&quot; (countable) or &quot;repellent&quot; in general (uncountable).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Repellent&quot;</strong> has &quot;e&quot; before &quot;l&quot; and means &quot;a substance that drives away.&quot; 
          <br />
          <strong>&quot;Repellant&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REPEL + ENT&quot; - both have &quot;e&quot; before &quot;l&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
