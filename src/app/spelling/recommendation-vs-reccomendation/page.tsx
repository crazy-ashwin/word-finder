import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recommendation vs Reccomendation - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recommendation&quot; and &quot;reccomendation&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecommendationVsReccomendationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Recommendation vs Reccomendation
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Recommendation&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Reccomendation&quot; is always incorrect - remember the double &quot;m&quot; in &quot;recommendation&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Reccomendation</h3>
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
              <h3 className="text-3xl font-bold text-sky-800 mb-4">Recommendation</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-sky-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-sky-700 leading-relaxed">
                This is the proper spelling meaning &quot;a suggestion&quot; or &quot;advice.&quot;
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
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Recommendation&quot; (Noun)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;a suggestion&quot;</li>
                <li>• Has double &quot;m&quot;</li>
                <li>• Related to &quot;commend&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Reccomendation&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing second &quot;m&quot;</li>
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
                <li>• From Latin &quot;recommendare&quot;</li>
                <li>• Related to &quot;commend&quot;</li>
                <li>• Always has double &quot;m&quot;</li>
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
                <p className="text-lg text-sky-800">&quot;I have a <strong>recommendation</strong> for you.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;The doctor&apos;s <strong>recommendation</strong>.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;A strong <strong>recommendation</strong>.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;Based on the <strong>recommendation</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I have a <strong>reccomendation</strong> for you&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recommendation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The doctor&apos;s <strong>reccomendation</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recommendation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A strong <strong>reccomendation</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recommendation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Based on the <strong>reccomendation</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recommendation&quot;</p>
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
              <h3 className="text-xl font-bold text-sky-900 mb-2">Double M Rule</h3>
              <p className="text-sky-800">&quot;Recommendation&quot; has double &quot;m&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Commend</h3>
              <p className="text-blue-800">&quot;Commend&quot; has double &quot;m&quot; - so does &quot;recommend&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;recommendation&quot; to build muscle memory</p>
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
                <li>• <strong>Strong recommendation</strong> - powerful suggestion</li>
                <li>• <strong>Personal recommendation</strong> - individual advice</li>
                <li>• <strong>Professional recommendation</strong> - expert advice</li>
                <li>• <strong>Based on recommendation</strong> - following advice</li>
                <li>• <strong>Give a recommendation</strong> - provide advice</li>
                <li>• <strong>Follow recommendation</strong> - act on advice</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The recommendation was helpful&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A recommendation&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Strong recommendation&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Recommendation for&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Give recommendation&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many recommendations&quot;</li>
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
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people confuse &quot;recommendation&quot; and &quot;reccomendation&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the second &quot;m&quot; thinking it follows a different pattern. The word can sound like it only has one &quot;m.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;recommendation&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recommendation&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;recommendation&quot; and &quot;reccomendation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recommendation&quot; is the correct spelling meaning &quot;a suggestion&quot; or &quot;advice.&quot; &quot;Reccomendation&quot; is missing the second &quot;m&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;recommendation&quot; always about giving advice?</h3>
              <p className="text-lg text-gray-700">A: While &quot;recommendation&quot; often refers to giving advice or suggestions, it can also refer to endorsing, suggesting, or putting forward something as worthy of consideration in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;commend&quot; - &quot;recommend&quot; has double &quot;m&quot;. Remember: &quot;Commend&quot; has double &quot;m&quot; - so does &quot;recommend.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;recommendation&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: suggestion, advice, proposal, endorsement, commendation, and referral. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;recommendation&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recommendation&quot; is used in business, personal advice, product reviews, academic writing, and any context where you need to describe suggesting or endorsing something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;recommendation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recommendation&quot; comes from Latin &quot;recommendare&quot; meaning &quot;to commend&quot; or &quot;to entrust,&quot; which is related to &quot;commend&quot; meaning &quot;to praise.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;recommendation&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recommendation&quot; follows a regular pattern. It&apos;s formed by adding &quot;ation&quot; to the verb &quot;recommend,&quot; which is a common English suffix for nouns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I avoid spelling &quot;recommendation&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;commend,&quot; and always proofread your work. Remember: the double &quot;m&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between recommendation and suggestion?</h3>
              <p className="text-lg text-gray-700">A: While both refer to putting forward ideas, &quot;recommendation&quot; often implies stronger endorsement or approval, while &quot;suggestion&quot; is more tentative and open to consideration.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can recommendation be used in plural form?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recommendation&quot; can be used in plural form: &quot;Many recommendations&quot; or &quot;Several recommendations.&quot; It&apos;s a countable noun in English.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recommendation&quot;</strong> has double &quot;m&quot; and means &quot;a suggestion&quot; or &quot;advice.&quot; 
          <br />
          <strong>&quot;Reccomendation&quot;</strong> is missing the second &quot;m&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;COMMEND&quot; - &quot;recommend&quot; has double &quot;m&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/recommend-vs-recommand" className="text-blue-700 hover:text-blue-900 underline">Recommend vs Recommand</a></li>
            <li><a href="/spelling/recommend-vs-recomend" className="text-blue-700 hover:text-blue-900 underline">Recommend vs Recomend</a></li>
            <li><a href="/spelling/recommend-vs-reccommend" className="text-blue-700 hover:text-blue-900 underline">Recommend vs Reccommend</a></li>
            <li><a href="/spelling/recollection-vs-recolection" className="text-blue-700 hover:text-blue-900 underline">Recollection vs Recolection</a></li>
            <li><a href="/spelling/recognize-vs-reconize" className="text-blue-700 hover:text-blue-900 underline">Recognize vs Reconize</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/commendation-vs-comendation" className="text-purple-700 hover:text-purple-900 underline">Commendation vs Comendation</a></li>
            <li><a href="/spelling/endorsement-vs-endorsment" className="text-purple-700 hover:text-purple-900 underline">Endorsement vs Endorsment</a></li>
            <li><a href="/spelling/suggestion-vs-sugestion" className="text-purple-700 hover:text-purple-900 underline">Suggestion vs Sugestion</a></li>
            <li><a href="/spelling/advice-vs-advise" className="text-purple-700 hover:text-purple-900 underline">Advice vs Advise</a></li>
            <li><a href="/spelling/referral-vs-referal" className="text-purple-700 hover:text-purple-900 underline">Referral vs Referal</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/ation-suffix" className="text-green-700 hover:text-green-900 underline">-ation Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
