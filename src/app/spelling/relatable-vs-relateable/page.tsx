import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Relatable vs Relateable - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;relatable&quot; and &quot;relateable&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RelatableVsRelateablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Relatable vs Relateable
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 p-8 rounded-2xl mb-10 border border-sky-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Relatable&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Relateable&quot; is always incorrect - remember the &quot;able&quot; in &quot;relatable&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Relateable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-sky-50 to-sky-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-sky-800 mb-4">Relatable</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-sky-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-sky-700 leading-relaxed">
                This is the proper spelling meaning &quot;easy to relate to or identify with.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Relatable&quot; (Adjective)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;easy to relate to&quot;</li>
                <li>• Has &quot;able&quot; at the end</li>
                <li>• Related to &quot;relate&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Relateable&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;a&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Etymology</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• From Latin &quot;relatus&quot;</li>
                <li>• Related to &quot;relate&quot;</li>
                <li>• Always has &quot;able&quot;</li>
                <li>• Common in English</li>
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
            <h3 className="text-2xl font-bold text-sky-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;Her story is very <strong>relatable</strong>.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;The character is <strong>relatable</strong> to many readers.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;This situation is <strong>relatable</strong> to everyone.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;The movie has <strong>relatable</strong> characters.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Her story is very <strong>relateable</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relatable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The character is <strong>relateable</strong> to many readers&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relatable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This situation is <strong>relateable</strong> to everyone&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relatable&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The movie has <strong>relateable</strong> characters&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relatable&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-sky-50 border-sky-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-sky-900 mb-2">ABLE Rule</h3>
              <p className="text-sky-800">&quot;Relatable&quot; ends with &quot;able&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Relate</h3>
              <p className="text-blue-800">&quot;Relate&quot; + &quot;able&quot; = &quot;relatable&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;relatable&quot; to build muscle memory</p>
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
                <li>• <strong>Relatable to</strong> - easy to relate to</li>
                <li>• <strong>Relatable for</strong> - easy to relate for</li>
                <li>• <strong>Very relatable</strong> - highly relatable</li>
                <li>• <strong>Highly relatable</strong> - very relatable</li>
                <li>• <strong>Extremely relatable</strong> - very relatable</li>
                <li>• <strong>Relatable character</strong> - easy to relate character</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The relatable story&quot;</li>
                <li>• <strong>With nouns:</strong> &quot;Relatable content&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Relatable to&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;Very relatable&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More relatable&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most relatable&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Why do people confuse &quot;relatable&quot; and &quot;relateable&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;a&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;relat&quot; to &quot;able.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Can &quot;relatable&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Relatable&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;relatable&quot; and &quot;relateable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Relatable&quot; is the correct spelling meaning &quot;easy to relate to or identify with.&quot; &quot;Relateable&quot; is missing the &quot;a&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;relatable&quot; always about connections?</h3>
              <p className="text-lg text-gray-700">A: While &quot;relatable&quot; often refers to connections, it can also describe characters, situations, stories, and any content that people can easily identify with or understand.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;relate&quot; - &quot;relatable&quot; has &quot;able&quot; at the end. Remember: &quot;Relate&quot; + &quot;able.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;relatable&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: understandable, identifiable, familiar, recognizable, accessible, and approachable. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Can &quot;relatable&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Relatable&quot; is used in academic writing, business communication, casual conversation, and any discussion about content that people can identify with.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the origin of the word &quot;relatable&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Relatable&quot; comes from Latin &quot;relatus&quot; meaning &quot;brought back&quot; or &quot;reported,&quot; which is related to &quot;relate&quot; meaning &quot;to connect.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Is &quot;relatable&quot; a regular or irregular adjective?</h3>
              <p className="text-lg text-gray-700">A: &quot;Relatable&quot; follows a regular pattern. It&apos;s formed by adding &quot;able&quot; to the verb &quot;relate,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I avoid spelling &quot;relatable&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;relate + able,&quot; and always proofread your work. The &quot;a&quot; in &quot;able&quot; is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Relatable&quot;</strong> has &quot;able&quot; at the end and means &quot;easy to relate to.&quot; 
          <br />
          <strong>&quot;Relateable&quot;</strong> is missing the &quot;a&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RELATE + ABLE&quot; - &quot;relatable&quot; has &quot;able&quot; at the end!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
