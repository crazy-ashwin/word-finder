import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Requisition vs Requisision - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;requisition&quot; and &quot;requisision&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RequisitionVsRequisisionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Requisition vs Requisision
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
            <span className="text-2xl mr-3">📋</span>
            <span className="text-2xl font-bold text-green-600">&quot;Requisition&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Requisision&quot; is incorrect - remember the &quot;ti&quot; not &quot;si&quot; in &quot;requisition&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Requisision</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling has &quot;si&quot; instead of &quot;ti&quot; and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Requisition</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a formal request or demand.&quot;
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
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Requisition&quot; (Correct)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Contains &quot;ti&quot;</li>
                <li>• Means &quot;formal request&quot;</li>
                <li>• Complete word</li>
                <li>• Used in business</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Requisision&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Has &quot;si&quot; instead of &quot;ti&quot;</li>
                <li>• Not a real word</li>
                <li>• Common misspelling</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Word Structure</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Re-qui-si-tion&quot;</li>
                <li>• Four syllables</li>
                <li>• &quot;Ti&quot; is essential</li>
                <li>• Follows Latin roots</li>
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
                <p className="text-lg text-green-800">&quot;Please submit a <strong>requisition</strong> for office supplies.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>requisition</strong> form must be approved by management.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;We received your <strong>requisition</strong> for new equipment.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>requisition</strong> process takes 48 hours.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Please submit a <strong>requisision</strong> for supplies&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;requisition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>requisision</strong> form&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;requisition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;We received your <strong>requisision</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;requisition&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>requisision</strong> process&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;requisition&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">TI Rule</h3>
              <p className="text-yellow-800">&quot;Requisition&quot; has &quot;ti&quot; like &quot;nation&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Nation</h3>
              <p className="text-rose-800">&quot;Requisition&quot; ends like &quot;nation&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;requisition&quot; to build muscle memory</p>
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
                <li>• <strong>Purchase requisition</strong> - buying request</li>
                <li>• <strong>Requisition form</strong> - request document</li>
                <li>• <strong>Requisition process</strong> - request procedure</li>
                <li>• <strong>Requisition number</strong> - request identifier</li>
                <li>• <strong>Requisition system</strong> - request management</li>
                <li>• <strong>Requisition approval</strong> - request authorization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The requisition was approved&quot;</li>
                <li>• <strong>Verb:</strong> &quot;They will requisition supplies&quot;</li>
                <li>• <strong>Gerund:</strong> &quot;Requisitioning items takes time&quot;</li>
                <li>• <strong>Past tense:</strong> &quot;They requisitioned equipment&quot;</li>
                <li>• <strong>Past participle:</strong> &quot;The requisitioned materials&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Requisition forms&quot;</li>
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
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people confuse &quot;requisition&quot; and &quot;requisision&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that &quot;si&quot; and &quot;ti&quot; can sound similar. However, the correct spelling uses &quot;ti&quot; as in &quot;nation.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;requisition&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Requisition&quot; is perfectly acceptable in formal writing, business documents, and professional communication. It&apos;s a standard business term.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;requisition&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Requisition&quot; comes from Latin &quot;requisitio&quot; meaning &quot;a searching for&quot; or &quot;demand.&quot; The word has been used in English since the 15th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;requisition&quot; is standard across all English-speaking regions. The pronunciation might vary slightly, but the spelling remains consistent.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;requisition&quot; ending like &quot;nation.&quot; Break down the word into syllables: re-qui-si-tion. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;requisition&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: request, demand, order, application, petition, claim, call, and summons.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;requisition&quot; be used in everyday conversation?</h3>
              <p className="text-lg text-gray-700">A: While &quot;requisition&quot; is more formal, it can be used in everyday conversation when discussing formal requests or business processes. It&apos;s commonly used in workplace settings.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the difference between &quot;requisition&quot; and &quot;request&quot;?</h3>
              <p className="text-lg text-gray-700">A: While both mean asking for something, &quot;requisition&quot; is more formal and often refers to official or business requests, while &quot;request&quot; is more general and can be used in any context.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Requisition&quot;</strong> contains &quot;ti&quot; and means &quot;formal request.&quot; 
          <br />
          <strong>&quot;Requisision&quot;</strong> has &quot;si&quot; instead of &quot;ti&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;REQUISITION = NATION&quot; - both have &quot;ti&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/rescue-vs-rescure" className="text-blue-700 hover:text-blue-900 underline">Rescue vs Rescure</a></li>
            <li><a href="/spelling/requisition-vs-requition" className="text-blue-700 hover:text-blue-900 underline">Requisition vs Requition</a></li>
            <li><a href="/spelling/requisition-vs-requistion" className="text-blue-700 hover:text-blue-900 underline">Requisition vs Requistion</a></li>
            <li><a href="/spelling/representative-vs-representive" className="text-blue-700 hover:text-blue-900 underline">Representative vs Representive</a></li>
            <li><a href="/spelling/represent-vs-representate" className="text-blue-700 hover:text-blue-900 underline">Represent vs Representate</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/nation-vs-nation" className="text-purple-700 hover:text-purple-900 underline">Nation vs Nation</a></li>
            <li><a href="/spelling/station-vs-station" className="text-purple-700 hover:text-purple-900 underline">Station vs Station</a></li>
            <li><a href="/spelling/relation-vs-relation" className="text-purple-700 hover:text-purple-900 underline">Relation vs Relation</a></li>
            <li><a href="/spelling/education-vs-education" className="text-purple-700 hover:text-purple-900 underline">Education vs Education</a></li>
            <li><a href="/spelling/condition-vs-condition" className="text-purple-700 hover:text-purple-900 underline">Condition vs Condition</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/abstract-nouns" className="text-green-700 hover:text-green-900 underline">Abstract Nouns</a></li>
            <li><a href="/grammar/action-verbs" className="text-green-700 hover:text-green-900 underline">Action Verbs</a></li>
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/active-vs-passive-voice" className="text-green-700 hover:text-green-900 underline">Active vs Passive Voice</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
