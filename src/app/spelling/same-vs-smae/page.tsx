import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Same vs Smae - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;same&quot; and &quot;smae&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SameVsSmaePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Same vs Smae
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔄</span>
            <span className="text-2xl font-bold text-green-600">&quot;Same&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Smae&quot; is always incorrect - remember the &quot;m&quot; in &quot;same&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Smae</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Same</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;identical&quot; or &quot;not different.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Sa&quot; (Root)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• From Old English &quot;same&quot;</li>
                <li>• Means &quot;identical&quot;</li>
                <li>• Common prefix</li>
                <li>• Short and simple</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;me&quot; (Suffix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Completes the word</li>
                <li>• Contains &quot;m&quot;</li>
                <li>• Smooth pronunciation</li>
                <li>• Common ending</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Complete Word</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;Same&quot; = correct</li>
                <li>• &quot;Smae&quot; = wrong</li>
                <li>• Remember: &quot;m&quot;</li>
                <li>• Think: &quot;sa&quot; + &quot;me&quot;</li>
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
                <p className="text-lg text-green-800">&quot;We have the <strong>same</strong> birthday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;These two books are the <strong>same</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I feel the <strong>same</strong> way about it.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They look exactly the <strong>same</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We have the <strong>smae</strong> birthday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;same&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;These two books are the <strong>smae</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;same&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I feel the <strong>smae</strong> way about it&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;same&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They look exactly the <strong>smae</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;same&quot;</p>
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
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">M Rule</h3>
              <p className="text-yellow-800">&quot;Same&quot; has an &quot;m&quot;, not missing it</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Think Identity</h3>
              <p className="text-sky-800">&quot;Same&quot; = identical, &quot;Smae&quot; = wrong spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;same&quot; to build muscle memory</p>
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
                <li>• <strong>Same here</strong> - agreement</li>
                <li>• <strong>Same old</strong> - unchanged</li>
                <li>• <strong>Same time</strong> - simultaneously</li>
                <li>• <strong>Same thing</strong> - identical</li>
                <li>• <strong>Same way</strong> - similarly</li>
                <li>• <strong>Same as</strong> - comparison</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The same color&quot;</li>
                <li>• <strong>Pronoun:</strong> &quot;I think the same&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;They look the same&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The same applies&quot;</li>
                <li>• <strong>Idiom:</strong> &quot;Same difference&quot;</li>
                <li>• <strong>Phrase:</strong> &quot;All the same&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people misspell &quot;same&quot; as &quot;smae&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from phonetic spelling attempts or similar-sounding words. People might hear the word and try to spell it based on pronunciation, leading to incorrect variations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;same&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Same&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;same&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Same&quot; comes from Old English &quot;same&quot; meaning &quot;identical&quot; or &quot;alike.&quot; It has Germanic roots and is related to words in other Germanic languages.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;same&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids and create simple sentences about identical objects to reinforce the correct spelling. Break down the word into &quot;sa&quot; + &quot;me.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;same&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: identical, alike, similar, equivalent, matching, corresponding, and uniform.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;same&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Same&quot; can describe anything that is identical or unchanged, like &quot;same old routine&quot; or &quot;same story.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;same&quot; and &quot;similar&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Same&quot; means identical or exactly alike, while &quot;similar&quot; means having some resemblance or likeness but not identical.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Same&quot;</strong> has an &quot;m&quot; and means &quot;identical.&quot; 
          <br />
          <strong>&quot;Smae&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SA + ME = correct spelling&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/satellite-vs-sattelite" className="hover:text-blue-600 underline">Satellite vs Sattelite</a></li>
            <li><a href="/spelling/satellite-vs-satelite" className="hover:text-blue-600 underline">Satellite vs Satelite</a></li>
            <li><a href="/spelling/satellite-vs-satallite" className="hover:text-blue-600 underline">Satellite vs Satallite</a></li>
            <li><a href="/spelling/satellite-vs-satalite" className="hover:text-blue-600 underline">Satellite vs Satalite</a></li>
            <li><a href="/spelling/sandwich-vs-sendwich" className="hover:text-blue-600 underline">Sandwich vs Sendwich</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/sandwich-vs-sandwitch" className="hover:text-green-600 underline">Sandwich vs Sandwitch</a></li>
            <li><a href="/spelling/sandwich-vs-sandwhich" className="hover:text-green-600 underline">Sandwich vs Sandwhich</a></li>
            <li><a href="/spelling/salesman-vs-saleman" className="hover:text-green-600 underline">Salesman vs Saleman</a></li>
            <li><a href="/spelling/salary-vs-salery" className="hover:text-green-600 underline">Salary vs Salery</a></li>
            <li><a href="/spelling/sanitary-vs-sanatary" className="hover:text-green-600 underline">Sanitary vs Sanatary</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/grammar/adjective-start-with-k" className="hover:text-purple-600 underline">Adjective Start With K</a></li>
            <li><a href="/grammar/adjective-start-with-l" className="hover:text-purple-600 underline">Adjective Start With L</a></li>
            <li><a href="/grammar/adjective-start-with-m" className="hover:text-purple-600 underline">Adjective Start With M</a></li>
            <li><a href="/grammar/adjective-start-with-n" className="hover:text-purple-600 underline">Adjective Start With N</a></li>
            <li><a href="/grammar/adjective-start-with-o" className="hover:text-purple-600 underline">Adjective Start With O</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
