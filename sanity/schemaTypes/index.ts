import { type SchemaTypeDefinition } from 'sanity'

// Objects
import { seoMeta } from './objects/seoMeta'
import { specRow } from './objects/specRow'
import { productVariant } from './objects/productVariant'
import { accessoryItem } from './objects/accessoryItem'
import { faqItem } from './objects/faqItem'
import { videoItem } from './objects/videoItem'
import { pdfDownload } from './objects/pdfDownload'

// Documents
import { category } from './documents/category'
import { subcategory } from './documents/subcategory'
import { product } from './documents/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects (reusable field groups)
    seoMeta,
    specRow,
    productVariant,
    accessoryItem,
    faqItem,
    videoItem,
    pdfDownload,

    // Documents
    category,
    subcategory,
    product,
  ],
}
