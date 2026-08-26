

const AddTask = ({data , setdata}) => {
   
    const submitFunction = (props) => {
        props.preventDefault();
        const dataTemp =[...data]
        dataTemp.push({title:props.target.elements[0].value.toUpperCase(), detail:props.target.elements[1].value})
        setdata(dataTemp)
        props.target.elements[0].value = "";
        props.target.elements[1].value = "";
    
    }
    
return (
    <div className="leftSide w-2/5  backdrop-blur-sm rounded-xl border border-[#87d3f7]   "> 
            
            <form 
  onSubmit={(e) => submitFunction(e)} 
  className="flex flex-col justify-between"
> 
  <h1 className="text-3xl font-semibold self-center pt-4">
    <i>Add New Task</i>
  </h1>

  <div className="inputs flex flex-col justify-between m-10 gap-10">
    <input 
      type="text" 
      required  
      className="h-15 px-3 py-2 border text-[aqua] font-semibold border-blue-400 rounded uppercase 
                 transition-shadow duration-300 
                 hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.7)] focus:shadow-[0_0_20px_4px_rgba(0,255,255,0.9)]"
      placeholder="Title :- " 
    />

    <textarea 
      required 
      name="detail"  
      className="h-35 px-3 py-2  text-[white] border text-sm border-blue-400 rounded 
                 transition-shadow duration-300 
                 hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.7)] focus:shadow-[0_0_20px_4px_rgba(0,255,255,0.9)]"
      placeholder="Enter Details "
    ></textarea>
  </div>

  <div className="buttonDiv flex justify-center m-10">
    <button  
      className="bg-[#87d3f7] w-full text-white text-xl px-5 py-3 rounded-xl active:scale-95 cursor-pointer 
                 transition-shadow duration-300 
                 hover:shadow-[0_0_20px_5px_rgba(135,211,247,0.8)]"
    >
      Add Note
    </button>
  </div>
</form>

        </div>
)
}

export default AddTask