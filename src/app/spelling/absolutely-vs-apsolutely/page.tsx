import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absolutely or Apsolutely - Which is Correct?",
  description: "Learn the correct spelling between &apos;absolutely&apos; and &apos;apsolutely&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsolutelyVsApsolutelyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absolutely or Apsolutely</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Absolutely or Apsolutely, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apsolutely</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apsolutely&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absolutely</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absolutely&quot; means completely, totally, or without any doubt.
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
              <span className="font-bold">Absolutely</span> (adverb): Completely, totally, or without any doubt; used to emphasize agreement or certainty.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I absolutely love this movie!</li>
              <li>She is absolutely right about the situation.</li>
              <li>That&apos;s absolutely the best solution.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absolutely&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Adverbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Completely</li>
                  <li>Totally</li>
                  <li>Definitely</li>
                  <li>Certainly</li>
                  <li>Undoubtedly</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Positively</li>
                  <li>Unquestionably</li>
                  <li>Indisputably</li>
                  <li>Without doubt</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absolutely&quot; is the correct spelling. &quot;Apsolutely&quot; is a common misspelling—remember, it has a &quot;B&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apsolutely or absolutely?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absolutely.&quot; &quot;Apsolutely&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absolutely?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌæbsəˈluːtli/ (ab-suh-LOOT-lee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absolutely mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Completely, totally, or without any doubt; used to emphasize agreement or certainty.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What is the adjective form of absolutely?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adjective form is &quot;absolute&quot; - meaning complete, total, or not qualified.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can absolutely be used to show agreement?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Absolutely&quot; is commonly used to show strong agreement, like saying &quot;Yes, absolutely!&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is absolutely formal or informal?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Absolutely can be used in both formal and informal contexts, though it&apos;s more common in casual speech.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between absolutely and definitely?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both express certainty, but &quot;absolutely&quot; emphasizes completeness, while &quot;definitely&quot; emphasizes certainty.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can absolutely be used with negative words?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, you can say &quot;absolutely not&quot; to express strong disagreement or refusal.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with absolutely?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: absolutely not, absolutely right, absolutely wrong, absolutely essential, and absolutely perfect.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is absolutely overused in conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Some people think &quot;absolutely&quot; is overused as a filler word, so it&apos;s good to vary your vocabulary.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 