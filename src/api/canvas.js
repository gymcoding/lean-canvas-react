import { canvases } from './http';

export function getCanvases() {
  return canvases.get('/');
}
