export interface DropdownInterface {
  name: string;
  navitems: Array<{
    to?: string;
    name: string;
    isLink: boolean;
    onClick?: any;
  }>;

  onTurnNav: () => void;
}
