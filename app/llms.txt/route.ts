import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export const revalidate = 86400;

export async function GET() {
  const categories = await client.fetch<{ name: string; slug: string }[]>(
    `*[_type == "category"] | order(displayOrder asc) { name, "slug": slug.current }`
  );

  const categoryLines = categories
    .map((c) => `- ${c.name}: https://www.maxmachines.in/products/${c.slug}`)
    .join("\n");

  const text = `# Max Machine Tools — llms.txt
# Machine-readable summary for AI assistants and search systems.
# See https://llmstxt.org

## About
Max Machine Tools (MMT) is an industrial machinery supplier and trader.
The group has been trading since 1963. MMT was established in 2012.
Headquarters: Chennai, Tamil Nadu, India.
Hub: Ahmedabad, Gujarat, India.
GST: 33AAWFM0648L1ZS.

## Own Brands
- HABA — bandsaw machines, Made in India
- PRG — pillar drilling machines and press machines
- Kopis, Airdas, Velse, Modi — other in-house and traded brands

## Product Categories (live from catalog)
${categoryLines}

## What We Supply
Industrial machinery including bandsaw machines, lathe machines, drilling machines,
press machines, marking solutions, and more.
We supply machines Pan-India and for export.

## Markets Served
India (Pan-India supply), UAE, Middle East, Africa, South Asia, Export.
We export regularly by air and sea to UAE, the Middle East, Africa and South Asia. IEC holder. Certificate of Origin available.

## How to Buy
Enquiries are handled by phone, WhatsApp, or email.
We respond to every enquiry. No order is too small or too large.
Quotations are provided on request.

## Contact
Phone / WhatsApp (Chennai): +91 99620 61514
Sales WhatsApp: +91 93828 61514
Email: max@maxmachines.in
Website: https://www.maxmachines.in
Enquiry form: https://forms.gle/TXjAGS67M1Nnb2Ye9

## Social Media
YouTube: https://www.youtube.com/@MaxMachineTools
LinkedIn: https://www.linkedin.com/company/maxmachinetools
Facebook: https://www.facebook.com/MaxMachineToolsModi
Instagram: https://www.instagram.com/MaxMachineToolsModi
`;

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
