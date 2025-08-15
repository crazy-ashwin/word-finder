import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Suspicious vs Suspiciouss - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;suspicious&quot; vs &quot;suspiciouss&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SuspiciousVsSuspicioussPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Suspicious vs Suspiciouss
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl mb-10 border border-indigo-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Suspicious&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Suspiciouss&quot; is always incorrect - remember the &quot;ous&quot; ending!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Suspiciouss</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Suspicious</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;causing suspicion or distrust.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Suspic&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Core meaning</li>
                <li>• Like &quot;suspicion&quot;</li>
                <li>• Latin origin</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;I&quot; (Vowel)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Short &quot;i&quot; sound</li>
                <li>• Like &quot;in&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;e&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Ous&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Adjective ending</li>
                <li>• Like &quot;famous&quot;</li>
                <li>• Common suffix</li>
                <li>• Never &quot;ous&quot;</li>
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
                <p className="text-lg text-green-800">&quot;His behavior was <strong>suspicious</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The package looked <strong>suspicious</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She gave me a <strong>suspicious</strong> glance.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The activity seemed <strong>suspicious</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His behavior was <strong>suspiciouss</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The package looked <strong>suspiciouss</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She gave me a <strong>suspiciouss</strong> glance&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The activity seemed <strong>suspiciouss</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;suspicious&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">OUS Rule</h3>
              <p className="text-yellow-800">&quot;Suspicious&quot; ends with &quot;ous&quot; like &quot;famous&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Famous</h3>
              <p className="text-blue-800">&quot;Suspicious&quot; = &quot;ous&quot; ending, &quot;Suspiciouss&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;suspicious&quot; to build muscle memory</p>
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
                <li>• <strong>Suspicious activity</strong> - questionable behavior</li>
                <li>• <strong>Suspicious package</strong> - concerning item</li>
                <li>• <strong>Suspicious behavior</strong> - questionable actions</li>
                <li>• <strong>Suspicious circumstances</strong> - concerning situation</li>
                <li>• <strong>Suspicious timing</strong> - questionable timing</li>
                <li>• <strong>Suspicious person</strong> - concerning individual</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Adjective:</strong> &quot;The suspicious package&quot;</li>
                <li>• <strong>Predicate:</strong> &quot;The behavior is suspicious&quot;</li>
                <li>• <strong>Comparative:</strong> &quot;More suspicious&quot;</li>
                <li>• <strong>Superlative:</strong> &quot;Most suspicious&quot;</li>
                <li>• <strong>Adverb:</strong> &quot;Suspiciously quiet&quot;</li>
                <li>• <strong>Noun:</strong> &quot;The suspicious&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;suspicious&quot; and &quot;suspiciouss&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that some words can have multiple &quot;s&quot; sounds. Many people don&apos;t realize that &quot;suspicious&quot; ends with &quot;ous.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;suspicious&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Suspicious&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicious&quot; comes from Latin &quot;suspiciosus&quot; meaning &quot;full of suspicion&quot; and is related to words like &quot;suspicion&quot; and &quot;suspect.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;suspicious&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;suspicious&quot; ends with &quot;ous&quot; (like &quot;famous&quot;), and emphasize that &quot;suspiciouss&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: questionable, doubtful, dubious, shady, fishy, sketchy, and concerning. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;suspicious&quot; be used in business contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Suspicious&quot; is very common in business contexts, especially when referring to suspicious transactions, behavior, or activities that require investigation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;suspicious&quot; and &quot;doubtful&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicious&quot; often implies distrust or concern about hidden motives, while &quot;doubtful&quot; refers to uncertainty about truth or likelihood.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;suspicious&quot; as ending with &quot;ous&quot; like other adjectives: suspicious, famous, dangerous. The &quot;ous&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: suspiciouss, suspicous, suspisious, and suspicius. The correct spelling always ends with &quot;ous.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;suspicious&quot; used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: In legal contexts, &quot;suspicious&quot; refers to behavior or circumstances that warrant investigation or raise reasonable doubt about legality or propriety.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between suspicious and wary?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicious&quot; implies distrust or belief that something is wrong, while &quot;wary&quot; means being cautious or alert to potential danger.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;suspicious&quot; with an extra &quot;s&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often add an extra &quot;s&quot; because they may not pronounce the word clearly or confuse it with other words that have multiple &quot;s&quot; sounds, but &quot;suspicious&quot; specifically ends with &quot;ous.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;suspicious&quot; used in medical contexts?</h3>
              <p className="text-lg text-gray-700">A: In medical contexts, &quot;suspicious&quot; refers to symptoms, findings, or behaviors that suggest a potential health problem requiring further investigation or monitoring.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;suspicious&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Suspicious&quot; can mean: causing suspicion or distrust, questionable or doubtful, indicating potential danger, or suggesting hidden motives or wrongdoing.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Suspicious&quot;</strong> ends with &quot;ous&quot; and means &quot;causing suspicion or distrust.&quot; 
          <br />
          <strong>&quot;Suspiciouss&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SUSPIC + I + OUS = SUSPICIOUS&quot;</p>
        </div>
      </div>
    </div>
  )
}
