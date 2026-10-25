export type WaContext =
  | { type: "product"; name: string }
  | { type: "category"; name: string }
  | { type: "export" }
  | { type: "generic" };

export function waLink(number: string, ctx: WaContext = { type: "generic" }): string {
  let msg: string;
  switch (ctx.type) {
    case "product":
      msg = `Hi Max Machine Tools, I saw your website maxmachines.in and I'm interested in ${ctx.name}. Please share price and details.`;
      break;
    case "category":
      msg = `Hi Max Machine Tools, I saw your website maxmachines.in and I'm interested in ${ctx.name}. Please share details.`;
      break;
    case "export":
      msg = `Hi Max Machine Tools, I saw your website maxmachines.in and I need an export quotation.`;
      break;
    default:
      msg = `Hi Max Machine Tools, I saw your website maxmachines.in and would like to know more about your machines.`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
