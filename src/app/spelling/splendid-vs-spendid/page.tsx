import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Splendid vs Spendid - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;splendid&quot; and &quot;spendid&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SplendidVsSpendidPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Splendid vs Spendid
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
            <span className="text-2xl mr-3">💎</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Splendid&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spendid&quot; is always incorrect - remember the &quot;l&quot; in &quot;splendid&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spendid</h3>
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
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Splendid</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
                This is the proper spelling meaning &quot;magnificent, excellent, or brilliant.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Splendid&quot; (Adjective)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Has &quot;l&quot; after &quot;p&quot;</li>
                <li>• Ends with &quot;id&quot;</li>
                <li>• Means &quot;excellent&quot;</li>
                <li>• Describes quality</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Spelling Rule</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• &quot;Spl&quot; not &quot;Sp&quot;</li>
                <li>• &quot;l&quot; makes &quot;pl&quot; sound</li>
                <li>• Similar to &quot;splash&quot;</li>
                <li>• Similar to &quot;splinter&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Common Confusion</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• People forget &quot;l&quot;</li>
                <li>• Similar to &quot;spend&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember &quot;l&quot;</li>
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
                <p className="text-lg text-emerald-800">&quot;What a <strong>splendid</strong> achievement!&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The sunset was absolutely <strong>splendid</strong>.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;She gave a <strong>splendid</strong> speech.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The garden looked <strong>splendid</strong> in spring.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What a <strong>spendid</strong> achievement!&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sunset was absolutely <strong>spendid</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She gave a <strong>spendid</strong> speech.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The garden looked <strong>spendid</strong> in spring.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;splendid&quot;</p>
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
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">L Rule</h3>
              <p className="text-yellow-800">&quot;Splendid&quot; has &quot;l&quot; like &quot;splash&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Think Splash</h3>
              <p className="text-emerald-800">Splendid = splash + endid</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Write It Out</h3>
              <p className="text-teal-800">Practice writing &quot;splendid&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Splendid isolation</strong> - British foreign policy</li>
                <li>• <strong>Splendid time</strong> - wonderful experience</li>
                <li>• <strong>Splendid weather</strong> - perfect conditions</li>
                <li>• <strong>Splendid success</strong> - great achievement</li>
                <li>• <strong>Splendid example</strong> - excellent model</li>
                <li>• <strong>Splendid opportunity</strong> - great chance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Attributive adjective:</strong> &quot;The splendid view&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The view was splendid&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More splendid&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most splendid&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Splendidly&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Splendor&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;splendid&quot; as &quot;spendid&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the &quot;l&quot; after the &quot;p.&quot; Some people may also be influenced by the word &quot;spend&quot; or unclear pronunciation of the &quot;pl&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;splendid&quot; and &quot;spend&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Splendid&quot; is an adjective meaning &quot;excellent or magnificent,&quot; while &quot;spend&quot; is a verb meaning &quot;to pay out money&quot; or &quot;to use time.&quot; They are completely different words with different meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Are there other words that start with &quot;spl&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English words start with &quot;spl&quot;: splash, split, splinter, splendid, splurge, splatter, and splendor are just a few examples. The &quot;l&quot; is essential for the correct pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;splendid&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Splendid&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s considered elegant and sophisticated.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;splendid&quot; and &quot;wonderful&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both are positive, &quot;splendid&quot; suggests something more magnificent, impressive, or grand, while &quot;wonderful&quot; is more general and can mean anything that causes wonder or delight.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;splendid&quot; as starting with &quot;spl&quot; like &quot;splash&quot; or &quot;split.&quot; The &quot;l&quot; is essential for the correct pronunciation and spelling. Remember: &quot;SPL + endid.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;splendid&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: magnificent, excellent, brilliant, superb, outstanding, marvelous, glorious, and resplendent. Each has slightly different nuances and levels of intensity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;spendid&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spendid&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;splendid&quot; with the &quot;l&quot; after the &quot;p.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the etymology of &quot;splendid&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Splendid&quot; comes from Latin &quot;splendidus&quot; meaning &quot;shining&quot; or &quot;bright.&quot; It&apos;s related to the Latin word &quot;splendere&quot; meaning &quot;to shine,&quot; which gives us the sense of something being bright, excellent, or magnificent.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;splendid&quot; be used ironically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Splendid&quot; can be used ironically or sarcastically to mean the opposite of its literal meaning. For example, &quot;Well, that&apos;s just splendid&quot; when something goes wrong can be a form of sarcasm.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Splendid&quot;</strong> has an &quot;l&quot; after the &quot;p&quot; and means &quot;magnificent or excellent.&quot; 
          <br />
          <strong>&quot;Spendid&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPL + endid = SPLENDID (like splash)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
