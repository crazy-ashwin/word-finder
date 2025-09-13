import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recognition vs Recogonition - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recognition&quot; and &quot;recogonition&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecognitionVsRecogonitionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Recognition vs Recogonition
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
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Recognition&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Recogonition&quot; is always incorrect - remember the proper spelling &quot;recognition&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Recogonition</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Recognition</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;acknowledgment&quot; or &quot;identification.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Recognition&quot; (Noun)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;acknowledgment&quot;</li>
                <li>• Has &quot;gn&quot; sound</li>
                <li>• Related to &quot;recognize&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Recogonition&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Completely wrong spelling</li>
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
                <li>• From Latin &quot;recognitio&quot;</li>
                <li>• Related to &quot;recognize&quot;</li>
                <li>• Always has &quot;gn&quot;</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Public <strong>recognition</strong> for achievements.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Facial <strong>recognition</strong> technology.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;International <strong>recognition</strong>.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Deserved <strong>recognition</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Public <strong>recogonition</strong> for achievements&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Facial <strong>recogonition</strong> technology&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;International <strong>recogonition</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Deserved <strong>recogonition</strong>&quot; ❌</p>
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
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">GN Sound Rule</h3>
              <p className="text-blue-800">&quot;Recognition&quot; has &quot;gn&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think Recognize</h3>
              <p className="text-indigo-800">&quot;Recognize&quot; has &quot;gn&quot; - so does &quot;recognition&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;recognition&quot; to build muscle memory</p>
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
                <li>• <strong>Public recognition</strong> - acknowledgment by others</li>
                <li>• <strong>Facial recognition</strong> - identifying faces</li>
                <li>• <strong>International recognition</strong> - worldwide acknowledgment</li>
                <li>• <strong>Deserved recognition</strong> - earned acknowledgment</li>
                <li>• <strong>Formal recognition</strong> - official acknowledgment</li>
                <li>• <strong>Special recognition</strong> - unique acknowledgment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The recognition was deserved&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A recognition&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Public recognition&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Recognition for&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Give recognition&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many recognitions&quot;</li>
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
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people confuse &quot;recognition&quot; and &quot;recogonition&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might misspell the word thinking it follows a different pattern. The word can sound like it might have different letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;recognition&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recognition&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;recognition&quot; and &quot;recogonition&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognition&quot; is the correct spelling meaning &quot;acknowledgment&quot; or &quot;identification.&quot; &quot;Recogonition&quot; is completely incorrect and not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;recognition&quot; always about acknowledging people?</h3>
              <p className="text-lg text-gray-700">A: While &quot;recognition&quot; often refers to acknowledging people or achievements, it can also refer to identifying objects, patterns, systems, and any act of acknowledging or identifying something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;recognize&quot; - &quot;recognition&quot; has &quot;gn&quot;. Remember: &quot;Recognize&quot; has &quot;gn&quot; - so does &quot;recognition.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;recognition&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: acknowledgment, identification, appreciation, credit, notice, and awareness. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;recognition&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recognition&quot; is used in business, technology, education, awards, social situations, and any context where you need to describe acknowledging or identifying something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;recognition&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognition&quot; comes from Latin &quot;recognitio&quot; meaning &quot;the act of recognizing&quot; or &quot;acknowledgment,&quot; which is related to &quot;recognize&quot; meaning &quot;to identify.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;recognition&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognition&quot; follows a regular pattern. It&apos;s formed by adding &quot;ion&quot; to the verb &quot;recognize,&quot; which is a common English suffix for nouns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How can I avoid spelling &quot;recognition&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;recognize,&quot; and always proofread your work. Remember: the &quot;gn&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between recognition and acknowledgment?</h3>
              <p className="text-lg text-gray-700">A: While both refer to noticing something, &quot;recognition&quot; often implies deeper understanding or identification, while &quot;acknowledgment&quot; is more about simply admitting or accepting something exists.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can recognition be used in plural form?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recognition&quot; can be used in plural form: &quot;Many recognitions&quot; or &quot;Several recognitions.&quot; It&apos;s a countable noun in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between recognition and identification?</h3>
              <p className="text-lg text-gray-700">A: While both refer to knowing something, &quot;recognition&quot; often implies previous knowledge or familiarity, while &quot;identification&quot; is more about determining what something is.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How is recognition used in technology?</h3>
              <p className="text-lg text-gray-700">A: In technology, &quot;recognition&quot; is used for systems that can identify patterns, such as facial recognition, voice recognition, speech recognition, and pattern recognition in data analysis.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between recognition and appreciation?</h3>
              <p className="text-lg text-gray-700">A: While both refer to noticing something, &quot;recognition&quot; is about identifying or acknowledging, while &quot;appreciation&quot; involves valuing or being grateful for something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can recognition be used in passive voice?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recognition&quot; can be used in passive voice: &quot;It was given recognition&quot; or &quot;This is receiving recognition.&quot; It&apos;s a noun that can be used with various verbs.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recognition&quot;</strong> has &quot;gn&quot; and means &quot;acknowledgment&quot; or &quot;identification.&quot; 
          <br />
          <strong>&quot;Recogonition&quot;</strong> is completely incorrect and is never a real word.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RECOGNIZE&quot; - &quot;recognition&quot; has &quot;gn&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
