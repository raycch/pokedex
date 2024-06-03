export function slug2Name(slug: string) {
  return slug.replaceAll("-", " ");
}

export function name2Slug(slug: string) {
  return slug.replaceAll(" ", "-");
}
