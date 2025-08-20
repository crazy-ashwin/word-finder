import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Specific vs Speciffic - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;specific&quot; and &quot;speciffic&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpecificVsSpecifficPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
          Specific vs Speciffic
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-100 via-emerald-100 to-green-100 p-8 rounded-2xl mb-10 border border-teal-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-teal-600">&quot;Specific&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Speciffic&quot; is always incorrect - remember only one &quot;f&quot; in &quot;specific&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Speciffic</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-teal-800 mb-4">Specific</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-teal-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-teal-700 leading-relaxed">
                This is the proper spelling meaning &quot;clearly defined or identified.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Specific&quot; (Adjective)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Clearly defined</li>
                <li>• Precisely identified</li>
                <li>• One &quot;f&quot;</li>
                <li>• Describes nouns</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;Speciffic&quot; (Incorrect)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Double &quot;f&quot;</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Key Difference</h3>
              <ul className="text-green-800 space-y-2">
                <li>• &quot;Specific&quot; has one &quot;f&quot;</li>
                <li>• &quot;Speciffic&quot; has two &quot;f&quot;s</li>
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
            <h3 className="text-2xl font-bold text-teal-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;I need a <strong>specific</strong> answer.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;This is a <strong>specific</strong> example.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;She gave <strong>specific</strong> instructions.&quot;</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg text-teal-800">&quot;The <strong>specific</strong> details matter.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I need a <strong>speciffic</strong> answer&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specific&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This is a <strong>speciffic</strong> example&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specific&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She gave <strong>speciffic</strong> instructions&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specific&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>speciffic</strong> details matter&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specific&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;One F&quot;</h3>
              <p className="text-yellow-800">&quot;Specific&quot; has only one &quot;f&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound It Out</h3>
              <p className="text-blue-800">Say &quot;specific&quot; not &quot;speciffic&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;specific&quot; to build muscle memory</p>
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
                <li>• <strong>Specific details</strong> - precise information</li>
                <li>• <strong>Specific requirements</strong> - exact needs</li>
                <li>• <strong>Specific examples</strong> - particular instances</li>
                <li>• <strong>Specific instructions</strong> - clear directions</li>
                <li>• <strong>Specific goals</strong> - defined objectives</li>
                <li>• <strong>Specific criteria</strong> - exact standards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The specific answer&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Specific information&quot;</li>
                <li>• <strong>Description:</strong> &quot;A specific example&quot;</li>
                <li>• <strong>Clarification:</strong> &quot;More specific details&quot;</li>
                <li>• <strong>Comparison:</strong> &quot;Less specific&quot;</li>
                <li>• <strong>Emphasis:</strong> &quot;Very specific&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Why do people confuse &quot;specific&quot; and &quot;speciffic&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from typing quickly or not proofreading. Many people accidentally use double letters, creating the incorrect word &quot;speciffic.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;specific&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Specific&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What&apos;s the etymology of &quot;specific&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specific&quot; comes from Latin &quot;specificus&quot; meaning &quot;constituting a kind or species.&quot; It&apos;s related to the word &quot;specify&quot; and has been used in English since the 17th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;specific&quot; is standard across all English-speaking regions. However, pronunciation may vary slightly between British and American English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;specific&quot; having only one &quot;f&quot;, and emphasize that &quot;speciffic&quot; is incorrect. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What are some synonyms for &quot;specific&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: particular, exact, precise, definite, clear, and detailed.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;specific&quot; be used as an adverb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;specific&quot; is only an adjective. The adverb form is &quot;specifically.&quot; You would say &quot;specifically mentioned&quot; not &quot;specific mentioned.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the difference between &quot;specific&quot; and &quot;particular&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specific&quot; means &quot;clearly defined or identified,&quot; while &quot;particular&quot; means &quot;of, belonging to, or associated with a specific person, group, or thing.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: How do I use &quot;specific&quot; in a sentence?</h3>
              <p className="text-lg text-gray-700">A: Use it as an adjective: &quot;I need specific information,&quot; or &quot;This is a specific example,&quot; or &quot;She gave specific instructions.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;specific&quot; always formal?</h3>
              <p className="text-lg text-gray-700">A: While &quot;specific&quot; is commonly used in formal contexts, it can also be used in casual conversation to add clarity and precision.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What&apos;s the difference between &quot;specific&quot; and &quot;exact&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specific&quot; means &quot;clearly defined or identified,&quot; while &quot;exact&quot; means &quot;precise and accurate in all details.&quot; They can overlap but have different nuances.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;specific&quot; be used in negative sentences?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Specific&quot; can be used in negative sentences: &quot;I don&apos;t have specific information,&quot; or &quot;This isn&apos;t a specific example.&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Specific&quot;</strong> has only one &quot;f&quot; and means &quot;clearly defined or identified.&quot; 
          <br />
          <strong>&quot;Speciffic&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPECIFIC has ONE F, not SPECIFFIC&quot;</p>
        </div>
      </div>
    </div>
  )
}
