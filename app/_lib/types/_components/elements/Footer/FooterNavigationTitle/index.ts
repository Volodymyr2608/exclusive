export type TFooterNavItemType = 'link' | 'tel' | 'mail'

export type TFooterNavigationItem = {
  title: string;
  type: TFooterNavItemType;
  path: string | null;
}