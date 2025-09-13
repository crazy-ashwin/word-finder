import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Retaliation vs Retailation - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;retaliation&quot; and &quot;retailation&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RetaliationVsRetailationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Retaliation vs Retailation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⚔️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Retaliation&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Retailation&quot; is always incorrect - remember the &quot;i&quot; before &quot;a&quot; in &quot;retaliation&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Retailation</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;i&quot; before &quot;a&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Retaliation</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of returning an injury or wrong.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Retaliation&quot; (Noun)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;returning injury&quot;</li>
                <li>• Has &quot;i&quot; before &quot;a&quot;</li>
                <li>• Related to &quot;retaliate&quot;</li>
                <li>• Used in conflict contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Retailation&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;i&quot; before &quot;a&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Etymology</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• From Latin &quot;retaliare&quot;</li>
                <li>• Related to &quot;retaliate&quot;</li>
                <li>• Always has &quot;i&quot; before &quot;a&quot;</li>
                <li>• Common in legal/conflict terms</li>
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
                <p className="text-lg text-green-800">&quot;The attack was met with swift <strong>retaliation</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They feared military <strong>retaliation</strong> for the bombing.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The company faced <strong>retaliation</strong> from competitors.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Economic <strong>retaliation</strong> was threatened.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The attack was met with <strong>retailation</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;retaliation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They feared military <strong>retailation</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;retaliation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company faced <strong>retailation</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;retaliation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Economic <strong>retailation</strong> was threatened&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;retaliation&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I Before A Rule</h3>
              <p className="text-yellow-800">&quot;Retaliation&quot; has &quot;i&quot; before &quot;a&quot; like &quot;retaliate&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Retaliate</h3>
              <p className="text-blue-800">&quot;Retaliation&quot; comes from &quot;retaliate&quot; + &quot;ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;retaliation&quot; to build muscle memory</p>
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
                <li>• <strong>Military retaliation</strong> - armed response</li>
                <li>• <strong>Economic retaliation</strong> - financial response</li>
                <li>• <strong>Swift retaliation</strong> - quick response</li>
                <li>• <strong>Fear retaliation</strong> - worry about response</li>
                <li>• <strong>Threaten retaliation</strong> - warn of response</li>
                <li>• <strong>Face retaliation</strong> - encounter response</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The retaliation was swift&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Retaliation followed&quot;</li>
                <li>• <strong>Object:</strong> &quot;They feared retaliation&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Retaliation policy&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s retaliation&quot;</li>
                <li>• <strong>Part of phrase:</strong> &quot;Threat of retaliation&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;retaliation&quot; and &quot;retailation&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many English words have silent letters. People might drop the &quot;i&quot; before &quot;a&quot; because it&apos;s not strongly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;retaliation&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;retaliation&quot; is perfectly acceptable in formal writing, academic papers, legal documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;retaliation&quot; and &quot;revenge&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Retaliation&quot; typically refers to a more immediate, often official response to an action, while &quot;revenge&quot; is more personal and can be delayed. Retaliation is often seen as more justified.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;retaliation&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: While &quot;retaliation&quot; often has negative connotations, it can be used neutrally in discussions about justice, self-defense, or legitimate responses to actions. Context determines the tone.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;retaliate&quot; - &quot;retaliation&quot; is &quot;retaliate&quot; + &quot;ion.&quot; Also remember that &quot;retaliate&quot; has &quot;i&quot; before &quot;a&quot;, so &quot;retaliation&quot; should too.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;retaliation&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: revenge, retribution, reprisal, payback, vengeance, counterattack, and response. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;retaliation&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Retaliation&quot; is used in military contexts, business competition, legal situations, international relations, and personal conflicts. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;retaliation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Retaliation&quot; comes from Latin &quot;retaliare&quot; meaning &quot;to return like for like&quot; or &quot;to requite,&quot; which is related to &quot;talis&quot; meaning &quot;such&quot; or &quot;of such kind.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Retaliation&quot;</strong> has &quot;i&quot; before &quot;a&quot; and means &quot;returning injury.&quot; 
          <br />
          <strong>&quot;Retailation&quot;</strong> is missing the &quot;i&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RETALIATE + ION&quot; - both have &quot;i&quot; before &quot;a&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
