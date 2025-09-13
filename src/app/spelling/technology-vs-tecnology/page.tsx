import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Technology or Tecnology - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;technology&quot; and &quot;tecnology&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TechnologyVsTecnologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Technology or Tecnology</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;technology&quot; and &quot;tecnology&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tecnology</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tecnology&quot; is a misspelling. The correct spelling is &quot;technology&quot; with &quot;h&quot; in the middle.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Technology</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Technology&quot; is the correct spelling. It means the application of scientific knowledge.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Technology (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The application of scientific knowledge for practical purposes; machinery and equipment developed from scientific knowledge; the branch of knowledge dealing with engineering or applied sciences.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Modern <strong>technology</strong> has changed our lives.</li>
                  <li>• The company invests in new <strong>technology</strong>.</li>
                  <li>• <strong>Technology</strong> is advancing rapidly.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tecnology (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tecnology&quot; is a misspelling of &quot;technology&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tecnology&quot; is not used in standard English.</li>
                  <li>• Always use <strong>technology</strong> when referring to tech.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-green-900">Technology:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Tech</li>
                <li>• Innovation</li>
                <li>• Engineering</li>
                <li>• Applied science</li>
                <li>• Digital tools</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tecnology:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Technology</strong> is spelled with &quot;h&quot; in the middle: tech-nol-o-gy.</li>
            <li>• It is commonly abbreviated as &quot;tech.&quot;</li>
            <li>• &quot;Tecnology&quot; is never correct in any context.</li>
            <li>• The word comes from Greek &quot;techne&quot; (art) + &quot;logos&quot; (study).</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tecnology&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tecnology&quot; is never correct. The proper spelling is always &quot;technology.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;technology&quot; has &quot;h&quot; in the middle - think of it as &quot;tech-nol-o-gy.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between technology and tech?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Tech&quot; is just the abbreviated form of &quot;technology&quot; - they mean the same thing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;technology&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;technology&quot; is appropriate in formal and academic writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;technology&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tecnology&quot; often happens by omitting the &quot;h&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;technology&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: technology company, technology sector, technology innovation, and technology advancement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;technology&quot; always about computers?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;technology&quot; can refer to any application of scientific knowledge, not just computers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;technology&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;technology&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Technology</strong> is the correct spelling with &quot;ch&quot; in the middle. It means scientific knowledge and tools. The misspelling &quot;tecnology&quot; with &quot;c&quot; is never correct. Always use &quot;technology&quot; when referring to scientific advances or tools.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 