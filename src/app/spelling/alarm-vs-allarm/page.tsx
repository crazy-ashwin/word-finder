import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Alarm or Allarm - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;alarm&quot; and &quot;allarm&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function AlarmVsAllarmPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Alarm or Allarm</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;alarm&quot; and &quot;allarm&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Allarm</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Allarm&quot; is a common misspelling. The correct spelling is &quot;alarm&quot; with a single &apos;l&apos;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Alarm</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Alarm&quot; is the correct spelling. It means a warning of danger, a device that signals an alert, or a feeling of fear or anxiety.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Alarm (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A warning of danger; a device that signals an alert; a feeling of fear or anxiety caused by the awareness of danger.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The fire <strong>alarm</strong> went off in the building.</li>
                  <li>• She felt a sense of <strong>alarm</strong> when she heard the news.</li>
                  <li>• Set your <strong>alarm</strong> for 7 a.m.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Allarm (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Allarm&quot; is not a standard English word and is considered a misspelling of &quot;alarm&quot;.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Allarm&quot; is not used in standard English for &quot;alarm&quot;.</li>
                  <li>• Always use <strong>alarm</strong> when referring to a warning or alert.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Alarm:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Alert</li>
                <li>• Warning</li>
                <li>• Signal</li>
                <li>• Notification</li>
                <li>• Caution</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Allarm:</h4>
              <ul className="text-lg md:text-xl text-red-800 space-y-1">
                <li>• (No valid synonyms; not a standard English word in this context)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Notes</h2>
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold mb-4 text-yellow-900">Important Points:</h3>
          <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
            <li>• <strong>Alarm</strong> is spelled with a single &apos;l&apos;, not double.</li>
            <li>• Used to describe a warning, device, or feeling of fear.</li>
            <li>• The plural is &quot;alarms&quot;.</li>
            <li>• &quot;Allarm&quot; is not correct in this context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;allarm&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;allarm&quot; is never correct as a spelling for &quot;alarm&quot;. Always use &quot;alarm&quot; for a warning or alert.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;alarm&quot; has a single &apos;l&apos;, not double.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;alarm&quot; refer to a feeling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;alarm&quot; can mean a feeling of fear or anxiety caused by danger.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;alarm&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: fire alarm, alarm clock, false alarm, raise the alarm.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;allarm&quot; happens because double &apos;l&apos; is common in English, but &quot;alarm&quot; only has one.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Alarm</strong> is the correct spelling with a single &apos;l&apos;. It refers to a warning, device, or feeling of fear. The misspelling &quot;allarm&quot; is never correct. Use &quot;alarm&quot; in safety, security, and everyday contexts.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 