import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storeActions } from '../store';

export function action() {

  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  localStorage.removeItem('authentucated');

  window.location.reload();

  return redirect('/');
}