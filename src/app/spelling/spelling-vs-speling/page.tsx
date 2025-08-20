import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Spelling vs Speling - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;spelling&quot; and &quot;speling&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpellingVsSpelingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Spelling vs Speling
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
            <span className="text-2xl mr-3">📝</span>
            <span className="text-2xl font-bold text-indigo-600">&quot;Spelling&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Speling&quot; is always incorrect - remember the double &quot;l&quot; in &quot;spelling&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Speling</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-indigo-800 mb-4">Spelling</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-indigo-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-indigo-700 leading-relaxed">
                This is the proper spelling meaning &quot;the way words are written.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Spelling&quot; (Noun)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Has double &quot;l&quot;</li>
                <li>• Comes from &quot;spell&quot;</li>
                <li>• Means &quot;word writing&quot;</li>
                <li>• Describes language</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Spelling Rule</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;l&quot; doubles before &quot;ing&quot;</li>
                <li>• CVC rule applies</li>
                <li>• Similar to &quot;telling&quot;</li>
                <li>• Similar to &quot;selling&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Common Confusion</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• People forget double &quot;l&quot;</li>
                <li>• Think it&apos;s &quot;spel&quot; + &quot;ing&quot;</li>
                <li>• Pronunciation can be unclear</li>
                <li>• Need to remember rule</li>
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
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;Check your <strong>spelling</strong> before submitting.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;English <strong>spelling</strong> can be tricky.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;She has excellent <strong>spelling</strong> skills.&quot;</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <p className="text-lg text-indigo-800">&quot;The <strong>spelling</strong> bee was challenging.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Check your <strong>speling</strong> before submitting.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spelling&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;English <strong>speling</strong> can be tricky.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spelling&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She has excellent <strong>speling</strong> skills.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spelling&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>speling</strong> bee was challenging.&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;spelling&quot;</p>
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
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Double L Rule</h3>
              <p className="text-yellow-800">&quot;Spelling&quot; has double &quot;l&quot; like &quot;telling&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Think CVC Rule</h3>
              <p className="text-indigo-800">Spell + l + ing = spelling</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;spelling&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Proofread</h3>
              <p className="text-pink-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Spelling bee</strong> - spelling competition</li>
                <li>• <strong>Spelling test</strong> - spelling assessment</li>
                <li>• <strong>Spelling rules</strong> - spelling guidelines</li>
                <li>• <strong>Spelling mistakes</strong> - spelling errors</li>
                <li>• <strong>Spelling check</strong> - spelling verification</li>
                <li>• <strong>Spelling patterns</strong> - spelling regularities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The spelling is correct&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Spelling is important&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Spelling matters&quot;</li>
                <li>• <strong>Object:</strong> &quot;Check the spelling&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;Her spelling&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple spellings&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;spelling&quot; as &quot;speling&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from forgetting the double &quot;l&quot; rule. When adding &quot;-ing&quot; to words ending in a consonant-vowel-consonant pattern, the final consonant is doubled. Some people may also be influenced by unclear pronunciation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;spelling&quot; and &quot;spell&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spell&quot; is the base verb meaning &quot;to write or name the letters of a word,&quot; while &quot;spelling&quot; is the noun form meaning &quot;the way words are written&quot; or the gerund form of the verb.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Are there other words that double consonants before &quot;ing&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many English words follow this rule: telling, selling, running, swimming, sitting, getting, and putting all double the final consonant before adding &quot;-ing.&quot; This is the CVC doubling rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;spelling&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spelling&quot; is a standard English word that&apos;s perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the difference between &quot;spelling&quot; and &quot;grammar&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both relate to language, &quot;spelling&quot; refers specifically to how words are written and spelled, while &quot;grammar&quot; refers to the rules and structure of language, including sentence construction and word relationships.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember the CVC doubling rule: when a word ends in consonant-vowel-consonant and you add &quot;-ing,&quot; double the final consonant. So &quot;spell&quot; becomes &quot;spelling&quot; with double &quot;l.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are some synonyms for &quot;spelling&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: orthography, writing, lettering, and word formation. Each has slightly different nuances and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;speling&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;speling&quot; is never correct in English. It&apos;s always a spelling error. The correct form is always &quot;spelling&quot; with the double &quot;l&quot; before &quot;-ing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the etymology of &quot;spelling&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Spelling&quot; comes from the Old English word &quot;spellian&quot; meaning &quot;to tell&quot; or &quot;to relate.&quot; It evolved to mean &quot;to read letter by letter&quot; and then to its current meaning of writing words correctly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;spelling&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Spelling&quot; is often used metaphorically to mean &quot;explaining clearly&quot; or &quot;making something obvious.&quot; For example, &quot;Let me spell it out for you&quot; means &quot;Let me explain this clearly.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Spelling&quot;</strong> has double &quot;l&quot; before &quot;-ing&quot; and means &quot;the way words are written.&quot; 
          <br />
          <strong>&quot;Speling&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPELL + L + ING = SPELLING (CVC doubling rule)&quot;</p>
        </div>
      </div>
    </div>
  )
}
