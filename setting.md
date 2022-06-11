# react + typescript + vite + tailwindCSS + eslint + prettier Setting

## react + vite + typescript

```
npm init vite@latest front -- --template react-ts
cd front
npm i
```

## tailwindCSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

reference:

- https://larainfo.com/blogs/install-setup-vite-react-typescript-tailwind-css-3

## prettier + eslint

```
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

- create '.prettierrc' file

```json

```

- create '.eslintrc' file

```json

```

### 추가 설정

https://wonillism.tistory.com/271 참고

```
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

npm i -D vite-tsconfig-paths

npm i -D eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

---

<br >

## 구조 변경

- `tailwindcss.config.js `를 css 디렉토리로 이동 후 수정

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
```

- css 디렉토리 내에 `style.scss` 파일 생성하고 작성, `src/index.css` 파일 삭제

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `src/index.css` 의존 파일들 수정

- `@tailwindcss/forms` 설치

```bash
$ npm i @tailwindcss/forms
```

- `postcss.config.js` 수정

```javascript
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './src/css/tailwind.config.js';

module.exports = {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
```

- `vite.config.ts` 수정

```javascript
import { defineConfig } from 'vite';
import postcss from './postcss.config.js';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [react()],
});
```
