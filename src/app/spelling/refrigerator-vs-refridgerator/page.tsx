import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Refrigerator vs Refridgerator - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;refrigerator&quot; and &quot;refridgerator&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RefrigeratorVsRefridgeratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Refrigerator vs Refridgerator
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
            <span className="text-2xl font-bold text-blue-600">&quot;Refrigerator&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Refridgerator&quot; is always incorrect - remember the &quot;er&quot; in &quot;refrigerator&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Refridgerator</h3>
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
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Refrigerator</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;a cooling appliance for food storage.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Refrigerator&quot; (Noun)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Means &quot;cooling appliance&quot;</li>
                <li>• Has &quot;er&quot; in the middle</li>
                <li>• Related to &quot;refrigerate&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Refridgerator&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;e&quot;</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;The <strong>refrigerator</strong> keeps food cold.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Check the <strong>refrigerator</strong> for leftovers.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Buy a new <strong>refrigerator</strong> this week.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;Clean the <strong>refrigerator</strong> regularly.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>refridgerator</strong> keeps food cold&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigerator&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Check the <strong>refridgerator</strong> for leftovers&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigerator&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Buy a new <strong>refridgerator</strong> this week&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigerator&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Clean the <strong>refridgerator</strong> regularly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;refrigerator&quot;</p>
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">ER Rule</h3>
              <p className="text-blue-800">&quot;Refrigerator&quot; has &quot;er&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think Refrigerate</h3>
              <p className="text-indigo-800">&quot;Refrigerate&quot; + &quot;or&quot; = &quot;refrigerator&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;refrigerator&quot; to build muscle memory</p>
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
                <li>• <strong>Refrigerator door</strong> - the opening part</li>
                <li>• <strong>Refrigerator temperature</strong> - how cold it is</li>
                <li>• <strong>Refrigerator repair</strong> - fixing it</li>
                <li>• <strong>Refrigerator maintenance</strong> - keeping it working</li>
                <li>• <strong>Refrigerator capacity</strong> - how much it holds</li>
                <li>• <strong>Refrigerator warranty</strong> - protection plan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The refrigerator is cold&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A refrigerator&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;New refrigerator&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;In the refrigerator&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Buy refrigerator&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many refrigerators&quot;</li>
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
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people confuse &quot;refrigerator&quot; and &quot;refridgerator&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;e&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;refridg&quot; to &quot;erator.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;refrigerator&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Refrigerator&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;refrigerator&quot; and &quot;refridgerator&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Refrigerator&quot; is the correct spelling meaning &quot;a cooling appliance for food storage.&quot; &quot;Refridgerator&quot; is missing the &quot;e&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;refrigerator&quot; always about food storage?</h3>
              <p className="text-lg text-gray-700">A: While &quot;refrigerator&quot; often refers to food storage, it can also describe medical storage, laboratory equipment, and any cooling device that maintains low temperatures.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;refrigerate&quot; - &quot;refrigerator&quot; has &quot;er&quot; in the middle. Remember: &quot;Refrigerate&quot; + &quot;or.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;refrigerator&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: fridge, icebox, cooler, chiller, and cold storage. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;refrigerator&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Refrigerator&quot; is used in academic writing, business communication, casual conversation, and any discussion about cooling appliances or food storage.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;refrigerator&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Refrigerator&quot; comes from Latin &quot;refrigerare&quot; meaning &quot;to cool&quot; or &quot;to make cold,&quot; which is related to &quot;refrigerate&quot; meaning &quot;to cool.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Is &quot;refrigerator&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Refrigerator&quot; follows a regular pattern. It&apos;s formed by adding &quot;or&quot; to the verb &quot;refrigerate,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How can I avoid spelling &quot;refrigerator&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;refrigerate + or,&quot; and always proofread your work. The &quot;e&quot; in &quot;er&quot; is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between a refrigerator and a freezer?</h3>
              <p className="text-lg text-gray-700">A: A refrigerator keeps food cool (above freezing), while a freezer keeps food frozen (below freezing). Many modern appliances combine both functions.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Refrigerator&quot;</strong> has &quot;er&quot; in the middle and means &quot;cooling appliance.&quot; 
          <br />
          <strong>&quot;Refridgerator&quot;</strong> is missing the &quot;e&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REFRIGERATE + OR&quot; - &quot;refrigerator&quot; has &quot;er&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
