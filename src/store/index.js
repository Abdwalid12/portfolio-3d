import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { nom: '' },
  reducers: {
    setNom: (state, action) => {
      state.nom = action.payload;
    },
  },
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    submitted: false,
    error: null,
    formData: null
  },
  reducers: {
    submitContactForm: (state, action) => {
      state.submitted = true;
      state.error = null;
      state.formData = action.payload;
      // Also update user name from contact form
      if (action.payload.nom) {
        // This will be handled by userSlice if needed
      }
    },
    resetForm: (state) => {
      state.submitted = false;
      state.error = null;
      state.formData = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.submitted = false;
    }
  },
});

export const { setNom } = userSlice.actions;
export const { submitContactForm, resetForm, setError } = contactSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    contact: contactSlice.reducer,
  },
});