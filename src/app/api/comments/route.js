let comments = [];

export async function GET() {
  return Response.json(comments);
}

export async function POST(req) {
  const body = await req.json();

  const newComment = {
    id: Date.now(),
    postId: body.postId,
    name: body.name,
    content: body.content,
    createdAt: new Date()
  };

  comments.push(newComment);

  return Response.json(newComment);
}