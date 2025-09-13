import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sense vs Sence - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sense&quot; and &quot;sence&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SenseVsSencePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Sense vs Sence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Sense&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sence&quot; is always incorrect - remember &quot;sense&quot; ends with &quot;se&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sence</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Sense</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;perception&quot; or &quot;understanding.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Sense&quot; (Correct)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;perception&quot;</li>
                <li>• Ends with &quot;se&quot;</li>
                <li>• Latin origin: &quot;sensus&quot;</li>
                <li>• Used as noun and verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Sence&quot; (Wrong)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Ends with &quot;ce&quot;</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• &quot;Sence&quot; is not a word</li>
                <li>• Wrong ending letters</li>
                <li>• Changes pronunciation</li>
                <li>• Breaks word structure</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;That makes perfect <strong>sense</strong>.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;I can <strong>sense</strong> trouble ahead.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Use your common <strong>sense</strong>.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;He has a great <strong>sense</strong> of style.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That makes perfect <strong>sence</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I can <strong>sence</strong> trouble ahead&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Use your common <strong>sence</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has a great <strong>sence</strong> of style&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">SE Ending Rule</h3>
              <p className="text-yellow-800">&quot;Sense&quot; ends with &quot;se&quot; - think &quot;sen-SE&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Logic</h3>
              <p className="text-blue-800">&quot;Sense&quot; = logic, &quot;Sence&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;sense&quot; to build muscle memory</p>
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
                <li>• <strong>Common sense</strong> - practical wisdom</li>
                <li>• <strong>Make sense</strong> - be logical</li>
                <li>• <strong>Sense of wonder</strong> - feeling of amazement</li>
                <li>• <strong>Horse sense</strong> - practical intelligence</li>
                <li>• <strong>Sense and sensibility</strong> - reason and emotion</li>
                <li>• <strong>In every sense</strong> - completely</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;That makes sense&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I can sense it&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sense is crucial&quot;</li>
                <li>• <strong>Object:</strong> &quot;Use your sense&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Nonsense&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Sense&apos;s importance&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people misspell &quot;sense&quot; as &quot;sence&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs because people confuse the ending with words that end in &quot;-ence&quot; like &quot;defence&quot; or &quot;fence.&quot; However, &quot;sense&quot; ends with &quot;-se.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Is &quot;sence&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sence&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What words do end with &quot;-ence&quot;?</h3>
              <p className="text-lg text-gray-700">A: Many words end with &quot;-ence&quot; such as: defence, fence, hence, pence,rence, and silence. But &quot;sense&quot; is not one of them - it ends with &quot;-se.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember that &quot;sense&quot; ends with &quot;se&quot; just like &quot;house,&quot; &quot;mouse,&quot; or &quot;loose.&quot; Think of it as &quot;sen-SE&quot; to emphasize the correct ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are the different types of &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: There are physical senses (sight, hearing, smell, taste, touch), cognitive sense (understanding), practical sense (wisdom), and emotional sense (feeling or intuition).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the origin of the word &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sense&quot; comes from the Latin &quot;sensus,&quot; meaning &quot;feeling&quot; or &quot;perception.&quot; It entered English through Old French and has maintained its spelling for centuries.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;sense&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! We use &quot;sense&quot; metaphorically in phrases like &quot;sense of justice,&quot; &quot;sense of humor,&quot; &quot;sense of purpose,&quot; or &quot;business sense.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;sense&quot; and &quot;sensibility&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sense&quot; refers to perception or understanding, while &quot;sensibility&quot; refers to emotional responsiveness or refined sensitivity to beauty and emotion.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Are there any tricks to avoid this misspelling?</h3>
              <p className="text-lg text-gray-700">A: Yes! Remember that &quot;sense&quot; rhymes with &quot;dense&quot; and &quot;tense&quot; - all end with &quot;-nse.&quot; This can help you remember the correct spelling pattern.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sense&quot;</strong> ends with &quot;se&quot; and means &quot;perception&quot; or &quot;understanding.&quot; 
          <br />
          <strong>&quot;Sence&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sen-SE&quot; - remember the &quot;se&quot; ending!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
