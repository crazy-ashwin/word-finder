import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Absorbancy or Absorbency - Which is Correct?",
  description: "Learn the correct spelling between &apos;absorbancy&apos; and &apos;absorbency&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsorbancyVsAbsorbencyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Absorbancy or Absorbency</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Did you mean &quot;Absorbency&quot;?
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Absorbancy</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Absorbancy&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Absorbency</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Absorbency&quot; is a noun meaning the ability to soak up liquids.
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
              <span className="font-bold">Absorbency</span> (noun): The ability to soak up liquids; the capacity of a material to absorb moisture or other substances.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The absorbency of this paper towel is impressive.</li>
              <li>Cotton has excellent absorbency for moisture.</li>
              <li>The absorbency rate of the sponge was tested in the laboratory.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;absorbency&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Soakage</li>
                  <li>Porosity</li>
                  <li>Permeability</li>
                  <li>Sponginess</li>
                  <li>Uptake</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Absorption</li>
                  <li>Retention</li>
                  <li>Capacity</li>
                  <li>Efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Absorbency&quot; is the correct noun for the ability to absorb liquids. &quot;Absorbancy&quot; is a common misspelling—remember, the correct ending is &quot;-ency.&quot;
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it absorbancy or absorbency?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;absorbency.&quot; &quot;Absorbancy&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce absorbency?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əbˈzɔːrbənsi/ (ub-ZOR-ben-see).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does absorbency mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The ability to soak up liquids; the capacity of a material to absorb moisture or other substances.</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Absorbency</strong> is the correct spelling with &quot;ency&quot; at the end. It means the ability to absorb liquids. The misspelling &quot;absorbancy&quot; with &quot;ancy&quot; is never correct. Always use &quot;absorbency&quot; when referring to absorption capacity.</p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 