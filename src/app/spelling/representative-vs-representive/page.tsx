import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Representative vs Representive - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;representative&quot; and &quot;representive&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepresentativeVsRepresentivePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Representative vs Representive
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
            <span className="text-2xl mr-3">👤</span>
            <span className="text-2xl font-bold text-green-600">&quot;Representative&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Representive&quot; is incorrect - remember the &quot;ta&quot; in &quot;representative&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Representive</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;ta&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Representative</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;someone who represents others.&quot;
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
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Representative&quot; (Correct)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Contains &quot;ta&quot;</li>
                <li>• Means &quot;someone who represents&quot;</li>
                <li>• Complete word</li>
                <li>• Used in politics</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Representive&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;ta&quot;</li>
                <li>• Not a real word</li>
                <li>• Common misspelling</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Re-pre-sen-ta-tive&quot;</li>
                <li>• Five syllables</li>
                <li>• &quot;Ta&quot; is essential</li>
                <li>• Follows English rules</li>
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
                <p className="text-lg text-green-800">&quot;She is a <strong>representative</strong> of the company.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>representative</strong> spoke at the meeting.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We elected a new <strong>representative</strong> to Congress.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>representative</strong> sample was analyzed.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She is a <strong>representive</strong> of the company&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;representative&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>representive</strong> spoke&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;representative&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We elected a new <strong>representive</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;representative&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>representive</strong> sample&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;representative&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">TA Rule</h3>
              <p className="text-yellow-800">&quot;Representative&quot; has &quot;ta&quot; like &quot;data&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Think Data</h3>
              <p className="text-sky-800">&quot;Representative&quot; has &quot;ta&quot; like &quot;data&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;representative&quot; to build muscle memory</p>
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

      {/* Advanced Usage */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Advanced Usage Patterns</h2>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Sales representative</strong> - sales person</li>
                <li>• <strong>Customer representative</strong> - customer service</li>
                <li>• <strong>Legal representative</strong> - lawyer</li>
                <li>• <strong>Representative sample</strong> - typical example</li>
                <li>• <strong>Representative government</strong> - democratic system</li>
                <li>• <strong>Representative democracy</strong> - voting system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The representative was elected&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;A representative sample&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many representatives&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The representative&apos;s office&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Representative government&quot;</li>
                <li>• <strong>Abstract:</strong> &quot;Representative democracy&quot;</li>
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
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people confuse &quot;representative&quot; and &quot;representive&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the complex spelling and the fact that &quot;representive&quot; might seem like a logical shortening. However, the &quot;ta&quot; is essential to the word&apos;s meaning and structure.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;representative&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Representative&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;representative&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Representative&quot; comes from Latin &quot;repraesentativus&quot; meaning &quot;serving to represent.&quot; The word has been used in English since the 14th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;representative&quot; is standard across all English-speaking regions. The pronunciation might vary slightly, but the spelling remains consistent.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;representative&quot; having &quot;ta&quot; like &quot;data.&quot; Break down the word into syllables: re-pre-sen-ta-tive. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;representative&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: delegate, agent, spokesperson, advocate, proxy, deputy, envoy, and emissary.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;representative&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Representative&quot; can be used as both a noun and an adjective. As an adjective, it means &quot;typical&quot; or &quot;characteristic,&quot; as in &quot;a representative sample.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;representative&quot; and &quot;delegate&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both mean someone who acts on behalf of others, &quot;representative&quot; is more general and often refers to elected officials, while &quot;delegate&quot; typically refers to someone appointed to a specific task or conference.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Representative&quot;</strong> contains &quot;ta&quot; and means &quot;someone who represents.&quot; 
          <br />
          <strong>&quot;Representive&quot;</strong> is missing &quot;ta&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REPRESENTATIVE = DATA&quot; - both have &quot;ta&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/rescue-vs-rescure" className="text-blue-700 hover:text-blue-900 underline">Rescue vs Rescure</a></li>
            <li><a href="/spelling/requisition-vs-requition" className="text-blue-700 hover:text-blue-900 underline">Requisition vs Requition</a></li>
            <li><a href="/spelling/requisition-vs-requistion" className="text-blue-700 hover:text-blue-900 underline">Requisition vs Requistion</a></li>
            <li><a href="/spelling/requisition-vs-requisision" className="text-blue-700 hover:text-blue-900 underline">Requisition vs Requisision</a></li>
            <li><a href="/spelling/requisition-vs-requision" className="text-blue-700 hover:text-blue-900 underline">Requisition vs Requision</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/data-vs-data" className="text-purple-700 hover:text-purple-900 underline">Data vs Data</a></li>
            <li><a href="/spelling/separate-vs-separate" className="text-purple-700 hover:text-purple-900 underline">Separate vs Separate</a></li>
            <li><a href="/spelling/definite-vs-definite" className="text-purple-700 hover:text-purple-900 underline">Definite vs Definite</a></li>
            <li><a href="/spelling/desperate-vs-desperate" className="text-purple-700 hover:text-purple-900 underline">Desperate vs Desperate</a></li>
            <li><a href="/spelling/accurate-vs-accurate" className="text-purple-700 hover:text-purple-900 underline">Accurate vs Accurate</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/abstract-nouns" className="text-green-700 hover:text-green-900 underline">Abstract Nouns</a></li>
            <li><a href="/grammar/action-verbs" className="text-green-700 hover:text-green-900 underline">Action Verbs</a></li>
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/active-vs-passive-voice" className="text-green-700 hover:text-green-900 underline">Active vs Passive Voice</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
