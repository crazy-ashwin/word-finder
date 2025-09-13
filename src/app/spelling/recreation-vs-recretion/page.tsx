import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Recreation vs Recretion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;recreation&quot; and &quot;recretion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RecreationVsRecretionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          Recreation vs Recretion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-8 rounded-2xl mb-10 border border-lime-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-lime-600">&quot;Recreation&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Recretion&quot; is always incorrect - remember the &quot;a&quot; in &quot;recreation&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Recretion</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-lime-50 to-lime-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-lime-800 mb-4">Recreation</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-lime-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-lime-700 leading-relaxed">
                This is the proper spelling meaning &quot;leisure activity&quot; or &quot;entertainment.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-lime-50 border-lime-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">&quot;Recreation&quot; (Noun)</h3>
              <ul className="text-lime-800 space-y-2">
                <li>• Means &quot;leisure activity&quot;</li>
                <li>• Has &quot;a&quot; in the middle</li>
                <li>• Related to &quot;recreate&quot;</li>
                <li>• Used in various contexts</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Recretion&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;a&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Etymology</h3>
              <ul className="text-green-800 space-y-2">
                <li>• From Latin &quot;recreatio&quot;</li>
                <li>• Related to &quot;recreate&quot;</li>
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
            <h3 className="text-2xl font-bold text-lime-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;Outdoor <strong>recreation</strong> activities.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;The park offers <strong>recreation</strong> facilities.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;Family <strong>recreation</strong> time.&quot;</p>
              </div>
              <div className="bg-lime-50 p-4 rounded-lg border-l-4 border-lime-500">
                <p className="text-lg text-lime-800">&quot;Summer <strong>recreation</strong> programs.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Outdoor <strong>recretion</strong> activities&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recreation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The park offers <strong>recretion</strong> facilities&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recreation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Family <strong>recretion</strong> time&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recreation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Summer <strong>recretion</strong> programs&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;recreation&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-lime-50 border-lime-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-lime-900 mb-2">A Rule</h3>
              <p className="text-lime-800">&quot;Recreation&quot; has &quot;a&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Think Recreate</h3>
              <p className="text-green-800">&quot;Recreate&quot; + &quot;ion&quot; = &quot;recreation&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;recreation&quot; to build muscle memory</p>
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
                <li>• <strong>Outdoor recreation</strong> - outdoor activities</li>
                <li>• <strong>Recreation facilities</strong> - activity centers</li>
                <li>• <strong>Family recreation</strong> - family activities</li>
                <li>• <strong>Summer recreation</strong> - summer activities</li>
                <li>• <strong>Recreation programs</strong> - activity programs</li>
                <li>• <strong>Recreation areas</strong> - activity areas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The recreation was fun&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A recreation&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Outdoor recreation&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Recreation for&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Provide recreation&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many recreations&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Why do people confuse &quot;recreation&quot; and &quot;recretion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;a&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;recre&quot; to &quot;tion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;recreation&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Recreation&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between &quot;recreation&quot; and &quot;recretion&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recreation&quot; is the correct spelling meaning &quot;leisure activity&quot; or &quot;entertainment.&quot; &quot;Recretion&quot; is missing the &quot;a&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;recreation&quot; always about outdoor activities?</h3>
              <p className="text-lg text-gray-700">A: While &quot;recreation&quot; often refers to outdoor activities, it can include any leisure activity, entertainment, or pastime - both indoor and outdoor activities qualify as recreation.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;recreate&quot; - &quot;recreation&quot; has &quot;a&quot; in the middle. Remember: &quot;Recreate&quot; + &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;recreation&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: entertainment, leisure, amusement, pastime, hobby, activity, and diversion. Each has slightly different connotations and usage contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Can &quot;recreation&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Recreation&quot; is used in tourism, education, urban planning, health and wellness, and any context where you need to describe leisure activities or entertainment.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the origin of the word &quot;recreation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recreation&quot; comes from Latin &quot;recreatio&quot; meaning &quot;restoration&quot; or &quot;refreshment,&quot; which is related to &quot;recreate&quot; meaning &quot;to refresh&quot; or &quot;to restore.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Is &quot;recreation&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Recreation&quot; follows a regular pattern. It&apos;s formed by adding &quot;ion&quot; to the verb &quot;recreate,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: How can I avoid spelling &quot;recreation&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;recreate + ion,&quot; and always proofread your work. Remember: the &quot;a&quot; in the middle is the key!</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: What&apos;s the difference between recreation and entertainment?</h3>
              <p className="text-lg text-gray-700">A: While both refer to enjoyable activities, &quot;recreation&quot; often implies active participation and physical activity, while &quot;entertainment&quot; typically refers to passive enjoyment like watching movies or shows.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Can recreation be educational?</h3>
              <p className="text-lg text-gray-700">A: Yes! Many recreational activities can be educational, such as visiting museums, participating in workshops, learning new skills through hobbies, or exploring nature. Recreation and education often go hand in hand.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Recreation&quot;</strong> has &quot;a&quot; in the middle and means &quot;leisure activity.&quot; 
          <br />
          <strong>&quot;Recretion&quot;</strong> is missing the &quot;a&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RECREATE + ION&quot; - &quot;recreation&quot; has &quot;a&quot; in the middle!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
