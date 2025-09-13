import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Quarantine vs Corn Teen - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;quarantine&quot; and &quot;corn teen&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function QuarantineVsCornTeenPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Quarantine vs Corn Teen
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-8 rounded-2xl mb-10 border border-yellow-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Quarantine&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Corn teen&quot; is always incorrect - these are completely different words!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Corn Teen</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This is not a real word. It&apos;s a nonsensical combination that should be avoided.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Quarantine</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;isolation to prevent disease spread.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">&quot;Quarantine&quot; (Correct)</h3>
              <ul className="text-yellow-800 space-y-2">
                <li>• Medical isolation term</li>
                <li>• From Italian &quot;quarantina&quot;</li>
                <li>• Standard English</li>
                <li>• Used globally</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Corn Teen&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Not a real word</li>
                <li>• Nonsensical combination</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Key Differences</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Meaning: Medical vs nonsense</li>
                <li>• Usage: Valid vs invalid</li>
                <li>• Origin: Italian vs error</li>
                <li>• Context: Health vs nothing</li>
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
                <p className="text-lg text-green-800">&quot;The patient was placed in <strong>quarantine</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Travelers must undergo <strong>quarantine</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The ship was under <strong>quarantine</strong> for 14 days.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;Health officials ordered <strong>quarantine</strong> measures.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The patient was placed in <strong>corn teen</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;quarantine&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Travelers must undergo <strong>corn teen</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;quarantine&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The ship was under <strong>corn teen</strong> for 14 days&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;quarantine&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Health officials ordered <strong>corn teen</strong> measures&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;quarantine&quot;</p>
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
              <div className="text-4xl mb-3">🌽</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">No Corn Here</h3>
              <p className="text-yellow-800">&quot;Quarantine&quot; has nothing to do with corn!</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think &quot;Quar-an-tine&quot;</h3>
              <p className="text-blue-800">Quarantine = Quar + an + tine (three parts)</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;quarantine&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-teal-900 mb-2">Proofread</h3>
              <p className="text-teal-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Mandatory quarantine</strong> - required isolation</li>
                <li>• <strong>Self-quarantine</strong> - voluntary isolation</li>
                <li>• <strong>Quarantine period</strong> - isolation time</li>
                <li>• <strong>Quarantine facility</strong> - isolation center</li>
                <li>• <strong>Quarantine measures</strong> - isolation steps</li>
                <li>• <strong>Quarantine protocol</strong> - isolation rules</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The quarantine lasted 14 days&quot;</li>
                <li>• <strong>Verb:</strong> &quot;They quarantined the patient&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Quarantine prevents spread&quot;</li>
                <li>• <strong>Object:</strong> &quot;We enforced quarantine&quot;</li>
                <li>• <strong>Modifier:</strong> &quot;Quarantine procedures&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Multiple quarantines&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: Why do people misspell &quot;quarantine&quot; as &quot;corn teen&quot;?</h3>
              <p className="text-lg text-gray-700">A: This misspelling often occurs due to autocorrect errors or typing mistakes. &quot;Corn teen&quot; is not a real word and has no meaning in English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;quarantine&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;quarantine&quot; is perfectly acceptable in formal writing, medical documents, and professional communication. It&apos;s a standard English word used across all contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: What&apos;s the etymology of &quot;quarantine&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Quarantine&quot; comes from Italian &quot;quarantina&quot; meaning &quot;forty days,&quot; referring to the period ships were isolated during the Black Death to prevent disease spread.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, the spelling &quot;quarantine&quot; is standard across all English-speaking regions. However, pronunciation might vary slightly between American and British English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: How can I teach children the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Break down the word: &quot;quar-an-tine.&quot; Emphasize that it&apos;s a medical term and has nothing to do with food. Use it in sentences to reinforce meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What are some synonyms for &quot;quarantine&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: isolation, seclusion, segregation, separation, confinement, and sequestration.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;quarantine&quot; be used as an adjective?</h3>
              <p className="text-lg text-gray-700">A: Yes, &quot;quarantine&quot; can be used as an attributive noun in phrases like &quot;quarantine measures&quot; or &quot;quarantine procedures.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;quarantine&quot; and &quot;isolation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Quarantine&quot; refers to restricting movement of healthy people who may have been exposed to disease, while &quot;isolation&quot; separates sick people from healthy ones.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: How is &quot;quarantine&quot; used in veterinary medicine?</h3>
              <p className="text-lg text-gray-700">A: In veterinary medicine, &quot;quarantine&quot; refers to isolating animals to prevent the spread of infectious diseases, especially for imported animals or during disease outbreaks.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What&apos;s the plural form of &quot;quarantine&quot;?</h3>
              <p className="text-lg text-gray-700">A: The plural form is &quot;quarantines&quot; (quarantine + s). This follows the standard English rule for regular nouns.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Quarantine&quot;</strong> is a medical term meaning &quot;isolation to prevent disease spread.&quot; 
          <br />
          <strong>&quot;Corn teen&quot;</strong> is not a real word and should never be used.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Quarantine = Quar + an + tine (three parts)&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
