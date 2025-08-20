import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spicy vs Spicey - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spicy&quot; and &quot;spicey&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpicyVsSpiceyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
          Spicy vs Spicey
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
            <span className="text-2xl mr-3">🌶️</span>
            <span className="text-2xl font-bold text-red-600">&quot;Spicy&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spicey&quot; is always incorrect - remember that &quot;spicy&quot; comes from &quot;spice&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spicey</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Spicy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;having a strong, hot flavor.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Spicy&quot; (Adjective)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Comes from &quot;spice&quot;</li>
                <li>• Ends with &quot;y&quot;</li>
                <li>• Means &quot;hot flavor&quot;</li>
                <li>• Describes taste</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Suffix Rule</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• &quot;y&quot; = having quality</li>
                <li>• Common adjective ending</li>
                <li>• Similar to &quot;juicy&quot;</li>
                <li>• Indicates characteristic</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Common Confusion</h3>
              <ul className="text-red-800 space-y-2">
                <li>• People add &quot;e&quot;</li>
                <li>• Think it&apos;s &quot;spice&quot; + &quot;ey&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember base word</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;This curry is very <strong>spicy</strong>.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;I love <strong>spicy</strong> food.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The sauce was too <strong>spicy</strong> for me.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;She prefers <strong>spicy</strong> dishes.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This curry is very <strong>spicey</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spicy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I love <strong>spicey</strong> food.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spicy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sauce was too <strong>spicey</strong> for me.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spicy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She prefers <strong>spicey</strong> dishes.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spicy&quot;</p>
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
              <div className="text-4xl mb-3">🌶️</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Base Word Rule</h3>
              <p className="text-yellow-800">&quot;Spicy&quot; comes from &quot;spice&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Think Simple</h3>
              <p className="text-orange-800">Spice + y = spicy (no extra e)</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Write It Out</h3>
              <p className="text-red-800">Practice writing &quot;spicy&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Proofread</h3>
              <p className="text-yellow-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Spicy food</strong> - hot cuisine</li>
                <li>• <strong>Spicy sauce</strong> - hot condiment</li>
                <li>• <strong>Spicy flavor</strong> - hot taste</li>
                <li>• <strong>Spicy dish</strong> - hot meal</li>
                <li>• <strong>Spicy kick</strong> - hot sensation</li>
                <li>• <strong>Spicy heat</strong> - hot intensity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Attributive adjective:</strong> &quot;The spicy curry&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;The curry is spicy&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More spicy&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most spicy&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Spicily&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Spiciness&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people misspell &quot;spicy&quot; as &quot;spicey&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from thinking the word should be spelled as &quot;spice&quot; + &quot;ey&quot; instead of &quot;spice&quot; + &quot;y.&quot; Some people may also be influenced by similar words or unclear pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the difference between &quot;spicy&quot; and &quot;hot&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both refer to strong flavors, &quot;spicy&quot; specifically refers to the presence of spices that create heat, while &quot;hot&quot; can refer to temperature or spiciness. &quot;Spicy&quot; is more specific to flavor profiles.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there other words that end with &quot;y&quot; like &quot;spicy&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English adjectives end with &quot;y&quot;: juicy, salty, sweet, sour, bitter, creamy, and crunchy are just a few examples. Each indicates having a particular quality or characteristic.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spicy&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spicy&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;spicy&quot; and &quot;pungent&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both describe strong flavors, &quot;spicy&quot; specifically refers to heat from spices, while &quot;pungent&quot; refers to strong, often unpleasant odors or flavors that may or may not be spicy.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;spicy&quot; as &quot;spice&quot; + &quot;y.&quot; The base word is &quot;spice,&quot; and when you add the &quot;y&quot; suffix to make it an adjective, you don&apos;t add an extra &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;spicy&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: hot, peppery, fiery, zesty, piquant, tangy, and zingy. Each has slightly different nuances and connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;spicey&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;spicey&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spicy&quot; with the &quot;y&quot; suffix from the base word &quot;spice.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;spicy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spicy&quot; comes from the Old French word &quot;espice&quot; meaning &quot;spice,&quot; which in turn comes from Latin &quot;species&quot; meaning &quot;kind&quot; or &quot;sort.&quot; The &quot;y&quot; suffix was added to create the adjective form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Can &quot;spicy&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spicy&quot; is often used metaphorically to describe something exciting, provocative, or controversial. For example, &quot;spicy gossip&quot; means interesting or scandalous information, and &quot;spicy language&quot; means colorful or provocative speech.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spicy&quot;</strong> comes from &quot;spice&quot; and means &quot;having a strong, hot flavor.&quot; 
          <br />
          <strong>&quot;Spicey&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPICE + y = SPICY (no extra e needed)&quot;</p>
        </div>
      </div>
    </div>
  )
}
