import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Surveyor vs Surveyer - Correct Spelling & Word Definitions | Word Finder',
  description: 'Learn the correct spelling: &quot;surveyor&quot; vs &quot;surveyer&quot;. Understand word definitions, usage examples, and avoid common spelling mistakes.',
}

export default function SurveyorVsSurveyerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Surveyor vs Surveyer
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
            <span className="text-2xl font-bold text-green-600">&quot;Surveyor&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Surveyer&quot; is always incorrect - remember the &quot;or&quot; ending!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Surveyer</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Surveyor</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;one who surveys or examines land.&quot;
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">&quot;Survey&quot; (Root)</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Core meaning</li>
                <li>• Like &quot;survey&quot;</li>
                <li>• French origin</li>
                <li>• Easy to remember</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Y&quot; (Vowel)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Long &quot;e&quot; sound</li>
                <li>• Like &quot;key&quot;</li>
                <li>• Common pattern</li>
                <li>• Not &quot;i&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Or&quot; (Ending)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Person ending</li>
                <li>• Like &quot;actor&quot;</li>
                <li>• Common suffix</li>
                <li>• Never &quot;er&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The <strong>surveyor</strong> measured the land.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;A licensed <strong>surveyor</strong> examined the property.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The <strong>surveyor</strong> created a detailed map.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He works as a <strong>surveyor</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>surveyer</strong> measured the land&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surveyor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;A licensed <strong>surveyer</strong> examined the property&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surveyor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>surveyer</strong> created a detailed map&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surveyor&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He works as a <strong>surveyer</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;surveyor&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">OR Rule</h3>
              <p className="text-yellow-800">&quot;Surveyor&quot; ends with &quot;or&quot; like &quot;actor&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Think Actor</h3>
              <p className="text-blue-800">&quot;Surveyor&quot; = &quot;or&quot; ending, &quot;Surveyer&quot; = wrong</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;surveyor&quot; to build muscle memory</p>
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
                <li>• <strong>Land surveyor</strong> - measures property boundaries</li>
                <li>• <strong>Licensed surveyor</strong> - certified professional</li>
                <li>• <strong>Professional surveyor</strong> - qualified expert</li>
                <li>• <strong>Certified surveyor</strong> - officially recognized</li>
                <li>• <strong>Experienced surveyor</strong> - skilled practitioner</li>
                <li>• <strong>Independent surveyor</strong> - self-employed professional</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The surveyor arrived&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Surveyors are professionals&quot;</li>
                <li>• <strong>Object:</strong> &quot;I hired a surveyor&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The surveyor&apos;s report&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many surveyors&quot;</li>
                <li>• <strong>Prepositional:</strong> &quot;Work with surveyors&quot;</li>
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
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Why do people confuse &quot;surveyor&quot; and &quot;surveyer&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from similar pronunciation and the fact that some words can have &quot;er&quot; endings. Many people don&apos;t realize that &quot;surveyor&quot; ends with &quot;or.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;surveyor&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Surveyor&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;surveyor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surveyor&quot; comes from Old French &quot;surveior&quot; meaning &quot;overseer&quot; and is related to the verb &quot;survey.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;surveyor&quot; is standard across all English-speaking regions. However, some dialects might use different pronunciations, but the spelling remains the same.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids showing &quot;surveyor&quot; ends with &quot;or&quot; (like &quot;actor&quot;), and emphasize that &quot;surveyer&quot; is not a real word. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What are some synonyms for &quot;surveyor&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: measurer, mapper, assessor, inspector, examiner, and appraiser. The specific meaning depends on context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can &quot;surveyor&quot; be used in legal contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Surveyor&quot; is very common in legal contexts, especially when referring to property boundaries, land disputes, or real estate transactions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;surveyor&quot; and &quot;inspector&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surveyor&quot; specifically refers to someone who measures and maps land, while &quot;inspector&quot; is a broader term for someone who examines or reviews things.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">Q: How do you remember the correct spelling of &quot;surveyor&quot;?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;surveyor&quot; as ending with &quot;or&quot; like other person nouns: surveyor, actor, doctor, teacher. The &quot;or&quot; pattern is consistent and easy to remember.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What are some common misspellings of &quot;surveyor&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common misspellings include: surveyer, survayor, survayer, and survayor. The correct spelling always ends with &quot;or.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How is &quot;surveyor&quot; used in construction contexts?</h3>
              <p className="text-lg text-gray-700">A: In construction contexts, &quot;surveyor&quot; refers to professionals who measure and map construction sites, ensure proper alignment, and verify building dimensions.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the difference between surveyor and surveyor?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surveyor&quot; is the correct spelling meaning one who surveys land, while &quot;surveyer&quot; is an incorrect spelling that should never be used.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: Why do people often misspell &quot;surveyor&quot; with &quot;er&quot; instead of &quot;or&quot;?</h3>
              <p className="text-lg text-gray-700">A: People often confuse &quot;er&quot; and &quot;or&quot; because they may not pronounce the word clearly or confuse it with other words that have &quot;er&quot; endings, but &quot;surveyor&quot; specifically uses &quot;or.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: How is &quot;surveyor&quot; used in environmental contexts?</h3>
              <p className="text-lg text-gray-700">A: In environmental contexts, &quot;surveyor&quot; refers to professionals who assess environmental conditions, map natural resources, or evaluate environmental impact on land.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Q: What are the different meanings of &quot;surveyor&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Surveyor&quot; can mean: one who surveys or measures land, a professional who maps property boundaries, an examiner of land or property, or an overseer of construction projects.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Surveyor&quot;</strong> ends with &quot;or&quot; and means &quot;one who surveys or examines land.&quot; 
          <br />
          <strong>&quot;Surveyer&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SURVEY + OR = SURVEYOR&quot;</p>
        </div>
      </div>
    </div>
  )
}
