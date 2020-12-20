export default function todos(state=[],action){
  switch(action.type){
    case "ADD_TODO":
      return [...state,
        {id:Math.random(),
        text:action.payload.text}]
    case "REMOVE_TODO":
         return state.filter(item=> {return item.id!=action.payload.id}) 
    default: return state;

  }

}