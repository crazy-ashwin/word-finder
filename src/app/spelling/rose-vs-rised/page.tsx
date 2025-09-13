import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rose vs Rised - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rose&quot; and &quot;rised&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RoseVsRisedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
          Rose vs Rised
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
            <span className="text-2xl font-bold text-green-600">&quot;Rose&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rised&quot; is always incorrect - remember &quot;rise&quot; is an irregular verb!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rised</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rose</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;past tense of rise&quot; or &quot;a flower.&quot;
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
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Rise&quot; (Present)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;to go up&quot;</li>
                <li>• Present tense verb</li>
                <li>• Base form of the word</li>
                <li>• Used for current action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Rose&quot; (Past)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Means &quot;went up&quot;</li>
                <li>• Past tense of &quot;rise&quot;</li>
                <li>• Irregular verb form</li>
                <li>• Used for past action</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Common Mistake</h3>
              <ul className="text-red-800 space-y-2">
                <li>• People use &quot;rised&quot;</li>
                <li>• &quot;Rised&quot; is never correct</li>
                <li>• Always use &quot;rose&quot;</li>
                <li>• Follow irregular verb rules</li>
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
                <p className="text-lg text-green-800">&quot;The sun <strong>rose</strong> this morning.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She <strong>rose</strong> from her chair.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The bread <strong>rose</strong> in the oven.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He <strong>rose</strong> to the challenge.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sun <strong>rised</strong> this morning&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rose&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>rised</strong> from her chair&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rose&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bread <strong>rised</strong> in the oven&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rose&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He <strong>rised</strong> to the challenge&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rose&quot;</p>
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
              <p className="text-yellow-800">Rise is irregular: rise → rose → risen</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Think Flower</h3>
              <p className="text-pink-800">A rose flower helps remember the spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Write It Out</h3>
              <p className="text-rose-800">Practice writing &quot;rose&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Proofread</h3>
              <p className="text-red-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Rise to the occasion</strong> - meet a challenge</li>
                <li>• <strong>Rise above</strong> - overcome difficulties</li>
                <li>• <strong>Rise and shine</strong> - wake up</li>
                <li>• <strong>Rise to power</strong> - gain authority</li>
                <li>• <strong>Rise to fame</strong> - become famous</li>
                <li>• <strong>Rise to the top</strong> - achieve success</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past tense:</strong> &quot;I rose early&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;I have risen&quot;</li>
                <li>• <strong>Present tense:</strong> &quot;I rise early&quot;</li>
                <li>• <strong>Present participle:</strong> &quot;I am rising&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Rising early is good&quot;</li>
                <li>• <strong>Infinitive:</strong> &quot;To rise early&quot;</li>
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
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Why do people use &quot;rised&quot; instead of &quot;rose&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the fact that many English verbs follow the regular pattern of adding &quot;ed&quot; for past tense (like &quot;walk&quot; → &quot;walked&quot;). However, &quot;rise&quot; is an irregular verb that doesn&apos;t follow this pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rose&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Rose&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English past tense form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;rise&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rise&quot; comes from Old English &quot;risan&quot; meaning &quot;to rise&quot; or &quot;to get up.&quot; The word has maintained its irregular conjugation throughout English history, following the pattern: rise → rose → risen.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rose&quot; is the standard form across all English-speaking regions. The spelling &quot;rised&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;rise&quot; as having an irregular past tense. Remember the pattern: &quot;Rise&quot; (present) → &quot;Rose&quot; (past) → &quot;Risen&quot; (past participle). The word changes form, not just adds &quot;ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;rise&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: ascend, climb, go up, mount, scale, soar, and when used metaphorically: emerge, appear, develop, and increase.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;rose&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rose&quot; can function as a noun meaning &quot;a flower&quot; (the past tense of rise is spelled the same way). Context determines the meaning: &quot;The sun rose&quot; vs &quot;I picked a rose.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;rise&quot; and &quot;rose&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rise&quot; is the present tense (used for current actions), while &quot;rose&quot; is the simple past tense (used for completed actions). Example: &quot;I rise early&quot; vs &quot;I rose early yesterday.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there other irregular verbs like &quot;rise&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many common verbs are irregular, such as: go → went, see → saw, come → came, take → took, give → gave, and write → wrote. It&apos;s important to learn these patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Can &quot;rise&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rise&quot; is often used metaphorically to describe success, such as &quot;rise to power&quot; or &quot;rise to fame.&quot; It can also describe overcoming challenges or improving situations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the difference between &quot;rise&quot; and &quot;raise&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rise&quot; is intransitive (doesn&apos;t take an object) meaning &quot;to go up,&quot; while &quot;raise&quot; is transitive (takes an object) meaning &quot;to lift something up.&quot; Example: &quot;The sun rises&quot; vs &quot;I raise my hand.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rose&quot;</strong> is the irregular past tense of &quot;rise.&quot;
          <br />
          <strong>&quot;Rised&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RISE → ROSE → RISEN&quot;</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Rose</strong> is the correct past tense of &quot;rise&quot;. It means to have moved upward or increased. The misspelling &quot;rised&quot; is never correct. Always use &quot;rose&quot; when referring to the past action of rising.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
