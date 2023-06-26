import { prisma } from '@/db'
import Link from 'next/link'
import { TodoItem } from './components/TodoItem'

function getTodos(){
  return prisma.todo.findMany()
}
async function toggleTodo(id: string, complete: boolean){ 
  'use server'
  await prisma.todo.update({ where: {id}, data: {complete}})
  console.log(id, complete)
}
async function findFirstAndDelete() {
  try {
    const record = await prisma.todo.findFirst();

    if (record) {
      await prisma.todo.delete({
        where: {
          id: record.id,
        },
      });

      console.log('First record deleted successfully.');
    } else {
      console.log('No records found.');
    }
  } catch (error) {
    console.error('Error finding and deleting record:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Home() {
  const todos = await getTodos() 
  // findFirstAndDelete();
  {todos.map(todo =>(
    console.log(todo.id, todo.complete)
  ))}
  // await prisma.todo.create({ data: { title: "test", complete: false} })
  return <>
    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2x1'>Todos</h1>
      <Link
        className='border border-slate-300 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
        href="/new">New</Link>
    </header>
    <ul>
      {todos.map(todo =>(
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}></TodoItem>
      ))}
    </ul>
  </>
}
