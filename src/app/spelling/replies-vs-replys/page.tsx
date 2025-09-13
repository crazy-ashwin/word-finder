import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Replies vs Replys - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;replies&quot; and &quot;replys&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RepliesVsReplysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Replies vs Replys
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
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-sky-600">&quot;Replies&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Replys&quot; is always incorrect - remember the &quot;ies&quot; ending for plural nouns ending in &quot;y&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Replys</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;ies&quot; ending and is never acceptable in English.
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
              <h3 className="text-3xl font-bold text-sky-800 mb-4">Replies</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-sky-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-sky-700 leading-relaxed">
                This is the proper spelling meaning &quot;multiple responses or answers.&quot;
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
              <h3 className="text-2xl font-bold text-sky-900 mb-4">&quot;Replies&quot; (Plural Noun)</h3>
              <ul className="text-sky-800 space-y-2">
                <li>• Means &quot;multiple responses&quot;</li>
                <li>• Has &quot;ies&quot; ending</li>
                <li>• Related to &quot;reply&quot;</li>
                <li>• Used in formal contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Replys&quot; (Incorrect)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Missing &quot;ies&quot; ending</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Grammar Rule</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Nouns ending in &quot;y&quot;</li>
                <li>• Change &quot;y&quot; to &quot;ies&quot;</li>
                <li>• Always for plural forms</li>
                <li>• Standard English rule</li>
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
                <p className="text-lg text-sky-800">&quot;She received many <strong>replies</strong> to her email.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;All the <strong>replies</strong> were helpful.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;The <strong>replies</strong> came quickly.&quot;</p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                <p className="text-lg text-sky-800">&quot;He read all the <strong>replies</strong> carefully.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She received many <strong>replys</strong> to her email&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;All the <strong>replys</strong> were helpful&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>replys</strong> came quickly&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He read all the <strong>replys</strong> carefully&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;replies&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Y to IES Rule</h3>
              <p className="text-yellow-800">&quot;Reply&quot; becomes &quot;replies&quot; - &quot;y&quot; to &quot;ies&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Baby</h3>
              <p className="text-blue-800">&quot;Baby&quot; becomes &quot;babies&quot; - same rule!</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;replies&quot; to build muscle memory</p>
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
                <li>• <strong>Multiple replies</strong> - several responses</li>
                <li>• <strong>Quick replies</strong> - fast responses</li>
                <li>• <strong>Helpful replies</strong> - useful responses</li>
                <li>• <strong>Professional replies</strong> - formal responses</li>
                <li>• <strong>Detailed replies</strong> - thorough responses</li>
                <li>• <strong>Timely replies</strong> - prompt responses</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;Replies are welcome&quot;</li>
                <li>• <strong>Object:</strong> &quot;I read the replies&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The replies&apos; content&quot;</li>
                <li>• <strong>Part of phrase:</strong> &quot;A series of replies&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Helpful replies&quot;</li>
                <li>• <strong>Countable noun:</strong> &quot;Many replies&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;replies&quot; and &quot;replys&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that many English words have irregular plural forms. People might forget the &quot;y&quot; to &quot;ies&quot; rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-900 mb-3">Q: Can &quot;replies&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Replies&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the difference between &quot;replies&quot; and &quot;replys&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Replies&quot; is the correct spelling meaning &quot;multiple responses.&quot; &quot;Replys&quot; is not a real word and should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;replies&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: While &quot;replies&quot; typically has neutral connotations, it can be used in both positive and negative contexts. Context determines whether it&apos;s seen as positive or negative.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word &quot;baby&quot; - &quot;baby&quot; becomes &quot;babies&quot; and &quot;reply&quot; becomes &quot;replies.&quot; Both follow the &quot;y&quot; to &quot;ies&quot; rule.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;replies&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: responses, answers, retorts, rejoinders, and comebacks. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;replies&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Replies&quot; is used in email communication, social media, business discussions, academic writing, and many other fields. It&apos;s a versatile word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the origin of the word &quot;replies&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Replies&quot; comes from Old French &quot;replier&quot; meaning &quot;to fold back&quot; or &quot;to answer,&quot; which is related to the verb &quot;reply&quot; meaning &quot;to respond.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;replies&quot; countable or uncountable?</h3>
              <p className="text-lg text-gray-700">A: &quot;Replies&quot; is a countable noun. You can have &quot;a reply&quot; (singular) or &quot;many replies&quot; (plural).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Replies&quot;</strong> has &quot;ies&quot; ending and means &quot;multiple responses.&quot; 
          <br />
          <strong>&quot;Replys&quot;</strong> is missing the &quot;ies&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Y to IES&quot; - &quot;reply&quot; becomes &quot;replies&quot; like &quot;baby&quot; becomes &quot;babies&quot;!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
