import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import modalSlice from './modalSlice'
import leftsidebarSlice from './leftSidebarSlice'

const combinedReducer = {
  user : userSlice,
  modal : modalSlice,
  leftSidebar : leftsidebarSlice,
}

export default configureStore({
    reducer: combinedReducer
})