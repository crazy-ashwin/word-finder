import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spread vs Spreaded - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spread&quot; and &quot;spreaded&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpreadVsSpreadedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
          Spread vs Spreaded
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-lime-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📖</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Spread&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spreaded&quot; is always incorrect - remember that &quot;spread&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spreaded</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Spread</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;to extend over an area.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Spread&quot; (Root)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;to extend&quot; or &quot;to cover&quot;</li>
                <li>• Related to expansion</li>
                <li>• Old English origin</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Irregular&quot; (Verb)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Does not follow rules</li>
                <li>• Must be memorized</li>
                <li>• Part of English</li>
                <li>• Creates &quot;spread&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Same Form&quot; (All Tenses)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Present: &quot;spread&quot;</li>
                <li>• Past: &quot;spread&quot;</li>
                <li>• Past Participle: &quot;spread&quot;</li>
                <li>• Creates &quot;spread&quot;</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;She <strong>spread</strong> the blanket on the ground.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The news <strong>spread</strong> quickly.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;He <strong>spread</strong> butter on his toast.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The disease <strong>spread</strong> rapidly.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>spreaded</strong> the blanket on the ground&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spread&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The news <strong>spreaded</strong> quickly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spread&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>spreaded</strong> butter on his toast&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spread&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The disease <strong>spreaded</strong> rapidly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spread&quot;</p>
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
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Book</h3>
              <p className="text-yellow-800">&quot;Spread&quot; like opening a book</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Irregular Verb</h3>
              <p className="text-blue-800">Remember &quot;spread&quot; is irregular</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;spread&quot; to build muscle memory</p>
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
                <li>• <strong>Spread out</strong> - extend over area</li>
                <li>• <strong>Spread around</strong> - distribute widely</li>
                <li>• <strong>Spread thin</strong> - overextend resources</li>
                <li>• <strong>Spread the word</strong> - share information</li>
                <li>• <strong>Spread wings</strong> - expand horizons</li>
                <li>• <strong>Spread like wildfire</strong> - move very quickly</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present:</strong> &quot;spread&quot;</li>
                <li>• <strong>Past:</strong> &quot;spread&quot;</li>
                <li>• <strong>Past Participle:</strong> &quot;spread&quot;</li>
                <li>• <strong>Subject:</strong> &quot;He spreads&quot;</li>
                <li>• <strong>Object:</strong> &quot;I will spread it&quot;</li>
                <li>• <strong>Noun:</strong> &quot;the spread&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people confuse &quot;spread&quot; and &quot;spreaded&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to regular verbs like &quot;need&quot; (needed). However, &quot;spread&quot; is an irregular verb that follows the pattern: spread → spread → spread.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;spread&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Spread&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English form of the verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the etymology of &quot;spread&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spread&quot; comes from Old English &quot;sprædan&quot; meaning &quot;to extend&quot; + the irregular verb form. It was first used in English in the 12th century to describe extending over an area.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;spread&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;extend&quot; or &quot;cover.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;spread&quot; is irregular, so it stays the same in all forms. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;spread&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: extend, cover, distribute, scatter, disperse, and expand.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;spread&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While often describing physical extension, &quot;spread&quot; can be used in various contexts like information (spread the news), emotions (spread joy), and abstract concepts (spread awareness).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;spread&quot; and &quot;extend&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spread&quot; refers to covering or distributing over an area, while &quot;extend&quot; refers to making something longer or reaching further. &quot;Spread&quot; has a broader, more encompassing connotation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;spread&quot; always about physical extension?</h3>
              <p className="text-lg text-gray-700">A: No! While often describing physical extension, &quot;spread&quot; can also describe abstract concepts. For example, &quot;spread the news&quot; means to share information, and &quot;spread joy&quot; means to share happiness.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;spread&quot;?</h3>
              <p className="text-lg text-gray-700">A: Popular phrases include: &quot;spread out,&quot; &quot;spread around,&quot; &quot;spread thin,&quot; &quot;spread the word,&quot; &quot;spread wings,&quot; and &quot;spread like wildfire.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spread&quot;</strong> is the correct spelling meaning &quot;to extend over an area.&quot; 
          <br />
          <strong>&quot;Spreaded&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPREAD is IRREGULAR = SPREAD&quot;</p>
        </div>
      </div>
    </div>
  )
}
