import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Responsibilities vs Responsiblities - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;responsibilities&quot; and &quot;responsiblities&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ResponsibilitiesVsResponsiblitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Responsibilities vs Responsiblities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Responsibilities&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Responsiblities&quot; is always incorrect - remember the &quot;si&quot; in &quot;responsibilities&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Responsiblities</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Responsibilities</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper plural spelling meaning &quot;multiple duties or obligations.&quot;
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
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Responsibilities&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;si&quot; after &quot;respon&quot;</li>
                <li>• Plural form of responsibility</li>
                <li>• Means multiple duties</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Responsiblities&quot; (Wrong)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing the &quot;i&quot;</li>
                <li>• Not a real word</li>
                <li>• Common misspelling</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Tip</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;RESPON + SI + BIL + ITIES&quot;</li>
                <li>• The &quot;si&quot; is crucial</li>
                <li>• Like &quot;abilities&quot; with &quot;si&quot;</li>
                <li>• Practice writing it out</li>
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
                <p className="text-lg text-green-800">&quot;She has many <strong>responsibilities</strong> at work.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Parenting comes with many <strong>responsibilities</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>responsibilities</strong> include managing the team.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The job has several <strong>responsibilities</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has many <strong>responsiblities</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;responsibilities&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Parenting comes with many <strong>responsiblities</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;responsibilities&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>responsiblities</strong> include managing&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;responsibilities&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The job has several <strong>responsiblities</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;responsibilities&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">SI Rule</h3>
              <p className="text-yellow-800">&quot;Responsibilities&quot; has &quot;si&quot; like &quot;abilities&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Break It Down</h3>
              <p className="text-blue-800">RESPON + SI + BIL + ITIES = Responsibilities</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;responsibilities&quot; to build muscle memory</p>
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
                <li>• <strong>Job responsibilities</strong> - work duties</li>
                <li>• <strong>Parental responsibilities</strong> - child-rearing duties</li>
                <li>• <strong>Financial responsibilities</strong> - money duties</li>
                <li>• <strong>Social responsibilities</strong> - community duties</li>
                <li>• <strong>Legal responsibilities</strong> - law duties</li>
                <li>• <strong>Moral responsibilities</strong> - ethical duties</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Plural noun:</strong> &quot;Many responsibilities&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Responsibilities are challenging&quot;</li>
                <li>• <strong>Object:</strong> &quot;I handle the responsibilities&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Her responsibilities&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Five responsibilities&quot;</li>
                <li>• <strong>Abstract concept:</strong> &quot;Responsibilities matter&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;responsibilities&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people forget the &quot;i&quot; in &quot;si&quot;. The word is long and complex, making it easy to miss letters when typing quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;responsiblities&quot; ever correct?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;responsiblities&quot; is never correct in any context. It&apos;s always a misspelling of &quot;responsibilities.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between singular and plural?</h3>
              <p className="text-lg text-gray-700">A: &quot;Responsibility&quot; (singular) refers to one duty, while &quot;responsibilities&quot; (plural) refers to multiple duties or obligations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break it down: RESPON + SI + BIL + ITIES. Remember that &quot;si&quot; is in the middle, just like in &quot;abilities.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there similar words that follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Words like &quot;capabilities,&quot; &quot;possibilities,&quot; and &quot;flexibilities&quot; all follow the same pattern with &quot;ibilities&quot; at the end.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;responsibilities&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Responsibilities&quot; comes from the Latin &quot;responsum&quot; meaning &quot;answer&quot; and the suffix &quot;-ibilities&quot; meaning &quot;abilities.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;responsibilities&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Responsibilities&quot; is a formal word commonly used in academic, business, and legal contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;responsibilities&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: duties, obligations, tasks, assignments, commitments, charges, and burdens.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Responsibilities&quot;</strong> has &quot;si&quot; in the middle: re-spon-si-bil-i-ties. 
          <br />
          <strong>&quot;Responsiblities&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RESPON + SI + BIL + ITIES&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
