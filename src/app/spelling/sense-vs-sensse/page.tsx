import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sense vs Sensse - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sense&quot; and &quot;sensse&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SenseVsSenssePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
          Sense vs Sensse
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-emerald-600">&quot;Sense&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sensse&quot; is always incorrect - remember &quot;sense&quot; has only one &quot;s&quot; at the end!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sensse</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">Sense</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-emerald-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-emerald-700 leading-relaxed">
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
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Sense&quot; (Correct)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Means &quot;perception&quot;</li>
                <li>• One &quot;s&quot; at the end</li>
                <li>• Latin origin: &quot;sensus&quot;</li>
                <li>• Used as noun and verb</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sensse&quot; (Wrong)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Extra &quot;s&quot; at the end</li>
                <li>• Not a real word</li>
                <li>• Common error</li>
                <li>• Never acceptable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Why It&apos;s Wrong</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• &quot;Sensse&quot; is not a word</li>
                <li>• Double &quot;s&quot; is incorrect</li>
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
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;That makes perfect <strong>sense</strong>.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;I can <strong>sense</strong> something is wrong.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;Use your common <strong>sense</strong>.&quot;</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-emerald-800">&quot;The five <strong>senses</strong> are important.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;That makes perfect <strong>sensse</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I can <strong>sensse</strong> something is wrong&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Use your common <strong>sensse</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;sense&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The five <strong>sensses</strong> are important&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;senses&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single S Rule</h3>
              <p className="text-yellow-800">&quot;Sense&quot; has only one &quot;s&quot; at the end</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Logic</h3>
              <p className="text-blue-800">&quot;Sense&quot; = logic, &quot;Sensse&quot; = wrong</p>
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
                <li>• <strong>Sixth sense</strong> - intuition</li>
                <li>• <strong>Sense of humor</strong> - ability to find things funny</li>
                <li>• <strong>Sense of direction</strong> - navigation ability</li>
                <li>• <strong>In a sense</strong> - in a way</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;That makes sense&quot;</li>
                <li>• <strong>Verb:</strong> &quot;I can sense danger&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Sense is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;Use your sense&quot;</li>
                <li>• <strong>Plural:</strong> &quot;The five senses&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Nonsense&quot;</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Why do people misspell &quot;sense&quot; as &quot;sensse&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling often occurs when people overthink the spelling or confuse it with other words that end in double letters. &quot;Sense&quot; is simple - it ends with just one &quot;s&quot; and one &quot;e.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;sensse&quot; ever acceptable in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sensse&quot; is never correct in any context. It&apos;s considered a spelling error in all forms of English writing, whether formal or informal.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the etymology of &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sense&quot; comes from the Latin word &quot;sensus&quot; meaning &quot;feeling&quot; or &quot;perception.&quot; The English word has maintained its simple spelling throughout its evolution.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;sense&quot; be used as both a noun and verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! As a noun: &quot;That makes sense.&quot; As a verb: &quot;I can sense something.&quot; This dual function makes it a versatile word in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are the different meanings of &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sense&quot; can mean: physical perception (sight, hearing, etc.), understanding or meaning, practical wisdom (common sense), or intuition (sixth sense).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What are some synonyms for &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: perception, feeling, understanding, meaning, logic, reason, awareness, and intuition.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How do I use &quot;sense&quot; in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Physical: &quot;My sense of smell is strong.&quot; Understanding: &quot;The sense of the message.&quot; Logic: &quot;That makes sense.&quot; Intuition: &quot;I sense danger.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the plural of &quot;sense&quot;?</h3>
              <p className="text-lg text-gray-700">A: The plural is &quot;senses&quot; (adding -es). Example: &quot;The five senses are sight, hearing, smell, taste, and touch.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Are there any related words I should know?</h3>
              <p className="text-lg text-gray-700">A: Related words include: sensible (practical), sensitive (easily affected), sensory (relating to senses), sensation (feeling), and nonsense (without meaning).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sense&quot;</strong> has only one &quot;s&quot; at the end and means &quot;perception&quot; or &quot;understanding.&quot; 
          <br />
          <strong>&quot;Sensse&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;sen-S-e&quot; - just one &quot;s&quot; at the end!</p>
        </div>
      </div>
    </div>
  )
}
