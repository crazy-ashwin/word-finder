import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rarity vs Rarety - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rarity&quot; and &quot;rarety&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RarityVsRaretyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Rarity vs Rarety
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rarity&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rarety&quot; is always incorrect - remember the &quot;i&quot; in &quot;rarity&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rarety</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rarity</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the state of being rare&quot; or &quot;uncommon.&quot;
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Rarity&quot; (Correct)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Has an &quot;i&quot; at the end</li>
                <li>• From &quot;rare&quot; + &quot;-ity&quot;</li>
                <li>• Standard English</li>
                <li>• Used globally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Rarety&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing the &quot;i&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Key Differences</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Spelling: i vs no i</li>
                <li>• Meaning: Valid vs invalid</li>
                <li>• Usage: Common vs never</li>
                <li>• Origin: Rare + ity vs error</li>
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
                <p className="text-lg text-green-800">&quot;This coin is a great <strong>rarity</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rarity</strong> of this gem makes it valuable.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Such <strong>rarity</strong> is seldom seen.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>rarity</strong> of the species concerns scientists.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This coin is a great <strong>rarety</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rarity&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rarety</strong> of this gem makes it valuable&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rarity&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Such <strong>rarety</strong> is seldom seen&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rarity&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rarety</strong> of the species concerns scientists&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rarity&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">I for Item</h3>
              <p className="text-yellow-800">&quot;Rarity&quot; ends with &quot;i&quot; - rare item!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Rare-ity&quot;</h3>
              <p className="text-blue-800">Rarity = Rare + ity (state of being rare)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;rarity&quot; to build muscle memory</p>
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Phrases</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Great rarity</strong> - extreme uncommonness</li>
                <li>• <strong>Extreme rarity</strong> - very unusual</li>
                <li>• <strong>Historical rarity</strong> - uncommon in history</li>
                <li>• <strong>Natural rarity</strong> - uncommon in nature</li>
                <li>• <strong>Cultural rarity</strong> - uncommon culturally</li>
                <li>• <strong>Scientific rarity</strong> - uncommon scientifically</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rarity is impressive&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rarity makes it valuable&quot;</li>
                <li>• <strong>Object:</strong> &quot;We appreciate the rarity&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Rarity value&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s the rarity&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many rarities exist&quot;</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Rare</strong> - uncommon</li>
                <li>• <strong>Rarely</strong> - seldom</li>
                <li>• <strong>Rarefied</strong> - refined</li>
                <li>• <strong>Uncommon</strong> - not common</li>
                <li>• <strong>Scarce</strong> - limited</li>
                <li>• <strong>Unique</strong> - one of a kind</li>
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
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people misspell &quot;rarity&quot; as &quot;rarety&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;rarety&quot; often occurs because people forget the final &quot;i&quot; or confuse it with similar words. The word follows the pattern of &quot;rare&quot; + &quot;-ity.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rarity&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;rarity&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word used across all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the etymology of &quot;rarity&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rarity&quot; comes from &quot;rare&quot; meaning &quot;uncommon&quot; + the &quot;-ity&quot; suffix meaning &quot;state or quality.&quot; It means &quot;the state of being rare.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, the spelling &quot;rarity&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word: &quot;rare-i-ty.&quot; Emphasize the &quot;i&quot; sound at the end and have them practice writing it multiple times. Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;rarity&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: uncommonness, scarcity, infrequency, unusualness, exceptionality, and singularity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;rarity&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rarity&quot; is only used as a noun in standard English. The verb form would be &quot;rare&quot; or &quot;rarefy.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;rarity&quot; and &quot;scarcity&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rarity&quot; refers to the quality of being uncommon or unusual, while &quot;scarcity&quot; refers to a shortage or limited supply of something.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;rarity&quot; used in collecting?</h3>
              <p className="text-lg text-gray-700">A: In collecting, &quot;rarity&quot; refers to how uncommon an item is, which directly affects its value. Rarer items are typically more valuable.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the plural form of &quot;rarity&quot;?</h3>
              <p className="text-lg text-gray-700">A: The plural form is &quot;rarities&quot; (rarity + ies). This follows the standard English rule for nouns ending in consonant + y.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rarity&quot;</strong> has an &quot;i&quot; at the end and means &quot;the state of being rare&quot; or &quot;uncommon.&quot; 
          <br />
          <strong>&quot;Rarety&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Rarity = Rare + ity (state of being rare)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/technology-vs-tecnology" className="text-blue-700 hover:text-blue-900 underline">Technology vs Tecnology</a></li>
            <li><a href="/spelling/strength-vs-strengh" className="text-blue-700 hover:text-blue-900 underline">Strength vs Strengh</a></li>
            <li><a href="/spelling/biscuit-vs-bisquit" className="text-blue-700 hover:text-blue-900 underline">Biscuit vs Bisquit</a></li>
            <li><a href="/spelling/their-vs-thier" className="text-blue-700 hover:text-blue-900 underline">Their vs Thier</a></li>
            <li><a href="/spelling/weight-vs-weigth" className="text-blue-700 hover:text-blue-900 underline">Weight vs Weigth</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/too-vs-to" className="text-purple-700 hover:text-purple-900 underline">Too vs To</a></li>
            <li><a href="/spelling/your-vs-youre" className="text-purple-700 hover:text-purple-900 underline">Your vs You&apos;re</a></li>
            <li><a href="/spelling/its-vs-its" className="text-purple-700 hover:text-purple-900 underline">Its vs It&apos;s</a></li>
            <li><a href="/spelling/there-vs-their" className="text-purple-700 hover:text-purple-900 underline">There vs Their</a></li>
            <li><a href="/spelling/weather-vs-whether" className="text-purple-700 hover:text-purple-900 underline">Weather vs Whether</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/parts-of-speech" className="text-green-700 hover:text-green-900 underline">Parts of Speech</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/word-usage" className="text-green-700 hover:text-green-900 underline">Word Usage</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
