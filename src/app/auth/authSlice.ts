import { PayloadAction, createSlice } from "ngrx-slice";
import { IUser } from "../models/user.model";

export interface IAuthState {
  currentUser?: IUser
}
const initialState: IAuthState = {
  currentUser: undefined,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, _payload: PayloadAction<IUser>) {
      state.currentUser = _payload
    }
  }
})
export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
export const authSelectors = authSlice.selectors