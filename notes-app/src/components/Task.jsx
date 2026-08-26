
const Task = (props) => {
  const deleteTask = (props) => {
      const tempData = [...props.data]
      tempData.splice(props.idx , 1)
      props.setdata(tempData)
    }
  return (
    <div className="card  rounded-2xl h-50 w-40  bg-red-950 m-2 py-2  flex flex-col justify-between bg-cover" 
          style={ {backgroundImage: `url(https://imgs.search.brave.com/I1NZXvjxwhSTWmhidiMg5r8E4i5kKi92nAguV8k1T0s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/OTY4LzMzOC9zbWFs/bC9saW5lLXBhZ2Ut/bm90ZXBhZC1tZW1v/LW5vdGVzLWJvb2st/bG9vc2UtbGVhZi1w/YXBlci1pbGx1c3Ry/YXRpb24tdmVjdG9y/LmpwZw`}}>
            <div className="up">
              <div className="cardTitle  pt-5     text-[#d62cc8] font-bold flex   justify-center  rounded  "><h1>{props.title}</h1></div>
              <div className="cardDetails text-black  px-5 text-sm wrap-break-word ">{props.detail}</div>
            </div>
              <button onClick={() => deleteTask(props)} className=' bg-[#8777df] rounded text-sm px-2 mx-5   py-1.5 cursor-pointer active:scale-95'>Delete</button>

          </div>
  )
}

export default Task