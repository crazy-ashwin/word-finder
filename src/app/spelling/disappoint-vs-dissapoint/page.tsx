import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Disappoint or Dissapoint - Which is Correct?",
  description: "Learn the correct spelling between &apos;disappoint&apos; and &apos;dissapoint&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function DisappointVsDissapointPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Disappoint or Dissapoint</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Disappoint or Dissapoint, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Dissapoint</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Dissapoint&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Disappoint</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Disappoint&quot; is a verb meaning to fail to fulfill hopes or expectations.
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
              <span className="font-bold">Disappoint</span> (verb): To fail to fulfill the hopes or expectations of someone; to let down.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I don&apos;t want to disappoint my parents.</li>
              <li>The movie disappointed many fans.</li>
              <li>She was disappointed by the test results.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;disappoint&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Let down</li>
                  <li>Disillusion</li>
                  <li>Discourage</li>
                  <li>Frustrate</li>
                  <li>Dishearten</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Disappointment</li>
                  <li>Letdown</li>
                  <li>Frustration</li>
                  <li>Disillusionment</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Disappoint&quot; is the correct spelling. &quot;Dissapoint&quot; is a common misspelling—remember, it only has one &quot;s&quot; after the &quot;i&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it dissapoint or disappoint?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;disappoint&quot;. &quot;Dissapoint&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce disappoint?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌdɪsəˈpɔɪnt/ (dis-uh-POINT).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does disappoint mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To fail to fulfill the hopes or expectations of someone; to let down.</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 