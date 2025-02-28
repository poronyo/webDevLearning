export async function GET(request, { params }) {
  console.log("testing an api");
  return Response.json({
    name: "pae testing ",
    id: params.id,
  });
}
