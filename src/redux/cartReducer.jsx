import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        products:[],open:false
    },
    reducers:{
        addCart:(state,action)=>{
            const find=state.products.find(item=>item.id===action.payload.id)
            if(find){
                find.quantity+=action.payload.quantity
            }else{
                state.products.push(action.payload)
            }
        },
        removeItem:(state,action)=>{
            state.products=state.products.filter(item=>item.id!==action.payload)
        },
        resetCart:(state,action)=>{
            state.products=[]
        },
        flipper:(state,action)=>{
           
                state.open=(action.payload)
            
            
        }
    }
})

export const{addCart,removeItem,resetCart,flipper}=cartSlice.actions
export default cartSlice.reducer