import type { StructureResolver } from 'sanity/structure'
import { FolderIcon, ComponentIcon, TagIcon, DocumentTextIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Maxmachines')
    .items([
      S.listItem()
        .title('Categories')
        .icon(FolderIcon)
        .child(S.documentTypeList('category').title('Categories')),

      S.listItem()
        .title('Subcategories')
        .icon(ComponentIcon)
        .child(S.documentTypeList('subcategory').title('Subcategories')),

      S.listItem()
        .title('Products')
        .icon(TagIcon)
        .child(S.documentTypeList('product').title('Products')),

      S.listItem()
        .title('Blog Posts')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('blogPost').title('Blog Posts')),
    ])
