import { RootState } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';


export type MenuItemType = {
     id: number;
     type: string;
     title: string;
     price: number;
     rate: number;
     oldPrice?: string
}

export const fetchMenu = createAsyncThunk('munu/fetchMenuStatus', async () => {
     const { data } = await axios.get(`https://633ebd780dbc3309f3bc1225.mockapi.io/headPhons`)
     return data;
})

const initialState = {
     items: [],
     status: ''
}

export const menuSlice = createSlice({
     name: 'menu',
     initialState,
     reducers: {
          setItems(state, action) {
               state.items = action.payload
          }
     },

     extraReducers: (builder) => {
          builder.addCase(fetchMenu.pending, (state) => {
               state.status = "LOADING";
               state.items = []
          })
          builder.addCase(fetchMenu.fulfilled, (state, action) => {
               state.items = action.payload
               state.status = "SUCCESS"
          })
          builder.addCase(fetchMenu.rejected, (state) => {
               state.status = 'ERROR'
               state.items = []
          })
     }
})
export const selectMenu = (state: RootState) => state.menu;
export const { setItems } = menuSlice.actions

export default menuSlice.reducer