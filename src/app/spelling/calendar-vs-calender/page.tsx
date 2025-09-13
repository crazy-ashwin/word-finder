import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Calendar or Calender - Which is Correct?",
  description: "Learn the correct spelling between &apos;calendar&apos; and &apos;calender&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function CalendarVsCalenderPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Calendar or Calender</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Calendar or Calender, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Calender</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect for a date book. &quot;Calender&quot; is a machine in papermaking, not a schedule.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Calendar</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Calendar&quot; is a noun meaning a chart showing dates.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Calendar</span> (noun): A chart or series of pages showing the days, weeks, and months of a particular year; a system for organizing time.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I marked the date on my calendar.</li>
              <li>The calendar shows all the holidays this year.</li>
              <li>She checked her calendar for available dates.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;calendar&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Schedule</li>
                  <li>Planner</li>
                  <li>Agenda</li>
                  <li>Diary</li>
                  <li>Almanac</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Datebook</li>
                  <li>Yearbook</li>
                  <li>Timeline</li>
                  <li>Schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Calendar&quot; is the correct spelling for a date book or schedule. &quot;Calender&quot; is a common misspelling—remember, it ends with &quot;-ar&quot;. (&quot;Calender&quot; is a real word for a machine in papermaking, but not for dates.)
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it calender or calendar?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word for a date book is &quot;calendar.&quot; &quot;Calender&quot; is a common misspelling, but is a real word for a machine in papermaking.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce calendar?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈkælɪndər/ (KAL-in-der).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does calendar mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A chart or series of pages showing the days, weeks, and months of a year; a system for organizing time.</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Calendar</strong> is the correct spelling with &quot;ar&quot; at the end. It means a system for organizing time. The misspelling &quot;calender&quot; with &quot;er&quot; is never correct. Always use &quot;calendar&quot; when referring to date systems.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 