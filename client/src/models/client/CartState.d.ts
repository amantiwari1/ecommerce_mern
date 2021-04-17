import Cart from '../cart'


export default interface CartState {
    data: Array<Cart>   
    fullTotal: number
}