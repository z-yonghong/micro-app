import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './public-path';


let root
function render(props) {
  const { container } = props
  const dom = container ? container.querySelector("#root") : document.getElementById('root')
  root = ReactDOM.createRoot(dom)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  reportWebVitals();
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  root.unmount()
}
