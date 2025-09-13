import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sent vs Sended - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sent&quot; and &quot;sended&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SentVsSendedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
          Sent vs Sended
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-8 rounded-2xl mb-10 border border-slate-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-slate-600">&quot;Sent&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sended&quot; is always incorrect - &quot;sent&quot; is the past tense of &quot;send&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sended</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Sent</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-slate-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of send&quot; or &quot;dispatched.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">&quot;Send&quot; (Base Form)</h3>
              <ul className="text-slate-800 space-y-2">
                <li>• Means &quot;to dispatch&quot;</li>
                <li>• Present tense verb</li>
                <li>• Old English origin</li>
                <li>• Used as main verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">&quot;Sent&quot; (Past Tense)</h3>
              <ul className="text-gray-800 space-y-2">
                <li>• Past tense of &quot;send&quot;</li>
                <li>• Irregular verb form</li>
                <li>• Not &quot;send-ed&quot;</li>
                <li>• Describes completed action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-zinc-50 border-zinc-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Why &quot;Sended&quot; is Wrong</h3>
              <ul className="text-zinc-800 space-y-2">
                <li>• &quot;Send&quot; is irregular</li>
                <li>• Doesn&apos;t follow &quot;-ed&quot; rule</li>
                <li>• &quot;Sended&quot; is not a word</li>
                <li>• Very common error</li>
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;I <strong>sent</strong> the email yesterday.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;She <strong>sent</strong> the package last week.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;They <strong>sent</strong> the invitation by mail.&quot;</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-500">
                <p className="text-lg text-slate-800">&quot;The company <strong>sent</strong> a representative.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>sended</strong> the email yesterday&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>sended</strong> the package&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>sended</strong> the invitation&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sent&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The company <strong>sended</strong> a representative&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sent&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Irregular Verb</h3>
              <p className="text-yellow-800">&quot;Send&quot; is irregular - it doesn&apos;t follow the &quot;-ed&quot; rule</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Short</h3>
              <p className="text-blue-800">&quot;Sent&quot; is short and simple, &quot;Sended&quot; is wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sent&quot; to build muscle memory</p>
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
                <li>• <strong>Sent packing</strong> - dismissed or fired</li>
                <li>• <strong>Sent flying</strong> - knocked over</li>
                <li>• <strong>Sent running</strong> - made someone flee</li>
                <li>• <strong>Sent for</strong> - requested someone</li>
                <li>• <strong>Sent off</strong> - dispatched or expelled</li>
                <li>• <strong>Sent back</strong> - returned</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I sent the letter&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The letter was sent&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;The sent items&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;It was sent yesterday&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;I have sent it&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Sending the package&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-slate-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Q: Why do people say &quot;sended&quot; instead of &quot;sent&quot;?</h3>
              <p className="text-lg text-gray-700">A: Many people apply the regular verb rule of adding &quot;-ed&quot; to form the past tense. However, &quot;send&quot; is an irregular verb, so it doesn&apos;t follow this pattern. The past tense is simply &quot;sent.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Is &quot;sended&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sended&quot; is never correct in any context. It&apos;s considered a grammatical error in all forms of English writing and speech, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-zinc-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Q: What&apos;s the difference between &quot;sent&quot; and &quot;send&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Send&quot; is the base form (present tense), while &quot;sent&quot; is the past tense and past participle form. &quot;Send&quot; is used for present actions, while &quot;sent&quot; is used for completed actions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are there other irregular verbs like &quot;send&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many common verbs are irregular, such as: go/went, see/saw, take/took, give/gave, write/wrote, and drive/drove. These don&apos;t follow the regular &quot;-ed&quot; pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I remember the correct form?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sent&quot; as a short, simple word. Remember that &quot;send&quot; is irregular, so it doesn&apos;t follow the normal rules. Practice using it in sentences to build familiarity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;sent&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: dispatched, mailed, transmitted, delivered, forwarded, shipped, and conveyed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;sent&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sent&quot; can function as an adjective, as in &quot;sent items&quot; or &quot;sent messages.&quot; It describes items that have been dispatched or transmitted.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;sent&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sent&quot; comes from the Old English word &quot;sendan&quot; meaning &quot;to send.&quot; The past tense form &quot;sent&quot; has been used since Old English and is one of the many irregular verb forms that have survived into modern English.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sent&quot;</strong> is the correct past tense of &quot;send&quot; - it&apos;s an irregular verb!
          <br />
          <strong>&quot;Sended&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;send&quot; is irregular, so it&apos;s &quot;sent&quot; not &quot;sended&quot;!</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Sent</strong> is the correct past tense of &quot;send&quot;. It means to have dispatched or transmitted something. The misspelling &quot;sended&quot; is never correct. Always use &quot;sent&quot; when referring to the past action of sending.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
