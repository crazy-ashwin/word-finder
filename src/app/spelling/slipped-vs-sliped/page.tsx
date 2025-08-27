import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Slipped vs Sliped - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;slipped&quot; and &quot;sliped&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SlippedVsSlipedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-lime-600 to-emerald-600 bg-clip-text text-transparent">
          Slipped vs Sliped
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-lime-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🦶</span>
            <span className="text-2xl font-bold text-green-600">&quot;Slipped&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sliped&quot; is always incorrect - remember the double &quot;p&quot; in &quot;slipped&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sliped</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Slipped</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of slip; to have lost footing or balance.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Slip&quot; (Root)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Means &quot;slide&quot;</li>
                <li>• Old English origin</li>
                <li>• Related to movement</li>
                <li>• Used in many contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;PP&quot; (Double P)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Must be included</li>
                <li>• Part of root word</li>
                <li>• Creates proper sound</li>
                <li>• Essential for meaning</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Ed&quot; (Suffix)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Past tense</li>
                <li>• Means &quot;happened&quot;</li>
                <li>• Standard English suffix</li>
                <li>• Forms past tense</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Correct: &quot;Slipped&quot;</h3>
              <div className="space-y-3">
                <p className="text-green-800"><strong>•</strong> &quot;I slipped on the ice.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;She slipped and fell.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;He slipped through the door.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;The glass slipped from my hand.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sliped&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;I sliped on the ice&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She sliped and fell&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He sliped through the door&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The glass sliped from my hand&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Double P</h3>
              <p className="text-yellow-800">&quot;Slip&quot; + &quot;ped&quot; = &quot;slipped&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Remember Fall</h3>
              <p className="text-green-800">&quot;Slipped&quot; = lost balance</p>
            </CardContent>
          </Card>
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">Write It Out</h3>
              <p className="text-lime-800">Practice writing &quot;slipped&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Proofread</h3>
              <p className="text-emerald-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;slipped&quot; as &quot;sliped&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error often occurs due to phonetic confusion. People might hear the word and think it should be spelled with a single &quot;p&quot;, leading to the incorrect &quot;sliped.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Is &quot;slipped&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Slipped&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the etymology of &quot;slipped&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Slipped&quot; comes from Old English &quot;slīpan&quot; meaning &quot;to glide&quot; or &quot;slide.&quot; The word evolved to mean &quot;to lose footing&quot; and follows standard English past tense rules.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;slipped&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sliped&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;slipped&quot; as &quot;slip&quot; + &quot;ped&quot; - the base word &quot;slip&quot; has one &quot;p&quot;, and when you add the past tense suffix, you keep that &quot;p&quot;.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;slipped&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: slid, skidded, tripped, stumbled, fell, and lost footing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;slipped&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Slipped&quot; can refer to physical accidents, time passing unnoticed, making mistakes, or any situation where something moves or changes unexpectedly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;slipped&quot; and &quot;fell&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both can result in injury, &quot;slipped&quot; specifically refers to losing footing or balance, often on a slippery surface, while &quot;fell&quot; is a broader term for any downward movement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;slipped&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: Not always! While &quot;slipped&quot; often refers to accidents or mistakes, it can also be neutral (like &quot;time slipped away&quot;) or even positive in some contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some common phrases with &quot;slipped&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;slipped and fell,&quot; &quot;slipped through,&quot; &quot;slipped away,&quot; &quot;slipped up,&quot; and &quot;slipped by.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Slipped&quot;</strong> has double &quot;p&quot;s. 
          <br />
          <strong>&quot;Sliped&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SLIP + PED = SLIPPED&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/companies-vs-companys" className="text-blue-700 hover:text-blue-900 underline">Companies vs Companys</a></li>
            <li><a href="/spelling/separate-vs-seperate" className="text-blue-700 hover:text-blue-900 underline">Separate vs Seperate</a></li>
            <li><a href="/spelling/definitely-vs-definately" className="text-blue-700 hover:text-blue-900 underline">Definitely vs Definately</a></li>
            <li><a href="/spelling/occurred-vs-occured" className="text-blue-700 hover:text-blue-900 underline">Occurred vs Occured</a></li>
            <li><a href="/spelling/recommend-vs-recomend" className="text-blue-700 hover:text-blue-900 underline">Recommend vs Recomend</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/stopped-vs-stoped" className="text-purple-700 hover:text-purple-900 underline">Stopped vs Stoped</a></li>
            <li><a href="/spelling/planned-vs-planed" className="text-purple-700 hover:text-purple-900 underline">Planned vs Planed</a></li>
            <li><a href="/spelling/grabbed-vs-grabed" className="text-purple-700 hover:text-purple-900 underline">Grabbed vs Grabed</a></li>
            <li><a href="/spelling/occurred-vs-occured" className="text-purple-700 hover:text-purple-900 underline">Occurred vs Occured</a></li>
            <li><a href="/spelling/referred-vs-refered" className="text-purple-700 hover:text-purple-900 underline">Referred vs Refered</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verb-tenses" className="text-green-700 hover:text-green-900 underline">Verb Tenses</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-helping-verbs" className="text-green-700 hover:text-green-900 underline">Helping Verbs Worksheets</a></li>
            <li><a href="/grammar/4th-grade-worksheets-past-continuous-tense" className="text-green-700 hover:text-green-900 underline">Past Continuous Tense</a></li>
            <li><a href="/grammar/action-verbs" className="text-green-700 hover:text-green-900 underline">Action Verbs</a></li>
            <li><a href="/grammar/grammar-rules" className="text-green-700 hover:text-green-900 underline">Grammar Rules</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
