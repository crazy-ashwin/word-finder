import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Acquitted or Acquited - Which is Correct?",
  description: "Learn the correct spelling between &apos;acquitted&apos; and &apos;acquited&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AcquittedVsAcquitedPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Acquitted or Acquited</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Acquitted or Acquited, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Acquited</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Acquited&quot; is missing the second &quot;t&quot; - it should be &quot;acquitted.&quot;
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Acquitted</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Acquitted&quot; means declared not guilty of a crime.
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
              <span className="font-bold">Acquitted</span> (verb, past tense): Declared not guilty of a crime or wrongdoing. Freed from a criminal charge.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The jury acquitted him of all charges.</li>
              <li>She was acquitted after a lengthy trial.</li>
              <li>The defendant was acquitted due to lack of evidence.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;acquitted&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Legal:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Exonerated</li>
                  <li>Cleared</li>
                  <li>Vindicated</li>
                  <li>Absolved</li>
                  <li>Discharged</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">General:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Freed</li>
                  <li>Released</li>
                  <li>Liberated</li>
                  <li>Delivered</li>
                  <li>Spared</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Acquitted&quot; is the correct spelling. &quot;Acquited&quot; is a common misspelling—remember the double &quot;t&quot; in acquitted.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it acquited or acquitted?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;acquitted.&quot; &quot;Acquited&quot; is incorrect—it&apos;s missing the second &quot;t.&quot;</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce acquitted?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈkwɪtɪd/ (uh-KWIT-id).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does acquitted mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">It means declared not guilty of a crime or wrongdoing, freed from a criminal charge.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between acquitted and not guilty?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquitted is the legal term for being declared not guilty, while not guilty is the verdict itself.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquitted be used in formal writing?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The defendant was acquitted of all charges&quot; is appropriate in formal contexts.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with acquitted?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: acquitted of charges, acquitted by jury, acquitted on all counts, and acquitted of wrongdoing.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is acquitted used in legal contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;Acquitted&quot; is a standard legal term used in court proceedings and legal documents.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of acquitted?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;acquit&quot; - to declare someone not guilty of a crime.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of acquitted?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Acquitted comes from Latin &quot;ad&quot; + &quot;quietus&quot; meaning to set free or discharge.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can acquitted be used in everyday conversation?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;He was acquitted&quot; or &quot;The jury acquitted her&quot; are common uses.</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Three Column Layout */}
      
    </div>
  );
} 