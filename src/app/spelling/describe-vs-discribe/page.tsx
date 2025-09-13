import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Describe vs Discribe - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;describe&quot; and &quot;discribe&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function DescribeVsDiscribePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          Describe vs Discribe
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Correct Spelling and Common Mistakes
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✏️</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Describe&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Discribe&quot; is always incorrect - remember the &quot;e&quot; in &quot;describe&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Discribe</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common typo that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Describe</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;to give an account of in words.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Describe&quot; (Correct)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Has &quot;e&quot; before &quot;scribe&quot;</li>
                <li>• Follows Latin root &quot;scribere&quot;</li>
                <li>• Standard English spelling</li>
                <li>• Widely recognized</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Error</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• &quot;Discribe&quot; is wrong</li>
                <li>• Missing &quot;e&quot;</li>
                <li>• Sounds similar but incorrect</li>
                <li>• Common typo</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-cyan-50 border-cyan-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Memory Trick</h3>
              <ul className="text-cyan-800 space-y-2">
                <li>• Think &quot;de-scribe&quot;</li>
                <li>• &quot;De&quot; means &quot;down&quot;</li>
                <li>• &quot;Scribe&quot; means &quot;write&quot;</li>
                <li>• Write down = describe</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Correct Usage</h3>
              <ul className="text-green-800 space-y-3">
                <li>• Can you <strong>describe</strong> what happened?</li>
                <li>• The witness <strong>described</strong> the suspect.</li>
                <li>• Please <strong>describe</strong> your experience.</li>
                <li>• The book <strong>describes</strong> ancient Rome.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">Incorrect Usage</h3>
              <ul className="text-red-800 space-y-3">
                <li>• ❌ Can you <strong>discribe</strong> what happened?</li>
                <li>• ❌ The witness <strong>discribed</strong> the suspect.</li>
                <li>• ❌ Please <strong>discribe</strong> your experience.</li>
                <li>• ❌ The book <strong>discribes</strong> ancient Rome.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tips */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tips & Tricks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Spelling Memory Tricks</h3>
              <ul className="text-yellow-800 space-y-3">
                <li>• <strong>De-scribe:</strong> Break it into &quot;de&quot; + &quot;scribe&quot;</li>
                <li>• <strong>E before S:</strong> Remember &quot;e&quot; comes before &quot;scribe&quot;</li>
                <li>• <strong>Latin Root:</strong> From &quot;describere&quot; meaning &quot;to write down&quot;</li>
                <li>• <strong>Related Words:</strong> Description, descriptive, indescribable</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Mistakes to Avoid</h3>
              <ul className="text-blue-800 space-y-3">
                <li>• Don&apos;t drop the &quot;e&quot; - it&apos;s not &quot;discribe&quot;</li>
                <li>• Don&apos;t confuse with &quot;prescribe&quot; or &quot;subscribe&quot;</li>
                <li>• Remember the &quot;e&quot; in the middle</li>
                <li>• Think of &quot;describe&quot; as &quot;de-scribe&quot;</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Q: Is &quot;discribe&quot; ever correct?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;discribe&quot; is never correct. The proper spelling is always &quot;describe&quot; with an &quot;e&quot; before &quot;scribe.&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of it as &quot;de-scribe&quot; - the &quot;de&quot; means &quot;down&quot; and &quot;scribe&quot; means &quot;write,&quot; so you&apos;re writing down details.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Q: What&apos;s the difference between describe and explain?</h3>
              <p className="text-lg text-gray-700">A: &quot;Describe&quot; focuses on giving details about appearance or characteristics, while &quot;explain&quot; focuses on making something clear or understandable.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Q: Can describe be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;describe&quot; is very appropriate in formal writing, academic papers, and business communications.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
              <p className="text-lg text-gray-700">A: The misspelling &quot;discribe&quot; likely occurs because people hear the &quot;d&quot; sound and forget the silent &quot;e&quot; in the middle.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-12 border border-green-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Summary</h2>
        <div className="text-center text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            <strong>Remember:</strong> &quot;Describe&quot; is the correct spelling with an &quot;e&quot; before &quot;scribe.&quot; It means to give an account of something in words.
          </p>
          <p>
            The misspelling &quot;discribe&quot; is never correct. Use &quot;describe&quot; in all contexts where you need to give details or explain what something is like.
          </p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}