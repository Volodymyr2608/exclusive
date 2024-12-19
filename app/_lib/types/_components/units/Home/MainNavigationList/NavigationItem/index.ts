export type TNavigationItem = { 
  name: string; 
  link: string; 
  subcategories?: { name: string; link: string }[] 
}