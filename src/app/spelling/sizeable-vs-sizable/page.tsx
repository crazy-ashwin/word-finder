import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sizeable vs Sizable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sizeable&quot; and &quot;sizable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SizeableVsSizablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
          Sizeable vs Sizable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between British and American English
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-sky-100 to-blue-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-cyan-600">Both are Correct!</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sizeable&quot; is British English, &quot;sizable&quot; is American English - both are acceptable!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Sizeable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ BRITISH ENGLISH</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the British English spelling, commonly used in the UK, Australia, and other Commonwealth countries.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇺🇸</span>
              </div>
              <h3 className="text-3xl font-bold text-cyan-800 mb-4">Sizable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-cyan-700 font-semibold">✅ AMERICAN ENGLISH</p>
              </div>
              <p className="text-lg text-cyan-700 leading-relaxed">
                This is the American English spelling, commonly used in the US and Canada.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Size&quot; (Base Word)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Means &quot;dimensions&quot;</li>
                <li>• Old French origin</li>
                <li>• Related to magnitude</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Able&quot; (Suffix)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;capable of&quot;</li>
                <li>• Creates adjective</li>
                <li>• Changes meaning</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;E&quot; (Spelling)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• British: &quot;e&quot; included</li>
                <li>• American: &quot;e&quot; dropped</li>
                <li>• Regional preference</li>
                <li>• Both are correct</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🇬🇧 British: &quot;Sizeable&quot;</h3>
              <div className="space-y-3">
                <p className="text-blue-800"><strong>•</strong> &quot;A sizeable amount of money.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;The company made sizeable profits.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;She has a sizeable collection.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;It was a sizeable investment.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">🇺🇸 American: &quot;Sizable&quot;</h3>
              <div className="space-y-3">
                <p className="text-cyan-800"><strong>•</strong> &quot;A sizable amount of money.&quot;</p>
                <p className="text-cyan-800"><strong>•</strong> &quot;The company made sizable profits.&quot;</p>
                <p className="text-cyan-800"><strong>•</strong> &quot;She has a sizable collection.&quot;</p>
                <p className="text-cyan-800"><strong>•</strong> &quot;It was a sizable investment.&quot;</p>
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
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">British: Keep E</h3>
              <p className="text-yellow-800">&quot;Sizeable&quot; = British spelling with &quot;e&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">American: Drop E</h3>
              <p className="text-cyan-800">&quot;Sizable&quot; = American spelling without &quot;e&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice both spellings to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Check Audience</h3>
              <p className="text-sky-800">Choose spelling based on your target audience</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Which spelling should I use?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;sizeable&quot; for British English audiences and &quot;sizable&quot; for American English audiences. If you&apos;re unsure, &quot;sizable&quot; is more widely recognized internationally.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Are both spellings accepted in all contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both spellings are grammatically correct and widely accepted. The choice depends on your target audience and the style guide you&apos;re following.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of these words?</h3>
              <p className="text-lg text-gray-700">A: Both come from the Old French word &quot;sise&quot; meaning &quot;size&quot; or &quot;dimension.&quot; The difference in spelling reflects the evolution of English in different regions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do other words follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many words follow this pattern: &quot;likeable/likable,&quot; &quot;loveable/lovable,&quot; &quot;moveable/movable,&quot; and &quot;noticeable/noticable&quot; are examples of British vs American spelling differences.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember which is which?</h3>
              <p className="text-lg text-gray-700">A: Think: British English often keeps the &quot;e&quot; (sizeable), while American English tends to drop it (sizable). This follows the same pattern as other &quot;able&quot; words.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;sizeable/sizable&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: substantial, considerable, significant, large, substantial, and substantial.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;sizeable/sizable&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words can refer to amounts, quantities, dimensions, investments, profits, collections, and any other measurable attribute that is notably large.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;sizeable/sizable&quot; and &quot;large&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to something big, &quot;sizeable/sizable&quot; specifically emphasizes that something is of a notable or significant size, often implying it&apos;s larger than expected or average.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;sizeable/sizable&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: Not necessarily! While often used positively (sizeable profits, sizable collection), it can also be neutral or negative depending on context (sizeable debt, sizable problem).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common phrases with &quot;sizeable/sizable&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;sizeable amount,&quot; &quot;sizable investment,&quot; &quot;sizeable profit,&quot; &quot;sizable collection,&quot; and &quot;sizeable portion.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Both spellings are correct! 
          <br />
          <strong>&quot;Sizeable&quot;</strong> (British) vs <strong>&quot;Sizable&quot;</strong> (American)
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Choose based on your audience - British or American English</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
