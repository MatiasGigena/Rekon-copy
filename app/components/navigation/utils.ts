
export interface NAVBAR_ITEM {
    title: string;
    to: string;
  }
export const NAVBAR_ITEMS:NAVBAR_ITEM[] = [
    {
      title: "About",
      to: "#aboutUs"
    }, 
    {
      title: "Our Offers",
      to: "#services"
    },
    {
      title: "FAQ",
      to: "#faq"
    },  
    {
      title: "FREE Guide",
      to: "/freeguide"
    },
    {
      title: "Contact",
      to: "#contact"
    },
    {
      title: "FREE Audit",
      to: "#freeAudit"
    },
  ] 