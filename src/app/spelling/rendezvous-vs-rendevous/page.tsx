import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rendezvous vs Rendevous - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rendezvous&quot; and &quot;rendevous&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RendezvousVsRendevousPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
          Rendezvous vs Rendevous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-8 rounded-2xl mb-10 border border-purple-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">✅</span>
            <span className="text-2xl font-bold text-purple-600">&quot;Rendezvous&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rendevous&quot; is always incorrect - remember the &quot;z&quot; in &quot;rendezvous&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rendevous</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is missing the &quot;z&quot; and is never acceptable in English.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4">Rendezvous</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-purple-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-purple-700 leading-relaxed">
                This is the proper spelling meaning &quot;a meeting at an agreed time and place.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">&quot;Rendezvous&quot; (Noun/Verb)</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• Means &quot;meeting place&quot;</li>
                <li>• Has &quot;z&quot; in the middle</li>
                <li>• French origin word</li>
                <li>• Used in military/romance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Rendevous&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;z&quot;</li>
                <li>• Not a real English word</li>
                <li>• Common spelling mistake</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Etymology</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• From French &quot;rendez-vous&quot;</li>
                <li>• Literally &quot;present yourselves&quot;</li>
                <li>• Always has &quot;z&quot;</li>
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
            <h3 className="text-2xl font-bold text-purple-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;Let&apos;s have a <strong>rendezvous</strong> at the café.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The spies arranged a secret <strong>rendezvous</strong>.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;They will <strong>rendezvous</strong> at noon.&quot;</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-purple-800">&quot;The <strong>rendezvous</strong> point was secure.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Let&apos;s have a <strong>rendevous</strong> at the café&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rendezvous&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The spies arranged a secret <strong>rendevous</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rendezvous&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;They will <strong>rendevous</strong> at noon&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rendezvous&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>rendevous</strong> point was secure&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rendezvous&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-purple-50 border-purple-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Z in the Middle</h3>
              <p className="text-purple-800">&quot;Rendezvous&quot; has &quot;z&quot; in the middle</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🇫🇷</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">French Origin</h3>
              <p className="text-pink-800">Think French &quot;rendez-vous&quot; with &quot;z&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Write It Out</h3>
              <p className="text-rose-800">Practice writing &quot;rendezvous&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-indigo-50 border-indigo-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Proofread</h3>
              <p className="text-indigo-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Secret rendezvous</strong> - private meeting</li>
                <li>• <strong>Rendezvous point</strong> - meeting location</li>
                <li>• <strong>Romantic rendezvous</strong> - love meeting</li>
                <li>• <strong>Military rendezvous</strong> - troop meeting</li>
                <li>• <strong>Rendezvous mission</strong> - meeting mission</li>
                <li>• <strong>Rendezvous time</strong> - meeting time</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rendezvous was successful&quot;</li>
                <li>• <strong>Verb:</strong> &quot;They will rendezvous there&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A rendezvous&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Secret rendezvous&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Rendezvous with&quot;</li>
                <li>• <strong>Plural form:</strong> &quot;Rendezvous&quot; (same)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Why do people confuse &quot;rendezvous&quot; and &quot;rendevous&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the unusual spelling and pronunciation. People might drop the &quot;z&quot; because it&apos;s silent in pronunciation, making it easy to forget when writing.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;rendezvous&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rendezvous&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the difference between &quot;rendezvous&quot; and &quot;rendevous&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rendezvous&quot; is the correct spelling meaning &quot;a meeting at an agreed time and place.&quot; &quot;Rendevous&quot; is missing the &quot;z&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Is &quot;rendezvous&quot; always romantic?</h3>
              <p className="text-lg text-gray-700">A: No, while &quot;rendezvous&quot; can be romantic, it&apos;s also used in military, business, and casual contexts. The word simply means a planned meeting.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the French origin - &quot;rendez-vous&quot; has &quot;z&quot; in the middle. The &quot;z&quot; is silent but essential for correct spelling.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What are some synonyms for &quot;rendezvous&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: meeting, appointment, assignation, tryst, gathering, and assembly. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Can &quot;rendezvous&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rendezvous&quot; can function as both a noun and a verb. As a verb, it means &quot;to meet at an agreed time and place.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What&apos;s the origin of the word &quot;rendezvous&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rendezvous&quot; comes from French &quot;rendez-vous&quot; meaning &quot;present yourselves&quot; or &quot;go to.&quot; It entered English in the 16th century.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Is &quot;rendezvous&quot; a regular or irregular word?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rendezvous&quot; is irregular because it&apos;s a French loanword that maintains its original spelling and pronunciation patterns.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rendezvous&quot;</strong> has &quot;z&quot; in the middle and means &quot;a meeting.&quot; 
          <br />
          <strong>&quot;Rendevous&quot;</strong> is missing the &quot;z&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;Z in the middle&quot; - &quot;rendezvous&quot; has &quot;z&quot; like the French original!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
}
