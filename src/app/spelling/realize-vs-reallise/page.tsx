import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Realize vs Reallise - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;realize&quot; and &quot;reallise&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RealizeVsReallisePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Realize vs Reallise
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between American and British English
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-8 rounded-2xl mb-10 border border-emerald-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🌍</span>
            <span className="text-2xl font-bold text-green-600">Both are Correct!</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Realize&quot; (American) vs &quot;Reallise&quot; (British) - regional spelling differences!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇺🇸</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Realize</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ AMERICAN</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                Standard American English spelling meaning &quot;to become aware of&quot; or &quot;to understand.&quot;
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Reallise</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">✅ BRITISH</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                Standard British English spelling with double &quot;l&quot; and &quot;s&quot; instead of &quot;z.&quot;
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Realize&quot; (American)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Single &quot;l&quot;</li>
                <li>• &quot;z&quot; ending</li>
                <li>• American English</li>
                <li>• Most common globally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Reallise&quot; (British)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Double &quot;l&quot;</li>
                <li>• &quot;s&quot; ending</li>
                <li>• British English</li>
                <li>• Commonwealth countries</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Key Differences</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Spelling: l vs ll</li>
                <li>• Ending: z vs s</li>
                <li>• Region: US vs UK</li>
                <li>• Both are correct</li>
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
            <h3 className="text-2xl font-bold text-blue-800 mb-4">🇺🇸 American Usage</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;I <strong>realize</strong> my mistake now.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;She will <strong>realize</strong> her dream of becoming a doctor.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;They <strong>realize</strong> the importance of teamwork.&quot;</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg text-blue-800">&quot;He doesn&apos;t <strong>realize</strong> he forgot his keys.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">🇬🇧 British Usage</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>reallise</strong> my mistake now.&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She will <strong>reallise</strong> her dream of becoming a doctor.&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They <strong>reallise</strong> the importance of teamwork.&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He doesn&apos;t <strong>reallise</strong> he forgot his keys.&quot;</p>
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
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">American Z</h3>
              <p className="text-yellow-800">Americans use &quot;z&quot; - think &quot;realize&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">British S</h3>
              <p className="text-blue-800">British use &quot;s&quot; - think &quot;reallise&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Double L Rule</h3>
              <p className="text-green-800">British spelling often doubles consonants</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Global Context</h3>
              <p className="text-teal-800">Choose based on your audience</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regional Preferences</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>United States:</strong> realize, realize, realize</li>
                <li>• <strong>United Kingdom:</strong> reallise, reallise, reallise</li>
                <li>• <strong>Canada:</strong> Both accepted (realize preferred)</li>
                <li>• <strong>Australia:</strong> reallise (British influence)</li>
                <li>• <strong>India:</strong> reallise (British influence)</li>
                <li>• <strong>International:</strong> realize (more common)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Writing Guidelines</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Academic:</strong> Follow style guide</li>
                <li>• <strong>Business:</strong> Match target audience</li>
                <li>• <strong>Creative:</strong> Choose one and be consistent</li>
                <li>• <strong>Technical:</strong> Use American spelling</li>
                <li>• <strong>Formal:</strong> Check publication requirements</li>
                <li>• <strong>Informal:</strong> Personal preference</li>
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
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Which spelling should I use in my writing?</h3>
              <p className="text-lg text-gray-700">A: Choose based on your target audience. Use &quot;realize&quot; for American readers and &quot;reallise&quot; for British readers. For international audiences, &quot;realize&quot; is more widely recognized.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Are both spellings accepted in all English-speaking countries?</h3>
              <p className="text-lg text-gray-700">A: No, while both are technically correct, they have regional preferences. &quot;Realize&quot; is standard in American English, while &quot;reallise&quot; is standard in British English and Commonwealth countries.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the history behind these spelling differences?</h3>
              <p className="text-lg text-gray-700">A: The differences emerged from Noah Webster&apos;s American English reforms in the 19th century. He simplified many British spellings, including changing &quot;s&quot; to &quot;z&quot; in words like &quot;realise&quot; to &quot;realize.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do these spelling differences affect pronunciation?</h3>
              <p className="text-lg text-gray-700">A: No, both spellings are pronounced the same way: /ˈriːəlaɪz/. The spelling differences are purely orthographic and don&apos;t change how the word sounds.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Which spelling is more common in international publications?</h3>
              <p className="text-lg text-gray-700">A: &quot;Realize&quot; is more common in international publications, scientific journals, and global business communications. This is due to the widespread influence of American English in these contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can I mix both spellings in the same document?</h3>
              <p className="text-lg text-gray-700">A: No, you should choose one spelling and use it consistently throughout your document. Mixing spellings can confuse readers and appear unprofessional.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What about other similar words with this pattern?</h3>
              <p className="text-lg text-gray-700">A: Many words follow this pattern: organize/organise, analyze/analyse, criticize/criticise, and specialize/specialise. The rule is generally &quot;z&quot; for American English and &quot;s&quot; for British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How do spell-checkers handle these differences?</h3>
              <p className="text-lg text-gray-700">A: Most spell-checkers can be configured for either American or British English. They will flag the opposite spelling as incorrect based on your language setting.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the plural form of these words?</h3>
              <p className="text-lg text-gray-700">A: The plural forms are &quot;realizes&quot; (American) and &quot;reallises&quot; (British). Both follow the same pattern as the base word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Are there any other spelling variations I should know about?</h3>
              <p className="text-lg text-gray-700">A: Yes, some words have additional variations. For example, &quot;realise&quot; (single l) is also acceptable in British English, though &quot;reallise&quot; (double l) is more common in formal writing.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Both <strong>&quot;realize&quot;</strong> (American) and <strong>&quot;reallise&quot;</strong> (British) are correct!
          <br />
          Choose based on your audience and maintain consistency throughout your writing.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: &quot;Realize&quot; for American audiences, &quot;Reallise&quot; for British audiences</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
