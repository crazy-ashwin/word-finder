import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Registered vs Registred - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;registered&quot; and &quot;registred&quot; with our comprehensive spelling guide.',
}

export default function RegisteredVsRegistredPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Registered vs Registred
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-violet-600">&quot;Registered&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Registred&quot; is always incorrect - remember the &quot;er&quot; in &quot;registered&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Registred</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-violet-50 to-violet-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-violet-800 mb-4">Registered</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-violet-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-violet-700 leading-relaxed">
                This is the proper spelling meaning &quot;officially recorded&quot; or &quot;enrolled.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-violet-50 border-violet-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">ER Rule</h3>
              <p className="text-violet-800">&quot;Registered&quot; has &quot;er&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Think Register</h3>
              <p className="text-purple-800">&quot;Register&quot; + &quot;ed&quot; = &quot;registered&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Write It Out</h3>
              <p className="text-fuchsia-800">Practice writing &quot;registered&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people confuse &quot;registered&quot; and &quot;registred&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;e&quot; thinking it follows a different pattern.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;register&quot; - &quot;registered&quot; has &quot;er&quot; in the middle. Remember: &quot;Register&quot; + &quot;ed.&quot;</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the difference between &quot;registered&quot; and &quot;registred&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Registered&quot; is the correct spelling meaning &quot;officially recorded.&quot; &quot;Registred&quot; is missing the &quot;e&quot; and is not a real word.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Registered&quot;</strong> has &quot;er&quot; in the middle and means &quot;officially recorded.&quot; 
          <br />
          <strong>&quot;Registred&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REGISTER + ED&quot; - &quot;registered&quot; has &quot;er&quot; in the middle!</p>
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
            <li><a href="/spelling/registration-vs-registeration" className="text-blue-700 hover:text-blue-900 underline">Registration vs Registeration</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/remembered-vs-remembred" className="text-purple-700 hover:text-purple-900 underline">Remembered vs Remembred</a></li>
            <li><a href="/spelling/considered-vs-considred" className="text-purple-700 hover:text-purple-900 underline">Considered vs Considred</a></li>
            <li><a href="/spelling/delivered-vs-delivred" className="text-purple-700 hover:text-purple-900 underline">Delivered vs Delivred</a></li>
            <li><a href="/spelling/covered-vs-covred" className="text-purple-700 hover:text-purple-900 underline">Covered vs Covred</a></li>
            <li><a href="/spelling/entered-vs-entred" className="text-purple-700 hover:text-purple-900 underline">Entered vs Entred</a></li>
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
