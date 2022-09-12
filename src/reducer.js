export const initialState={
    bascket:[],
    user:null,     //by default initially user is null
};
//selector 
export const getBasketTotal=(bascket)=>
    bascket?.reduce((amount,item)=>item.price+amount,0);
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASCKET":
            return{
                ...state,
                bascket: [...state.bascket,action.item],//store the previous added and add new item
            };
        case "EMPTY_BASCKET":
          return{
            ...state,
            bascket:[]
          }
        case "REMOVE_THE_BASCKET":
          const index=state.bascket.findIndex(
             (bascketItem)=>bascketItem.id===action.id
          );
          let newBascket=[...state.bascket];//copied the new one who is clicked for del
          if(index>=0){
           newBascket.splice(index,1);//remove that element from array
          }else{
            console.warn(`we can't remove product(id:${action.id} as it is not in the bascket)`)
          }
          return {
            ...state,
            bascket:newBascket
          }
        case "SET_USER":
          return{
            ...state,
            user:action.user // see dispatch (action->user)
          }
        default:
            return state;   
    }
}
export default reducer;