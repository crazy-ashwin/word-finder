import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Refrigeration vs Refridgeration - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;refrigeration&quot; and &quot;refridgeration&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RefrigerationVsRefridgerationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Refrigeration vs Refridgeration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-teal-600">&quot;Refrigeration&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Refridgeration&quot; is always incorrect - remember the &quot;er&quot; in &quot;refrigeration&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Refridgeration</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Refrigeration</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                This is the proper spelling meaning &quot;the process of cooling or preserving.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Refrigeration&quot; (Noun)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;cooling process&quot;</li>
                <li>• Has &quot;er&quot; in the middle</li>
                <li>• Related to &quot;refrigerate&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Refridgeration&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;e&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Etymology</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• From Latin &quot;refrigerare&quot;</li>
                <li>• Related to &quot;refrigerate&quot;</li>
                <li>• Always has &quot;er&quot;</li>
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
            <h3 className="text-2xl font-bold text-teal-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;Modern <strong>refrigeration</strong> changed food storage.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;Commercial <strong>refrigeration</strong> systems are expensive.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;The <strong>refrigeration</strong> unit needs repair.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;Study <strong>refrigeration</strong> technology.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Modern <strong>refridgeration</strong> changed food storage&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigeration&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Commercial <strong>refridgeration</strong> systems are expensive&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigeration&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>refridgeration</strong> unit needs repair&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigeration&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Study <strong>refridgeration</strong> technology&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigeration&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">ER Rule</h3>
              <p className="text-teal-800">&quot;Refrigeration&quot; has &quot;er&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-cyan-900 mb-2">Think Refrigerate</h3>
              <p className="text-cyan-800">&quot;Refrigerate&quot; + &quot;ion&quot; = &quot;refrigeration&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Write It Out</h3>
              <p className="text-blue-800">Practice writing &quot;refrigeration&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">Proofread</h3>
              <p className="text-sky-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Commercial refrigeration</strong> - business cooling systems</li>
                <li>• <strong>Industrial refrigeration</strong> - large-scale cooling</li>
                <li>• <strong>Refrigeration technology</strong> - cooling science</li>
                <li>• <strong>Refrigeration system</strong> - cooling equipment</li>
                <li>• <strong>Refrigeration unit</strong> - cooling device</li>
                <li>• <strong>Refrigeration cycle</strong> - cooling process</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The refrigeration is efficient&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A refrigeration&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Modern refrigeration&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Refrigeration of&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Install refrigeration&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many refrigeration systems&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people confuse &quot;refrigeration&quot; and &quot;refridgeration&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;e&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;refridg&quot; to &quot;eration.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;refrigeration&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Refrigeration&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between &quot;refrigeration&quot; and &quot;refridgeration&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Refrigeration&quot; is the correct spelling meaning &quot;the process of cooling or preserving.&quot; &quot;Refridgeration&quot; is missing the &quot;e&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;refrigeration&quot; always about cooling?</h3>
              <p className="text-lg text-gray-700">A: While &quot;refrigeration&quot; often refers to cooling, it can also describe preservation, temperature control, climate control, and any process that maintains low temperatures.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;refrigerate&quot; - &quot;refrigeration&quot; has &quot;er&quot; in the middle. Remember: &quot;Refrigerate&quot; + &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some synonyms for &quot;refrigeration&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: cooling, chilling, freezing, preservation, temperature control, and climate control. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;refrigeration&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Refrigeration&quot; is used in academic writing, business communication, casual conversation, and any discussion about cooling systems or temperature control.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: What&apos;s the origin of the word &quot;refrigeration&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Refrigeration&quot; comes from Latin &quot;refrigerare&quot; meaning &quot;to cool&quot; or &quot;to make cold,&quot; which is related to &quot;refrigerate&quot; meaning &quot;to cool.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;refrigeration&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Refrigeration&quot; follows a regular pattern. It&apos;s formed by adding &quot;ion&quot; to the verb &quot;refrigerate,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I avoid spelling &quot;refrigeration&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;refrigerate + ion,&quot; and always proofread your work. The &quot;e&quot; in &quot;er&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the difference between refrigeration and air conditioning?</h3>
              <p className="text-lg text-gray-700">A: Refrigeration cools to below room temperature (for food storage), while air conditioning cools to room temperature (for comfort). Both use similar technology but different temperature ranges.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Refrigeration&quot;</strong> has &quot;er&quot; in the middle and means &quot;cooling process.&quot; 
          <br />
          <strong>&quot;Refridgeration&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REFRIGERATE + ION&quot; - &quot;refrigeration&quot; has &quot;er&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
