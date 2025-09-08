export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Google Fonts Timeout Reproduction</h1>

        <div className="space-y-4">
          <p className="text-lg">This is a minimal reproduction case for Google Fonts timeout issues at build time.</p>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Font Test</h2>
            <p className="font-normal">Normal weight Montserrat text</p>
            <p className="font-medium">Medium weight Montserrat text</p>
            <p className="font-semibold">Semibold weight Montserrat text</p>
            <p className="font-bold">Bold weight Montserrat text</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Expected Issue:</h3>
            <p className="text-sm text-muted-foreground">
              During build time, Next.js may timeout when trying to fetch and optimize the Montserrat font files from
              Google Fonts CDN, particularly the woff2 files like:
              https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
