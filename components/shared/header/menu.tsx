import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className='flex justify-end '>
      <nav className='flex items-center gap-3 w-full'>
        <span> Hello, Sign in</span>
        <CartButton />
      </nav>
    </div>
  )
}
