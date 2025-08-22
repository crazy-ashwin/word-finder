import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Says vs Seys - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;says&quot; and &quot;seys&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SaysVsSeysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Says vs Seys
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
            <span className="text-2xl mr-3">💬</span>
            <span className="text-2xl font-bold text-green-600">&quot;Says&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Seys&quot; is always incorrect - remember the &quot;ay&quot; in &quot;says&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Seys</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common phonetic mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Says</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;third person singular present of say.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Says&quot; (Verb)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Third person singular</li>
                <li>• Contains &quot;ay&quot;</li>
                <li>• From Old English &quot;secgan&quot;</li>
                <li>• Used in present tense</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Seys&quot; (Misspelling)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Phonetic mistake</li>
                <li>• Wrong vowel sound</li>
                <li>• Never correct</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Say&quot; + &quot;s&quot;</li>
                <li>• &quot;Ay&quot; sound</li>
                <li>• Related to &quot;say&quot;</li>
                <li>• Standard English pattern</li>
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
                <p className="text-lg text-green-800">&quot;He <strong>says</strong> he will be here soon.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>says</strong> the movie was great.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The teacher <strong>says</strong> homework is due Friday.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;My friend <strong>says</strong> it&apos;s going to rain.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>seys</strong> he will be here&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;says&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>seys</strong> the movie was great&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;says&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The teacher <strong>seys</strong> homework is due&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;says&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;My friend <strong>seys</strong> it&apos;s going to rain&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;says&quot;</p>
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
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">AY Sound</h3>
              <p className="text-yellow-800">Think of &quot;ay&quot; like &quot;day&quot; and &quot;way&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Say + s</h3>
              <p className="text-blue-800">Remember: &quot;say&quot; + &quot;s&quot; = &quot;says&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;says&quot; to build muscle memory</p>
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
                <li>• <strong>He says</strong> - male speaker</li>
                <li>• <strong>She says</strong> - female speaker</li>
                <li>• <strong>It says</strong> - written source</li>
                <li>• <strong>Everyone says</strong> - general opinion</li>
                <li>• <strong>The book says</strong> - written source</li>
                <li>• <strong>Common sense says</strong> - logical conclusion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Present tense verb:</strong> &quot;He says hello&quot;</li>
                <li>• <strong>Third person singular:</strong> &quot;She says goodbye&quot;</li>
                <li>• <strong>Reporting verb:</strong> &quot;The news says&quot;</li>
                <li>• <strong>Subject:</strong> &quot;What he says matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;I heard what she says&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s what he says&quot;</li>
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
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;says&quot; as &quot;seys&quot;?</h3>
              <p className="text-lg text-gray-700">A: This is a common phonetic spelling error. People often confuse the &quot;ay&quot; sound with &quot;ey&quot; when trying to spell based on pronunciation, leading to the incorrect &quot;seys&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;says&quot; related to the word &quot;say&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Says&quot; is the third person singular present tense form of &quot;say.&quot; &quot;Say&quot; is the base form, while &quot;says&quot; is used with he, she, or it.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;says&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Says&quot; comes from the Old English word &quot;secgan&quot; meaning &quot;to say&quot; or &quot;to speak.&quot; It evolved through Middle English to become the modern form we use today.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;says&quot; be used in both formal and informal contexts?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Says&quot; is appropriate for all contexts, from casual conversation to formal writing, academic papers, and professional communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;says&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: states, mentions, declares, expresses, tells, reports, and communicates.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;says&quot; as &quot;say&quot; + &quot;s.&quot; The &quot;ay&quot; sound comes before the &quot;s&quot; - just like in &quot;day&quot; and &quot;way.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;says&quot; always about speaking?</h3>
              <p className="text-lg text-gray-700">A: While &quot;says&quot; often refers to spoken words, it can also refer to written communication, as in &quot;The book says&quot; or &quot;The sign says.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;says&quot; and &quot;said&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Says&quot; is the present tense (third person singular), while &quot;said&quot; is the past tense. &quot;He says&quot; means he is speaking now, &quot;He said&quot; means he spoke in the past.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there any other words that follow the same pattern as &quot;says&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many verbs follow the same pattern: &quot;play&quot; becomes &quot;plays,&quot; &quot;stay&quot; becomes &quot;stays,&quot; &quot;pay&quot; becomes &quot;pays.&quot; All use the &quot;ay&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How important is correct spelling in everyday communication?</h3>
              <p className="text-lg text-gray-700">A: Very important! Correct spelling ensures clear communication and prevents misunderstandings. Misspelling &quot;says&quot; as &quot;seys&quot; can confuse readers and make your writing appear less professional.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Says&quot;</strong> contains &quot;ay&quot; and is the only correct spelling. 
          <br />
          <strong>&quot;Seys&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SAYS = SAY + s with AY sound&quot;</p>
        </div>
      </div>
    </div>
  )
}
