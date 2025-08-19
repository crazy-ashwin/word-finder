import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Studies vs Studys - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;studies&quot; and &quot;studys&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function StudiesVsStudysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
          Studies vs Studys
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-violet-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">📚</span>
            <span className="text-2xl font-bold text-green-600">&quot;Studies&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Studys&quot; is incorrect - remember to change &quot;y&quot; to &quot;ies&quot; for plural!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Studys</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling doesn&apos;t follow the plural rule for words ending in &quot;y.&quot;
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Studies</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper plural form meaning &quot;multiple areas of learning or research.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Plural Rule</h3>
              <ul className="text-indigo-800 space-y-2">
                <li>• Words ending in &quot;y&quot;</li>
                <li>• Change &quot;y&quot; to &quot;ies&quot;</li>
                <li>• Standard English rule</li>
                <li>• Applies to many words</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Examples</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Study → Studies</li>
                <li>• Baby → Babies</li>
                <li>• City → Cities</li>
                <li>• Party → Parties</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-violet-50 border-violet-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-violet-900 mb-4">Memory Tip</h3>
              <ul className="text-violet-800 space-y-2">
                <li>• &quot;Y&quot; becomes &quot;ies&quot;</li>
                <li>• Think &quot;y&quot; to &quot;ies&quot;</li>
                <li>• Common pattern</li>
                <li>• Easy to remember</li>
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
                <p className="text-lg text-green-800">&quot;Her <strong>studies</strong> focus on biology.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>studies</strong> show positive results.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;His <strong>studies</strong> include mathematics.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;These <strong>studies</strong> are important.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Her <strong>studys</strong> focus on biology&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;studies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>studys</strong> show positive results&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;studies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>studys</strong> include mathematics&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;studies&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;These <strong>studys</strong> are important&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;studies&quot;</p>
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
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Y to IES Rule</h3>
              <p className="text-yellow-800">&quot;Study&quot; becomes &quot;studies&quot; - y to ies</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Plural Pattern</h3>
              <p className="text-blue-800">Words ending in y change to ies</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;studies&quot; to build muscle memory</p>
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
                <li>• <strong>Case studies</strong> - detailed examinations</li>
                <li>• <strong>Field studies</strong> - research in natural settings</li>
                <li>• <strong>Clinical studies</strong> - medical research</li>
                <li>• <strong>Academic studies</strong> - educational research</li>
                <li>• <strong>Market studies</strong> - business research</li>
                <li>• <strong>Social studies</strong> - humanities education</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Related Words</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Study</strong> - singular form</li>
                <li>• <strong>Studies</strong> - plural form</li>
                <li>• <strong>Studying</strong> - present participle</li>
                <li>• <strong>Studied</strong> - past tense</li>
                <li>• <strong>Student</strong> - person who studies</li>
                <li>• <strong>Studio</strong> - place for study/work</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people misspell &quot;studies&quot; as &quot;studys&quot;?</h3>
              <p className="text-lg text-gray-700">A: The most common error is forgetting the plural rule for words ending in &quot;y.&quot; People often keep the &quot;y&quot; instead of changing it to &quot;ies,&quot; which is the correct English plural form.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Is &quot;studies&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Studies&quot; is a formal, standard English word commonly used in academic, scientific, and professional contexts. It&apos;s perfectly appropriate for all types of writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the rule for pluralizing words ending in &quot;y&quot;?</h3>
              <p className="text-lg text-gray-700">A: The general rule is: when a word ends in &quot;y&quot; and you want to make it plural, change the &quot;y&quot; to &quot;ies.&quot; Examples: study→studies, baby→babies, city→cities, party→parties.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there exceptions to the y→ies rule?</h3>
              <p className="text-lg text-gray-700">A: Yes, there are some exceptions. When a word ends in vowel + y (like &quot;day&quot;), you just add &quot;s&quot; (days). But for consonant + y (like &quot;study&quot;), you change to &quot;ies&quot; (studies).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Remember the rule: &quot;y&quot; becomes &quot;ies&quot; for plurals. Think of it as &quot;study&quot; + &quot;ies&quot; = &quot;studies.&quot; Practice writing it out to build muscle memory.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;studies&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: research, investigations, examinations, analyses, surveys, inquiries, and explorations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;studies&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Studies&quot; can refer to academic research, scientific investigations, market research, social research, or any systematic examination of a subject.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;study&quot; and &quot;studies&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Study&quot; is singular and refers to one area of learning or research, while &quot;studies&quot; is plural and refers to multiple areas or pieces of research.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How do I know when to use &quot;study&quot; vs &quot;studies&quot;?</h3>
              <p className="text-lg text-gray-700">A: Use &quot;study&quot; when referring to one piece of research or learning area (&quot;This study shows...&quot;). Use &quot;studies&quot; when referring to multiple pieces of research (&quot;These studies show...&quot;).</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: Is &quot;studys&quot; ever correct in any context?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;studys&quot; is never correct in English. It&apos;s a common misspelling that should always be corrected to &quot;studies&quot; when referring to the plural form.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Studies&quot;</strong> follows the y→ies plural rule. 
          <br />
          <strong>&quot;Studys&quot;</strong> is incorrect and should never be used.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Y becomes IES&quot; - study → studies!</p>
        </div>
      </div>
    </div>
  )
}
