import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Temporary vs Tempory - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;temporary&quot; and &quot;tempory&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function TemporaryVsTemporyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Temporary vs Tempory
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
            <span className="text-2xl font-bold text-violet-600">&quot;Temporary&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Tempory&quot; is always incorrect - remember the &quot;ar&quot; in &quot;temporary&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Tempory</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Temporary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;lasting for a limited time&quot; or &quot;not permanent.&quot;
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
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Temporary&quot; (Adjective)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Means &quot;not permanent&quot;</li>
                <li>• Has &quot;ar&quot; in the middle</li>
                <li>• Related to &quot;temporal&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Tempory&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;ar&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Etymology</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• From Latin &quot;temporarius&quot;</li>
                <li>• Related to &quot;temporal&quot;</li>
                <li>• Always has &quot;ar&quot;</li>
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
            <h3 className="text-2xl font-bold text-violet-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;This is a <strong>temporary</strong> solution.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The <strong>temporary</strong> worker.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;A <strong>temporary</strong> arrangement.&quot;</p>
              </div>
              <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-500">
                <p className="text-lg text-violet-800">&quot;The <strong>temporary</strong> office.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a <strong>tempory</strong> solution&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;temporary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>tempory</strong> worker&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;temporary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A <strong>tempory</strong> arrangement&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;temporary&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>tempory</strong> office&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;temporary&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">AR Rule</h3>
              <p className="text-violet-800">&quot;Temporary&quot; has &quot;ar&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Temporal</h3>
              <p className="text-purple-800">&quot;Temporal&quot; has &quot;ar&quot; - so does &quot;temporary&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;temporary&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proofread</h3>
              <p className="text-blue-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Temporary solution</strong> - short-term fix</li>
                <li>• <strong>Temporary worker</strong> - short-term employee</li>
                <li>• <strong>Temporary arrangement</strong> - short-term setup</li>
                <li>• <strong>Temporary office</strong> - short-term workspace</li>
                <li>• <strong>Temporary measure</strong> - short-term action</li>
                <li>• <strong>Temporary setback</strong> - short-term problem</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The temporary solution&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A temporary&quot;</li>
                <li>• <strong>With nouns:</strong> &quot;Temporary worker&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;Very temporary&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More temporary&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most temporary&quot;</li>
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
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people confuse &quot;temporary&quot; and &quot;tempory&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;ar&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;temp&quot; to &quot;ory.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;temporary&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Temporary&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;temporary&quot; and &quot;tempory&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Temporary&quot; is the correct spelling meaning &quot;lasting for a limited time&quot; or &quot;not permanent.&quot; &quot;Tempory&quot; is missing the &quot;ar&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;temporary&quot; always about time?</h3>
              <p className="text-lg text-gray-700">A: While &quot;temporary&quot; primarily refers to time-limited situations, it can also refer to anything that is not permanent, lasting, or enduring - including arrangements, solutions, or conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;temporal&quot; - &quot;temporary&quot; has &quot;ar&quot; in the middle. Remember: &quot;Temporal&quot; has &quot;ar&quot; - so does &quot;temporary.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;temporary&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: short-term, brief, momentary, fleeting, transient, provisional, interim, and makeshift. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;temporary&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Temporary&quot; is used in employment, business, construction, technology, and any context where you need to describe something that is not permanent or lasting.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the origin of the word &quot;temporary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Temporary&quot; comes from Latin &quot;temporarius&quot; meaning &quot;of time&quot; or &quot;lasting for a time,&quot; which is related to &quot;temporal&quot; meaning &quot;relating to time.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Is &quot;temporary&quot; a regular or irregular adjective?</h3>
              <p className="text-lg text-gray-700">A: &quot;Temporary&quot; follows a regular pattern. It&apos;s formed by adding &quot;ary&quot; to the base form, which is a common English suffix for adjectives.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I avoid spelling &quot;temporary&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;temporal,&quot; and always proofread your work. Remember: the &quot;ar&quot; in the middle is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between temporary and provisional?</h3>
              <p className="text-lg text-gray-700">A: While both refer to non-permanent situations, &quot;temporary&quot; emphasizes time limitation, while &quot;provisional&quot; emphasizes that something is subject to change or approval.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can temporary be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Temporary&quot; can be used as a noun meaning &quot;a temporary worker&quot; or &quot;a temporary employee.&quot; It&apos;s a versatile word in English.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Temporary&quot;</strong> has &quot;ar&quot; in the middle and means &quot;lasting for a limited time.&quot; 
          <br />
          <strong>&quot;Tempory&quot;</strong> is missing the &quot;ar&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;TEMPORAL&quot; - &quot;temporary&quot; has &quot;ar&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/redundant-vs-redundent" className="text-blue-700 hover:text-blue-900 underline">Redundant vs Redundent</Link></li>
            <li><Link href="/spelling/reduce-vs-reduse" className="text-blue-700 hover:text-blue-900 underline">Reduce vs Reduse</Link></li>
            <li><Link href="/spelling/recurrence-vs-reocurrence" className="text-blue-700 hover:text-blue-900 underline">Recurrence vs Reocurrence</Link></li>
            <li><Link href="/spelling/recurrence-vs-recurrance" className="text-blue-700 hover:text-blue-900 underline">Recurrence vs Recurrance</Link></li>
            <li><Link href="/spelling/recuperate-vs-recouperate" className="text-blue-700 hover:text-blue-900 underline">Recuperate vs Recouperate</Link></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><Link href="/spelling/ordinary-vs-ordinery" className="text-purple-700 hover:text-purple-900 underline">Ordinary vs Ordinery</Link></li>
            <li><Link href="/spelling/necessary-vs-neccessary" className="text-purple-700 hover:text-purple-900 underline">Necessary vs Neccessary</Link></li>
            <li><Link href="/spelling/voluntary-vs-voluntry" className="text-purple-700 hover:text-purple-900 underline">Voluntary vs Voluntry</Link></li>
            <li><Link href="/spelling/imaginary-vs-imaginery" className="text-purple-700 hover:text-purple-900 underline">Imaginary vs Imaginery</Link></li>
            <li><Link href="/spelling/legendary-vs-legendry" className="text-purple-700 hover:text-purple-900 underline">Legendary vs Legendry</Link></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><Link href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</Link></li>
            <li><Link href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</Link></li>
            <li><Link href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</Link></li>
            <li><Link href="/grammar/ary-suffix" className="text-green-700 hover:text-green-900 underline">-ary Suffix</Link></li>
            <li><Link href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

