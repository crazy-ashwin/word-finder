import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Roller vs Rooler - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;roller&quot; and &quot;rooler&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RollerVsRoolerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Roller vs Rooler
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Roller&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rooler&quot; is always incorrect - remember to include the &quot;l&quot; in &quot;roller&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rooler</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Roller</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a cylindrical object that rolls&quot; or &quot;someone who rolls.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Roll&quot; (Base)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Action verb</li>
                <li>• Starts the word</li>
                <li>• Must be included</li>
                <li>• Cannot be dropped</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Roller&quot; (Complete)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Means &quot;one who rolls&quot;</li>
                <li>• Contains &quot;l&quot; sound</li>
                <li>• Complete word form</li>
                <li>• Used for description</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Common Mistake</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• People drop the &quot;l&quot;</li>
                <li>• &quot;Rooler&quot; is incomplete</li>
                <li>• Missing consonant sound</li>
                <li>• Always include &quot;l&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>roller</strong> coaster was thrilling.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She used a paint <strong>roller</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>roller</strong> skates were fun.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He is a great <strong>roller</strong> of dice.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rooler</strong> coaster was thrilling&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roller&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She used a paint <strong>rooler</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roller&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rooler</strong> skates were fun&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roller&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He is a great <strong>rooler</strong> of dice&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;roller&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Complete Word</h3>
              <p className="text-yellow-800">Never drop the &quot;l&quot; sound</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Complete</h3>
              <p className="text-blue-800">Roller = complete word</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Write It Out</h3>
              <p className="text-teal-800">Practice writing &quot;roller&quot; to build muscle memory</p>
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
                <li>• <strong>Roller coaster</strong> - amusement ride</li>
                <li>• <strong>Paint roller</strong> - painting tool</li>
                <li>• <strong>Roller skates</strong> - skating equipment</li>
                <li>• <strong>Roller derby</strong> - contact sport</li>
                <li>• <strong>Roller rink</strong> - skating venue</li>
                <li>• <strong>Roller bearing</strong> - mechanical part</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The roller is smooth&quot;</li>
                <li>• <strong>Agent noun:</strong> &quot;One who rolls&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Roller-coaster&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Rollers&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Roller action&quot;</li>
                <li>• <strong>Verb form:</strong> &quot;To roll&quot;</li>
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
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rooler&quot; instead of &quot;roller&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from not understanding that &quot;roller&quot; contains the &quot;l&quot; consonant sound. People may accidentally drop the &quot;l&quot; when writing quickly, creating the incomplete &quot;rooler&quot; spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;roller&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Roller&quot; is perfectly acceptable in formal writing, technical documents, and professional communication. It&apos;s the standard English spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the consonant sound rule for spelling?</h3>
              <p className="text-lg text-gray-700">A: The word &quot;roller&quot; contains the &quot;l&quot; consonant sound, which must be preserved in the spelling. When writing the word, the complete pronunciation including the &quot;l&quot; sound should be maintained.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;roller&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rooler&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the complete word: &quot;Roller&quot; contains the &quot;l&quot; sound, and this must be preserved in the spelling. Remember: &quot;ROLLER&quot; includes the &quot;L&quot; - don&apos;t drop any letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;roller&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: cylinder, wheel, drum, spindle, and when used as an agent noun: one who rolls, rolling device, or rolling tool.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;roller&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Roller&quot; is often used metaphorically to describe smooth, continuous movement or action, such as &quot;roller coaster of emotions&quot; or &quot;roller coaster ride.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;roller&quot; and &quot;rooler&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roller&quot; is the correct English word meaning &quot;a cylindrical object that rolls&quot; or &quot;someone who rolls,&quot; while &quot;rooler&quot; is an incorrect spelling that doesn&apos;t exist in English. The &quot;l&quot; sound is essential.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Do all words with &quot;l&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Most words maintain their consonant sounds in spelling. The &quot;l&quot; in &quot;roller&quot; is part of the word&apos;s pronunciation and must be preserved. This applies to most English words with similar consonant patterns.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the etymology of &quot;roller&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Roller&quot; comes from the verb &quot;roll,&quot; which has Germanic origins. The suffix &quot;-er&quot; is added to indicate &quot;one who rolls&quot; or &quot;that which rolls,&quot; maintaining its spelling throughout history.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;roller&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: While &quot;roller&quot; is primarily a noun, the base form &quot;roll&quot; is the verb. &quot;Roller&quot; describes the tool, device, or person that performs the rolling action.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Roller&quot;</strong> includes the &quot;l&quot; sound.
          <br />
          <strong>&quot;Rooler&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;ROLLER&quot; includes the &quot;L&quot;</p>
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
            <li><a href="/spelling/roommate-vs-romate" className="hover:text-blue-600 underline">Roommate vs Romate</a></li>
            <li><a href="/spelling/roofs-vs-roofes" className="hover:text-blue-600 underline">Roofs vs Roofes</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/romantic-vs-romatic" className="hover:text-green-600 underline">Romantic vs Romatic</a></li>
            <li><a href="/spelling/rivalry-vs-rivarly" className="hover:text-green-600 underline">Rivalry vs Rivarly</a></li>
            <li><a href="/spelling/roguish-vs-rogueish" className="hover:text-green-600 underline">Roguish vs Rogueish</a></li>
            <li><a href="/spelling/roofs-vs-rofs" className="hover:text-green-600 underline">Roofs vs Rofs</a></li>
            <li><a href="/spelling/running-vs-runing" className="hover:text-green-600 underline">Running vs Runing</a></li>
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
