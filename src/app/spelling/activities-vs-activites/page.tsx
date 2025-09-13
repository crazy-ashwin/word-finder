import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Activities or Activites - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;activities&quot; and &quot;activites&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function ActivitiesVsActivitesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Activities or Activites</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;activities&quot; and &quot;activites&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Activites</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Activites&quot; is a misspelling. The correct spelling is &quot;activities&quot; with an &quot;e&quot; before the &quot;s&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Activities</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Activities&quot; is the correct spelling. It means things that people do for enjoyment or to achieve something.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Activities (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">Things that people do for enjoyment, recreation, or to achieve a goal; actions or tasks.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The school offers many <strong>activities</strong> for students.</li>
                  <li>• Outdoor <strong>activities</strong> are popular in summer.</li>
                  <li>• She enjoys social <strong>activities</strong> on weekends.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Activites (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Activites&quot; is a misspelling of &quot;activities&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Activites&quot; is not used in standard English.</li>
                  <li>• Always use <strong>activities</strong> when referring to actions or tasks.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Activities:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Pursuits</li>
                <li>• Pastimes</li>
                <li>• Hobbies</li>
                <li>• Tasks</li>
                <li>• Events</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Activites:</h4>
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
            <li>• <strong>Activities</strong> is spelled with an &quot;e&quot; before the &quot;s&quot;, not &quot;activites&quot;.</li>
            <li>• The word comes from &quot;activity&quot; + the plural suffix &quot;ies&quot;.</li>
            <li>• Used to describe various types of actions, tasks, or recreational pursuits.</li>
            <li>• Common in educational, recreational, and business contexts.</li>
            <li>• &quot;Activites&quot; is never correct in any context.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;activites&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;activites&quot; is never correct. The proper spelling is always &quot;activities.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Think of it as &quot;activity&quot; + &quot;ies&quot; - the base word &quot;activity&quot; with the plural suffix &quot;ies&quot;.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between activities and events?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: &quot;Activities&quot; are ongoing actions or tasks, while &quot;events&quot; are specific occurrences at particular times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can activities be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;activities&quot; is very common in formal writing, especially in educational and business contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people often misspell this word?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling likely occurs because of confusion about the &quot;e&quot; before the &quot;s&quot; or pronunciation patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;activities&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: extracurricular activities, outdoor activities, team activities, and learning activities.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Activities</strong> is the correct spelling with an &quot;e&quot; before the &quot;s&quot;. It means things that people do for enjoyment or to achieve something. The misspelling &quot;activites&quot; is never correct. Use &quot;activities&quot; when referring to actions, tasks, or recreational pursuits.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 