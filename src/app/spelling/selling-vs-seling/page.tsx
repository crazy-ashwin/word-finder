import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Selling vs Seling - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;selling&quot; and &quot;seling&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SellingVsSelingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Selling vs Seling
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Selling&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Seling&quot; is always incorrect - remember &quot;selling&quot; has double &quot;l&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Seling</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-800 mb-4">Selling</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-rose-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-rose-700 leading-relaxed">
                This is the proper spelling meaning &quot;exchanging goods for money.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Selling&quot; (Correct)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Means &quot;exchanging for money&quot;</li>
                <li>• Has double &quot;l&quot;</li>
                <li>• From verb &quot;sell&quot;</li>
                <li>• Used as gerund/noun</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Seling&quot; (Wrong)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Missing second &quot;l&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Seling&quot; is not a word</li>
                <li>• Missing letter &quot;l&quot;</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;She is <strong>selling</strong> her car.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;The <strong>selling</strong> price is $500.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;He works in <strong>selling</strong>.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;Selling requires patience.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is <strong>seling</strong> her car&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selling&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>seling</strong> price is $500&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selling&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He works in <strong>seling</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selling&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Seling requires patience&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;selling&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double L Rule</h3>
              <p className="text-yellow-800">&quot;Selling&quot; has double &quot;l&quot; - think &quot;sel-LL-ing&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Sell</h3>
              <p className="text-blue-800">&quot;Sell&quot; + &quot;ing&quot; = &quot;selling&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;selling&quot; to build muscle memory</p>
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
                <li>• <strong>Selling point</strong> - attractive feature</li>
                <li>• <strong>Selling price</strong> - cost to buyer</li>
                <li>• <strong>Selling skills</strong> - sales abilities</li>
                <li>• <strong>Hard selling</strong> - aggressive sales</li>
                <li>• <strong>Soft selling</strong> - gentle approach</li>
                <li>• <strong>Selling out</strong> - completely sold</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Gerund:</strong> &quot;Selling is fun&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The selling&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Selling takes time&quot;</li>
                <li>• <strong>Object:</strong> &quot;I enjoy selling&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Sellable&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Sellingly&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;selling&quot; as &quot;seling&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs when people forget the double &quot;l&quot; rule. Remember that when adding &quot;-ing&quot; to &quot;sell,&quot; you keep both &quot;l&quot;s: &quot;sell&quot; + &quot;ing&quot; = &quot;selling.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;seling&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;seling&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the rule for adding &quot;-ing&quot; to &quot;sell&quot;?</h3>
              <p className="text-lg text-gray-700">A: When adding &quot;-ing&quot; to &quot;sell,&quot; you keep both &quot;l&quot;s. This is because &quot;sell&quot; ends in a consonant + vowel + consonant pattern, so the final consonant is doubled before adding &quot;-ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;selling&quot; has double &quot;l&quot; just like &quot;telling,&quot; &quot;calling,&quot; or &quot;falling.&quot; Think of it as &quot;sel-LL-ing&quot; to emphasize the double &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are the different meanings of &quot;selling&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Selling&quot; can mean: exchanging goods for money, persuading someone to buy, promoting an idea or concept, or the act of making sales.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;selling&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Selling&quot; is used in business (sales), real estate (selling houses), marketing (selling ideas), and everyday life (selling items online).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;selling&quot; and &quot;marketing&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Selling&quot; focuses on the direct exchange of goods for money, while &quot;marketing&quot; involves creating awareness, interest, and desire for products or services before the sale.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: seller (person who sells), sale (act of selling), sold (past tense), and sellable (able to be sold).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;sell&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sell&quot; comes from the Old English word &quot;sellan&quot; meaning &quot;to give, deliver, or sell.&quot; It has Germanic roots and has maintained its spelling pattern for centuries.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Selling&quot;</strong> has double &quot;l&quot; and means &quot;exchanging goods for money.&quot; 
          <br />
          <strong>&quot;Seling&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sel-LL-ing&quot; - remember the double &quot;l&quot;!</p>
        </div>
      </div>
    </div>
  )
}
