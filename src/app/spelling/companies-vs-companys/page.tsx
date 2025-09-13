import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Companies or Companys - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;companies&quot; and &quot;companys&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompaniesVsCompanysPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Companies or Companys</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;companies&quot; and &quot;companys&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Companys</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This is not the proper plural form.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Companys&quot; is an incorrect plural form of &quot;company&quot;. The correct plural is &quot;companies&quot;.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Companies</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper plural form of company.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Companies&quot; is the correct plural form of &quot;company&quot;, following the rule of changing &quot;y&quot; to &quot;ies&quot;.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Companies</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Companies</strong> (noun, plural): Multiple business organizations or commercial enterprises.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This is the plural form of &quot;company&quot;, which refers to a business organization. 
            The word follows the English rule where words ending in &quot;y&quot; preceded by a consonant change to &quot;ies&quot; in the plural.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Companies</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Corporations</li>
                <li>• Businesses</li>
                <li>• Organizations</li>
                <li>• Enterprises</li>
                <li>• Firms</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Establishments</li>
                <li>• Ventures</li>
                <li>• Operations</li>
                <li>• Concerns</li>
                <li>• Institutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;Many <span className="text-green-600 font-semibold">companies</span> are adopting remote work policies.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Incorrect:</strong> &quot;Many <span className="text-red-600 font-semibold">companys</span> are adopting remote work policies.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;These <span className="text-green-600 font-semibold">companies</span> have been in business for decades.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;Technology <span className="text-green-600 font-semibold">companies</span> are leading innovation.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Companies&quot; is the plural form of &quot;company&quot;</li>
          <li>• Follows the rule: words ending in &quot;y&quot; preceded by a consonant change to &quot;ies&quot;</li>
          <li>• The singular form is &quot;company&quot;, plural is &quot;companies&quot;</li>
          <li>• Commonly used in business, legal, and everyday contexts</li>
          <li>• The pronunciation is /ˈkʌmpəniz/ (KUM-puh-neez)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;companys&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;companys&quot; is never correct. It is always a misspelling of the plural form. 
              The correct plural of &quot;company&quot; is always &quot;companies&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the rule for making company plural?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              For words ending in &quot;y&quot; preceded by a consonant, change the &quot;y&quot; to &quot;ies&quot;. 
              So: company → companies, baby → babies, city → cities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of the rule: &quot;y&quot; becomes &quot;ies&quot; when preceded by a consonant. 
              Since &quot;n&quot; is a consonant, &quot;company&quot; becomes &quot;companies&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What about words ending in &quot;y&quot; preceded by a vowel?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Words ending in &quot;y&quot; preceded by a vowel just add &quot;s&quot;. 
              Examples: day → days, boy → boys, key → keys.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can company be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;company&quot; can be used as a verb meaning to accompany or keep someone company. 
              Example: &quot;I will company you to the store.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with companies?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;limited companies&quot;, &quot;holding companies&quot;, &quot;parent companies&quot;, 
              &quot;subsidiary companies&quot;, and &quot;startup companies&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there a difference between company and corporation?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Company&quot; is a general term for a business organization, while &quot;corporation&quot; is a specific legal structure. 
              All corporations are companies, but not all companies are corporations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Companies</strong> is the correct spelling, while <strong>companys</strong> is always incorrect. 
          &quot;Companies&quot; is the proper plural form of &quot;company&quot;, following the English rule where words ending in &quot;y&quot; 
          preceded by a consonant change to &quot;ies&quot;. Use &quot;companies&quot; when referring to multiple business organizations. 
          This spelling mistake is common but easily avoidable by remembering the basic pluralization rule.
        </p>
      </div>

      {/* Three Column Layout */}
      
    </div>
  )
} 