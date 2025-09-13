import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Occurrence or Occurence - Which is Correct?",
  description: "Learn the correct spelling between &apos;occurrence&apos; and &apos;occurence&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function OccurrenceVsOccurencePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Occurrence or Occurence</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Occurrence or Occurence, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Occurence</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Occurence&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Occurrence</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Occurrence&quot; is a noun meaning an incident or event.
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
              <span className="font-bold">Occurrence</span> (noun): An incident or event; the fact or frequency of something happening.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Snow is a rare occurrence in this region.</li>
              <li>The occurrence of earthquakes has increased recently.</li>
              <li>This is the third occurrence of this problem this month.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;occurrence&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Events:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Event</li>
                  <li>Incident</li>
                  <li>Happening</li>
                  <li>Episode</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Instances:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Instance</li>
                  <li>Case</li>
                  <li>Occasion</li>
                  <li>Circumstance</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Occurrence&quot; is the correct spelling. &quot;Occurence&quot; is a common misspelling—remember, it has two &quot;r&quot; letters and ends with &quot;-ence&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it occurence or occurrence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;occurrence.&quot; &quot;Occurence&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce occurrence?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkɜːrəns/ (uh-KUR-uhns).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does occurrence mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">An incident or event; the fact or frequency of something happening.</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Occurrence</strong> is the correct spelling with double &quot;c&quot; and double &quot;r&quot;. It means an event or incident that happens. The misspelling &quot;occurence&quot; with single &quot;r&quot; is never correct. Always use &quot;occurrence&quot; when referring to events or incidents.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 