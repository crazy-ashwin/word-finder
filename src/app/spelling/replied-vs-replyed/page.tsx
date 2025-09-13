import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Replied vs Replyed - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;replied&quot; and &quot;replyed&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepliedVsReplyedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Replied vs Replyed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Replied&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Replyed&quot; is always incorrect - remember the &quot;ied&quot; ending for past tense verbs ending in &quot;y&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Replyed</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;ied&quot; ending and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Replied</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;responded in the past.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Replied&quot; (Past Tense)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;responded&quot;</li>
                <li>• Has &quot;ied&quot; ending</li>
                <li>• Related to &quot;reply&quot;</li>
                <li>• Used in past contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Replyed&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;ied&quot; ending</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Grammar Rule</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Verbs ending in &quot;y&quot;</li>
                <li>• Change &quot;y&quot; to &quot;ied&quot;</li>
                <li>• Always for past tense</li>
                <li>• Standard English rule</li>
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
            <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;She <strong>replied</strong> to the email yesterday.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;He <strong>replied</strong> quickly to the message.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;They <strong>replied</strong> to all the questions.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;I <strong>replied</strong> to the invitation last week.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>replyed</strong> to the email yesterday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replied&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>replyed</strong> quickly to the message&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replied&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>replyed</strong> to all the questions&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replied&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>replyed</strong> to the invitation last week&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replied&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Y to IED Rule</h3>
              <p className="text-yellow-800">&quot;Reply&quot; becomes &quot;replied&quot; - &quot;y&quot; to &quot;ied&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Try</h3>
              <p className="text-blue-800">&quot;Try&quot; becomes &quot;tried&quot; - same rule!</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;replied&quot; to build muscle memory</p>
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
                <li>• <strong>Replied quickly</strong> - responded fast</li>
                <li>• <strong>Replied promptly</strong> - responded soon</li>
                <li>• <strong>Replied professionally</strong> - responded formally</li>
                <li>• <strong>Replied in detail</strong> - responded thoroughly</li>
                <li>• <strong>Replied to all</strong> - responded to everyone</li>
                <li>• <strong>Replied immediately</strong> - responded at once</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;He replied yesterday&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;She has replied&quot;</li>
                <li>• <strong>In questions:</strong> &quot;When did you reply?&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;He replied quickly&quot;</li>
                <li>• <strong>In passive:</strong> &quot;The email was replied to&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;She replied to the message&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;replied&quot; and &quot;replyed&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many English words have irregular past tense forms. People might forget the &quot;y&quot; to &quot;ied&quot; rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;replied&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Replied&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;replied&quot; and &quot;replyed&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Replied&quot; is the correct spelling meaning &quot;responded in the past.&quot; &quot;Replyed&quot; is not a real word and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;replied&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;replied&quot; typically has neutral connotations, it can be used in both positive and negative contexts. Context determines whether it&apos;s seen as positive or negative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;try&quot; - &quot;try&quot; becomes &quot;tried&quot; and &quot;reply&quot; becomes &quot;replied.&quot; Both follow the &quot;y&quot; to &quot;ied&quot; rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;replied&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: responded, answered, retorted, rejoined, and came back. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;replied&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Replied&quot; is used in email communication, social media, business discussions, academic writing, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;replied&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Replied&quot; comes from Old French &quot;replier&quot; meaning &quot;to fold back&quot; or &quot;to answer,&quot; which is related to the verb &quot;reply&quot; meaning &quot;to respond.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;replied&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Replied&quot; follows a regular pattern for verbs ending in &quot;y.&quot; The rule is: change &quot;y&quot; to &quot;ied&quot; for past tense and past participle forms.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Replied&quot;</strong> has &quot;ied&quot; ending and means &quot;responded in the past.&quot; 
          <br />
          <strong>&quot;Replyed&quot;</strong> is missing the &quot;ied&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Y to IED&quot; - &quot;reply&quot; becomes &quot;replied&quot; like &quot;try&quot; becomes &quot;tried&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
