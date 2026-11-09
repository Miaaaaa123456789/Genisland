export function sitePath(path = '') {
  return import.meta.env.BASE_URL + path
}

export const modelPath = sitePath(import.meta.env.MODE === 'pages' ? 'model/' : 'model')
