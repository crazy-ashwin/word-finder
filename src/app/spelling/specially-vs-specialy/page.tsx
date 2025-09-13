import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Specially vs Specialy - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;specially&quot; and &quot;specialy&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpeciallyVsSpecialyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Specially vs Specialy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-amber-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">⭐</span>
            <span className="text-2xl font-bold text-amber-600">&quot;Specially&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Specialy&quot; is always incorrect - remember the &quot;ally&quot; ending in &quot;specially&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Specialy</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Specially</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-amber-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-amber-700 leading-relaxed">
                This is the proper spelling meaning &quot;in a special manner or for a special purpose.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Specially&quot; (Adverb)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• In a special manner</li>
                <li>• For a special purpose</li>
                <li>• Ends with &quot;ally&quot;</li>
                <li>• Modifies verbs/adjectives</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Specialy&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Wrong ending</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Key Difference</h3>
              <ul className="text-red-800 space-y-2">
                <li>• &quot;Specially&quot; has &quot;ally&quot;</li>
                <li>• &quot;Specialy&quot; has &quot;ly&quot;</li>
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
            <h3 className="text-2xl font-bold text-amber-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;This was <strong>specially</strong> made for you.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;I <strong>specially</strong> chose this gift.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;The room was <strong>specially</strong> decorated.&quot;</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="text-lg text-amber-800">&quot;She was <strong>specially</strong> trained.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This was <strong>specialy</strong> made for you&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specially&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;I <strong>specialy</strong> chose this gift&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specially&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The room was <strong>specialy</strong> decorated&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specially&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She was <strong>specialy</strong> trained&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;specially&quot;</p>
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
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Ally&quot;</h3>
              <p className="text-yellow-800">&quot;Specially&quot; ends with &quot;ally&quot; like &quot;ally&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound It Out</h3>
              <p className="text-blue-800">Say &quot;specially&quot; not &quot;specialy&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;specially&quot; to build muscle memory</p>
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
                <li>• <strong>Specially designed</strong> - purpose-built</li>
                <li>• <strong>Specially made</strong> - custom created</li>
                <li>• <strong>Specially for</strong> - intended for</li>
                <li>• <strong>Specially because</strong> - for this reason</li>
                <li>• <strong>Specially to</strong> - with the purpose of</li>
                <li>• <strong>Specially about</strong> - concerning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adverb:</strong> &quot;He specially asked&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Specially designed tools&quot;</li>
                <li>• <strong>Emphasis:</strong> &quot;I specially want&quot;</li>
                <li>• <strong>Clarification:</strong> &quot;Specially, I mean&quot;</li>
                <li>• <strong>Purpose:</strong> &quot;Specially for you&quot;</li>
                <li>• <strong>Detail:</strong> &quot;Specially about this&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Why do people confuse &quot;specially&quot; and &quot;specialy&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from typing quickly or not proofreading. Many people accidentally use the wrong ending, creating the incorrect word &quot;specialy.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;specially&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Specially&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What&apos;s the etymology of &quot;specially&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specially&quot; comes from the adjective &quot;special&quot; plus the suffix &quot;-ally.&quot; It&apos;s related to the word &quot;special&quot; and has been used in English since the 14th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;specially&quot; is standard across all English-speaking regions. However, pronunciation may vary slightly between British and American English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;specially&quot; ending with &quot;ally&quot; (like &quot;ally&quot;), and emphasize that &quot;specialy&quot; is incorrect. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;specially&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: particularly, especially, specifically, explicitly, precisely, and exactly.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;specially&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;specially&quot; is only an adverb. The adjective form is &quot;special.&quot; You would say &quot;a special example&quot; not &quot;a specially example.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;specially&quot; and &quot;especially&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specially&quot; means &quot;in a special manner&quot; or &quot;for a special purpose,&quot; while &quot;especially&quot; means &quot;particularly&quot; or &quot;above all.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How do I use &quot;specially&quot; in a sentence?</h3>
              <p className="text-lg text-gray-700">A: Use it as an adverb: &quot;I specially asked,&quot; or &quot;This is specially designed,&quot; or &quot;She specially mentioned.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;specially&quot; always formal?</h3>
              <p className="text-lg text-gray-700">A: While &quot;specially&quot; is commonly used in formal contexts, it can also be used in casual conversation to add emphasis or clarity.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;specially&quot; and &quot;explicitly&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Specially&quot; means &quot;in a special manner,&quot; while &quot;explicitly&quot; means &quot;clearly and directly stated.&quot; They can overlap but have different nuances.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;specially&quot; be used at the beginning of a sentence?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Specially&quot; can be used at the beginning of a sentence for emphasis: &quot;Specially, I want to address the issue of...&quot;</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Specially&quot;</strong> ends with &quot;ally&quot; and means &quot;in a special manner or for a special purpose.&quot; 
          <br />
          <strong>&quot;Specialy&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPECIALLY ends with ALLY, not SPECIALY&quot;</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Specially</strong> is the correct spelling with &quot;ally&quot; at the end. It means in a special manner. The misspelling &quot;specialy&quot; with &quot;aly&quot; is never correct. Always use &quot;specially&quot; when referring to special circumstances.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
