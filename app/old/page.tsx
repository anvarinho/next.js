import Link from 'next/link'

export default function Page(){
    return <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2x1'>Todos</h1>
      <Link
        className='border border-slate-300 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        href="/">Back</Link>
    </header>
    <h1>Old Page</h1>
    </>
}