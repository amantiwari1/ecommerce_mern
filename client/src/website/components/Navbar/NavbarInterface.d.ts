export interface NavItemsInterface {
    children: React.ReactNode
    to: string
    onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
}