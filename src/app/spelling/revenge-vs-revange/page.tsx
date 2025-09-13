import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Revenge vs Revange - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;revenge&quot; and &quot;revange&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RevengeVsRevangePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Revenge vs Revange
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-red-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⚔️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Revenge&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Revange&quot; is always incorrect - remember the &quot;e&quot; before &quot;n&quot; in &quot;revenge&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Revange</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;e&quot; before &quot;n&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Revenge</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of inflicting harm in return for injury.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Revenge&quot; (Noun/Verb)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;retaliation for injury&quot;</li>
                <li>• Has &quot;e&quot; before &quot;n&quot;</li>
                <li>• Can be a noun or verb</li>
                <li>• Related to &quot;vengeance&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Revange&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;e&quot; before &quot;n&quot;</li>
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
                <li>• From Old French &quot;revengier&quot;</li>
                <li>• Latin &quot;vindicare&quot;</li>
                <li>• Related to &quot;vengeance&quot;</li>
                <li>• Always has &quot;e&quot; before &quot;n&quot;</li>
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
                <p className="text-lg text-green-800">&quot;He sought <strong>revenge</strong> for the betrayal.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The movie was about <strong>revenge</strong> and redemption.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She vowed to <strong>revenge</strong> her family&apos;s honor.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Cold <strong>revenge</strong> is a dish best served cold.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He sought <strong>revange</strong> for the betrayal&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;revenge&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The movie was about <strong>revange</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;revenge&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She vowed to <strong>revange</strong> her family&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;revenge&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Cold <strong>revange</strong> is a dish&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;revenge&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Before N Rule</h3>
              <p className="text-yellow-800">&quot;Revenge&quot; has &quot;e&quot; before &quot;n&quot; like &quot;vengeance&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Vengeance</h3>
              <p className="text-blue-800">&quot;Revenge&quot; and &quot;vengeance&quot; share the same pattern</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;revenge&quot; to build muscle memory</p>
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
                <li>• <strong>Sweet revenge</strong> - satisfying retaliation</li>
                <li>• <strong>Revenge is sweet</strong> - retaliation feels good</li>
                <li>• <strong>Take revenge</strong> - seek retaliation</li>
                <li>• <strong>Revenge killing</strong> - murder for retaliation</li>
                <li>• <strong>Revenge fantasy</strong> - imagined retaliation</li>
                <li>• <strong>Revenge plot</strong> - plan for retaliation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The revenge was swift&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I will revenge this insult&quot;</li>
                <li>• <strong>Object:</strong> &quot;He took his revenge&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Revenge consumed him&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Revenge plot&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s revenge&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;revenge&quot; and &quot;revange&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many English words have silent letters. People might drop the &quot;e&quot; before &quot;n&quot; because it&apos;s not strongly pronounced.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;revenge&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;revenge&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word with clear meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;revenge&quot; and &quot;vengeance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Revenge&quot; and &quot;vengeance&quot; are very similar, but &quot;vengeance&quot; often implies more severe or divine retribution, while &quot;revenge&quot; is more personal retaliation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;revenge&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: While &quot;revenge&quot; typically has negative connotations, it can be used neutrally in literature and discussions about justice. However, it generally implies harmful retaliation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;vengeance&quot; - both words have &quot;e&quot; before &quot;n&quot;. You can also remember: &quot;RE + VENGE&quot; where &quot;venge&quot; always has &quot;e&quot; before &quot;n&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;revenge&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: retaliation, vengeance, retribution, payback, reprisal, requital, and avengement. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;revenge&quot; be used as both noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Revenge&quot; can function as both a noun (&quot;He sought revenge&quot;) and a verb (&quot;I will revenge this insult&quot;), though the verb form is less common in modern usage.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;revenge&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Revenge&quot; comes from Old French &quot;revengier&quot; meaning &quot;to avenge&quot; and ultimately from Latin &quot;vindicare&quot; meaning &quot;to claim&quot; or &quot;to avenge.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Revenge&quot;</strong> has &quot;e&quot; before &quot;n&quot; and means &quot;retaliation.&quot; 
          <br />
          <strong>&quot;Revange&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RE + VENGE&quot; - both have &quot;e&quot; before &quot;n&quot;!</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Revenge</strong> is the correct spelling with &quot;ge&quot; at the end. It means retaliation for a wrong or injury. The misspelling &quot;revange&quot; with &quot;ge&quot; is never correct. Always use &quot;revenge&quot; when referring to retaliation.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
