import Header from '../components/header'
import '../index.css'
import useItems from '../hooks/useItems'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Checked from '../components/check'
import { Delete } from '../components/delete'

export const Tasks = () => {
  const { items, setItems } = useItems()

  function toggleDone(id) {

    setItems(prev => prev.map(item => 
      item.id === id ? {...item, done: !item.done} : item
    ))
        
  }

    function markallDone() {
        
        setItems(prev => prev.map(item => ({...item, done: true})))
    }

    function handleDelete(id) {
        setItems(prev => prev.filter(item => item.id !== id))
    }

    function handleNew() {
        setItems([])
    }

    const priorityColors = {
      high: "border-2 border-red-400",
      medium: "border-2 border-orange-400",
      low: "border-2 border-green-400",
    };

    const categorySelectors = {
      personal: <span>🏠</span>,
      work: <span>💼</span>,
      education: <span>🎓</span>,
      finance: <span>💰</span>,
      growth: <span>🌱</span>,
      social: <span>👥</span>,
    }


    const todoList = items.map((item, index) => (
        <div className={clsx("todo-div flex flex-col bg-[#ffffff] px-7 py-8 mb-8 gap-3 rounded-2xl shadow-[4px_4px_12px_#00000033] relative dark:bg-gray-50/[0.10]",
        priorityColors[item.priority]
        )} 
        key={index}>

            <div className='text-9xl justify-center flex'>
              {categorySelectors[item.category?.toLowerCase()]}
            </div>
            
            <div className="title-date flex justify-between items-center mt-4 max-sm:flex-col max-sm:items-start">
              <h1 
                className='text-3xl font-bold list-none text-[#3f3f3f] font-(family-name:--task-font)
                text-left dark:text-[#fafafa]'>
                  {item.title}
              </h1>

              <p className="date-text text-lg text-slate-500 flex items-center gap-2 dark:text-sky-400
              max-sm:text-sm">
                {item.date}
                <i className="fa-solid fa-calendar text-slate-500 dark:text-sky-400"></i>
              </p>
            </div>
            

            {item.description ? <em className='description-text text-lg text-slate-500 dark:text-sky-400
            font-(family-name:--task-font)'>
                {item.description}
            </em>: <p className='description-text text-lg text-slate-500 dark:text-sky-400
            font-(family-name:--task-font)'>
                Looks like there are no special comments!
            </p>}

            <p className='category-text text-sm text-slate-500 dark:text-gray-400 
            font-(family-name:--task-font)'>
                Priority: {item.priority ? item.priority.charAt(0).toUpperCase() + item.priority.slice(1) : 'No priority set'}
            </p>

            
            <Checked key={index} id={index + 1} On={item.done} onClick={() => toggleDone(item.id)} /> 

            {!item.done && <Delete onDelete={() => handleDelete(item.id)} />}
        </div>
    ))

    
  return (
    <main className='flex flex-col items-center justify-center'>

      <Header />

      
      <Link to="/tasks/add">
        <button className="expand-btn absolute top-4 right-4 text-xl dark:bg-gradient-to-r dark:from-[#00C6FF] dark:to-[#0072FF]">
            +
            <span>Add Item</span>
        </button>
      </Link>

      {items.length === 0 && 
        <section className='no-tasks-section flex flex-col items-center mt-40 gap-6'>
          <h1 className='no-tasks-heading text-6xl font-semibold text-[#a4ac86] font-(family-name:--secondary-font)
          dark:text-slate-300 max-sm:text-3xl text-center'><em>You have no tasks yet!</em></h1>
        </section>
      }

      <ul className="todo-list w-full px-8 py-10 text-[24px] list-disc">{todoList}</ul>

      {items.length > 2 && <section className='flex gap-3 max-sm:w-9/10 max-[375px]:flex-col max-[375px]:items-center'>
        <button onClick={ markallDone } className='markallBtn bg-(--button-init) mb-10 w-2xs py-4 rounded-lg text-2xl text-white
        shadow-[0_4px_12px_#d4a37333] dark:bg-gradient-to-r dark:from-[#00C6FF] dark:to-[#0072FF]'>
            <span className='markallSpan mr-5 max-sm:text-lg max-sm:m-2'>Mark all as Done</span>
            <i className="fa-solid fa-check max-sm:text-lg"></i>
        </button>
    
        <button className="markallBtn bg-(--button-init) mb-10 w-2xs py-4 rounded-lg text-2xl text-white
        shadow-[0_4px_12px_#d4a37333] dark:bg-gradient-to-r dark:from-[#00C6FF] dark:to-[#0072FF]"
        onClick={handleNew}>
          <span className=" max-sm:text-lg">Start New</span>
        </button>
      </section> 

      }
    </main>
    
  )
}