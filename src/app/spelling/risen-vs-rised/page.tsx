import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Risen vs Rised - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;risen&quot; and &quot;rised&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RisenVsRisedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Risen vs Rised
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Risen&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rised&quot; is always incorrect - remember to use &quot;risen&quot; for the past participle!
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Risen</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling for the past participle of &quot;rise.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Rise&quot; (Base)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Present tense verb</li>
                <li>• Irregular verb</li>
                <li>• Past: rose</li>
                <li>• Past participle: risen</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Risen&quot; (Correct)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Past participle form</li>
                <li>• Used with helping verbs</li>
                <li>• Perfect tenses</li>
                <li>• Passive voice</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Common Mistake</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• People add &quot;ed&quot;</li>
                <li>• &quot;Rised&quot; is incorrect</li>
                <li>• Wrong verb form</li>
                <li>• Always use &quot;risen&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The sun has <strong>risen</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She had <strong>risen</strong> early.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The bread has <strong>risen</strong> perfectly.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;They have <strong>risen</strong> to the challenge.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The sun has <strong>rised</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;risen&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She had <strong>rised</strong> early&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;risen&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The bread has <strong>rised</strong> perfectly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;risen&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They have <strong>rised</strong> to the challenge&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;risen&quot;</p>
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
              <p className="text-yellow-800">Rise is irregular: rise, rose, risen</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Complete</h3>
              <p className="text-green-800">Risen = complete form</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;risen&quot; to build muscle memory</p>
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
                <li>• <strong>Sun has risen</strong> - morning arrival</li>
                <li>• <strong>Bread has risen</strong> - baking process</li>
                <li>• <strong>Risen to the occasion</strong> - met challenge</li>
                <li>• <strong>Risen from the dead</strong> - resurrection</li>
                <li>• <strong>Risen above</strong> - overcome difficulty</li>
                <li>• <strong>Risen in popularity</strong> - increased fame</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Past participle:</strong> &quot;has risen&quot;</li>
                <li>• <strong>Perfect tense:</strong> &quot;had risen&quot;</li>
                <li>• <strong>Passive voice:</strong> &quot;was risen&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;risen bread&quot;</li>
                <li>• <strong>Noun form:</strong> &quot;the risen&quot;</li>
                <li>• <strong>Base form:</strong> &quot;to rise&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rised&quot; instead of &quot;risen&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding that &quot;rise&quot; is an irregular verb. People may incorrectly apply the regular verb pattern of adding &quot;-ed&quot; to create &quot;rised,&quot; but the correct past participle is &quot;risen.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;risen&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Risen&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English past participle form of the verb &quot;rise.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the irregular verb pattern for &quot;rise&quot;?</h3>
              <p className="text-lg text-gray-700">A: The verb &quot;rise&quot; follows this pattern: present tense &quot;rise,&quot; past tense &quot;rose,&quot; and past participle &quot;risen.&quot; It doesn&apos;t follow the regular pattern of adding &quot;-ed.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;risen&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rised&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the irregular verb pattern: &quot;rise, rose, risen.&quot; The past participle always ends in &quot;-en,&quot; not &quot;-ed.&quot; Remember: &quot;RISEN&quot; has the &quot;EN&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;risen&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: ascended, climbed, elevated, increased, grown, advanced, improved, and when used metaphorically: emerged, appeared, or materialized.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;risen&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Risen&quot; is often used metaphorically to describe overcoming challenges, improving situations, or emerging from difficult circumstances. It can describe both physical and abstract concepts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;risen&quot; and &quot;rised&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Risen&quot; is the correct English past participle meaning &quot;moved upward&quot; or &quot;increased,&quot; while &quot;rised&quot; is an incorrect spelling that doesn&apos;t exist in English. The irregular verb form must be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Do all verbs follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: No, only irregular verbs follow this pattern. Regular verbs add &quot;-ed&quot; for both past tense and past participle. Examples of irregular verbs include: rise/rose/risen, write/wrote/written, and drive/drove/driven.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;risen&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Risen&quot; comes from the Old English word &quot;risan,&quot; which meant &quot;to rise&quot; or &quot;to get up.&quot; The past participle form has maintained its spelling throughout the evolution of the English language.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;risen&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: While &quot;risen&quot; is primarily a past participle, it can be used as an adjective (e.g., &quot;risen bread&quot;) or in some contexts as a noun referring to those who have risen (e.g., &quot;the risen&quot;).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rise&quot;</strong> is irregular: <strong>rise, rose, risen</strong>.
          <br />
          <strong>&quot;Rised&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RISE, ROSE, RISEN&quot; - never &quot;rised&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/rotten-vs-roten" className="hover:text-blue-600 underline">Rotten vs Roten</a></li>
            <li><a href="/spelling/rose-vs-rised" className="hover:text-blue-600 underline">Rose vs Rised</a></li>
            <li><a href="/spelling/roommate-vs-roomate" className="hover:text-blue-600 underline">Roommate vs Roomate</a></li>
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-blue-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/roller-vs-rooler" className="hover:text-blue-600 underline">Roller vs Rooler</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/risen-vs-raisen" className="hover:text-green-600 underline">Risen vs Raisen</a></li>
            <li><a href="/spelling/rigid-vs-ridgid" className="hover:text-green-600 underline">Rigid vs Ridgid</a></li>
            <li><a href="/spelling/right-vs-rigth" className="hover:text-green-600 underline">Right vs Rigth</a></li>
            <li><a href="/spelling/ridiculous-vs-ridiculus" className="hover:text-green-600 underline">Ridiculous vs Ridiculus</a></li>
            <li><a href="/spelling/ridiculous-vs-ridiculos" className="hover:text-green-600 underline">Ridiculous vs Ridiculos</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/affect-vs-effect" className="hover:text-purple-600 underline">Affect vs Effect</a></li>
            <li><a href="/confusing-words/further-vs-farther" className="hover:text-purple-600 underline">Further vs Farther</a></li>
            <li><a href="/confusing-words/who-vs-whom" className="hover:text-purple-600 underline">Who vs Whom</a></li>
            <li><a href="/confusing-words/to-vs-too" className="hover:text-purple-600 underline">To vs Too</a></li>
            <li><a href="/confusing-words/bear-vs-bare" className="hover:text-purple-600 underline">Bear vs Bare</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
