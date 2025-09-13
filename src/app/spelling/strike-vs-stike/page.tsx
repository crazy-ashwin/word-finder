import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Strike vs Stike - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;strike&quot; and &quot;stike&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StrikeVsStikePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Strike vs Stike
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
            <span className="text-2xl mr-3">⚡</span>
            <span className="text-2xl font-bold text-green-600">&quot;Strike&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Stike&quot; is incorrect - remember the &quot;r&quot; in &quot;strike&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Stike</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;r&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Strike</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to hit or attack forcefully.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;St&quot; (Prefix)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Common sound</li>
                <li>• Many words start with it</li>
                <li>• Easy to remember</li>
                <li>• Standard beginning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;R&quot; (Essential)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Must include &quot;r&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Part of root word</li>
                <li>• Cannot be omitted</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Ike&quot; (Suffix)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Common ending</li>
                <li>• Rhymes with &quot;like&quot;</li>
                <li>• Easy to spell</li>
                <li>• Simple pattern</li>
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
                <p className="text-lg text-green-800">&quot;The lightning will <strong>strike</strong> the tree.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Workers went on <strong>strike</strong> for better pay.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The clock will <strong>strike</strong> midnight.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He tried to <strong>strike</strong> the ball.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The lightning will <strong>stike</strong> the tree&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;strike&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Workers went on <strong>stike</strong> for better pay&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;strike&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The clock will <strong>stike</strong> midnight&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;strike&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He tried to <strong>stike</strong> the ball&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;strike&quot;</p>
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
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Lightning</h3>
              <p className="text-yellow-800">&quot;Lightning strikes&quot; - remember the &quot;r&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound It Out</h3>
              <p className="text-blue-800">Say &quot;strike&quot; - hear the &quot;r&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;strike&quot; to build muscle memory</p>
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
                <li>• <strong>Strike a pose</strong> - position yourself</li>
                <li>• <strong>Strike a deal</strong> - make an agreement</li>
                <li>• <strong>Strike gold</strong> - find success</li>
                <li>• <strong>Strike fear</strong> - cause fear</li>
                <li>• <strong>Strike out</strong> - fail or be eliminated</li>
                <li>• <strong>Strike up</strong> - begin something</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Strike</strong> - to hit or attack</li>
                <li>• <strong>Striking</strong> - impressive or noticeable</li>
                <li>• <strong>Striker</strong> - person who strikes</li>
                <li>• <strong>Struck</strong> - past tense</li>
                <li>• <strong>Stricken</strong> - affected by</li>
                <li>• <strong>Strikeout</strong> - baseball term</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people misspell &quot;strike&quot; as &quot;stike&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is dropping the &quot;r&quot; sound, which can happen when people don&apos;t pronounce the word clearly or when they&apos;re writing quickly without thinking about the spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;strike&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Strike&quot; is a formal, standard English word commonly used in business, legal, and academic contexts. It&apos;s perfectly appropriate for all types of writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;strike&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Strike&quot; comes from Old English &quot;strīcan&quot; meaning &quot;to stroke, rub, pass over lightly.&quot; The word has evolved to mean &quot;to hit or attack&quot; in modern English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;strike&quot; is spelled the same way in all English-speaking countries. It&apos;s a standardized word used worldwide.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;strike&quot; has an &quot;r&quot; in the middle. Think of it as &quot;st&quot; + &quot;rike&quot; or remember the phrase &quot;lightning strikes.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;strike&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: hit, attack, beat, pound, knock, slam, whack, and thump.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;strike&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Strike&quot; can be a verb meaning &quot;to hit or attack&quot; or a noun meaning &quot;a refusal to work&quot; or &quot;a hit or blow.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;strike&quot; and &quot;hit&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both mean to make contact, &quot;strike&quot; often implies more force or intention, while &quot;hit&quot; is more general. &quot;Strike&quot; can also have additional meanings like &quot;to discover&quot; or &quot;to refuse to work.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;stike&quot; a real word in any language?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;stike&quot; is not a real word in English or any other language. It&apos;s a common misspelling that has no meaning and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I pronounce &quot;strike&quot; correctly?</h3>
              <p className="text-lg text-gray-700">A: &quot;Strike&quot; is pronounced as &quot;stryk&quot; with the stress on the first syllable. The &quot;r&quot; sound is clearly pronounced, which helps remember the spelling.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Strike&quot;</strong> has an &quot;r&quot; in the middle. 
          <br />
          <strong>&quot;Stike&quot;</strong> is missing the &quot;r&quot; and is incorrect.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ST + RIKE&quot; - the &quot;r&quot; is essential!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
