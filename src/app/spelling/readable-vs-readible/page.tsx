import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Readable vs Readible - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;readable&quot; and &quot;readible&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ReadableVsReadiblePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Readable vs Readible
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Readable&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Readible&quot; is always incorrect - remember the &quot;a&quot; in &quot;readable&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Readible</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Readable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;easy to read&quot; or &quot;legible.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Readable&quot; (Correct)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Has an &quot;a&quot; in the middle</li>
                <li>• From &quot;read&quot; + &quot;-able&quot;</li>
                <li>• Standard English</li>
                <li>• Used globally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Readible&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing the &quot;a&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Key Differences</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Spelling: a vs no a</li>
                <li>• Meaning: Valid vs invalid</li>
                <li>• Usage: Common vs never</li>
                <li>• Origin: Read + able vs error</li>
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
                <p className="text-lg text-green-800">&quot;This book is very <strong>readable</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The font makes the text <strong>readable</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She writes in a <strong>readable</strong> style.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The document is barely <strong>readable</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This book is very <strong>readible</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;readable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The font makes the text <strong>readible</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;readable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She writes in a <strong>readible</strong> style&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;readable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The document is barely <strong>readible</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;readable&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">A for Able</h3>
              <p className="text-yellow-800">&quot;Readable&quot; has an &quot;a&quot; - able to read!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Read-able&quot;</h3>
              <p className="text-blue-800">Readable = Read + able (can be read)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;readable&quot; to build muscle memory</p>
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
                <li>• <strong>Readable format</strong> - clear layout</li>
                <li>• <strong>Readable text</strong> - legible writing</li>
                <li>• <strong>Readable font</strong> - clear typeface</li>
                <li>• <strong>Readable style</strong> - clear writing</li>
                <li>• <strong>Readable content</strong> - understandable material</li>
                <li>• <strong>Readable code</strong> - clear programming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The text is readable&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;This font looks readable&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Readable documents&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More readable&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most readable&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Readably written&quot;</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Unreadable</strong> - not readable</li>
                <li>• <strong>Readability</strong> - quality of being readable</li>
                <li>• <strong>Readably</strong> - in a readable manner</li>
                <li>• <strong>Legible</strong> - clear to read</li>
                <li>• <strong>Comprehensible</strong> - understandable</li>
                <li>• <strong>Clear</strong> - easy to understand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people misspell &quot;readable&quot; as &quot;readible&quot;?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;readible&quot; often occurs because people forget the &quot;a&quot; in the middle or confuse it with similar words. The word follows the pattern of &quot;read&quot; + &quot;-able.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;readable&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;readable&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word used across all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the etymology of &quot;readable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Readable&quot; comes from &quot;read&quot; meaning &quot;to look at and comprehend&quot; + the &quot;-able&quot; suffix meaning &quot;capable of.&quot; It means &quot;capable of being read.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, the spelling &quot;readable&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word: &quot;read-a-ble.&quot; Emphasize the &quot;a&quot; sound in the middle and have them practice writing it multiple times. Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;readable&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: legible, clear, comprehensible, understandable, decipherable, plain, and accessible.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;readable&quot; be used as a noun?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;readable&quot; is only used as an adjective in standard English. The noun form would be &quot;readability.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;readable&quot; and &quot;legible&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Readable&quot; refers to content that is easy to understand, while &quot;legible&quot; specifically refers to text that is clear and easy to read visually.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How is &quot;readable&quot; used in design?</h3>
              <p className="text-lg text-gray-700">A: In design, &quot;readable&quot; refers to text that is easy to read due to factors like font choice, size, spacing, contrast, and layout.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the comparative form of &quot;readable&quot;?</h3>
              <p className="text-lg text-gray-700">A: The comparative form is &quot;more readable&quot; and the superlative form is &quot;most readable.&quot; Unlike many adjectives, &quot;readable&quot; doesn&apos;t add &quot;-er&quot; or &quot;-est.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Readable&quot;</strong> has an &quot;a&quot; in the middle and means &quot;easy to read&quot; or &quot;legible.&quot; 
          <br />
          <strong>&quot;Readible&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Readable = Read + able (can be read)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
