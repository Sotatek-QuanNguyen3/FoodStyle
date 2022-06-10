import {createAsyncThunk} from '@reduxjs/toolkit';
import {registerQuery} from '../queries';

export const loginAction = createAsyncThunk('/loginAction', async () => {
  const {accessToken, refreshToken} = await registerQuery({
    name: 'test',
    email: Date.now().toString() + 'test@gmail.com',
  });
  return {accessToken, refreshToken};
});
