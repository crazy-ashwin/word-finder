import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Supremacy vs Supermacy - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;supremacy&quot; and &quot;supermacy&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SupremacyVsSupermacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Supremacy vs Supermacy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">👑</span>
            <span className="text-2xl font-bold text-green-600">&quot;Supremacy&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Supermacy&quot; is always incorrect - remember the &quot;e&quot; in &quot;supremacy&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Supermacy</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Supremacy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the state of being supreme or dominant.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Supremacy&quot; (Correct)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Has &quot;e&quot; after &quot;r&quot;</li>
                <li>• Follows &quot;supreme&quot; pattern</li>
                <li>• Ends with &quot;-acy&quot;</li>
                <li>• Standard English spelling</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Common Error</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• &quot;Supermacy&quot; is wrong</li>
                <li>• Missing &quot;e&quot; after &quot;r&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Memory Aid</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Think &quot;SUPREME + ACY&quot;</li>
                <li>• &quot;supreme&quot; like the adjective</li>
                <li>• &quot;-acy&quot; suffix for nouns</li>
                <li>• Related to &quot;supreme&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The team fought for <strong>supremacy</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They challenged his <strong>supremacy</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The battle for <strong>supremacy</strong> began.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>supremacy</strong> was undisputed.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The team fought for <strong>supermacy</strong>.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supremacy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They challenged his <strong>supermacy</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supremacy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The battle for <strong>supermacy</strong> began&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supremacy&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>supermacy</strong> was undisputed&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;supremacy&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">E Rule</h3>
              <p className="text-yellow-800">&quot;Supremacy&quot; has &quot;e&quot; like &quot;supreme&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Supreme</h3>
              <p className="text-rose-800">&quot;Supremacy&quot; comes from &quot;supreme&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words ending with &quot;-acy&quot; are common</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUPREME + ACY = Supremacy</p>
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
                <li>• <strong>Military supremacy</strong> - military dominance</li>
                <li>• <strong>Economic supremacy</strong> - economic dominance</li>
                <li>• <strong>Technological supremacy</strong> - tech dominance</li>
                <li>• <strong>Cultural supremacy</strong> - cultural dominance</li>
                <li>• <strong>Global supremacy</strong> - worldwide dominance</li>
                <li>• <strong>Market supremacy</strong> - market dominance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;Supremacy is important&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Supremacy matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;They seek supremacy&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Their supremacy&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Supreme&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Supremely&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people misspell &quot;supremacy&quot; as &quot;supermacy&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;e&quot; sound in &quot;supremacy&quot; can be subtle when spoken quickly. Additionally, some people may not be familiar with the word&apos;s etymology or the connection to &quot;supreme.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;supremacy&quot; related to &quot;supreme&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Supremacy&quot; is the noun form of &quot;supreme.&quot; &quot;Supreme&quot; means highest in rank or authority, while &quot;supremacy&quot; means the state of being supreme.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;supremacy&quot; and &quot;dominance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supremacy&quot; implies being the highest or most powerful, while &quot;dominance&quot; refers to having control or influence over others. Supremacy is more absolute than dominance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;supremacy&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Supremacy&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;supremacy&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: dominance, preeminence, superiority, primacy, ascendancy, and hegemony. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;supreme&quot; (which has the same beginning) and remember that &quot;supremacy&quot; comes from it. The &quot;e&quot; after &quot;r&quot; is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;SUPREMACY comes from SUPREME&quot; - both words start with &quot;supreme.&quot; Or remember: &quot;SUPREME + ACY&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the adjective form of &quot;supremacy&quot;?</h3>
              <p className="text-lg text-gray-700">A: The adjective form is &quot;supreme.&quot; For example: &quot;A supreme leader&quot; or &quot;The supreme court.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;supremacy&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supremacy&quot; comes from Latin &quot;supremus&quot; meaning &quot;highest&quot; and the suffix &quot;-acy&quot; which forms nouns indicating a state or condition.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;supremacy&quot; be used negatively?</h3>
              <p className="text-lg text-gray-700">A: Yes! While &quot;supremacy&quot; itself is neutral, it can be used in negative contexts like &quot;white supremacy&quot; or &quot;male supremacy&quot; to describe harmful ideologies.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;supremacy&quot; and &quot;authority&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supremacy&quot; implies being the highest or most powerful, while &quot;authority&quot; refers to the power to make decisions or give orders. Supremacy is more absolute.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How do I use &quot;supremacy&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: &quot;Supremacy&quot; can be used in various contexts: military (military supremacy), economic (economic supremacy), cultural (cultural supremacy), and technological (technological supremacy).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Supremacy&quot;</strong> has &quot;e&quot; after &quot;r&quot; and means &quot;the state of being supreme.&quot; 
          <br />
          <strong>&quot;Supermacy&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUPREME + ACY&quot; and remember the &quot;e&quot; like in &quot;supreme&quot;!</p>
        </div>
      </div>
    </div>
  )
}
