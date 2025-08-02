import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tenant or Tennant - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;tenant&quot; and &quot;tennant&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function TenantVsTennantPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Tenant or Tennant</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Which Spelling is Correct?</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Confused between &quot;tenant&quot; and &quot;tennant&quot;? Learn the correct spelling, meaning, and how to use it properly in your writing.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-500 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-800">Incorrect: Tennant</h3>
            </div>
            <p className="text-lg md:text-xl text-red-700">&quot;Tennant&quot; is a misspelling. The correct spelling is &quot;tenant&quot; with single &quot;n&quot;.</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-800">Correct: Tenant</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">&quot;Tenant&quot; is the correct spelling. It means a person who rents property.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-900">Tenant (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">A person who occupies land or property rented from a landlord; someone who holds or possesses property under a lease or rental agreement.</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-green-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-green-800 space-y-2">
                  <li>• The <strong>tenant</strong> signed a one-year lease.</li>
                  <li>• The landlord and <strong>tenant</strong> agreed on the rent.</li>
                  <li>• The <strong>tenant</strong> is responsible for utilities.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tennant (noun):</h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">&quot;Tennant&quot; is a misspelling of &quot;tenant&quot; and is not a valid English word.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-red-900">Examples:</h4>
                <ul className="text-lg md:text-xl text-red-800 space-y-2">
                  <li>• &quot;Tennant&quot; is not used in standard English.</li>
                  <li>• Always use <strong>tenant</strong> when referring to renters.</li>
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
              <h4 className="text-xl font-semibold mb-2 text-green-900">Tenant:</h4>
              <ul className="text-lg md:text-xl text-green-800 space-y-1">
                <li>• Renter</li>
                <li>• Lessee</li>
                <li>• Occupant</li>
                <li>• Resident</li>
                <li>• Lodger</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-red-900">Tennant:</h4>
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
            <li>• <strong>Tenant</strong> is spelled with single &quot;n&quot;: ten-ant.</li>
            <li>• It is commonly used in legal and real estate contexts.</li>
            <li>• &quot;Tennant&quot; is never correct in any context.</li>
            <li>• The word comes from Latin &quot;tenere&quot; meaning &quot;to hold.&quot;</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tennant&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tennant&quot; is never correct. The proper spelling is always &quot;tenant.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Remember &quot;tenant&quot; has single &quot;n&quot; - think of it as &quot;ten-ant.&quot;</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What&apos;s the difference between tenant and renter?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Both mean the same thing, but &quot;tenant&quot; is more formal and legal, while &quot;renter&quot; is more casual.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tenant&quot; be used in formal writing?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tenant&quot; is very appropriate in formal and legal writing contexts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Why do people misspell &quot;tenant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: The misspelling &quot;tennant&quot; often happens by adding an extra &quot;n&quot; in the middle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: What are some common phrases using &quot;tenant&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Examples include: tenant rights, tenant agreement, tenant screening, and tenant responsibilities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Is &quot;tenant&quot; always about renting?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: Yes, &quot;tenant&quot; specifically refers to someone who rents or leases property from a landlord.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Q: Can &quot;tenant&quot; be used as a verb?</h3>
            <p className="text-lg md:text-xl text-gray-700">A: No, &quot;tenant&quot; is only used as a noun in standard English.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">Remember: <strong>Tenant</strong> is the correct spelling with single &quot;n&quot;: ten-ant. It means a person who rents or leases property from a landlord. The misspelling &quot;tennant&quot; is never correct. Always use &quot;tenant&quot; when referring to someone who rents property, especially in legal and formal contexts.</p>
      </div>
    </div>
  )
} 