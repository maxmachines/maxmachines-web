import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Called by a Sanity webhook every time something is published in Studio.
// It refreshes the pages that show Sanity content so changes appear within a minute.
// Only requests signed with SANITY_REVALIDATE_SECRET are accepted.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Secret is not set" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  revalidatePath("/", "page");
  revalidatePath("/about", "page");
  revalidatePath("/products", "layout"); // /products and everything under it

  return NextResponse.json({ revalidated: true, type: body?._type ?? null, at: Date.now() });
}
