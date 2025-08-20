import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Speech vs Spech - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;speech&quot; and &quot;spech&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function SpeechVsSpechPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Speech vs Spech
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
            <span className="text-2xl mr-3">🎤</span>
            <span className="text-2xl font-bold text-rose-600">&quot;Speech&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Spech&quot; is always incorrect - remember the &quot;ee&quot; in &quot;speech&quot;!
          </p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚫</span>
              </div>
              <h3 className="text-3xl font-bold text-red-800 mb-4">Spech</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-rose-50 to-rose-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-800 mb-4">Speech</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-rose-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-rose-700 leading-relaxed">
                This is the proper spelling meaning &quot;the ability to speak or a formal address.&quot;
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
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Speech&quot; (Noun)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• The ability to speak</li>
                <li>• A formal address</li>
                <li>• Contains &quot;ee&quot; sound</li>
                <li>• Related to communication</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Spech&quot; (Incorrect)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Missing &quot;ee&quot; sound</li>
                <li>• Not a real word</li>
                <li>• Common typo</li>
                <li>• Should be avoided</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Key Difference</h3>
              <ul className="text-purple-800 space-y-2">
                <li>• &quot;Speech&quot; has &quot;ee&quot;</li>
                <li>• &quot;Spech&quot; is incomplete</li>
                <li>• Pronunciation differs</li>
                <li>• Meaning is lost</li>
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
            <h3 className="text-2xl font-bold text-rose-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;She gave an inspiring <strong>speech</strong> at graduation.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;Freedom of <strong>speech</strong> is a fundamental right.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;His <strong>speech</strong> was clear and persuasive.&quot;</p>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                <p className="text-lg text-rose-800">&quot;The president delivered a powerful <strong>speech</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She gave an inspiring <strong>spech</strong> at graduation&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;speech&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;Freedom of <strong>spech</strong> is a fundamental right&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;speech&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;His <strong>spech</strong> was clear and persuasive&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;speech&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The president delivered a powerful <strong>spech</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;speech&quot;</p>
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
              <div className="text-4xl mb-3">🎤</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Ee&quot;</h3>
              <p className="text-yellow-800">&quot;Speech&quot; has the &quot;ee&quot; sound like &quot;beach&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Sound It Out</h3>
              <p className="text-blue-800">Say &quot;speech&quot; not &quot;spech&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Write It Out</h3>
              <p className="text-green-800">Practice writing &quot;speech&quot; to build muscle memory</p>
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
                <li>• <strong>Freedom of speech</strong> - constitutional right</li>
                <li>• <strong>Speech therapy</strong> - language treatment</li>
                <li>• <strong>Speech impediment</strong> - speaking difficulty</li>
                <li>• <strong>Keynote speech</strong> - main address</li>
                <li>• <strong>Speech recognition</strong> - voice technology</li>
                <li>• <strong>Speech pattern</strong> - speaking style</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Subject:</strong> &quot;Speech is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;I heard the speech&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The speech&apos;s content&quot;</li>
                <li>• <strong>Adjective:</strong> &quot;Speech therapy&quot;</li>
                <li>• <strong>Plural:</strong> &quot;Many speeches&quot;</li>
                <li>• <strong>Compound:</strong> &quot;Speech-language pathologist&quot;</li>
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
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Why do people confuse &quot;speech&quot; and &quot;spech&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from typing quickly or not proofreading. Many people accidentally omit the &quot;ee&quot; sound, creating the incomplete word &quot;spech.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;speech&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Speech&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: What&apos;s the etymology of &quot;speech&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Speech&quot; comes from Old English &quot;spǣc&quot; meaning &quot;speech, language, discourse.&quot; It&apos;s related to the verb &quot;speak&quot; and has Germanic origins.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: The spelling &quot;speech&quot; is standard across all English-speaking regions. However, pronunciation may vary slightly between British and American English.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: How can I teach children the difference?</h3>
              <p className="text-lg text-gray-700">A: Use visual aids like &quot;speech&quot; having the &quot;ee&quot; sound (like &quot;beach&quot;), and emphasize that &quot;spech&quot; is incomplete. Create simple sentences and have them identify which spelling is correct.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: What are some synonyms for &quot;speech&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: address, talk, lecture, presentation, oration, discourse, monologue, and communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Can &quot;speech&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;speech&quot; is only a noun. The verb form is &quot;speak.&quot; You would say &quot;I will speak&quot; not &quot;I will speech.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;speech&quot; and &quot;talk&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Speech&quot; typically refers to a formal or prepared address, while &quot;talk&quot; is more casual and can refer to any form of verbal communication.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: How do I use &quot;speech&quot; in a sentence?</h3>
              <p className="text-lg text-gray-700">A: Use it as a noun: &quot;The speech was inspiring,&quot; or &quot;She delivered a powerful speech,&quot; or &quot;Freedom of speech is important.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;speech&quot; countable or uncountable?</h3>
              <p className="text-lg text-gray-700">A: &quot;Speech&quot; can be both countable (referring to specific addresses: &quot;three speeches&quot;) and uncountable (referring to the general concept: &quot;freedom of speech&quot;).</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-purple-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Speech&quot;</strong> has the &quot;ee&quot; sound and means &quot;the ability to speak or a formal address.&quot; 
          <br />
          <strong>&quot;Spech&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SPEECH has EE, not SPECH&quot;</p>
        </div>
      </div>
    </div>
  )
}
