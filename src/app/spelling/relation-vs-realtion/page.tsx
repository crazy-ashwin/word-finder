import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Relation vs Realtion - Spelling Guide & Examples | Word Finder',
  description: 'Master the difference between &quot;relation&quot; and &quot;realtion&quot; with our comprehensive spelling guide. Learn proper usage, common errors, and memory tricks.',
}

export default function RelationVsRealtionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Relation vs Realtion
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Ultimate Spelling Guide: Understanding the Difference Between Correct and Incorrect Usage
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 p-8 rounded-2xl mb-10 border border-orange-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Answer</h2>
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <span className="text-2xl mr-3">🎯</span>
            <span className="text-2xl font-bold text-orange-600">&quot;Relation&quot; is Correct</span>
            <span className="text-2xl ml-3">✅</span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            &quot;Realtion&quot; is always incorrect - remember the &quot;ion&quot; in &quot;relation&quot;!
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
              <h3 className="text-3xl font-bold text-red-800 mb-4">Realtion</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-red-700 font-semibold">❌ INCORRECT</p>
              </div>
              <p className="text-lg text-red-700 leading-relaxed">
                This spelling is never acceptable in English. It&apos;s a common mistake that should be avoided.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="transform hover:scale-105 transition-transform duration-300 border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Relation</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-xl text-orange-700 font-semibold">✅ CORRECT</p>
              </div>
              <p className="text-lg text-orange-700 leading-relaxed">
                This is the proper spelling meaning &quot;a connection or association between things.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Explanation */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Understanding the Difference</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">&quot;Relation&quot; (Noun)</h3>
              <ul className="text-orange-800 space-y-2">
                <li>• Means &quot;connection&quot;</li>
                <li>• Has &quot;ion&quot; at the end</li>
                <li>• Related to &quot;relate&quot;</li>
                <li>• Used in formal writing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-red-900 mb-4">&quot;Realtion&quot; (Incorrect)</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Missing &quot;i&quot;</li>
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
                <li>• From Latin &quot;relatio&quot;</li>
                <li>• Related to &quot;relate&quot;</li>
                <li>• Always has &quot;ion&quot;</li>
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">✅ Correct Usage</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;There is a strong <strong>relation</strong> between diet and health.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>relation</strong> between the two events is clear.&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;What is your <strong>relation</strong> to the patient?&quot;</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg text-orange-800">&quot;The <strong>relation</strong> between cause and effect.&quot;</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-800 mb-4">❌ Common Mistakes</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;There is a strong <strong>realtion</strong> between diet and health&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>realtion</strong> between the two events is clear&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;What is your <strong>realtion</strong> to the patient?&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relation&quot;</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-lg text-red-800">&quot;The <strong>realtion</strong> between cause and effect&quot; ❌</p>
                <p className="text-sm text-red-600 mt-1">Should be: &quot;relation&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memory Tricks */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Memory Tricks & Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-orange-50 border-orange-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔤</div>
              <h3 className="text-xl font-bold text-orange-900 mb-2">ION Rule</h3>
              <p className="text-orange-800">&quot;Relation&quot; ends with &quot;ion&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Think Relate</h3>
              <p className="text-red-800">&quot;Relate&quot; + &quot;ion&quot; = &quot;relation&quot;</p>
            </CardContent>
          </Card>
          <Card className="bg-pink-50 border-pink-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-pink-900 mb-2">Write It Out</h3>
              <p className="text-pink-800">Practice writing &quot;relation&quot; to build muscle memory</p>
            </CardContent>
          </Card>
          <Card className="bg-rose-50 border-rose-300 text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-rose-900 mb-2">Proofread</h3>
              <p className="text-rose-800">Always double-check your spelling before submitting</p>
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
                <li>• <strong>In relation to</strong> - concerning something</li>
                <li>• <strong>Relation between</strong> - connection of two things</li>
                <li>• <strong>Relation to</strong> - connection to something</li>
                <li>• <strong>Close relation</strong> - strong connection</li>
                <li>• <strong>Direct relation</strong> - immediate connection</li>
                <li>• <strong>Family relation</strong> - family connection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grammatical Functions</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• <strong>Noun:</strong> &quot;The relation was clear&quot;</li>
                <li>• <strong>With articles:</strong> &quot;A relation&quot;</li>
                <li>• <strong>With adjectives:</strong> &quot;Strong relation&quot;</li>
                <li>• <strong>With prepositions:</strong> &quot;Relation to&quot;</li>
                <li>• <strong>With verbs:</strong> &quot;Show relation&quot;</li>
                <li>• <strong>Countable:</strong> &quot;Many relations&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Why do people confuse &quot;relation&quot; and &quot;realtion&quot;?</h3>
              <p className="text-lg text-gray-700">A: The confusion often stems from the similar pronunciation and the fact that people might drop the &quot;i&quot; thinking it follows a different pattern. The word can sound like it goes directly from &quot;relat&quot; to &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: Can &quot;relation&quot; be used in formal writing?</h3>
              <p className="text-lg text-gray-700">A: Absolutely! &quot;Relation&quot; is perfectly acceptable in formal writing, academic papers, business documents, and professional communication. It&apos;s a standard English word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: What&apos;s the difference between &quot;relation&quot; and &quot;realtion&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Relation&quot; is the correct spelling meaning &quot;a connection or association between things.&quot; &quot;Realtion&quot; is missing the &quot;i&quot; and is not a real word.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: Is &quot;relation&quot; always about connections?</h3>
              <p className="text-lg text-gray-700">A: While &quot;relation&quot; often refers to connections, it can also describe family ties, mathematical relationships, logical connections, and any association between things.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: How can I remember the correct spelling?</h3>
              <p className="text-lg text-gray-700">A: Think of &quot;relate&quot; - &quot;relation&quot; has &quot;ion&quot; at the end. Remember: &quot;Relate&quot; + &quot;ion.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: What are some synonyms for &quot;relation&quot;?</h3>
              <p className="text-lg text-gray-700">A: Common synonyms include: connection, association, link, relationship, correlation, and tie. Each has slightly different connotations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-pink-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-3">Q: Can &quot;relation&quot; be used in different contexts?</h3>
              <p className="text-lg text-gray-700">A: Yes! &quot;Relation&quot; is used in academic writing, business communication, casual conversation, and any discussion about connections or associations.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-rose-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-rose-900 mb-3">Q: What&apos;s the origin of the word &quot;relation&quot;?</h3>
              <p className="text-lg text-gray-700">A: &quot;Relation&quot; comes from Latin &quot;relatio&quot; meaning &quot;a bringing back&quot; or &quot;a report,&quot; which is related to &quot;relate&quot; meaning &quot;to connect.&quot;</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Q: Is &quot;relation&quot; a regular or irregular noun?</h3>
              <p className="text-lg text-gray-700">A: &quot;Relation&quot; follows a regular pattern. It&apos;s formed by adding &quot;ion&quot; to the verb &quot;relate,&quot; which is a common English suffix.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">Q: How can I avoid spelling &quot;relation&quot; incorrectly?</h3>
              <p className="text-lg text-gray-700">A: Practice writing the word, use memory tricks like thinking of &quot;relate + ion,&quot; and always proofread your work. The &quot;i&quot; in &quot;ion&quot; is the key!</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Summary */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Key Takeaway</h2>
        <p className="text-xl leading-relaxed mb-6">
          Always remember: <strong>&quot;Relation&quot;</strong> has &quot;ion&quot; at the end and means &quot;a connection.&quot; 
          <br />
          <strong>&quot;Realtion&quot;</strong> is missing the &quot;i&quot; and is never correct.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg inline-block">
          <p className="text-lg font-semibold">💡 Pro Tip: Think &quot;RELATE + ION&quot; - &quot;relation&quot; has &quot;ion&quot; at the end!</p>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/relevance-vs-relevence" className="text-blue-700 hover:text-blue-900 underline">Relevance vs Relevence</a></li>
            <li><a href="/spelling/relay-vs-reley" className="text-blue-700 hover:text-blue-900 underline">Relay vs Reley</a></li>
            <li><a href="/spelling/relatively-vs-relativly" className="text-blue-700 hover:text-blue-900 underline">Relatively vs Relativly</a></li>
            <li><a href="/spelling/relating-vs-realting" className="text-blue-700 hover:text-blue-900 underline">Relating vs Realting</a></li>
            <li><a href="/spelling/related-vs-releated" className="text-blue-700 hover:text-blue-900 underline">Related vs Releated</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/connection-vs-conection" className="text-purple-700 hover:text-purple-900 underline">Connection vs Conection</a></li>
            <li><a href="/spelling/association-vs-association" className="text-purple-700 hover:text-purple-900 underline">Association vs Asociation</a></li>
            <li><a href="/spelling/correlation-vs-correlation" className="text-purple-700 hover:text-purple-900 underline">Correlation vs Corelation</a></li>
            <li><a href="/spelling/relationship-vs-relationship" className="text-purple-700 hover:text-purple-900 underline">Relationship vs Relationsip</a></li>
            <li><a href="/spelling/link-vs-linc" className="text-purple-700 hover:text-purple-900 underline">Link vs Linc</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/word-formation" className="text-green-700 hover:text-green-900 underline">Word Formation</a></li>
            <li><a href="/grammar/ion-suffix" className="text-green-700 hover:text-green-900 underline">-ion Suffix</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
