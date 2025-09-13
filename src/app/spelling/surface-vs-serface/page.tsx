import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Surface vs Serface - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;surface&quot; and &quot;serface&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SurfaceVsSerfacePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Surface vs Serface
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🏔️</span>
            <span className="text-2xl font-bold text-green-600">&quot;Surface&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Serface&quot; is always incorrect - remember the &quot;u&quot; in &quot;surface&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Serface</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Surface</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the outer layer or top of something.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Surface&quot; (Correct)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Has &quot;u&quot; after &quot;s&quot;</li>
                <li>• Follows &quot;sur&quot; pattern</li>
                <li>• Ends with &quot;-face&quot;</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Common Error</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Serface&quot; is wrong</li>
                <li>• Missing &quot;u&quot; after &quot;s&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Memory Aid</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Think &quot;SUR + FACE&quot;</li>
                <li>• &quot;sur&quot; like &quot;surprise&quot;</li>
                <li>• &quot;face&quot; like your face</li>
                <li>• Related to &quot;surfacing&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The mountain has a rocky <strong>surface</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Birds fly above the water&apos;s <strong>surface</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The desk has a wooden <strong>surface</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Clean the bathroom <strong>surface</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The mountain has a rocky <strong>serface</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surface&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Birds fly above the water&apos;s <strong>serface</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surface&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The desk has a wooden <strong>serface</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surface&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Clean the bathroom <strong>serface</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surface&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">U Rule</h3>
              <p className="text-yellow-800">&quot;Surface&quot; has &quot;u&quot; like &quot;surprise&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Think Face</h3>
              <p className="text-violet-800">&quot;Surface&quot; ends with &quot;face&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words starting with &quot;sur&quot; are common</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUR + FACE = Surface</p>
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
                <li>• <strong>Surface area</strong> - total area of all faces</li>
                <li>• <strong>Surface tension</strong> - liquid property</li>
                <li>• <strong>Surface level</strong> - superficial understanding</li>
                <li>• <strong>Surface mail</strong> - regular postal service</li>
                <li>• <strong>Surface water</strong> - water on Earth&apos;s surface</li>
                <li>• <strong>Surface mining</strong> - extracting minerals from surface</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The surface is smooth&quot;</li>
                <li>• <strong>Verb:</strong> &quot;Fish surface for air&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Surface matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;I cleaned the surface&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Surface-level&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Surface-wise&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;surface&quot; as &quot;serface&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;u&quot; sound in &quot;surface&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the &quot;sur&quot; prefix pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;surface&quot; related to &quot;surprise&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words share the &quot;sur&quot; prefix, which comes from Latin &quot;super-&quot; meaning &quot;above&quot; or &quot;over.&quot; &quot;Surface&quot; means the top layer, while &quot;surprise&quot; means taken over by surprise.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between &quot;surface&quot; and &quot;face&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surface&quot; refers to the outer layer or top of any object, while &quot;face&quot; specifically refers to the front part of the head. &quot;Surface&quot; is more general and can apply to any object.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;surface&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Surface&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;surface&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: exterior, outside, top, outer layer, covering, facade, and exterior. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;surprise&quot; (which has the same &quot;sur&quot; beginning) and remember that &quot;surface&quot; starts the same way. The &quot;u&quot; after &quot;s&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;The SURFACE is what you see on the SURface&quot; - both words start with &quot;sur.&quot; Or remember: &quot;SUR + FACE&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the verb form of &quot;surface&quot;?</h3>
              <p className="text-lg text-gray-700">A: The verb form is also &quot;surface.&quot; For example: &quot;Fish surface for air&quot; or &quot;The submarine surfaced.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the etymology of &quot;surface&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surface&quot; comes from Old French &quot;sur&quot; meaning &quot;over&quot; and &quot;face&quot; meaning &quot;face.&quot; Together they form a word meaning &quot;the outer face or layer.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;surface&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Surface&quot; is often used metaphorically to mean superficial or shallow understanding, as in &quot;surface-level knowledge&quot; or &quot;only scratching the surface.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;surface&quot; and &quot;level&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surface&quot; refers to the outer layer or top of something, while &quot;level&quot; refers to a horizontal plane or degree of something. They can overlap but have different meanings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How do I use &quot;surface&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surface&quot; can be used in various contexts: physical (table surface), geographical (Earth&apos;s surface), metaphorical (surface-level understanding), and scientific (surface tension).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Surface&quot;</strong> has &quot;u&quot; after &quot;s&quot; and means &quot;the outer layer.&quot; 
          <br />
          <strong>&quot;Serface&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUR + FACE&quot; and remember the &quot;u&quot; like in &quot;surprise&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
