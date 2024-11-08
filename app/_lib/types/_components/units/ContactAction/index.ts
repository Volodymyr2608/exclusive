export type TContactAction = {
  contactItem: TContactItem
}

export type TContactItem = {
  id: number;
  head: {
    title: string;
    icon: "phone" | "message"
  },
  items: {
    text: string;
    type: "phone" | "email" | "text"
  }[]
}