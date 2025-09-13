import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recognize vs Reconize - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recognize&quot; and &quot;reconize&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecognizeVsReconizePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Recognize vs Reconize
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 rounded-2xl mb-10 border border-pink-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-pink-600">&quot;Recognize&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Reconize&quot; is always incorrect - remember the &quot;g&quot; in &quot;recognize&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Reconize</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-pink-50 to-pink-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Recognize</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-pink-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-pink-700 leading-relaxed">
                This is the proper spelling meaning &quot;to identify&quot; or &quot;to acknowledge.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Recognize&quot; (Verb)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;to identify&quot;</li>
                <li>• Has &quot;g&quot; sound</li>
                <li>• Related to &quot;cognition&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Reconize&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;g&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Etymology</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• From Latin &quot;recognoscere&quot;</li>
                <li>• Related to &quot;cognition&quot;</li>
                <li>• Always has &quot;g&quot;</li>
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
            <h3 className="text-2xl font-bold text-pink-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;I <strong>recognize</strong> that face.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;Can you <strong>recognize</strong> this song?&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;I <strong>recognize</strong> the problem.&quot;</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                <p className="text-lg text-pink-800">&quot;Do you <strong>recognize</strong> this?&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>reconize</strong> that face&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognize&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Can you <strong>reconize</strong> this song?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognize&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>reconize</strong> the problem&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognize&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Do you <strong>reconize</strong> this?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recognize&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">G Sound Rule</h3>
              <p className="text-pink-800">&quot;Recognize&quot; has &quot;g&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Cognition</h3>
              <p className="text-rose-800">&quot;Cognition&quot; has &quot;g&quot; - so does &quot;recognize&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Write It Out</h3>
              <p className="text-red-800">Practice writing &quot;recognize&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Easily recognize</strong> - identify without difficulty</li>
                <li>• <strong>Immediately recognize</strong> - identify at once</li>
                <li>• <strong>Can recognize</strong> - able to identify</li>
                <li>• <strong>Fail to recognize</strong> - unable to identify</li>
                <li>• <strong>Quickly recognize</strong> - identify rapidly</li>
                <li>• <strong>Instantly recognize</strong> - identify immediately</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;I recognize this&quot;</li>
                <li>• <strong>With objects:</strong> &quot;Recognize a face&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Recognize as&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;Easily recognize&quot;</li>
                <li>• <strong>With infinitives:</strong> &quot;Recognize to be&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;Recognized&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Why do people confuse &quot;recognize&quot; and &quot;reconize&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;g&quot; thinking it follows a different pattern. The word can sound like it doesn&apos;t have a &quot;g.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;recognize&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recognize&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between &quot;recognize&quot; and &quot;reconize&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognize&quot; is the correct spelling meaning &quot;to identify&quot; or &quot;to acknowledge.&quot; &quot;Reconize&quot; is missing the &quot;g&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Is &quot;recognize&quot; always about identifying people?</h3>
              <p className="text-lg text-gray-700">A: While &quot;recognize&quot; often refers to identifying people, it can also refer to identifying objects, patterns, problems, achievements, and any act of acknowledging or becoming aware of something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;cognition&quot; - &quot;recognize&quot; has &quot;g&quot;. Remember: &quot;Cognition&quot; has &quot;g&quot; - so does &quot;recognize.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What are some synonyms for &quot;recognize&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: identify, acknowledge, realize, notice, perceive, and discern. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;recognize&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recognize&quot; is used in social situations, business contexts, academic writing, legal documents, and any context where you need to describe identifying or acknowledging something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the origin of the word &quot;recognize&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognize&quot; comes from Latin &quot;recognoscere&quot; meaning &quot;to know again&quot; or &quot;to recall,&quot; which is related to &quot;cognition&quot; meaning &quot;knowledge.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Is &quot;recognize&quot; a regular or irregular verb?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recognize&quot; follows a regular pattern. It&apos;s formed by adding &quot;re&quot; to the verb &quot;cognize,&quot; which is a common English prefix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: How can I avoid spelling &quot;recognize&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;cognition,&quot; and always proofread your work. Remember: the &quot;g&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the difference between recognize and identify?</h3>
              <p className="text-lg text-gray-700">A: While both refer to knowing something, &quot;recognize&quot; often implies previous knowledge or familiarity, while &quot;identify&quot; is more about determining what something is.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can recognize be used in passive voice?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recognize&quot; can be used in passive voice: &quot;It was recognized&quot; or &quot;This is recognized.&quot; It&apos;s a transitive verb in English.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recognize&quot;</strong> has &quot;g&quot; and means &quot;to identify&quot; or &quot;to acknowledge.&quot; 
          <br />
          <strong>&quot;Reconize&quot;</strong> is missing the &quot;g&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;COGNITION&quot; - &quot;recognize&quot; has &quot;g&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
