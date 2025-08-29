import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recognition vs Reconition - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recognition&quot; and &quot;reconition&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecognitionVsReconitionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Recognition vs Reconition
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Recognition&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Reconition&quot; is always incorrect - remember the &quot;g&quot; in &quot;recognition&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Reconition</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Recognition</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of recognizing or being recognized.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Recognition&quot; (Correct)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Has a &quot;g&quot; in the middle</li>
                <li>• Means &quot;acknowledgment&quot;</li>
                <li>• From Latin &quot;recognitio&quot;</li>
                <li>• Used in formal contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Reconition&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing the &quot;g&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Key Differences</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Spelling: &quot;g&quot; vs no &quot;g&quot;</li>
                <li>• Meaning: Valid vs invalid</li>
                <li>• Usage: Formal vs never</li>
                <li>• Origin: Latin vs error</li>
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
                <p className="text-lg text-green-800">&quot;She received <strong>recognition</strong> for her hard work.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The company&apos;s <strong>recognition</strong> program boosts morale.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Facial <strong>recognition</strong> technology is advancing rapidly.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Public <strong>recognition</strong> of the issue grew.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She received <strong>reconition</strong> for her work&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company&apos;s <strong>reconition</strong> program&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Facial <strong>reconition</strong> technology&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Public <strong>reconition</strong> of the issue&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">G for Good</h3>
              <p className="text-yellow-800">&quot;Recognition&quot; has a &quot;g&quot; - good spelling!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Cognize&quot;</h3>
              <p className="text-blue-800">Recognition = Re + cognize (to know)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;recognition&quot; to build muscle memory</p>
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
                <li>• <strong>Recognition program</strong> - employee awards</li>
                <li>• <strong>Facial recognition</strong> - biometric technology</li>
                <li>• <strong>Public recognition</strong> - acknowledgment</li>
                <li>• <strong>Recognition of achievement</strong> - accomplishment</li>
                <li>• <strong>Recognition software</strong> - pattern matching</li>
                <li>• <strong>Recognition ceremony</strong> - formal event</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The recognition was well-deserved&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Recognition motivates employees&quot;</li>
                <li>• <strong>Object:</strong> &quot;She received recognition&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Recognition program&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s recognition&quot;</li>
                <li>• <strong>Appositive:</strong> &quot;Recognition, the key to motivation&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;recognition&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;reconition&quot; often occurs because people forget the &quot;g&quot; in the middle. The word has a complex structure that can be confusing to spell correctly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;recognition&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recognition&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;recognition&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognition&quot; comes from Latin &quot;recognitio&quot; meaning &quot;acknowledgment&quot; or &quot;review.&quot; It combines &quot;re-&quot; (again) with &quot;cognitio&quot; (knowledge).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;recognition&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word: &quot;re-cog-ni-tion.&quot; Emphasize the &quot;g&quot; sound and have them practice writing it multiple times. Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;recognition&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: acknowledgment, appreciation, identification, awareness, notice, credit, and commendation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;recognition&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;recognition&quot; is only used as a noun. The verb form is &quot;recognize.&quot; You can say &quot;I recognize you&quot; but not &quot;I recognition you.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;recognition&quot; and &quot;appreciation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognition&quot; means acknowledging or identifying something, while &quot;appreciation&quot; means valuing or being grateful for something. They&apos;re related but distinct concepts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How is &quot;recognition&quot; used in technology?</h3>
              <p className="text-lg text-gray-700">A: In technology, &quot;recognition&quot; refers to pattern identification, such as facial recognition, voice recognition, or optical character recognition (OCR) systems.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the plural form of &quot;recognition&quot;?</h3>
              <p className="text-lg text-gray-700">A: The plural form is &quot;recognitions.&quot; For example: &quot;She received many recognitions for her contributions to the field.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recognition&quot;</strong> has a &quot;g&quot; and means &quot;acknowledgment.&quot; 
          <br />
          <strong>&quot;Reconition&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Recognition = Re + cognize (to know)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/technology-vs-tecnology" className="text-blue-700 hover:text-blue-900 underline">Technology vs Tecnology</a></li>
            <li><a href="/spelling/strength-vs-strengh" className="text-blue-700 hover:text-blue-900 underline">Strength vs Strengh</a></li>
            <li><a href="/spelling/biscuit-vs-bisquit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Bisquit</a></li>
            <li><a href="/spelling/their-vs-thier" className="text-blue-700 hover:text-blue-900 underline">Their vs Thier</a></li>
            <li><a href="/spelling/weight-vs-weigth" className="text-blue-700 hover:text-blue-900 underline">Weight vs Weigth</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/acknowledgment-vs-acknowledgement" className="text-purple-700 hover:text-purple-900 underline">Acknowledgment vs Acknowledgement</a></li>
            <li><a href="/spelling/consciousness-vs-conciousness" className="text-purple-700 hover:text-purple-900 underline">Consciousness vs Conciousness</a></li>
            <li><a href="/spelling/ignorance-vs-ignoranse" className="text-purple-700 hover:text-purple-900 underline">Ignorance vs Ignoranse</a></li>
            <li><a href="/spelling/ignorant-vs-ignorant" className="text-purple-700 hover:text-purple-900 underline">Ignorant vs Ignorant</a></li>
            <li><a href="/spelling/knowledge-vs-knowlege" className="text-purple-700 hover:text-purple-900 underline">Knowledge vs Knowlege</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/abstract-nouns" className="text-green-700 hover:text-green-900 underline">Abstract Nouns</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/latin-roots" className="text-green-700 hover:text-green-900 underline">Latin Roots</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
