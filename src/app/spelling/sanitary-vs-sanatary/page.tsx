import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sanitary vs Sanatary - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sanitary&quot; and &quot;sanatary&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SanitaryVsSanataryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Sanitary vs Sanatary
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Sanitary&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sanatary&quot; is always incorrect - remember the &quot;i&quot; in &quot;sanitary&quot; comes from &quot;sanitation&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sanatary</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Sanitary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;clean and hygienic&quot; or &quot;relating to health.&quot;
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
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Sanitation&quot; (Noun)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;cleanliness&quot;</li>
                <li>• Contains &quot;sanit&quot; root</li>
                <li>• Health-related term</li>
                <li>• Used for hygiene</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Sanitary&quot; (Adjective)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;clean and hygienic&quot;</li>
                <li>• Add &quot;ary&quot; to &quot;sanit&quot;</li>
                <li>• Keeps the &quot;i&quot; from &quot;sanitation&quot;</li>
                <li>• Describes cleanliness</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Common Mistake</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• People drop the &quot;i&quot;</li>
                <li>• &quot;Sanatary&quot; is never correct</li>
                <li>• Always keep the &quot;i&quot;</li>
                <li>• Follow the &quot;sanitation&quot; root</li>
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
                <p className="text-lg text-green-800">&quot;The restaurant maintains <strong>sanitary</strong> conditions.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Use <strong>sanitary</strong> practices in the kitchen.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The hospital has strict <strong>sanitary</strong> protocols.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Keep your workspace <strong>sanitary</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The restaurant maintains <strong>sanatary</strong> conditions&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sanitary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Use <strong>sanatary</strong> practices in the kitchen&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sanitary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The hospital has strict <strong>sanatary</strong> protocols&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sanitary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Keep your workspace <strong>sanatary</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sanitary&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I Before ARY Rule</h3>
              <p className="text-yellow-800">Keep the &quot;i&quot; from &quot;sanitation&quot; when forming &quot;sanitary&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">Think Sanitation</h3>
              <p className="text-violet-800">&quot;Sanitation&quot; + &quot;ary&quot; = &quot;Sanitary&quot; (not sanatary)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;sanitary&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Sanitary conditions</strong> - clean environment</li>
                <li>• <strong>Sanitary practices</strong> - hygiene methods</li>
                <li>• <strong>Sanitary protocols</strong> - cleanliness rules</li>
                <li>• <strong>Sanitary standards</strong> - hygiene requirements</li>
                <li>• <strong>Sanitary facilities</strong> - clean bathrooms</li>
                <li>• <strong>Sanitary equipment</strong> - hygienic tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The conditions are sanitary&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Sanitary practices&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The kitchen is sanitary&quot;</li>
                <li>• <strong>Description:</strong> &quot;Sanitary environment&quot;</li>
                <li>• <strong>Comparison:</strong> &quot;More sanitary than before&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Sanitarily maintained&quot;</li>
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
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people drop the &quot;i&quot; in &quot;sanitary&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many words drop letters when adding suffixes. However, &quot;sanitary&quot; keeps its &quot;i&quot; from the base word &quot;sanitation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;sanitary&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Sanitary&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English adjective.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;sanitary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sanitary&quot; comes from the noun &quot;sanitation,&quot; which originates from Latin &quot;sanitas&quot; meaning &quot;health.&quot; The adjective form follows the standard English pattern of adding &quot;ary.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sanitary&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sanatary&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;sanitation&quot; first, then add &quot;ary.&quot; The &quot;i&quot; is part of the base word and should be preserved. Remember: &quot;Sanitation&quot; + &quot;ary&quot; = &quot;Sanitary.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;sanitary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: clean, hygienic, sterile, germ-free, antiseptic, wholesome, and healthy.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;sanitary&quot; be used negatively?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sanitary&quot; can be used negatively when describing unsanitary conditions, such as &quot;The conditions were not sanitary&quot; or &quot;The area lacked sanitary facilities.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;sanitary&quot; and &quot;clean&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to cleanliness, &quot;sanitary&quot; specifically refers to conditions that prevent disease and promote health, while &quot;clean&quot; is more general and refers to being free from dirt or mess.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sanitary&quot;</strong> comes from &quot;sanitation&quot; with an &quot;i.&quot; 
          <br />
          <strong>&quot;Sanatary&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SANITATION + ARY = SANITARY&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-blue-600 underline">Sank vs Sinked</a></li>
            <li><a href="/spelling/satellite-vs-sattellite" className="hover:text-blue-600 underline">Satellite vs Sattellite</a></li>
            <li><a href="/spelling/satirically-vs-satrically" className="hover:text-blue-600 underline">Satirically vs Satrically</a></li>
            <li><a href="/spelling/satirize-vs-saturize" className="hover:text-blue-600 underline">Satirize vs Saturize</a></li>
            <li><a href="/spelling/severely-vs-severly" className="hover:text-blue-600 underline">Severely vs Severly</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/satellite-vs-sattelite" className="hover:text-green-600 underline">Satellite vs Sattelite</a></li>
            <li><a href="/spelling/satellite-vs-satelite" className="hover:text-green-600 underline">Satellite vs Satelite</a></li>
            <li><a href="/spelling/satellite-vs-satallite" className="hover:text-green-600 underline">Satellite vs Satallite</a></li>
            <li><a href="/spelling/satellite-vs-satalite" className="hover:text-green-600 underline">Satellite vs Satalite</a></li>
            <li><a href="/spelling/sank-vs-sinked" className="hover:text-green-600 underline">Sank vs Sinked</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/affect-vs-effect" className="hover:text-purple-600 underline">Affect vs Effect</a></li>
            <li><a href="/confusing-words/further-vs-farther" className="hover:text-purple-600 underline">Further vs Farther</a></li>
            <li><a href="/confusing-words/who-vs-whom" className="hover:text-purple-600 underline">Who vs Whom</a></li>
            <li><a href="/confusing-words/to-vs-too" className="hover:text-purple-600 underline">To vs Too</a></li>
            <li><a href="/confusing-words/bear-vs-bare" className="hover:text-purple-600 underline">Bear vs Bare</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
