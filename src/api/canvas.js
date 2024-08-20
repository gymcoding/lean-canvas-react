import { canvases } from './http';

export function getCanvases(params) {
  return canvases.get('/', { params });
}
