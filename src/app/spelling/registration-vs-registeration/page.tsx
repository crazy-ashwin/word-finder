import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Registration vs Registeration - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;registration&quot; and &quot;registeration&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RegistrationVsRegisterationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Registration vs Registeration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Registration&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Registeration&quot; is always incorrect - remember the &quot;ion&quot; in &quot;registration&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Registeration</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Registration</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;the act of registering&quot; or &quot;enrollment.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Registration&quot; (Noun)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;enrollment&quot;</li>
                <li>• Has &quot;ion&quot; at the end</li>
                <li>• Related to &quot;register&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Registeration&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;i&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Etymology</h3>
              <ul className="text-green-800 space-y-2">
                <li>• From Latin &quot;registrum&quot;</li>
                <li>• Related to &quot;register&quot;</li>
                <li>• Always has &quot;ion&quot;</li>
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
            <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The <strong>registration</strong> deadline is Friday.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;Online <strong>registration</strong> is now open.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;Complete your <strong>registration</strong> form.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The <strong>registration</strong> fee is $50.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>registeration</strong> deadline is Friday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;registration&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Online <strong>registeration</strong> is now open&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;registration&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Complete your <strong>registeration</strong> form&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;registration&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>registeration</strong> fee is $50&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;registration&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">ION Rule</h3>
              <p className="text-lime-800">&quot;Registration&quot; ends with &quot;ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Register</h3>
              <p className="text-green-800">&quot;Register&quot; + &quot;ation&quot; = &quot;registration&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;registration&quot; to build muscle memory</p>
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
                <li>• <strong>Early registration</strong> - sign up early</li>
                <li>• <strong>Late registration</strong> - sign up late</li>
                <li>• <strong>Online registration</strong> - sign up online</li>
                <li>• <strong>Registration deadline</strong> - last day to sign up</li>
                <li>• <strong>Registration fee</strong> - cost to sign up</li>
                <li>• <strong>Registration form</strong> - form to sign up</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The registration was successful&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A registration&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Early registration&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Registration for&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Complete registration&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many registrations&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people confuse &quot;registration&quot; and &quot;registeration&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;i&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;regist&quot; to &quot;ation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;registration&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Registration&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;registration&quot; and &quot;registeration&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Registration&quot; is the correct spelling meaning &quot;the act of registering&quot; or &quot;enrollment.&quot; &quot;Registeration&quot; is missing the &quot;i&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;registration&quot; always about signing up?</h3>
              <p className="text-lg text-gray-700">A: While &quot;registration&quot; often refers to signing up, it can also describe enrollment, enrollment processes, official records, and any act of recording information.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;register&quot; - &quot;registration&quot; has &quot;ion&quot; at the end. Remember: &quot;Register&quot; + &quot;ation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;registration&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: enrollment, sign-up, application, entry, admission, and enrollment. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;registration&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Registration&quot; is used in academic writing, business communication, casual conversation, and any discussion about signing up or enrolling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;registration&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Registration&quot; comes from Latin &quot;registrum&quot; meaning &quot;a record&quot; or &quot;a list,&quot; which is related to &quot;register&quot; meaning &quot;to record.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Is &quot;registration&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Registration&quot; follows a regular pattern. It&apos;s formed by adding &quot;ation&quot; to the verb &quot;register,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I avoid spelling &quot;registration&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;register + ation,&quot; and always proofread your work. The &quot;i&quot; in &quot;ion&quot; is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Registration&quot;</strong> has &quot;ion&quot; at the end and means &quot;enrollment.&quot; 
          <br />
          <strong>&quot;Registeration&quot;</strong> is missing the &quot;i&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REGISTER + ATION&quot; - &quot;registration&quot; has &quot;ion&quot; at the end!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/regularly-vs-regulary" className="text-blue-700 hover:text-blue-900 underline">Regularly vs Regulary</a></li>
            <li><a href="/spelling/regularly-vs-regularily" className="text-blue-700 hover:text-blue-900 underline">Regularly vs Regularily</a></li>
            <li><a href="/spelling/regretted-vs-regreted" className="text-blue-700 hover:text-blue-900 underline">Regretted vs Regreted</a></li>
            <li><a href="/spelling/registry-vs-registery" className="text-blue-700 hover:text-blue-900 underline">Registry vs Registery</a></li>
            <li><a href="/spelling/registered-vs-registred" className="text-blue-700 hover:text-blue-900 underline">Registered vs Registred</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/application-vs-aplication" className="text-purple-700 hover:text-purple-900 underline">Application vs Aplication</a></li>
            <li><a href="/spelling/enrollment-vs-enrolment" className="text-purple-700 hover:text-purple-900 underline">Enrollment vs Enrolment</a></li>
            <li><a href="/spelling/admission-vs-admision" className="text-purple-700 hover:text-purple-900 underline">Admission vs Admision</a></li>
            <li><a href="/spelling/participation-vs-participation" className="text-purple-700 hover:text-purple-900 underline">Participation vs Participacion</a></li>
            <li><a href="/spelling/notification-vs-notifaction" className="text-purple-700 hover:text-purple-900 underline">Notification vs Notifaction</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/ion-suffix" className="text-green-700 hover:text-green-900 underline">-ion Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
