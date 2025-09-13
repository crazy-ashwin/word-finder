import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Believe or Belive - Which is Correct?",
  description: "Learn the correct spelling between &apos;believe&apos; and &apos;belive&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function BelieveVsBelivePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Believe or Belive</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Believe or Belive, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Belive</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Belive&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Believe</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Believe&quot; is a verb meaning to accept something as true.
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
              <span className="font-bold">Believe</span> (verb): To accept something as true; to have faith in the existence of something; to trust or have confidence in.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I believe in your ability to succeed.</li>
              <li>Do you believe in ghosts?</li>
              <li>She believes that hard work pays off.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;believe&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Trust</li>
                  <li>Accept</li>
                  <li>Have faith</li>
                  <li>Suppose</li>
                  <li>Think</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Belief</li>
                  <li>Faith</li>
                  <li>Trust</li>
                  <li>Confidence</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Believe&quot; is the correct spelling. &quot;Belive&quot; is a common misspelling—remember, it has an &quot;ie&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it belive or believe?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;believe.&quot; &quot;Belive&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce believe?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /bɪˈliːv/ (bih-LEEV).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does believe mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To accept something as true; to have faith in the existence of something; to trust or have confidence in.</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Believe</strong> is the correct spelling with &quot;lie&quot; in the middle. It means to accept something as true. The misspelling &quot;belive&quot; without the &quot;e&quot; is never correct. Always use &quot;believe&quot; when expressing faith or acceptance.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 