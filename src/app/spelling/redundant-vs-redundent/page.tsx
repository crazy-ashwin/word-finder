import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Redundant vs Redundent - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;redundant&quot; and &quot;redundent&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RedundantVsRedundentPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Redundant vs Redundent
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Redundant&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Redundent&quot; is always incorrect - remember the &quot;a&quot; in &quot;redundant&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Redundent</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-800 mb-4">Redundant</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-rose-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-rose-700 leading-relaxed">
                This is the proper spelling meaning &quot;unnecessary&quot; or &quot;excessive.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-rose-50 border-rose-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Redundant&quot; (Adjective)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Means &quot;unnecessary&quot;</li>
                <li>• Has &quot;a&quot; in the middle</li>
                <li>• Related to &quot;redundancy&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Redundent&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;a&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Etymology</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• From Latin &quot;redundans&quot;</li>
                <li>• Related to &quot;redundancy&quot;</li>
                <li>• Always has &quot;a&quot;</li>
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
            <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;This information is <strong>redundant</strong>.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;Remove <strong>redundant</strong> words.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;The system has <strong>redundant</strong> features.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;Avoid <strong>redundant</strong> phrases.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This information is <strong>redundent</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;redundant&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Remove <strong>redundent</strong> words&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;redundant&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The system has <strong>redundent</strong> features&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;redundant&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Avoid <strong>redundent</strong> phrases&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;redundant&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">A Rule</h3>
              <p className="text-rose-800">&quot;Redundant&quot; has &quot;a&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Think Redundancy</h3>
              <p className="text-pink-800">&quot;Redundancy&quot; has &quot;a&quot; - so does &quot;redundant&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Write It Out</h3>
              <p className="text-purple-800">Practice writing &quot;redundant&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Redundant information</strong> - unnecessary data</li>
                <li>• <strong>Redundant words</strong> - excessive language</li>
                <li>• <strong>Redundant features</strong> - duplicate functions</li>
                <li>• <strong>Redundant systems</strong> - backup systems</li>
                <li>• <strong>Redundant phrases</strong> - repetitive expressions</li>
                <li>• <strong>Redundant code</strong> - duplicate programming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The redundant text&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A redundant word&quot;</li>
                <li>• <strong>With adverbs:</strong> &quot;Highly redundant&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Redundant in&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Is redundant&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More redundant&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people confuse &quot;redundant&quot; and &quot;redundent&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;a&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;redund&quot; to &quot;ent.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;redundant&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Redundant&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;redundant&quot; and &quot;redundent&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Redundant&quot; is the correct spelling meaning &quot;unnecessary&quot; or &quot;excessive.&quot; &quot;Redundent&quot; is missing the &quot;a&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Is &quot;redundant&quot; always negative?</h3>
              <p className="text-lg text-gray-700">A: While &quot;redundant&quot; often has a negative connotation meaning &quot;unnecessary,&quot; it can also refer to backup systems or safety measures that are intentionally duplicated for reliability.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;redundancy&quot; - &quot;redundant&quot; has &quot;a&quot; in the middle. Remember: &quot;Redundancy&quot; has &quot;a&quot; - so does &quot;redundant.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;redundant&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: unnecessary, excessive, superfluous, repetitive, duplicate, and surplus. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;redundant&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Redundant&quot; is used in writing, technology, business, academic contexts, and any discussion about unnecessary or excessive elements.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: What&apos;s the origin of the word &quot;redundant&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Redundant&quot; comes from Latin &quot;redundans&quot; meaning &quot;overflowing&quot; or &quot;excessive,&quot; which is related to &quot;redundancy&quot; meaning &quot;the state of being redundant.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;redundant&quot; a regular or irregular adjective?</h3>
              <p className="text-lg text-gray-700">A: &quot;Redundant&quot; follows a regular pattern. It&apos;s formed by adding &quot;ant&quot; to the base form, which is a common English suffix for adjectives.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: How can I avoid spelling &quot;redundant&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;redundancy,&quot; and always proofread your work. Remember: the &quot;a&quot; in the middle is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between redundant and repetitive?</h3>
              <p className="text-lg text-gray-700">A: While both refer to excess, &quot;redundant&quot; means unnecessary or duplicate, while &quot;repetitive&quot; specifically means occurring multiple times. Something can be repetitive without being redundant, and vice versa.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: Can redundant ever be positive?</h3>
              <p className="text-lg text-gray-700">A: Yes! In technology and engineering, redundant systems are often positive as they provide backup and reliability. For example, redundant servers ensure a website stays online even if one fails.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Redundant&quot;</strong> has &quot;a&quot; in the middle and means &quot;unnecessary.&quot; 
          <br />
          <strong>&quot;Redundent&quot;</strong> is missing the &quot;a&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REDUNDANCY&quot; - &quot;redundant&quot; has &quot;a&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
