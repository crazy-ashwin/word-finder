import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reality vs Reallity - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;reality&quot; and &quot;reallity&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RealityVsReallityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
          Reality vs Reallity
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-violet-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Reality&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Reallity&quot; is always incorrect - remember the single &quot;l&quot; in &quot;reality&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Reallity</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Reality</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;the state of things as they actually exist.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">&quot;Reality&quot; (Correct)</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• Single &quot;l&quot;</li>
                <li>• From &quot;real&quot; + &quot;-ity&quot;</li>
                <li>• Standard English</li>
                <li>• Used globally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Reallity&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Double &quot;l&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Key Differences</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Spelling: l vs ll</li>
                <li>• Meaning: Valid vs invalid</li>
                <li>• Usage: Common vs never</li>
                <li>• Origin: Real + ity vs error</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>reality</strong> of the situation is clear.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She faced the harsh <strong>reality</strong> of life.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Virtual <strong>reality</strong> technology is advancing.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>reality</strong> check came too late.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>reallity</strong> of the situation&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reality&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She faced the harsh <strong>reallity</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reality&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Virtual <strong>reallity</strong> technology&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reality&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>reallity</strong> check came&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;reality&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Single L Rule</h3>
              <p className="text-yellow-800">&quot;Reality&quot; has one &quot;l&quot; - keep it simple!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Real&quot;</h3>
              <p className="text-blue-800">Reality = Real + ity (state of being real)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;reality&quot; to build muscle memory</p>
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
                <li>• <strong>Reality check</strong> - dose of truth</li>
                <li>• <strong>Reality show</strong> - unscripted TV</li>
                <li>• <strong>Reality TV</strong> - real-life programming</li>
                <li>• <strong>Virtual reality</strong> - computer simulation</li>
                <li>• <strong>Augmented reality</strong> - enhanced perception</li>
                <li>• <strong>Harsh reality</strong> - difficult truth</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The reality is harsh&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Reality can be difficult&quot;</li>
                <li>• <strong>Object:</strong> &quot;She accepted reality&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Reality TV shows&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;That&apos;s reality&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Different realities exist&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people misspell &quot;reality&quot; as &quot;reallity&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;reallity&quot; often occurs because people think they need to double the &quot;l&quot; like in words such as &quot;really.&quot; However, &quot;reality&quot; follows the pattern of &quot;real&quot; + &quot;-ity.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;reality&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;reality&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word used across all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;reality&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reality&quot; comes from &quot;real&quot; meaning &quot;actual&quot; + the &quot;-ity&quot; suffix meaning &quot;state or quality.&quot; It originally meant &quot;the state of being real&quot; and evolved to mean &quot;the actual state of things.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, the spelling &quot;reality&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word: &quot;real-ity.&quot; Emphasize the single &quot;l&quot; sound and have them practice writing it multiple times. Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;reality&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: actuality, truth, fact, existence, realness, authenticity, genuineness, and veracity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;reality&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;reality&quot; is only used as a noun in standard English. The verb form would be &quot;realize&quot; or &quot;realise.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;reality&quot; and &quot;truth&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Reality&quot; refers to the actual state of things as they exist, while &quot;truth&quot; refers to facts or statements that are accurate and correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How is &quot;reality&quot; used in philosophy?</h3>
              <p className="text-lg text-gray-700">A: In philosophy, &quot;reality&quot; refers to the fundamental nature of existence and what is truly real versus what is merely appearance or illusion.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the plural form of &quot;reality&quot;?</h3>
              <p className="text-lg text-gray-700">A: The plural form is &quot;realities&quot; (reality + ies). This follows the standard English rule for nouns ending in consonant + y.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Reality&quot;</strong> has a single &quot;l&quot; and means &quot;the state of things as they actually exist.&quot; 
          <br />
          <strong>&quot;Reallity&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Reality = Real + ity (state of being real)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
