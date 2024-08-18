import { Link } from "react-router-dom";


export default function ViewAll() {
  return (
      <>
          <div className='flex items-center justify-center'>
              <Link to='./portfolio' className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'>
          View Project
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
          </div>
       
    </>
  )
}
