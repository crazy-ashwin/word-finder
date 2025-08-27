import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reference vs Refference - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reference&quot; and &quot;refference&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReferenceVsRefferencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Reference vs Refference
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Reference&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Refference&quot; is always incorrect - remember the single &quot;f&quot; in &quot;reference&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Refference</h3>
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
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Reference</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;a source of information&quot; or &quot;citation.&quot;
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Reference&quot; (Noun)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;source of information&quot;</li>
                <li>• Has single &quot;f&quot;</li>
                <li>• Related to &quot;refer&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Refference&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Has double &quot;f&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Etymology</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• From Latin &quot;referre&quot;</li>
                <li>• Related to &quot;refer&quot;</li>
                <li>• Always has single &quot;f&quot;</li>
                <li>• Common in English</li>
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
                <p className="text-lg text-orange-800">&quot;Check the <strong>reference</strong> section.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Use proper <strong>references</strong> in your paper.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;This is a good <strong>reference</strong> book.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Include all <strong>references</strong> in your bibliography.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Check the <strong>refference</strong> section&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reference&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Use proper <strong>refferences</strong> in your paper&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;references&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a good <strong>refference</strong> book&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reference&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Include all <strong>refferences</strong> in your bibliography&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;references&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">Single F Rule</h3>
              <p className="text-orange-800">&quot;Reference&quot; has single &quot;f&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Think Refer</h3>
              <p className="text-red-800">&quot;Refer&quot; + &quot;ence&quot; = &quot;reference&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;reference&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Proofread</h3>
              <p className="text-rose-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Reference book</strong> - information source</li>
                <li>• <strong>Reference material</strong> - source material</li>
                <li>• <strong>Reference point</strong> - starting point</li>
                <li>• <strong>Reference system</strong> - citation system</li>
                <li>• <strong>Reference library</strong> - research library</li>
                <li>• <strong>Reference desk</strong> - help desk</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The reference was helpful&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A reference&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Good reference&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Reference to&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Check reference&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many references&quot;</li>
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
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people confuse &quot;reference&quot; and &quot;refference&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might add an extra &quot;f&quot; thinking it follows a different pattern. Many words with double consonants can be confusing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;reference&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Reference&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;reference&quot; and &quot;refference&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reference&quot; is the correct spelling meaning &quot;a source of information&quot; or &quot;citation.&quot; &quot;Refference&quot; has an extra &quot;f&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;reference&quot; always about citations?</h3>
              <p className="text-lg text-gray-700">A: While &quot;reference&quot; often refers to citations, it can also describe any source of information, a point of comparison, a recommendation, and any act of referring to something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;refer&quot; - &quot;reference&quot; has single &quot;f.&quot; Remember: &quot;Refer&quot; + &quot;ence.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;reference&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: citation, source, authority, guide, manual, handbook, and resource. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;reference&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Reference&quot; is used in academic writing, business communication, casual conversation, and any discussion about sources of information or citations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the origin of the word &quot;reference&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reference&quot; comes from Latin &quot;referre&quot; meaning &quot;to carry back&quot; or &quot;to bring back,&quot; which is related to &quot;refer&quot; meaning &quot;to direct attention.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;reference&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reference&quot; follows a regular pattern. It&apos;s formed by adding &quot;ence&quot; to the verb &quot;refer,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I avoid spelling &quot;reference&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;refer + ence,&quot; and always proofread your work. Remember: single &quot;f&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between reference and bibliography?</h3>
              <p className="text-lg text-gray-700">A: A reference is a specific source cited in your work, while a bibliography is a complete list of all sources consulted, whether cited or not. References are more specific, bibliographies are more comprehensive.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Reference&quot;</strong> has single &quot;f&quot; and means &quot;source of information.&quot; 
          <br />
          <strong>&quot;Refference&quot;</strong> has double &quot;f&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REFER + ENCE&quot; - &quot;reference&quot; has single &quot;f&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/reference-vs-refrence" className="text-blue-700 hover:text-blue-900 underline">Reference vs Refrence</a></li>
            <li><a href="/spelling/reference-vs-referrence" className="text-blue-700 hover:text-blue-900 underline">Reference vs Referrence</a></li>
            <li><a href="/spelling/reference-vs-referance" className="text-blue-700 hover:text-blue-900 underline">Reference vs Referance</a></li>
            <li><a href="/spelling/referee-vs-reffere" className="text-blue-700 hover:text-blue-900 underline">Referee vs Reffere</a></li>
            <li><a href="/spelling/referee-vs-referree" className="text-blue-700 hover:text-blue-900 underline">Referee vs Referree</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/offering-vs-offering" className="text-purple-700 hover:text-purple-900 underline">Offering vs Offfering</a></li>
            <li><a href="/spelling/suffering-vs-suffering" className="text-purple-700 hover:text-purple-900 underline">Suffering vs Sufffering</a></li>
            <li><a href="/spelling/differing-vs-differing" className="text-purple-700 hover:text-purple-900 underline">Differing vs Differring</a></li>
            <li><a href="/spelling/transferring-vs-transfering" className="text-purple-700 hover:text-purple-900 underline">Transferring vs Transfering</a></li>
            <li><a href="/spelling/preferring-vs-prefering" className="text-purple-700 hover:text-purple-900 underline">Preferring vs Prefering</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/ence-suffix" className="text-green-700 hover:text-green-900 underline">-ence Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
