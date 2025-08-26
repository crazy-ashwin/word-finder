import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Remittance vs Remitance - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;remittance&quot; and &quot;remitance&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RemittanceVsRemitancePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Remittance vs Remitance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Remittance&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Remitance&quot; is always incorrect - remember the double &quot;t&quot; in &quot;remittance&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Remitance</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the second &quot;t&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Remittance</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;a sum of money sent as payment.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Remittance&quot; (Noun)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;money sent&quot;</li>
                <li>• Has double &quot;t&quot;</li>
                <li>• Related to &quot;remit&quot;</li>
                <li>• Used in banking</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Remitance&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing second &quot;t&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Etymology</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• From Latin &quot;remittere&quot;</li>
                <li>• Related to &quot;send&quot;</li>
                <li>• Always has double &quot;t&quot;</li>
                <li>• Common in finance</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;She sent a <strong>remittance</strong> to her family.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The bank processed the <strong>remittance</strong> quickly.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;International <strong>remittances</strong> are increasing.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The <strong>remittance</strong> fee was reasonable.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She sent a <strong>remitance</strong> to her family&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remittance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bank processed the <strong>remitance</strong> quickly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remittance&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;International <strong>remitances</strong> are increasing&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remittances&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>remitance</strong> fee was reasonable&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;remittance&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Double T Rule</h3>
              <p className="text-blue-800">&quot;Remittance&quot; has double &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Money Transfer</h3>
              <p className="text-indigo-800">Think &quot;transfer&quot; - both have double &quot;t&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;remittance&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Proofread</h3>
              <p className="text-cyan-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>International remittance</strong> - overseas money transfer</li>
                <li>• <strong>Remittance service</strong> - money sending service</li>
                <li>• <strong>Remittance fee</strong> - transfer charge</li>
                <li>• <strong>Remittance center</strong> - money transfer location</li>
                <li>• <strong>Remittance amount</strong> - transfer sum</li>
                <li>• <strong>Remittance form</strong> - transfer document</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;The remittance arrived today&quot;</li>
                <li>• <strong>Object:</strong> &quot;I received the remittance&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A remittance&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Large remittance&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Remittance from&quot;</li>
                <li>• <strong>Plural form:</strong> &quot;Remittances&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people confuse &quot;remittance&quot; and &quot;remitance&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that some English words have single consonants. People might drop the second &quot;t&quot; thinking it follows a different pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;remittance&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Remittance&quot; is perfectly acceptable in formal writing, business documents, banking papers, and professional communication. It&apos;s a standard financial term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;remittance&quot; and &quot;remitance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remittance&quot; is the correct spelling meaning &quot;a sum of money sent as payment.&quot; &quot;Remitance&quot; is missing the second &quot;t&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;remittance&quot; always about money?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;remittance&quot; specifically refers to money that is sent or transferred, typically from one person to another, often across distances or borders.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;transfer&quot; - both &quot;remittance&quot; and &quot;transfer&quot; have double &quot;t&quot;. Remember: &quot;Re&quot; + &quot;mitt&quot; + &quot;ance.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;remittance&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: payment, transfer, money order, wire transfer, and disbursement. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;remittance&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Remittance&quot; is used in banking, international finance, migrant worker contexts, and business transactions. It&apos;s a versatile financial term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;remittance&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remittance&quot; comes from Latin &quot;remittere&quot; meaning &quot;to send back&quot; or &quot;to transmit,&quot; which is related to &quot;mittere&quot; meaning &quot;to send.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;remittance&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Remittance&quot; follows a regular pattern for nouns. It&apos;s formed by adding &quot;ance&quot; to the verb &quot;remit,&quot; similar to other &quot;ance&quot; nouns.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Remittance&quot;</strong> has double &quot;t&quot; and means &quot;money sent.&quot; 
          <br />
          <strong>&quot;Remitance&quot;</strong> is missing the second &quot;t&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;DOUBLE T&quot; - &quot;remittance&quot; has double &quot;t&quot; like &quot;transfer&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/reminisce-vs-reminence" className="text-blue-700 hover:text-blue-900 underline">Reminisce vs Reminence</a></li>
            <li><a href="/spelling/remembrance-vs-remembrence" className="text-blue-700 hover:text-blue-900 underline">Remembrance vs Remembrence</a></li>
            <li><a href="/spelling/remember-vs-rimember" className="text-blue-700 hover:text-blue-900 underline">Remember vs Rimember</a></li>
            <li><a href="/spelling/remember-vs-remeber" className="text-blue-700 hover:text-blue-900 underline">Remember vs Remeber</a></li>
            <li><a href="/spelling/rendezvous-vs-rendevous" className="text-blue-700 hover:text-blue-900 underline">Rendezvous vs Rendevous</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/transfer-vs-transfer" className="text-purple-700 hover:text-purple-900 underline">Transfer vs Transfer</a></li>
            <li><a href="/spelling/payment-vs-paymant" className="text-purple-700 hover:text-purple-900 underline">Payment vs Paymant</a></li>
            <li><a href="/spelling/money-vs-mony" className="text-purple-700 hover:text-purple-900 underline">Money vs Mony</a></li>
            <li><a href="/spelling/banking-vs-bankin" className="text-purple-700 hover:text-purple-900 underline">Banking vs Bankin</a></li>
            <li><a href="/spelling/finance-vs-finance" className="text-purple-700 hover:text-purple-900 underline">Finance vs Finance</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/financial-terms" className="text-green-700 hover:text-green-900 underline">Financial Terms</a></li>
            <li><a href="/grammar/double-consonants" className="text-green-700 hover:text-green-900 underline">Double Consonants</a></li>
            <li><a href="/grammar/latin-origins" className="text-green-700 hover:text-green-900 underline">Latin Origins</a></li>
            <li><a href="/grammar/business-vocabulary" className="text-green-700 hover:text-green-900 underline">Business Vocabulary</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
