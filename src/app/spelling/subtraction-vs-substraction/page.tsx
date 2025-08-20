import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Subtraction vs Substraction - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;subtraction&quot; and &quot;substraction&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SubtractionVsSubstractionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Subtraction vs Substraction
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
            <span className="text-2xl mr-3">➖</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Subtraction&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Substraction&quot; is always incorrect - remember the &quot;t&quot; in &quot;subtraction&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Substraction</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Subtraction</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;the process of taking away one number from another.&quot;
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Sub&quot; (Prefix)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;below&quot; or &quot;under&quot;</li>
                <li>• Also means &quot;remove&quot;</li>
                <li>• Common in English words</li>
                <li>• Latin origin</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">&quot;Tract&quot; (Root)</h3>
              <ul className="text-amber-800 space-y-2">
                <li>• Means &quot;to draw&quot; or &quot;pull&quot;</li>
                <li>• Related to extraction</li>
                <li>• Latin origin: &quot;tractus&quot;</li>
                <li>• Used in many compound words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Ion&quot; (Suffix)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Forms nouns</li>
                <li>• Means &quot;action or process&quot;</li>
                <li>• Common English pattern</li>
                <li>• Creates &quot;subtraction&quot;</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>subtraction</strong> of 5 from 10 equals 5.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;Students learn <strong>subtraction</strong> in elementary school.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;This calculator performs <strong>subtraction</strong> quickly.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>subtraction</strong> method is essential in math.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>substraction</strong> of 5 from 10&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtraction&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Students learn <strong>substraction</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtraction&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;This calculator performs <strong>substraction</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtraction&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>substraction</strong> method&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;subtraction&quot;</p>
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
              <div className="text-4xl mb-3">➖</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think Minus Sign</h3>
              <p className="text-yellow-800">&quot;Subtraction&quot; has a &quot;t&quot; like the minus sign</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">T in Tract</h3>
              <p className="text-blue-800">Remember the &quot;t&quot; in &quot;tract&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;subtraction&quot; to build muscle memory</p>
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
                <li>• <strong>Subtraction facts</strong> - basic math operations</li>
                <li>• <strong>Subtraction problems</strong> - math exercises</li>
                <li>• <strong>Subtraction worksheets</strong> - practice materials</li>
                <li>• <strong>Subtraction algorithm</strong> - calculation method</li>
                <li>• <strong>Subtraction with borrowing</strong> - advanced technique</li>
                <li>• <strong>Subtraction tables</strong> - reference charts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;subtraction is important&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Subtraction helps with math&quot;</li>
                <li>• <strong>Object:</strong> &quot;I learned subtraction&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;subtraction skills&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The operation is subtraction&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Subtracting numbers&quot;</li>
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
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people confuse &quot;subtraction&quot; and &quot;substraction&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similarity to other words like &quot;abstraction&quot; or &quot;extraction.&quot; However, &quot;subtraction&quot; follows the pattern of &quot;sub&quot; + &quot;tract&quot; + &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: Can &quot;subtraction&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Subtraction&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard mathematical term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: What&apos;s the etymology of &quot;subtraction&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subtraction&quot; comes from Latin &quot;sub&quot; (under) + &quot;tractus&quot; (drawn). It was first used in English in the 15th century to describe the mathematical operation of taking away.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;subtraction&quot; is standard across all English-speaking regions. However, some regions might use alternative terms like &quot;taking away&quot; or &quot;minus.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like breaking down the word: &quot;sub&quot; + &quot;tract&quot; + &quot;ion.&quot; Create simple math problems and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;subtraction&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: taking away, deduction, removal, decrease, reduction, and minus operation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;subtraction&quot; be used in other contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! While primarily mathematical, &quot;subtraction&quot; can be used metaphorically to describe any process of taking away or removing something, like &quot;subtraction of rights.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;subtraction&quot; and &quot;division&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Subtraction&quot; involves taking away one number from another, while &quot;division&quot; involves splitting a number into equal parts. They are different fundamental mathematical operations.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Subtraction&quot;</strong> is the correct spelling meaning &quot;the process of taking away.&quot; 
          <br />
          <strong>&quot;Substraction&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUB + TRACT + ION = SUBTRACTION&quot;</p>
        </div>
      </div>
    </div>
  )
}
