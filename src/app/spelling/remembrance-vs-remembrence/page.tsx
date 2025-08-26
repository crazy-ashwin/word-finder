import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Remembrance vs Remembrence - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;remembrance&quot; and &quot;remembrence&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RemembranceVsRemembrencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Remembrance vs Remembrence
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
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Remembrance&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Remembrence&quot; is always incorrect - remember the &quot;br&quot; in &quot;remembrance&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Remembrence</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;br&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Remembrance</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of remembering.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Remembrance&quot; (Noun)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;memory&quot;</li>
                <li>• Has &quot;br&quot; in the middle</li>
                <li>• Related to &quot;remember&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Remembrence&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;br&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Etymology</h3>
              <ul className="text-green-800 space-y-2">
                <li>• From Old French &quot;remembrance&quot;</li>
                <li>• Related to &quot;memory&quot;</li>
                <li>• Always has &quot;br&quot;</li>
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
            <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The ceremony was in <strong>remembrance</strong> of the fallen.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;She kept it as a <strong>remembrance</strong> of her grandmother.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The <strong>remembrance</strong> service was moving.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;He wrote a poem in <strong>remembrance</strong> of his friend.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ceremony was in <strong>remembrence</strong> of the fallen&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remembrance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She kept it as a <strong>remembrence</strong> of her grandmother&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remembrance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>remembrence</strong> service was moving&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remembrance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He wrote a poem in <strong>remembrence</strong> of his friend&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remembrance&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">BR in Middle</h3>
              <p className="text-lime-800">&quot;Remembrance&quot; has &quot;br&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Brain</h3>
              <p className="text-green-800">&quot;Brain&quot; also has &quot;br&quot; - both about memory</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;remembrance&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>In remembrance of</strong> - in memory of</li>
                <li>• <strong>Remembrance service</strong> - memorial service</li>
                <li>• <strong>Remembrance day</strong> - memorial day</li>
                <li>• <strong>Remembrance ceremony</strong> - memorial ceremony</li>
                <li>• <strong>Remembrance garden</strong> - memorial garden</li>
                <li>• <strong>Remembrance plaque</strong> - memorial plaque</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;Remembrance is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;I cherish the remembrance&quot;</li>
                <li>• <strong>With articles:</strong> &quot;The remembrance&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Fond remembrance&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Remembrance of&quot;</li>
                <li>• <strong>Plural form:</strong> &quot;Remembrances&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people confuse &quot;remembrance&quot; and &quot;remembrence&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that some English words have simpler spellings. People might drop the &quot;br&quot; thinking it follows a different pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;remembrance&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Remembrance&quot; is perfectly acceptable in formal writing, academic papers, literature, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;remembrance&quot; and &quot;remembrence&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remembrance&quot; is the correct spelling meaning &quot;the act of remembering.&quot; &quot;Remembrence&quot; is missing the &quot;br&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;remembrance&quot; always about the past?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;remembrance&quot; specifically refers to memories of past events, people, or experiences. It&apos;s about recalling what has already happened.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;brain&quot; - both &quot;remembrance&quot; and &quot;brain&quot; have &quot;br&quot;. Remember: &quot;Re&quot; + &quot;mem&quot; + &quot;br&quot; + &quot;ance.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;remembrance&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: memory, recollection, reminiscence, memorial, and commemoration. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;remembrance&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Remembrance&quot; is used in memorial services, literature, formal writing, and any context where people discuss memories or memorials.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;remembrance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remembrance&quot; comes from Old French &quot;remembrance&quot; meaning &quot;memory&quot; or &quot;recollection,&quot; which is related to &quot;remembrer&quot; meaning &quot;to remember.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Is &quot;remembrance&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remembrance&quot; follows a regular pattern for nouns. It&apos;s formed by adding &quot;ance&quot; to the verb &quot;remember,&quot; similar to other &quot;ance&quot; nouns.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Remembrance&quot;</strong> has &quot;br&quot; in the middle and means &quot;memory.&quot; 
          <br />
          <strong>&quot;Remembrence&quot;</strong> is missing the &quot;br&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;BRAIN&quot; - both &quot;remembrance&quot; and &quot;brain&quot; have &quot;br&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/remember-vs-rimember" className="text-blue-700 hover:text-blue-900 underline">Remember vs Rimember</a></li>
            <li><a href="/spelling/remember-vs-remeber" className="text-blue-700 hover:text-blue-900 underline">Remember vs Remeber</a></li>
            <li><a href="/spelling/reminisce-vs-reminence" className="text-blue-700 hover:text-blue-900 underline">Reminisce vs Reminence</a></li>
            <li><a href="/spelling/remittance-vs-remitance" className="text-blue-700 hover:text-blue-900 underline">Remittance vs Remitance</a></li>
            <li><a href="/spelling/remuneration-vs-renumeration" className="text-blue-700 hover:text-blue-900 underline">Remuneration vs Renumeration</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/memory-vs-memmory" className="text-purple-700 hover:text-purple-900 underline">Memory vs Memmory</a></li>
            <li><a href="/spelling/memorial-vs-memmorial" className="text-purple-700 hover:text-purple-900 underline">Memorial vs Memmorial</a></li>
            <li><a href="/spelling/commemorate-vs-comemorate" className="text-purple-700 hover:text-purple-900 underline">Commemorate vs Comemorate</a></li>
            <li><a href="/spelling/anniversary-vs-aniversary" className="text-purple-700 hover:text-purple-900 underline">Anniversary vs Aniversary</a></li>
            <li><a href="/spelling/ceremony-vs-ceremoney" className="text-purple-700 hover:text-purple-900 underline">Ceremony vs Ceremoney</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/old-french-origins" className="text-green-700 hover:text-green-900 underline">Old French Origins</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/memory-words" className="text-green-700 hover:text-green-900 underline">Memory Words</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
