import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Regularly vs Regulary - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;regularly&quot; and &quot;regulary&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RegularlyVsRegularyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Regularly vs Regulary
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-teal-600">&quot;Regularly&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Regulary&quot; is always incorrect - remember the &quot;ly&quot; in &quot;regularly&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Regulary</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Regularly</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                This is the proper spelling meaning &quot;at regular intervals&quot; or &quot;frequently.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Regularly&quot; (Adverb)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;frequently&quot;</li>
                <li>• Has &quot;ly&quot; at the end</li>
                <li>• Related to &quot;regular&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Regulary&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;l&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Etymology</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• From Latin &quot;regularis&quot;</li>
                <li>• Related to &quot;regular&quot;</li>
                <li>• Always has &quot;ly&quot;</li>
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
            <h3 className="text-2xl font-bold text-teal-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;I exercise <strong>regularly</strong> every week.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;She visits the library <strong>regularly</strong>.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;The team meets <strong>regularly</strong> on Mondays.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;He checks his email <strong>regularly</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I exercise <strong>regulary</strong> every week&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;regularly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She visits the library <strong>regulary</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;regularly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The team meets <strong>regulary</strong> on Mondays&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;regularly&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He checks his email <strong>regulary</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;regularly&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">LY Rule</h3>
              <p className="text-teal-800">&quot;Regularly&quot; ends with &quot;ly&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Think Regular</h3>
              <p className="text-cyan-800">&quot;Regular&quot; + &quot;ly&quot; = &quot;regularly&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;regularly&quot; to build muscle memory</p>
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
                <li>• <strong>Regularly scheduled</strong> - planned at intervals</li>
                <li>• <strong>Regularly occurring</strong> - happening often</li>
                <li>• <strong>Regularly maintained</strong> - kept up often</li>
                <li>• <strong>Regularly updated</strong> - changed often</li>
                <li>• <strong>Regularly performed</strong> - done often</li>
                <li>• <strong>Regularly attended</strong> - gone to often</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He regularly exercises&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Regularly visit&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Regularly available&quot;</li>
                <li>• <strong>At sentence start:</strong> &quot;Regularly, I check&quot;</li>
                <li>• <strong>Mid-sentence:</strong> &quot;I regularly check&quot;</li>
                <li>• <strong>With frequency:</strong> &quot;Regularly every day&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people confuse &quot;regularly&quot; and &quot;regulary&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;l&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;regula&quot; to &quot;y.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;regularly&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Regularly&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between &quot;regularly&quot; and &quot;regulary&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Regularly&quot; is the correct spelling meaning &quot;at regular intervals&quot; or &quot;frequently.&quot; &quot;Regulary&quot; is missing the &quot;l&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;regularly&quot; always about frequency?</h3>
              <p className="text-lg text-gray-700">A: While &quot;regularly&quot; often refers to frequency, it can also describe consistency, routine patterns, systematic behavior, and any action that follows a predictable schedule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;regular&quot; - &quot;regularly&quot; has &quot;ly&quot; at the end. Remember: &quot;Regular&quot; + &quot;ly.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;regularly&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: frequently, often, routinely, consistently, systematically, periodically, and habitually. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;regularly&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Regularly&quot; is used in academic writing, business communication, casual conversation, and any discussion about frequency or routine.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;regularly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Regularly&quot; comes from Latin &quot;regularis&quot; meaning &quot;according to rule,&quot; which is related to &quot;regular&quot; meaning &quot;following a pattern.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;regularly&quot; a regular or irregular adverb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Regularly&quot; follows a regular pattern. It&apos;s formed by adding &quot;ly&quot; to the adjective &quot;regular,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I avoid spelling &quot;regularly&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;regular + ly,&quot; and always proofread your work. The &quot;l&quot; in &quot;ly&quot; is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Regularly&quot;</strong> has &quot;ly&quot; at the end and means &quot;frequently.&quot; 
          <br />
          <strong>&quot;Regulary&quot;</strong> is missing the &quot;l&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REGULAR + LY&quot; - &quot;regularly&quot; has &quot;ly&quot; at the end!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/regularly-vs-regularily" className="text-blue-700 hover:text-blue-900 underline">Regularly vs Regularily</a></li>
            <li><a href="/spelling/regretted-vs-regreted" className="text-blue-700 hover:text-blue-900 underline">Regretted vs Regreted</a></li>
            <li><a href="/spelling/registry-vs-registery" className="text-blue-700 hover:text-blue-900 underline">Registry vs Registery</a></li>
            <li><a href="/spelling/registration-vs-registeration" className="text-blue-700 hover:text-blue-900 underline">Registration vs Registeration</a></li>
            <li><a href="/spelling/registered-vs-registred" className="text-blue-700 hover:text-blue-900 underline">Registered vs Registred</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/frequently-vs-frequentely" className="text-purple-700 hover:text-purple-900 underline">Frequently vs Frequentely</a></li>
            <li><a href="/spelling/usually-vs-usualy" className="text-purple-700 hover:text-purple-900 underline">Usually vs Usualy</a></li>
            <li><a href="/spelling/normally-vs-normaly" className="text-purple-700 hover:text-purple-900 underline">Normally vs Normaly</a></li>
            <li><a href="/spelling/typically-vs-typicaly" className="text-purple-700 hover:text-purple-900 underline">Typically vs Typicaly</a></li>
            <li><a href="/spelling/commonly-vs-commonely" className="text-purple-700 hover:text-purple-900 underline">Commonly vs Commonely</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adverbs" className="text-green-700 hover:text-green-900 underline">Adverbs Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/ly-suffix" className="text-green-700 hover:text-green-900 underline">-ly Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
