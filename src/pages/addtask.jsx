import React from 'react'
import useItems from '../hooks/useItems'
import { Link } from 'react-router-dom'
import Header from '../components/header'

export const AddTask = () => {
  const { items, setItems } = useItems()
  const [isSending, setIsSending] = React.useState(false)
  const [issent, setIssent] = React.useState(false)

  function addItem(event) {
        event.preventDefault()
        setIsSending(true)

        //Collect form data
        const formData = new FormData(event.target)
        const newItem = {
            title: formData.get('title')?.toString().trim(),
            priority: formData.get('priority')?.toString().trim(),
            description: formData.get('description')?.toString().trim(),
            date: formData.get('date')?.toString().trim() || new Date().toLocaleDateString().split('T')[0],
            category: formData.get('category')?.toString().trim(),
            id: crypto.randomUUID(),
            done: false
        }

        //Submit Refusal for empty input
        if (!newItem.title) {
          setIsSending(false)
          return (
              alert("Please enter a valid item.")
          )
        }
        
        setTimeout(() => {
          setItems([...items, newItem])
          setIsSending(false)
          setIssent(true)
        }, 2000)
        

        //setButtons(prev => [...prev, {id: idCounter}])
        //setIdCounter(prevId => prevId + 1)
        
        //console.log(buttons)
        event.target.reset()

        console.log(items)
    }

    React.useEffect(() => {
      if (issent) {
        const timer = setTimeout(() => {
          setIssent(false)
        }, 2000)

        return () => clearTimeout(timer)
      }
    }, [issent])

  return (
    <main className="add-task-page flex flex-col items-center ">

      <Header />
      
      <Link to="/tasks">
        <button className="view-task-button absolute top-4 right-4 px-6 py-3 bg-[#850a0a] text-white rounded-lg max-sm:hidden
        hover:bg-[#a32b2b] hover:cursor-pointer transition duration-300 dark:bg-gradient-to-r dark:from-[#00C6FF] dark:to-[#0072FF]">
            View my tasks
        </button>
      </Link>

      <h1 className="new-task-heading text-4xl font-semibold mb-6 text-[#228b22] 
      font-(family-name:--secondary-font) dark:text-slate-300">Add New Task</h1>

      <form 
      onSubmit={addItem} 
      name='todoForm'
      className="todoForm p-6 my-7 rounded-2xl bg-[#ccffcc] dark:bg-gray-50/[0.10]
      max-sm:max-w-9/10 md:max-w-xl max-[375px]:w-9/10" 
      >
      
        <div className="form-input flex justify-center flex-col gap-5">
          
          <label htmlFor="title"><span className='dark:text-[#fafafa] text-2xl'>Title</span></label>
          <input 
            type="text" 
            placeholder="Enter items" 
            name="title" 
            className="todo-input bg-white w-full rounded-lg px-5 py-3 text-lg text-gray-600 focus:outline-none 
            shadow-[0_4px_12px_#d4a37333] focus:ring-amber-300" />

          

          <div className="flex flex-col gap-2">
            <span className='font-(family-name:--secondary-font) font-semibold text-xl
            text-[#3f3f3f] dark:text-[#fafafa]'>Is it a Priority?</span>
            <label style={{fontWeight: 'normal', fontSize: '17px'}}>
              <input
              type="checkbox" 
              value='high' 
              name="priority" 
              className="mr-3 accent-rose-600 text-xl" />
              <span className='dark:text-sky-400'>High</span>
            </label>

            <label style={{fontWeight: 'normal', fontSize: '17px'}}>
              <input 
              type="checkbox" 
              value='medium' 
              name="priority" 
              className="mr-3 accent-rose-600 text-xl" />
              <span className='dark:text-sky-400'>Medium</span>
            </label>

            <label style={{fontWeight: 'normal', fontSize: '17px'}}>
              <input 
              type="checkbox" 
              value='low' 
              name="priority" 
              className="mr-3 accent-rose-600 text-xl" />
              <span className='dark:text-sky-400'>Low</span>
            </label>
          </div>
          

          <label htmlFor="description"><span className='dark:text-[#fafafa]'>Comments</span></label>
          <textarea 
          name="description" 
          id="description" 
          placeholder='Any special or specific comments?'
          className="todo-input w-full bg-white rounded-lg px-5 py-3 text-lg text-gray-600 focus:outline-none
            shadow-[0_4px_12px_#d4a37333] focus:ring-amber-300"></textarea>

          <div className="flex flex-col gap-2">
            <span className='font-(family-name:--secondary-font) font-semibold text-xl
            text-[#3f3f3f] dark:text-[#fafafa]'>What kind of work is it?</span>
            <div className="grid grid-cols-3 place-items-center-center justify-around max-[400px]:flex max-[400px]:flex-col max-[400px]:gap-1">
              <label style={{fontWeight: 'normal', fontSize: '17px'}}>
                <input
                type="radio" 
                value='Personal' 
                name="category" 
                className="mr-1 accent-rose-600 text-xl" />
                <span className='dark:text-sky-400'>Personal</span>
              </label>

              <label style={{fontWeight: 'normal', fontSize: '17px'}}>
                <input 
                type="radio" 
                value='Work' 
                name="category" 
                className="mr-1 accent-rose-600 text-xl" />
                <span className='dark:text-sky-400'>Work</span>
              </label>

              <label style={{fontWeight: 'normal', fontSize: '17px'}}>
                <input 
                type="radio" 
                value='Education' 
                name="category" 
                className="mr-1 accent-rose-600 text-xl" />
                <span className='dark:text-sky-400'>Education</span>
              </label>

              <label style={{fontWeight: 'normal', fontSize: '17px'}}>
                <input 
                type="radio" 
                value='Finance' 
                name="category" 
                className="mr-1 accent-rose-600 text-xl" />
                <span className='dark:text-sky-400'>Finance</span>
              </label>

              <label style={{fontWeight: 'normal', fontSize: '17px'}}>
                <input 
                type="radio" 
                value='Growth' 
                name="category" 
                className="mr-1 accent-rose-600 text-xl" />
                <span className='dark:text-sky-400'>Growth</span>
              </label>

              <label style={{fontWeight: 'normal', fontSize: '17px'}}>
                <input 
                type="radio" 
                value='Social' 
                name="category" 
                className="mr-1 accent-rose-600 text-xl" />
                <span className='dark:text-sky-400'>Social</span>
              </label>
            </div>
          
          </div>  

          <label htmlFor="date"><span className='dark:text-[#fafafa]'>When do you want to complete it?</span> 
            <span className='date-default'>*Default is today</span></label>
          <input
            type="date"
            name="date"
            className="todo-input min-w-[200px] bg-white
            rounded-lg px-5 py-3 text-lg text-gray-600 focus:outline-none
            shadow-[0_4px_12px_#d4a37333] focus:ring-amber-300" />

          <button 
          className="todoBtn submit-button dark:bg-gradient-to-r dark:from-[#00C6FF] dark:to-[#0072FF]"
          disabled={isSending}
          >{isSending ? "Adding Item..." : issent ? "Item Added" : <p><span>+</span> Add Item </p>}</button>

          <Link to="/tasks">
            <button className="view-task-button submit-button dark:bg-gradient-to-r dark:from-[#00C6FF] dark:to-[#0072FF] hidden max-sm:block max-sm:w-full">
                View my tasks
            </button>
          </Link>
        </div>

      </form>
    </main>
  )
}
