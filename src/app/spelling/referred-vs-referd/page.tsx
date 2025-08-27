import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Referred vs Referd - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;referred&quot; and &quot;referd&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReferredVsReferdPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Referred vs Referd
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Referred&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Referd&quot; is always incorrect - remember the double &quot;r&quot; in &quot;referred&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Referd</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-sky-50 to-sky-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-sky-800 mb-4">Referred</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-sky-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-sky-700 leading-relaxed">
                This is the proper spelling meaning &quot;directed attention to&quot; or &quot;mentioned.&quot;
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
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Referred&quot; (Verb)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;directed attention&quot;</li>
                <li>• Has double &quot;r&quot;</li>
                <li>• Related to &quot;refer&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Referd&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing second &quot;r&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Etymology</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Latin &quot;referre&quot;</li>
                <li>• Related to &quot;refer&quot;</li>
                <li>• Always has double &quot;r&quot;</li>
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
            <h3 className="text-2xl font-bold text-sky-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;I <strong>referred</strong> to the book.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;She <strong>referred</strong> to that incident.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;What did you <strong>refer</strong> to?&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;He <strong>referred</strong> to the meeting.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>referd</strong> to the book&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referred&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>referd</strong> to that incident&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referred&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What did you <strong>refer</strong> to?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refer&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>referd</strong> to the meeting&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;referred&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Double R Rule</h3>
              <p className="text-sky-800">&quot;Referred&quot; has double &quot;r&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Refer</h3>
              <p className="text-blue-800">&quot;Refer&quot; + &quot;ed&quot; = &quot;referred&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Write It Out</h3>
              <p className="text-cyan-800">Practice writing &quot;referred&quot; to build muscle memory</p>
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
                <li>• <strong>Referred to</strong> - mentioned something</li>
                <li>• <strong>Referred by</strong> - mentioned by someone</li>
                <li>• <strong>Referred for</strong> - mentioned for a reason</li>
                <li>• <strong>Referred as</strong> - mentioned as something</li>
                <li>• <strong>Referred in</strong> - mentioned in context</li>
                <li>• <strong>Referred to as</strong> - called by name</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I referred&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;Have referred&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Referred to&quot;</li>
                <li>• <strong>With objects:</strong> &quot;Referred the case&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;Frequently referred&quot;</li>
                <li>• <strong>In questions:</strong> &quot;What did you refer to?&quot;</li>
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
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people confuse &quot;referred&quot; and &quot;referd&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the second &quot;r&quot; thinking it follows a different pattern. Many words with single consonants can be confusing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;referred&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Referred&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;referred&quot; and &quot;referd&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Referred&quot; is the correct spelling meaning &quot;directed attention to&quot; or &quot;mentioned.&quot; &quot;Referd&quot; is missing the second &quot;r&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;referred&quot; always about mentioning something?</h3>
              <p className="text-lg text-gray-700">A: While &quot;referred&quot; often refers to mentioning, it can also describe directing attention, sending someone to a source, consulting a reference, and any act of pointing to something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;refer&quot; - &quot;referred&quot; has double &quot;r.&quot; Remember: &quot;Refer&quot; + &quot;ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;referred&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: mentioned, alluded to, cited, pointed to, directed to, and consulted. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;referred&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Referred&quot; is used in academic writing, business communication, casual conversation, and any discussion about directing attention or mentioning something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;referred&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Referred&quot; comes from Latin &quot;referre&quot; meaning &quot;to carry back&quot; or &quot;to bring back,&quot; which is related to &quot;refer&quot; meaning &quot;to direct attention.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;referred&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Referred&quot; follows a regular pattern. It&apos;s formed by adding &quot;ed&quot; to the verb &quot;refer,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I avoid spelling &quot;referred&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;refer + ed,&quot; and always proofread your work. Remember: double &quot;r&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between referred and referenced?</h3>
              <p className="text-lg text-gray-700">A: Referred is directing attention to something, while referenced is providing a specific source or citation. Referred is more general, referenced is more formal and specific.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Referred&quot;</strong> has double &quot;r&quot; and means &quot;directed attention.&quot; 
          <br />
          <strong>&quot;Referd&quot;</strong> is missing the second &quot;r&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REFER + ED&quot; - &quot;referred&quot; has double &quot;r&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/refrigerator-vs-refridgerator" className="text-blue-700 hover:text-blue-900 underline">Refrigerator vs Refridgerator</a></li>
            <li><a href="/spelling/refrigeration-vs-refridgeration" className="text-blue-700 hover:text-blue-900 underline">Refrigeration vs Refridgeration</a></li>
            <li><a href="/spelling/reflection-vs-reflextion" className="text-blue-700 hover:text-blue-900 underline">Reflection vs Reflextion</a></li>
            <li><a href="/spelling/referring-vs-reffering" className="text-blue-700 hover:text-blue-900 underline">Referring vs Reffering</a></li>
            <li><a href="/spelling/referring-vs-refering" className="text-blue-700 hover:text-blue-900 underline">Referring vs Refering</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/occurred-vs-occured" className="text-purple-700 hover:text-purple-900 underline">Occurred vs Occured</a></li>
            <li><a href="/spelling/preferred-vs-prefered" className="text-purple-700 hover:text-purple-900 underline">Preferred vs Prefered</a></li>
            <li><a href="/spelling/transferred-vs-transfered" className="text-purple-700 hover:text-purple-900 underline">Transferred vs Transfered</a></li>
            <li><a href="/spelling/deferred-vs-defered" className="text-purple-700 hover:text-purple-900 underline">Deferred vs Defered</a></li>
            <li><a href="/spelling/inferred-vs-infered" className="text-purple-700 hover:text-purple-900 underline">Inferred vs Infered</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/verbs" className="text-green-700 hover:text-green-900 underline">Verbs Guide</a></li>
            <li><a href="/grammar/past-tense" className="text-green-700 hover:text-green-900 underline">Past Tense</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/ed-suffix" className="text-green-700 hover:text-green-900 underline">-ed Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
