import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sheriff vs Sherif - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;sheriff&quot; and &quot;sherif&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SheriffVsSherifPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Sheriff vs Sherif
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-2xl mb-10 border border-blue-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-blue-600">&quot;Sheriff&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sherif&quot; is always incorrect - remember the double &quot;f&quot; in &quot;sheriff&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sherif</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Sheriff</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-blue-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-blue-700 leading-relaxed">
                This is the proper spelling meaning &quot;a law enforcement officer.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Sher&quot; (Start)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Beginning sound</li>
                <li>• Common prefix</li>
                <li>• Correct spelling</li>
                <li>• Standard English</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">&quot;Double F&quot; (Rule)</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Essential doubling</li>
                <li>• Changes pronunciation</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Iff&quot; (End)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Unique ending</li>
                <li>• Distinctive sound</li>
                <li>• Changes word type</li>
                <li>• Essential for grammar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Correct Usage Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">✅ Correct: &quot;Sheriff&quot;</h3>
              <div className="space-y-3">
                <p className="text-blue-800"><strong>•</strong> &quot;The sheriff arrested the suspect.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;She was elected county sheriff.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;The sheriff&apos;s department is investigating.&quot;</p>
                <p className="text-blue-800"><strong>•</strong> &quot;He works as a deputy sheriff.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sherif&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The sherif arrested the suspect&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She was elected county sherif&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The sherif&apos;s department is investigating&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He works as a deputy sherif&quot; ❌</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-yellow-50 border-yellow-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Double F&quot;</h3>
              <p className="text-yellow-800">&quot;Sheriff&quot; = &quot;sher&quot; + &quot;iff&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Remember &quot;FF&quot;</h3>
              <p className="text-blue-800">&quot;Sheriff&quot; has two &quot;f&quot;s like &quot;cliff&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Write It Out</h3>
              <p className="text-indigo-800">Practice writing &quot;sheriff&quot; to build muscle memory</p>
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

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: Why do people misspell &quot;sheriff&quot; as &quot;sherif&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often forget to double the &quot;f&quot; when writing the word. They might think one &quot;f&quot; is enough, but English spelling rules require the double &quot;f&quot; to maintain the correct pronunciation and meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;sheriff&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sheriff&quot; is perfectly acceptable in formal writing, legal documents, academic papers, and professional communication. It&apos;s a standard English word that conveys important meaning about law enforcement.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;sheriff&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Sheriff&quot; comes from the Old English words &quot;scīr&quot; (shire) and &quot;gerēfa&quot; (reeve), meaning &quot;shire-reeve&quot; or &quot;county official.&quot; It has been used in English since the 10th century and is a title of great historical significance.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sheriff&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sherif&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;sheriff&quot; as having two &quot;f&quot;s like &quot;cliff&quot; or &quot;stiff.&quot; Remember that it&apos;s not &quot;sherif&quot; but rather &quot;sheriff&quot; with double &quot;f.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What are some synonyms for &quot;sheriff&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: lawman, peace officer, constable, marshal, and police officer (though sheriff has specific legal authority and jurisdiction).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;sheriff&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Sheriff&quot; can refer to county law enforcement, historical contexts, fictional characters, and various other law enforcement situations depending on the context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;sheriff&quot; and &quot;police officer&quot;?</h3>
              <p className="text-lg text-gray-700">A: A sheriff is typically an elected county law enforcement official with broader jurisdiction, while a police officer is usually a municipal law enforcement officer with city-specific jurisdiction.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;sheriff&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;sheriff&quot; is neutral - it simply refers to a law enforcement position. It can be used in positive, negative, or neutral contexts depending on the surrounding language and context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What are some common phrases with &quot;sheriff&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;county sheriff,&quot; &quot;deputy sheriff,&quot; &quot;sheriff&apos;s department,&quot; &quot;sheriff&apos;s office,&quot; and &quot;high sheriff.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Are there other words that end with &quot;iff&quot;?</h3>
              <p className="text-lg text-gray-700">A: Yes! Some examples include: &quot;cliff,&quot; &quot;stiff,&quot; &quot;sniff,&quot; &quot;whiff,&quot; and &quot;riff.&quot; This pattern helps reinforce the correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How does this spelling affect pronunciation?</h3>
              <p className="text-lg text-gray-700">A: The double &quot;f&quot; in &quot;sheriff&quot; creates a distinct &quot;iff&quot; sound that distinguishes it from words ending in single &quot;f.&quot; This helps maintain clear pronunciation and meaning.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Sheriff&quot;</strong> has double &quot;f&quot; like &quot;cliff.&quot;
          <br />
          <strong>&quot;Sherif&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SHERIFF = Sher + iff&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Sheriff</strong> is the correct spelling with double &quot;f&quot;: sher-iff. It means a law enforcement officer. The misspelling &quot;sherif&quot; is never correct. Always use &quot;sheriff&quot; when referring to this type of law enforcement officer.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
