
// Deprecated: Logic moved to services/aiService.ts
export async function GET() {
  return new Response(JSON.stringify({ status: "deprecated" }), { status: 410 });
}
