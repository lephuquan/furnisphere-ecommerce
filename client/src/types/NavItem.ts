export interface NavItem {
  label: string;
  link: string;
  dropdownContent?: {
    sections: {
      title: string;
      items?: string[];
    }[];
    dropdownImage?: {
      src: string;
      alt: string;
      description: string;
      CollectionesAndPromotiones?: {
        title: string;
        link?: string;
      }[];
    };
  };
}
