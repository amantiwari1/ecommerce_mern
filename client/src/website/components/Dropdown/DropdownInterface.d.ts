export interface DropdownInterface {
    name: string
    navitems: Array<{
        to: string
        name: string
    }>

    onTurnNav: () => void
}