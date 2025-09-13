import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suspicious vs Suspicios - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;suspicious&quot; and &quot;suspicios&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SuspiciousVsSuspiciosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Suspicious vs Suspicios
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🔍</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suspicious&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suspicios&quot; is always incorrect - remember the &quot;ou&quot; sound in &quot;suspicious&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suspicios</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suspicious</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;causing suspicion&quot; or &quot;questionable.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Suspicious&quot; (Adjective)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;causing suspicion&quot;</li>
                <li>• Has &quot;ou&quot; sound</li>
                <li>• Ends with &quot;-ious&quot;</li>
                <li>• Related to &quot;suspect&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Common Error</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• &quot;Suspicios&quot; is wrong</li>
                <li>• Missing &quot;u&quot; after &quot;s&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Memory Aid</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Think &quot;SUS + PICI + OUS&quot;</li>
                <li>• &quot;ou&quot; like in &quot;doubt&quot;</li>
                <li>• &quot;-ious&quot; ending pattern</li>
                <li>• Related to &quot;suspicion&quot;</li>
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
                <p className="text-lg text-green-800">&quot;His behavior was <strong>suspicious</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The package looked <strong>suspicious</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She gave me a <strong>suspicious</strong> look.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;That seems <strong>suspicious</strong> to me.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His behavior was <strong>suspicios</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The package looked <strong>suspicios</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She gave me a <strong>suspicios</strong> look&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That seems <strong>suspicios</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">OU Sound Rule</h3>
              <p className="text-yellow-800">&quot;Suspicious&quot; has &quot;ou&quot; like &quot;doubt&quot; and &quot;about&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Suspicion</h3>
              <p className="text-blue-800">&quot;Suspicious&quot; comes from &quot;suspicion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Pattern Recognition</h3>
              <p className="text-green-800">Words ending in &quot;-ious&quot; are adjectives</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Break It Down</h3>
              <p className="text-purple-800">SUS + PICI + OUS = Suspicious</p>
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
                <li>• <strong>Suspicious activity</strong> - questionable behavior</li>
                <li>• <strong>Suspicious package</strong> - concerning item</li>
                <li>• <strong>Suspicious behavior</strong> - questionable actions</li>
                <li>• <strong>Suspicious circumstances</strong> - concerning situation</li>
                <li>• <strong>Suspicious timing</strong> - questionable coincidence</li>
                <li>• <strong>Suspicious character</strong> - questionable person</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;A suspicious person&quot;</li>
                <li>• <strong>Predicate adjective:</strong> &quot;That looks suspicious&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More suspicious than&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most suspicious&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Suspiciously&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;Suspicion&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people misspell &quot;suspicious&quot; as &quot;suspicios&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because the &quot;ou&quot; sound in &quot;suspicious&quot; can be pronounced quickly, making it sound like it could be spelled with just an &quot;i.&quot; Additionally, some people may not be familiar with the word&apos;s etymology.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;suspicious&quot; related to &quot;suspect&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Both words come from the Latin &quot;suspicere&quot; meaning &quot;to look up at&quot; or &quot;to mistrust.&quot; &quot;Suspect&quot; is the verb form, while &quot;suspicious&quot; is the adjective form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;suspicious&quot; and &quot;skeptical&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicious&quot; implies distrust or belief that something is wrong, while &quot;skeptical&quot; means having doubts or being unwilling to believe without evidence. &quot;Suspicious&quot; is more negative and accusatory.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;suspicious&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suspicious&quot; is a standard English word that&apos;s perfectly appropriate in formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: questionable, doubtful, dubious, fishy, shady, suspect, untrustworthy, and concerning. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;suspicion&quot; (which has the same &quot;ou&quot; sound) and remember that &quot;suspicious&quot; is the adjective form. The &quot;ou&quot; sound is crucial for the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is there a mnemonic device for this word?</h3>
              <p className="text-lg text-gray-700">A: Yes! Think: &quot;When you&apos;re SUSPICIOUS, you have DOUBTS&quot; - both words have the &quot;ou&quot; sound. Or remember: &quot;SUS + PICI + OUS&quot; breaks down the word into manageable parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the adverb form of &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: The adverb form is &quot;suspiciously.&quot; For example: &quot;He looked at me suspiciously&quot; or &quot;The timing was suspiciously convenient.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suspicious&quot;</strong> has the &quot;ou&quot; sound and ends with &quot;-ious.&quot; 
          <br />
          <strong>&quot;Suspicios&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + PICI + OUS&quot; and remember the &quot;ou&quot; sound!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
