import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Shopping vs Shoping - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;shopping&quot; and &quot;shoping&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ShoppingVsShopingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Shopping vs Shoping
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Shopping&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Shoping&quot; is always incorrect - remember the double &quot;p&quot; in &quot;shopping&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Shoping</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Shopping</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;the activity of buying goods or services.&quot;
              </p>
            </CardContent>
          </Card>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Shop&quot; (Base)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Base verb</li>
                <li>• Present tense</li>
                <li>• Correct spelling</li>
                <li>• Standard English</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Double P&quot; (Rule)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Essential doubling</li>
                <li>• Changes pronunciation</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Ing&quot; (Suffix)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Present participle</li>
                <li>• Gerund form</li>
                <li>• Changes word type</li>
                <li>• Essential for grammar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">✅ Correct: &quot;Shopping&quot;</h3>
              <div className="space-y-3">
                <p className="text-amber-800"><strong>•</strong> &quot;I love shopping for clothes.&quot;</p>
                <p className="text-amber-800"><strong>•</strong> &quot;She went shopping yesterday.&quot;</p>
                <p className="text-amber-800"><strong>•</strong> &quot;Online shopping is convenient.&quot;</p>
                <p className="text-amber-800"><strong>•</strong> &quot;Shopping centers are busy places.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Shoping&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;I love shoping for clothes&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She went shoping yesterday&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Online shoping is convenient&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;Shoping centers are busy places&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Double P&quot;</h3>
              <p className="text-yellow-800">&quot;Shopping&quot; = &quot;shop&quot; + &quot;ping&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Remember &quot;PP&quot;</h3>
              <p className="text-amber-800">&quot;Shopping&quot; has two &quot;p&quot;s like &quot;hopping&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Write It Out</h3>
              <p className="text-orange-800">Practice writing &quot;shopping&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proofread</h3>
              <p className="text-blue-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;shopping&quot; as &quot;shoping&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often forget to double the &quot;p&quot; when adding the &quot;ing&quot; suffix. They might think one &quot;p&quot; is enough, but English spelling rules require doubling the consonant before adding &quot;ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;shopping&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shopping&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word that conveys important meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;shopping&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shopping&quot; comes from the Old English word &quot;sceoppa&quot; meaning &quot;booth, stall.&quot; It has been used in English since the 14th century and follows the standard pattern of doubling consonants before adding &quot;ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shopping&quot; is spelled the same way across all English-speaking regions. The spelling &quot;shoping&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;shopping&quot; as having two &quot;p&quot;s like &quot;hopping&quot; or &quot;stopping.&quot; Remember that it&apos;s not &quot;shoping&quot; but rather &quot;shopping&quot; with double &quot;p.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What are some synonyms for &quot;shopping&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: retail therapy, browsing, purchasing, buying, and acquiring goods.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;shopping&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shopping&quot; can refer to buying clothes, groceries, gifts, online purchases, and various other retail activities depending on the context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;shop&quot; and &quot;shopping&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shop&quot; is the base verb meaning to buy goods, while &quot;shopping&quot; is the present participle or gerund form indicating the ongoing activity of shopping.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;shopping&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shopping&quot; is neutral - it simply refers to the activity of buying goods. It can be used in positive, negative, or neutral contexts depending on the surrounding language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What are some common phrases with &quot;shopping&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;shopping for,&quot; &quot;shopping at,&quot; &quot;shopping with,&quot; &quot;shopping list,&quot; and &quot;shopping spree.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Shopping&quot;</strong> has double &quot;p&quot; like &quot;hopping.&quot;
          <br />
          <strong>&quot;Shoping&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SHOPPING = Shop + ping&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>
    </div>
  )
}
