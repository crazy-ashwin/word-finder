import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Shepherd vs Sheperd - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;shepherd&quot; and &quot;sheperd&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function ShepherdVsSheperdPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Shepherd vs Sheperd
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 p-8 rounded-2xl mb-10 border border-green-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-green-600">&quot;Shepherd&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Sheperd&quot; is always incorrect - remember the &quot;h&quot; in &quot;shepherd&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Sheperd</h3>
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
              <h3 className="text-3xl font-bold text-green-800 mb-4">Shepherd</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-green-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-green-700 leading-relaxed">
                This is the proper spelling meaning &quot;a person who tends sheep.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">&quot;Sheep&quot; (Base)</h3>
              <ul className="text-green-800 space-y-2">
                <li>• Animal name</li>
                <li>• Plural form</li>
                <li>• Correct spelling</li>
                <li>• Standard English</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">&quot;H&quot; (Letter)</h3>
              <ul className="text-emerald-800 space-y-2">
                <li>• Essential letter</li>
                <li>• Changes pronunciation</li>
                <li>• Essential for meaning</li>
                <li>• Standard English rule</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">&quot;Herd&quot; (End)</h3>
              <ul className="text-teal-800 space-y-2">
                <li>• Group suffix</li>
                <li>• Management word</li>
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
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ Correct: &quot;Shepherd&quot;</h3>
              <div className="space-y-3">
                <p className="text-green-800"><strong>•</strong> &quot;The shepherd guided the flock.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;He works as a shepherd.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;The shepherd&apos;s dog helped.&quot;</p>
                <p className="text-green-800"><strong>•</strong> &quot;She is a good shepherd.&quot;</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ Incorrect: &quot;Sheperd&quot;</h3>
              <div className="space-y-3">
                <p className="text-red-800"><strong>•</strong> &quot;The sheperd guided the flock&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;He works as a sheperd&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;The sheperd&apos;s dog helped&quot; ❌</p>
                <p className="text-red-800"><strong>•</strong> &quot;She is a good sheperd&quot; ❌</p>
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
              <h3 className="text-xl font-bold text-yellow-900 mb-2">Think &quot;Sheep + Herd&quot;</h3>
              <p className="text-yellow-800">&quot;Shepherd&quot; = &quot;sheep&quot; + &quot;herd&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Remember &quot;H&quot;</h3>
              <p className="text-green-800">&quot;Shepherd&quot; has an &quot;h&quot; like &quot;herd&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-50 border-emerald-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Write It Out</h3>
              <p className="text-emerald-800">Practice writing &quot;shepherd&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proofread</h3>
              <p className="text-blue-800">Always double-check your spelling before submitting</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">Q: Why do people misspell &quot;shepherd&quot; as &quot;sheperd&quot;?</h3>
              <p className="text-lg text-gray-700">A: This common error occurs because people often omit the &quot;h&quot; when writing the word. They might think the &quot;h&quot; is silent, but it&apos;s essential for the correct spelling and pronunciation. The word combines &quot;sheep&quot; and &quot;herd,&quot; so the &quot;h&quot; is crucial.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-emerald-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Q: Is &quot;shepherd&quot; used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shepherd&quot; is perfectly acceptable in formal writing, academic papers, and professional communication. It&apos;s a standard English word that conveys important meaning about animal husbandry and pastoral care.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Q: What&apos;s the etymology of &quot;shepherd&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shepherd&quot; comes from the Old English words &quot;scēap&quot; (sheep) and &quot;hierde&quot; (herd), meaning &quot;sheep-herd.&quot; It has been used in English since the 12th century and is a compound word that clearly shows its meaning.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Are there regional variations in spelling?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shepherd&quot; is spelled the same way across all English-speaking regions. The spelling &quot;sheperd&quot; is never correct in any dialect or region.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;shepherd&quot; as combining &quot;sheep&quot; and &quot;herd.&quot; Remember that it&apos;s not &quot;sheperd&quot; but rather &quot;shepherd&quot; with an &quot;h&quot; to connect the two parts.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-violet-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-violet-900 mb-3">Q: What are some synonyms for &quot;shepherd&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: herder, drover, sheepherder, pastoralist, and flock keeper.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;shepherd&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Shepherd&quot; can refer to literal sheep herding, metaphorical guidance (like shepherding students), religious contexts, and various other pastoral situations depending on the context.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-cyan-900 mb-3">Q: What&apos;s the difference between &quot;shepherd&quot; and &quot;herder&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Shepherd&quot; specifically refers to someone who tends sheep, while &quot;herder&quot; is a more general term for someone who manages any type of livestock or animals.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-teal-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Q: Is &quot;shepherd&quot; always positive?</h3>
              <p className="text-lg text-gray-700">A: No, &quot;shepherd&quot; is generally positive but can be neutral. It simply indicates someone who tends sheep. The context determines whether it&apos;s positive, negative, or neutral.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-lime-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-lime-900 mb-3">Q: What are some common phrases with &quot;shepherd&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common phrases include: &quot;good shepherd,&quot; &quot;shepherd&apos;s pie,&quot; &quot;shepherd&apos;s crook,&quot; &quot;shepherd&apos;s staff,&quot; and &quot;shepherd&apos;s warning.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-indigo-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Q: Are there other words that follow the same pattern?</h3>
              <p className="text-lg text-gray-700">A: Yes! Similar compound words include &quot;cowherd,&quot; &quot;goatherd,&quot; and &quot;swineherd.&quot; All follow the pattern of animal name + &quot;herd&quot; with an &quot;h.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Q: How does this spelling affect pronunciation?</h3>
              <p className="text-lg text-gray-700">A: The &quot;h&quot; in &quot;shepherd&quot; creates a distinct &quot;herd&quot; sound that distinguishes it from &quot;sheperd.&quot; This helps maintain clear pronunciation and connects the word to its meaning of herding sheep.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Shepherd&quot;</strong> combines &quot;sheep&quot; and &quot;herd.&quot;
          <br />
          <strong>&quot;Sheperd&quot;</strong> is never correct in any context.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;SHEPHERD = Sheep + herd&quot;</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Master More Spelling?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our comprehensive spelling guides and improve your writing skills today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/spelling" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
            Browse All Spelling Guides
          </a>
          <a href="/word-finders" className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
            Explore Word Tools
          </a>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Shepherd</strong> is the correct spelling with &quot;herd&quot;: shep-herd. It means a person who tends sheep. The misspelling &quot;sheperd&quot; is never correct. Always use &quot;shepherd&quot; when referring to someone who cares for sheep.</p>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/arithmetic-vs-arithmatic" className="text-blue-700 hover:text-blue-900 underline">Arithmetic vs Arithmatic</a></li>
            <li><a href="/spelling/story-vs-storry" className="text-blue-700 hover:text-blue-900 underline">Story vs Storry</a></li>
            <li><a href="/spelling/stretched-vs-streched" className="text-blue-700 hover:text-blue-900 underline">Stretched vs Streched</a></li>
            <li><a href="/spelling/syphilis-vs-syphyllis" className="text-blue-700 hover:text-blue-900 underline">Syphilis vs Syphyllis</a></li>
            <li><a href="/spelling/accommodation-vs-accommidation" className="text-blue-700 hover:text-blue-900 underline">Accommodation vs Accommidation</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/seated-vs-sitted" className="text-purple-700 hover:text-purple-900 underline">Seated vs Sitted</a></li>
            <li><a href="/spelling/appreciate-vs-appreiciate" className="text-purple-700 hover:text-purple-900 underline">Appreciate vs Appreiciate</a></li>
            <li><a href="/spelling/allusion-vs-alusion" className="text-purple-700 hover:text-purple-900 underline">Allusion vs Alusion</a></li>
            <li><a href="/spelling/built-vs-builded" className="text-purple-700 hover:text-purple-900 underline">Built vs Builded</a></li>
            <li><a href="/spelling/barely-vs-bearly" className="text-purple-700 hover:text-purple-900 underline">Barely vs Bearly</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/adjectives" className="text-green-700 hover:text-green-900 underline">Adjectives Guide</a></li>
            <li><a href="/grammar/declarative-sentence" className="text-green-700 hover:text-green-900 underline">Declarative Sentences</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/adjectives-starting-with-vowels" className="text-green-700 hover:text-green-900 underline">Adjectives Starting with Vowels</a></li>
            <li><a href="/grammar/3rd-grade-worksheets-proper-nouns" className="text-green-700 hover:text-green-900 underline">Proper Nouns Worksheets</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
