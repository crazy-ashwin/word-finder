import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Specifically vs Especifically - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;specifically&quot; and &quot;especifically&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpecificallyVsEspecificallyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Specifically vs Especifically
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-cyan-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-cyan-600">&quot;Specifically&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Especifically&quot; is always incorrect - remember the &quot;spec&quot; beginning in &quot;specifically&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚫</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Especifically</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-cyan-800 mb-4">Specifically</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-cyan-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-cyan-700 leading-relaxed">
                This is the proper spelling meaning &quot;in a specific manner or for a specific purpose.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">&quot;Specifically&quot; (Adverb)</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• In a specific manner</li>
                <li>• For a specific purpose</li>
                <li>• Begins with &quot;spec&quot;</li>
                <li>• Modifies verbs/adjectives</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Especifically&quot; (Incorrect)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Wrong beginning</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Key Difference</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• &quot;Specifically&quot; has &quot;spec&quot;</li>
                <li>• &quot;Especifically&quot; has &quot;espec&quot;</li>
                <li>• Pronunciation differs</li>
                <li>• Meaning is lost</li>
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
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;I <strong>specifically</strong> asked for the blue one.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;This tool is <strong>specifically</strong> designed for beginners.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;She <strong>specifically</strong> mentioned your name.&quot;</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                <p className="text-lg text-cyan-800">&quot;The instructions are <strong>specifically</strong> clear.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>especifically</strong> asked for the blue one&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specifically&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This tool is <strong>especifically</strong> designed for beginners&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specifically&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She <strong>especifically</strong> mentioned your name&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specifically&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The instructions are <strong>especifically</strong> clear&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specifically&quot;</p>
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
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Spec&quot;</h3>
              <p className="text-yellow-800">&quot;Specifically&quot; begins with &quot;spec&quot; like &quot;special&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound It Out</h3>
              <p className="text-blue-800">Say &quot;specifically&quot; not &quot;especifically&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;specifically&quot; to build muscle memory</p>
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
                <li>• <strong>Specifically designed</strong> - purpose-built</li>
                <li>• <strong>Specifically mentioned</strong> - explicitly stated</li>
                <li>• <strong>Specifically for</strong> - intended for</li>
                <li>• <strong>Specifically because</strong> - for this reason</li>
                <li>• <strong>Specifically to</strong> - with the purpose of</li>
                <li>• <strong>Specifically about</strong> - concerning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He specifically asked&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Specifically designed tools&quot;</li>
                <li>• <strong>Emphasis:</strong> &quot;I specifically want&quot;</li>
                <li>• <strong>Clarification:</strong> &quot;Specifically, I mean&quot;</li>
                <li>• <strong>Purpose:</strong> &quot;Specifically for you&quot;</li>
                <li>• <strong>Detail:</strong> &quot;Specifically about this&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Why do people confuse &quot;specifically&quot; and &quot;especifically&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from typing quickly or not proofreading. Many people accidentally use the wrong beginning, creating the incorrect word &quot;especifically.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;specifically&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Specifically&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the etymology of &quot;specifically&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specifically&quot; comes from the adjective &quot;specific&quot; plus the suffix &quot;-ally.&quot; It&apos;s related to the word &quot;specify&quot; and has been used in English since the 17th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;specifically&quot; is standard across all English-speaking regions. However, pronunciation may vary slightly between British and American English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;specifically&quot; beginning with &quot;spec&quot; (like &quot;special&quot;), and emphasize that &quot;especifically&quot; is incorrect. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;specifically&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: particularly, especially, explicitly, precisely, exactly, and particularly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;specifically&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;specifically&quot; is only an adverb. The adjective form is &quot;specific.&quot; You would say &quot;a specific example&quot; not &quot;a specifically example.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;specifically&quot; and &quot;especially&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specifically&quot; means &quot;in a specific manner&quot; or &quot;for a specific purpose,&quot; while &quot;especially&quot; means &quot;particularly&quot; or &quot;above all.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How do I use &quot;specifically&quot; in a sentence?</h3>
              <p className="text-lg text-gray-700">A: Use it as an adverb: &quot;I specifically asked,&quot; or &quot;This is specifically designed,&quot; or &quot;She specifically mentioned.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;specifically&quot; always formal?</h3>
              <p className="text-lg text-gray-700">A: While &quot;specifically&quot; is commonly used in formal contexts, it can also be used in casual conversation to add emphasis or clarity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;specifically&quot; and &quot;explicitly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specifically&quot; means &quot;in a specific manner,&quot; while &quot;explicitly&quot; means &quot;clearly and directly stated.&quot; They can overlap but have different nuances.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;specifically&quot; be used at the beginning of a sentence?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Specifically&quot; can be used at the beginning of a sentence for emphasis: &quot;Specifically, I want to address the issue of...&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Specifically&quot;</strong> begins with &quot;spec&quot; and means &quot;in a specific manner or for a specific purpose.&quot; 
          <br />
          <strong>&quot;Especifically&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPECIFICALLY begins with SPEC, not ESPECIFICALLY&quot;</p>
        </div>
      </div>
    </div>
  )
}
