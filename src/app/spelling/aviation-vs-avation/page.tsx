import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Aviation or Avation - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;aviation&quot; and &quot;avation&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AviationVsAvationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Aviation or Avation</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;aviation&quot; and &quot;avation&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Avation</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Avation&quot; is a misspelling. The correct spelling is &quot;aviation&quot; with an &quot;i&quot; after the &quot;v&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Aviation</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Aviation&quot; is the correct spelling. It refers to the operation of aircraft and flying.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Aviation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">The operation of aircraft; the art or science of flying airplanes.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• Commercial <strong>aviation</strong> has revolutionized travel.</li>
                  <li>• He studied <strong>aviation</strong> engineering in college.</li>
                  <li>• The <strong>aviation</strong> industry employs thousands of people.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Avation (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Avation&quot; is a misspelling of &quot;aviation&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Avation&quot; is not used in standard English.</li>
                  <li>• Always use <strong>aviation</strong> when referring to flying.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-blue-900">Aviation:</h4>
              <ul className="text-lg md:text-xl text-blue-800 space-y-1">
                <li>• Flying</li>
                <li>• Aeronautics</li>
                <li>• Air travel</li>
                <li>• Flight</li>
                <li>• Air transportation</li>
                <li>• Aircraft operation</li>
                <li>• Air navigation</li>
                <li>• Flight technology</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Avation:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• <strong>Aviation</strong> is spelled with an &quot;i&quot; after the &quot;v&quot;, not just &quot;avation&quot;.</li>
          <li>• The word comes from Latin &quot;avis&quot; meaning bird, plus the suffix &quot;-ation&quot;.</li>
          <li>• Refers to both the technology and the industry of flying.</li>
          <li>• Commonly used in military, commercial, and recreational contexts.</li>
          <li>• &quot;Avation&quot; is never correct in any context.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;avation&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;avation&quot; is never correct. The proper spelling is always &quot;aviation&quot; with an &quot;i&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;avi-ation&quot; - the root &quot;avi&quot; (from Latin for bird) plus the suffix &quot;-ation&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between aviation and flying?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Aviation&quot; refers to the broader field of aircraft operation, while &quot;flying&quot; is the act of piloting an aircraft.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can aviation refer to military aircraft?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;aviation&quot; encompasses all types of aircraft operation, including military, commercial, and private aviation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;avation&quot; likely occurs because of pronunciation or confusion about the &quot;i&quot; sound.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;aviation&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: aviation industry, aviation safety, aviation technology, and aviation history.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is aviation only about airplanes?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;aviation&quot; includes all types of aircraft, including helicopters, gliders, and other flying vehicles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the study of aviation called?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The study of aviation is called &quot;aeronautics&quot; or &quot;aviation science.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Aviation</strong> is the correct spelling with an &quot;i&quot; after the &quot;v&quot;. It refers to the operation of aircraft and flying. The misspelling &quot;avation&quot; is never correct. Use &quot;aviation&quot; to describe the field, industry, or science of flying.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 