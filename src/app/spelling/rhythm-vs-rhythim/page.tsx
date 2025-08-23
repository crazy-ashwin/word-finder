import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Rhythm vs Rhythim - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;rhythm&quot; and &quot;rhythim&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RhythmVsRhythimPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
          Rhythm vs Rhythim
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100 p-8 rounded-2xl mb-10 border border-rose-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Rhythm&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Rhythim&quot; is always incorrect - remember to use &quot;thm&quot; not &quot;thim&quot; in the ending!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Rhythim</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling has the wrong ending: &quot;thim&quot; instead of &quot;thm.&quot; It&apos;s never acceptable in English.
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Rhythm</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-lg text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a strong, regular repeated pattern of movement or sound.&quot;
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
              <h3 className="text-2xl font-bold text-rose-900 mb-4">&quot;Rh&quot; (Correct Start)</h3>
              <ul className="text-rose-800 space-y-2">
                <li>• Starts with &quot;rh&quot;</li>
                <li>• Silent &quot;h&quot;</li>
                <li>• Must be included</li>
                <li>• Cannot be dropped</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">&quot;Rhythm&quot; (Complete)</h3>
              <ul className="text-pink-800 space-y-2">
                <li>• Means &quot;pattern of movement&quot;</li>
                <li>• Contains &quot;thm&quot; ending</li>
                <li>• Complete word form</li>
                <li>• Used for music/dance</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-fuchsia-900 mb-4">Wrong Ending</h3>
              <ul className="text-fuchsia-800 space-y-2">
                <li>• Wrong ending: &quot;thim&quot;</li>
                <li>• &quot;Rhythim&quot; is wrong</li>
                <li>• Should be &quot;thm&quot;</li>
                <li>• Always use &quot;thm&quot;</li>
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
                <p className="text-lg text-green-800">&quot;The music has a great <strong>rhythm</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;She danced to the <strong>rhythm</strong> of the drums.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;The poem follows a specific <strong>rhythm</strong>.&quot;</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-lg text-green-800">&quot;He has a natural sense of <strong>rhythm</strong>.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The music has a great <strong>rhythim</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhythm&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;She danced to the <strong>rhythim</strong> of the drums&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhythm&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The poem follows a specific <strong>rhythim</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhythm&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;He has a natural sense of <strong>rhythim</strong>&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;rhythm&quot;</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Start Right</h3>
              <p className="text-yellow-800">Use &quot;rh&quot; not &quot;ry&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Think Complete</h3>
              <p className="text-rose-800">Rhythm = rh + y + thm</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;rhythm&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-50 border-fuchsia-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Proofread</h3>
              <p className="text-fuchsia-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>Natural rhythm</strong> - innate timing</li>
                <li>• <strong>Rhythm and blues</strong> - music genre</li>
                <li>• <strong>Rhythm section</strong> - musical group</li>
                <li>• <strong>Rhythm method</strong> - birth control</li>
                <li>• <strong>Rhythm patterns</strong> - recurring beats</li>
                <li>• <strong>Rhythm guitar</strong> - musical instrument</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The rhythm is strong&quot;</li>
                <li>• <strong>Subject:</strong> &quot;Rhythm is important&quot;</li>
                <li>• <strong>Object:</strong> &quot;I love the rhythm&quot;</li>
                <li>• <strong>Possessive:</strong> &quot;The rhythm&apos;s beat&quot;</li>
                <li>• <strong>Adjective form:</strong> &quot;Rhythmic&quot;</li>
                <li>• <strong>Adverb form:</strong> &quot;Rhythmically&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Why do people use &quot;rhythim&quot; instead of &quot;rhythm&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from using the wrong ending &quot;thim&quot; instead of &quot;thm.&quot; People may incorrectly add an &quot;i&quot; to the ending, creating the misspelled &quot;rhythim&quot; instead of the correct &quot;rhythm.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Can &quot;rhythm&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rhythm&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s the standard English spelling and is commonly used in various contexts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What is the error in &quot;rhythim&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhythim&quot; has the wrong ending: it uses &quot;thim&quot; instead of &quot;thm.&quot; The correct spelling is &quot;rhythm&quot; with the proper &quot;thm&quot; ending, not &quot;thim.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Are there regional variations in usage?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;rhythm&quot; is spelled the same way across all English-speaking regions. The spelling &quot;rhythim&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-fuchsia-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-fuchsia-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of the word structure: &quot;rh&quot; (silent h) + &quot;y&quot; + &quot;thm&quot;. So &quot;rh&quot; + &quot;y&quot; + &quot;thm&quot; = &quot;rhythm.&quot; Remember the silent &quot;h&quot; and the correct &quot;thm&quot; ending.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: What are some synonyms for &quot;rhythm&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: beat, tempo, cadence, pulse, flow, pattern, timing, meter, and when used informally: groove, swing, or vibe.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: Can &quot;rhythm&quot; be used metaphorically?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Rhythm&quot; is often used metaphorically to describe patterns, flows, or natural cycles in various contexts beyond music, such as daily routines or natural processes.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: What&apos;s the difference between &quot;rhythm&quot; and &quot;rhythim&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhythm&quot; is the correct English word meaning &quot;a strong, regular repeated pattern of movement or sound,&quot; while &quot;rhythim&quot; is an incorrect spelling with the wrong ending &quot;thim&quot; instead of &quot;thm.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Do all words with &quot;thm&quot; follow this pattern?</h3>
              <p className="text-lg text-gray-700">A: Many words ending with &quot;thm&quot; follow similar patterns, but each word has its own specific spelling. The key is to learn each word individually and use the correct ending letters.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;rhythm&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Rhythm&quot; comes from the Greek word &quot;rhythmos,&quot; which meant &quot;measured flow or movement.&quot; The English word maintains the &quot;rh&quot; beginning and the &quot;thm&quot; ending pattern.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: Can &quot;rhythm&quot; be used as a verb?</h3>
              <p className="text-lg text-gray-700">A: While &quot;rhythm&quot; is primarily a noun, the verb form would be &quot;rhythmize&quot; (to give rhythm to). &quot;Rhythm&quot; itself describes the concept, not the action.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Rhythm&quot;</strong> starts with &quot;rh&quot; and ends with &quot;thm.&quot;
          <br />
          <strong>&quot;Rhythim&quot;</strong> has the wrong ending &quot;thim&quot; and is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RH&quot; + &quot;Y&quot; + &quot;THM&quot; = &quot;RHYTHM&quot;</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Featured Misspellings</h3>
          <ul className="space-y-3 text-blue-800">
            <li><a href="/spelling/ridden-vs-riden" className="hover:text-blue-600 underline">Ridden vs Riden</a></li>
            <li><a href="/spelling/rhythm-vs-rythym" className="hover:text-blue-600 underline">Rhythm vs Rythym</a></li>
            <li><a href="/spelling/rhythm-vs-rythum" className="hover:text-blue-600 underline">Rhythm vs Rythum</a></li>
            <li><a href="/spelling/rhythm-vs-rythme" className="hover:text-blue-600 underline">Rhythm vs Rythme</a></li>
            <li><a href="/spelling/rhythm-vs-rythm" className="hover:text-blue-600 underline">Rhythm vs Rythm</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Related Misspellings</h3>
          <ul className="space-y-3 text-green-800">
            <li><a href="/spelling/rhythm-vs-rhythym" className="hover:text-green-600 underline">Rhythm vs Rhythym</a></li>
            <li><a href="/spelling/rhythm-vs-rhytm" className="hover:text-green-600 underline">Rhythm vs Rhytm</a></li>
            <li><a href="/spelling/rhythm-vs-rythem" className="hover:text-green-600 underline">Rhythm vs Rythem</a></li>
            <li><a href="/spelling/ridden-vs-riden" className="hover:text-green-600 underline">Ridden vs Riden</a></li>
            <li><a href="/spelling/rhythm-vs-rythim" className="hover:text-green-600 underline">Rhythm vs Rythim</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Learned Grammar</h3>
          <ul className="space-y-3 text-purple-800">
            <li><a href="/confusing-words/accept-vs-except" className="hover:text-purple-600 underline">Accept vs Except</a></li>
            <li><a href="/confusing-words/advice-vs-advise" className="hover:text-purple-600 underline">Advice vs Advise</a></li>
            <li><a href="/confusing-words/allusion-vs-illusion" className="hover:text-purple-600 underline">Allusion vs Illusion</a></li>
            <li><a href="/confusing-words/altar-vs-alter" className="hover:text-purple-600 underline">Altar vs Alter</a></li>
            <li><a href="/confusing-words/amoral-vs-immoral" className="hover:text-purple-600 underline">Amoral vs Immoral</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
