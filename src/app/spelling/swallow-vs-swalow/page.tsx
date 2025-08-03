import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Swallow vs Swalow - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;swallow&quot; vs &quot;swalow&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SwallowVsSwalowPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Swallow vs Swalow
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
            <span className="text-2xl font-bold text-green-600">&quot;Swallow&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Swalow&quot; is always incorrect - remember the double &quot;l&quot; in &quot;swallow&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Swalow</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s missing the second &quot;l&quot;.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Swallow</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to take food or liquid into the stomach.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sw&quot; (Prefix)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Starts the word</li>
                <li>• Common sound</li>
                <li>• Like &quot;swim&quot;</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;All&quot; (Middle)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Double &quot;l&quot;</li>
                <li>• Like &quot;wall&quot;</li>
                <li>• Common pattern</li>
                <li>• Not single &quot;l&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ow&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Ends the word</li>
                <li>• Like &quot;follow&quot;</li>
                <li>• Common ending</li>
                <li>• Easy to spell</li>
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
                <p className="text-lg text-green-800">&quot;Please <strong>swallow</strong> your medicine.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The bird <strong>swallowed</strong> the worm.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;I <strong>swallow</strong> my pride.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>swallowed</strong> hard before speaking.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Please <strong>swalow</strong> your medicine&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swallow&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bird <strong>swalowed</strong> the worm&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swallowed&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>swalow</strong> my pride&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swallow&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>swalowed</strong> hard&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;swallowed&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">LL Rule</h3>
              <p className="text-yellow-800">&quot;Swallow&quot; has double &quot;l&quot; like &quot;wall&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Double</h3>
              <p className="text-blue-800">&quot;Swallow&quot; = two L&apos;s, &quot;Swalow&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;swallow&quot; to build muscle memory</p>
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
                <li>• <strong>Swallow your pride</strong> - accept humiliation</li>
                <li>• <strong>Swallow hard</strong> - suppress emotion</li>
                <li>• <strong>Swallow whole</strong> - eat without chewing</li>
                <li>• <strong>Swallow the bait</strong> - fall for deception</li>
                <li>• <strong>Swallow the pill</strong> - accept bad news</li>
                <li>• <strong>Swallow the cost</strong> - pay the expense</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Verb:</strong> &quot;I swallow the food&quot;</li>
                <li>• <strong>Present:</strong> &quot;He swallows quickly&quot;</li>
                <li>• <strong>Past:</strong> &quot;She swallowed the pill&quot;</li>
                <li>• <strong>Past Participle:</strong> &quot;I have swallowed&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Swallowing is difficult&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To swallow medicine&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;swallow&quot; and &quot;swalow&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that many people don&apos;t realize &quot;swallow&quot; has a double &quot;l&quot;. They may hear it as a single &quot;l&quot; sound.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;swallow&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Swallow&quot; is perfectly acceptable in formal writing, medical contexts, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;swallow&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swallow&quot; comes from Old English &quot;swelgan&quot; meaning &quot;to swallow&quot; and is related to German &quot;schwelgen&quot; and Dutch &quot;zwelgen&quot; meaning the same thing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;swallow&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;swallow&quot; has double &quot;l&quot; in the middle (like &quot;wall&quot; and &quot;ball&quot;), and emphasize that &quot;swalow&quot; is missing a letter. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;swallow&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: ingest, consume, gulp, devour, eat, drink, and absorb. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;swallow&quot; be used in medical contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Swallow&quot; is very common in medical contexts, especially when referring to taking medication, swallowing difficulties, or throat-related conditions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;swallow&quot; and &quot;gulp&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swallow&quot; is a general term for taking food or liquid into the stomach, while &quot;gulp&quot; specifically refers to swallowing quickly or in large amounts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;swallow&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;swallow&quot; as having double &quot;l&quot; in the middle like other words: wall, ball, swallow. The double &quot;l&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;swallow&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: swalow, swallow, swallow, swallow, and swallow. The correct spelling always has double &quot;l&quot; in the middle.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;swallow&quot; used in figurative contexts?</h3>
              <p className="text-lg text-gray-700">A: In figurative contexts, &quot;swallow&quot; describes accepting difficult situations, suppressing emotions, or believing something without question.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between swallow and eat?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swallow&quot; refers specifically to the action of taking food or liquid into the stomach, while &quot;eat&quot; refers to the broader process of consuming food.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;swallow&quot; with single &quot;l&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often miss the double &quot;l&quot; because they may not pronounce it clearly or hear it as a single &quot;l&quot; sound, but &quot;swallow&quot; specifically has double &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;swallow&quot; used in ornithology contexts?</h3>
              <p className="text-lg text-gray-700">A: In ornithology contexts, &quot;swallow&quot; refers to a type of bird known for its graceful flight and ability to catch insects in mid-air.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;swallow&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Swallow&quot; can mean: to take food/liquid into the stomach, to accept something difficult, to suppress emotions, or refer to a type of bird.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Swallow&quot;</strong> has double &quot;l&quot; in the middle and means &quot;to take food or liquid into the stomach.&quot; 
          <br />
          <strong>&quot;Swalow&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SW + ALL + OW = SWALLOW&quot;</p>
        </div>
      </div>
    </div>
  )
} 