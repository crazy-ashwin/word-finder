import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Susceptible vs Succeptible - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;susceptible&quot; vs &quot;succeptible&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SusceptibleVsSucceptiblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Susceptible vs Succeptible
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Susceptible&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Succeptible&quot; is always incorrect - remember the &quot;cep&quot; in &quot;susceptible&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Succeptible</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Susceptible</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;easily affected or influenced.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sus&quot; (Prefix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Starts the word</li>
                <li>• Like &quot;suspect&quot;</li>
                <li>• Common prefix</li>
                <li>• Not &quot;suc&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Cep&quot; (Core)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Middle section</li>
                <li>• Like &quot;accept&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;ccep&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ible&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Adjective ending</li>
                <li>• Like &quot;possible&quot;</li>
                <li>• Common suffix</li>
                <li>• Easy to remember</li>
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
                <p className="text-lg text-green-800">&quot;Children are <strong>susceptible</strong> to colds.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He&apos;s <strong>susceptible</strong> to flattery.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The area is <strong>susceptible</strong> to flooding.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She&apos;s <strong>susceptible</strong> to suggestion.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Children are <strong>succeptible</strong> to colds&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He&apos;s <strong>succeptible</strong> to flattery&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The area is <strong>succeptible</strong> to flooding&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She&apos;s <strong>succeptible</strong> to suggestion&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;susceptible&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">CEP Rule</h3>
              <p className="text-yellow-800">&quot;Susceptible&quot; has &quot;cep&quot; like &quot;accept&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Accept</h3>
              <p className="text-blue-800">&quot;Susceptible&quot; = &quot;cep&quot; like &quot;accept&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;susceptible&quot; to build muscle memory</p>
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
                <li>• <strong>Susceptible to disease</strong> - easily infected</li>
                <li>• <strong>Susceptible to influence</strong> - easily swayed</li>
                <li>• <strong>Susceptible to damage</strong> - easily harmed</li>
                <li>• <strong>Susceptible to change</strong> - easily modified</li>
                <li>• <strong>Susceptible to suggestion</strong> - easily persuaded</li>
                <li>• <strong>Susceptible to pressure</strong> - easily affected</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The susceptible child&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The area is susceptible&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More susceptible&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most susceptible&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Susceptibly influenced&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The susceptible&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;susceptible&quot; and &quot;succeptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that &quot;cep&quot; and &quot;ccep&quot; can sound similar. Many people don&apos;t realize that &quot;susceptible&quot; has &quot;cep&quot; like &quot;accept.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;susceptible&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Susceptible&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; comes from Latin &quot;susceptibilis&quot; meaning &quot;capable of receiving&quot; and is related to words like &quot;accept&quot; and &quot;receive.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;susceptible&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;susceptible&quot; has &quot;cep&quot; (like &quot;accept&quot;), and emphasize that &quot;succeptible&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: vulnerable, prone, liable, sensitive, impressionable, and receptive. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;susceptible&quot; be used in medical contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Susceptible&quot; is very common in medical contexts, especially when referring to patients who are easily affected by certain conditions or treatments.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;susceptible&quot; and &quot;vulnerable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; often implies being easily affected or influenced, while &quot;vulnerable&quot; refers to being open to attack or harm.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;susceptible&quot; as having &quot;cep&quot; like other words: susceptible, accept, except. The &quot;cep&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: succeptible, suscceptible, susceptable, and suscceptable. The correct spelling always has &quot;cep.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;susceptible&quot; used in environmental contexts?</h3>
              <p className="text-lg text-gray-700">A: In environmental contexts, &quot;susceptible&quot; refers to areas or species that are easily affected by climate change, pollution, or other environmental factors.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between susceptible and sensitive?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; implies being easily affected or influenced by something, while &quot;sensitive&quot; refers to being responsive to stimuli or easily offended.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;susceptible&quot; with &quot;ccep&quot; instead of &quot;cep&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often add an extra &quot;c&quot; because they may not pronounce the word clearly or confuse it with other words that have double consonants, but &quot;susceptible&quot; specifically uses &quot;cep.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;susceptible&quot; used in psychological contexts?</h3>
              <p className="text-lg text-gray-700">A: In psychological contexts, &quot;susceptible&quot; refers to individuals who are easily influenced by suggestion, persuasion, or psychological manipulation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;susceptible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Susceptible&quot; can mean: easily affected or influenced, capable of receiving or admitting, liable to be affected by, or open to external influences.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Susceptible&quot;</strong> has &quot;cep&quot; and means &quot;easily affected or influenced.&quot; 
          <br />
          <strong>&quot;Succeptible&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUS + CEP + TIBLE = SUSCEPTIBLE&quot;</p>
        </div>
      </div>
    </div>
  )
}
