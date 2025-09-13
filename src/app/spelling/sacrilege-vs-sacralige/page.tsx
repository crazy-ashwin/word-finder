import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sacrilege vs Sacralige - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sacrilege&quot; and &quot;sacralige&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SacrilegeVsSacraligePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Sacrilege vs Sacralige
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⛪</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sacrilege&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sacralige&quot; is always incorrect - remember the proper spelling!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sacralige</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common spelling mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sacrilege</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;violation or misuse of what is regarded as sacred.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">⛪</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Spelling Rule</h3>
              <p className="text-yellow-800">Think: &quot;Sacrilege has -lege&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Word Origin</h3>
              <p className="text-blue-800">From Latin &quot;sacrilegium&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sacrilege&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why is &quot;sacralige&quot; incorrect?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sacralige&quot; is incorrect because it uses the wrong spelling. The correct form is &quot;sacrilege&quot; with &quot;-lege&quot;. The word comes from Latin &quot;sacrilegium&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What does &quot;sacrilege&quot; mean?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sacrilege&quot; means the violation or misuse of what is regarded as sacred or holy. It refers to actions that show disrespect for religious beliefs, practices, or sacred objects.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;sacrilege&quot; pronounced?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sacrilege&quot; is pronounced as &quot;SAK-ruh-leej&quot; with the stress on the first syllable. The &quot;g&quot; is pronounced like a &quot;j&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;sacrilege&quot; and &quot;blasphemy&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to religious disrespect, &quot;sacrilege&quot; specifically refers to violating sacred things or places, while &quot;blasphemy&quot; refers to speaking irreverently about God or sacred things.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sacrilege&quot; comes from Latin &quot;sacrilegium&quot;. Think of the pattern: &quot;Sacri&quot; + &quot;lege&quot; = &quot;Sacrilege&quot;.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sacrilege&quot;</strong> is the correct form meaning &quot;violation of what is sacred.&quot; 
          <br />
          <strong>&quot;Sacralige&quot;</strong> is never correct due to incorrect spelling.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SACRILEGE = SACRI + lege&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Featured Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-lime-500 pb-2">Featured Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sacrilegious-vs-sacriligious" className="block p-3 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors">
              <p className="font-semibold text-lime-800">Sacrilegious vs Sacriligious</p>
              <p className="text-sm text-lime-600">Suffix confusion</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligous" className="block p-3 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors">
              <p className="font-semibold text-lime-800">Sacrilegious vs Sacreligous</p>
              <p className="text-sm text-lime-600">Another religious spelling variant</p>
            </Link>
            <Link href="/spelling/sacrilegious-vs-sacreligious" className="block p-3 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors">
              <p className="font-semibold text-lime-800">Sacrilegious vs Sacreligious</p>
              <p className="text-sm text-lime-600">Religious spelling confusion</p>
            </Link>
            <Link href="/spelling/sadder-vs-sader" className="block p-3 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors">
              <p className="font-semibold text-lime-800">Sadder vs Sader</p>
              <p className="text-sm text-lime-600">Comparative form spelling</p>
            </Link>
            <Link href="/spelling/safely-vs-safley" className="block p-3 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors">
              <p className="font-semibold text-lime-800">Safely vs Safley</p>
              <p className="text-sm text-lime-600">Adverb suffix confusion</p>
            </Link>
          </div>
        </div>

        {/* Related Misspellings */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">Related Misspellings</h3>
          <div className="space-y-3">
            <Link href="/spelling/sabbatical-vs-sabatical" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <p className="font-semibold text-green-800">Sabbatical vs Sabatical</p>
              <p className="text-sm text-green-600">Academic term spelling</p>
            </Link>
            <Link href="/spelling/sabbath-vs-sabath" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <p className="font-semibold text-green-800">Sabbath vs Sabath</p>
              <p className="text-sm text-green-600">Religious day spelling</p>
            </Link>
            <Link href="/spelling/safeness-vs-safetyness" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <p className="font-semibold text-green-800">Safeness vs Safetyness</p>
              <p className="text-sm text-green-600">Suffix formation confusion</p>
            </Link>
            <Link href="/spelling/safety-vs-saftey" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <p className="font-semibold text-green-800">Safety vs Saftey</p>
              <p className="text-sm text-green-600">Letter transposition mistake</p>
            </Link>
            <Link href="/spelling/sandwich-vs-sendwich" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <p className="font-semibold text-green-800">Sandwich vs Sendwich</p>
              <p className="text-sm text-green-600">Common food spelling mistake</p>
            </Link>
          </div>
        </div>

        {/* Learned Grammar */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-emerald-500 pb-2">Learned Grammar</h3>
          <div className="space-y-3">
            <Link href="/confusing-words/presumed-vs-assumed" className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <p className="font-semibold text-emerald-800">Presumed vs Assumed</p>
              <p className="text-sm text-emerald-600">Belief vs supposition</p>
            </Link>
            <Link href="/confusing-words/stationary-vs-stationery" className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <p className="font-semibold text-emerald-800">Stationary vs Stationery</p>
              <p className="text-sm text-emerald-600">Still vs writing materials</p>
            </Link>
            <Link href="/confusing-words/eagle-vs-hawk" className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <p className="font-semibold text-emerald-800">Eagle vs Hawk</p>
              <p className="text-sm text-emerald-600">Bird identification</p>
            </Link>
            <Link href="/confusing-words/batter-vs-pitcher" className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <p className="font-semibold text-emerald-800">Batter vs Pitcher</p>
              <p className="text-sm text-emerald-600">Baseball positions</p>
            </Link>
            <Link href="/confusing-words/aspen-vs-birch" className="block p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              <p className="font-semibold text-emerald-800">Aspen vs Birch</p>
              <p className="text-sm text-emerald-600">Tree identification</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Sacrilege</strong> is the correct spelling with &quot;le&quot;: sac-ri-lege. It means disrespect for sacred things. The misspelling &quot;sacralige&quot; is never correct. Always use &quot;sacrilege&quot; when referring to disrespect for religious or sacred objects.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}