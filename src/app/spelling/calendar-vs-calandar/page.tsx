import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendar vs Calandar - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling: "calendar" vs "calandar". Discover the proper spelling, definition, usage examples, and tips to remember the correct form.',
  keywords: 'calendar, calandar, spelling, correct spelling, word comparison, English spelling',
}

export default function CalendarVsCalandarPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Calendar vs Calandar</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-green-800">Calendar</h2>
          </div>
          <p className="text-green-700 text-lg">Correct spelling</p>
        </div>
        
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-red-800">Calandar</h2>
          </div>
          <p className="text-red-700 text-lg">Incorrect spelling</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Definition</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-lg mb-4">
            <strong>Calendar</strong> is a system for organizing and measuring time, typically divided into days, weeks, months, and years. It can refer to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>A physical or digital tool showing dates and months</li>
            <li>A schedule of events or appointments</li>
            <li>A system for reckoning time (like the Gregorian calendar)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-lg"><strong>Correct:</strong> &quot;I marked the meeting on my calendar for next Tuesday.&quot;</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-lg"><strong>Correct:</strong> &quot;The school calendar shows when holidays are scheduled.&quot;</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-lg"><strong>Correct:</strong> &quot;She keeps a detailed calendar of all her appointments.&quot;</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Synonyms</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-lg mb-4">Words with similar meanings to &quot;calendar&quot;:</p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Schedule</li>
            <li>Agenda</li>
            <li>Planner</li>
            <li>Diary</li>
            <li>Datebook</li>
            <li>Timetable</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>&quot;Calendar&quot; comes from the Latin word &quot;calendarium&quot; meaning &quot;account book&quot;</li>
            <li>The word has been in English since the 13th century</li>
            <li>Common misspellings include &quot;calandar,&quot; &quot;calender,&quot; and &quot;calandar&quot;</li>
            <li>Remember: &quot;Calendar&quot; has an &quot;a&quot; in the middle, not an &quot;e&quot;</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Why do people misspell &quot;calendar&quot; as &quot;calandar&quot;?</h3>
            <p className="text-lg">This is likely due to phonetic confusion. The pronunciation of &quot;calendar&quot; can make the middle vowel sound unclear, leading some to write &quot;calandar&quot; instead of the correct &quot;calendar.&quot;</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">Is &quot;calandar&quot; ever correct?</h3>
            <p className="text-lg">No, &quot;calandar&quot; is never the correct spelling. It&apos;s always &quot;calendar&quot; with an &quot;a&quot; in the middle.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">How can I remember the correct spelling?</h3>
            <p className="text-lg">Think of &quot;calendar&quot; as having &quot;cal&quot; + &quot;endar&quot; - the &quot;a&quot; in the middle is consistent with the word&apos;s Latin origin. You can also remember: &quot;A calendar has dates, and &apos;date&apos; has an &apos;a&apos;.&quot;</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <p className="text-lg mb-4">
            <strong>Remember:</strong> The correct spelling is <strong>&quot;calendar&quot;</strong> with an &quot;a&quot; in the middle.
          </p>
          <p className="text-lg mb-4">
            &quot;Calandar&quot; is always incorrect and should be avoided in all contexts.
          </p>
          <p className="text-lg">
            Use &quot;calendar&quot; when referring to any system for organizing time, whether it&apos;s a physical planner, digital tool, or system of reckoning dates.
          </p>
        </div>
      </section>
    </div>
  )
} 