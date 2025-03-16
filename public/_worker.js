// Cloudflare Worker for Next.js static site
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 处理静态资源请求
    if (url.pathname.startsWith('/_next/') || 
        url.pathname.startsWith('/static/') || 
        url.pathname.startsWith('/images/') || 
        url.pathname.startsWith('/assets/') || 
        url.pathname.endsWith('.js') || 
        url.pathname.endsWith('.css') || 
        url.pathname.endsWith('.json') || 
        url.pathname.endsWith('.ico') || 
        url.pathname.endsWith('.png') || 
        url.pathname.endsWith('.jpg') || 
        url.pathname.endsWith('.svg') ||
        url.pathname.endsWith('.pdf')) {
      // 尝试从Cloudflare Pages静态资源中获取
      try {
        const response = await env.ASSETS.fetch(request);
        if (response.status === 200) {
          // 添加缓存控制头
          const headers = new Headers(response.headers);
          headers.set('Cache-Control', 'public, max-age=31536000, immutable');
          return new Response(response.body, {
            status: response.status,
            headers
          });
        }
      } catch (e) {
        console.error('Error fetching static asset:', e);
      }
    }
    
    // 处理API请求
    if (url.pathname.startsWith('/api/')) {
      try {
        // 对于API请求，不使用缓存
        const response = await env.ASSETS.fetch(request);
        if (response.status !== 404) {
          const headers = new Headers(response.headers);
          headers.set('Cache-Control', 'no-cache');
          return new Response(response.body, {
            status: response.status,
            headers
          });
        }
      } catch (e) {
        console.error('Error handling API request:', e);
        return new Response('API Error: ' + e.message, { status: 500 });
      }
    }
    
    // 对于所有其他请求，尝试返回请求的页面或回退到index.html
    try {
      // 首先尝试直接获取请求的路径
      let response = await env.ASSETS.fetch(request);
      
      // 如果找不到，尝试添加尾部斜杠的版本（针对Next.js的trailingSlash配置）
      if (response.status === 404 && !url.pathname.endsWith('/')) {
        const trailingSlashUrl = new URL(url.pathname + '/', url);
        const trailingSlashRequest = new Request(trailingSlashUrl, request);
        response = await env.ASSETS.fetch(trailingSlashRequest);
      }
      
      // 如果仍然找不到，尝试添加index.html
      if (response.status === 404) {
        const indexUrl = new URL(url.pathname.endsWith('/') ? 
                                url.pathname + 'index.html' : 
                                url.pathname + '/index.html', url);
        response = await env.ASSETS.fetch(new Request(indexUrl, request));
      }
      
      // 如果仍然找不到，回退到根目录的index.html
      if (response.status === 404) {
        const rootIndexUrl = new URL('/index.html', url);
        response = await env.ASSETS.fetch(new Request(rootIndexUrl, request));
      }
      
      // 如果所有尝试都失败，返回404
      if (response.status === 404) {
        return new Response('Not Found', { status: 404 });
      }
      
      // 设置适当的缓存控制头
      const headers = new Headers(response.headers);
      headers.set('Cache-Control', 'public, max-age=3600');
      
      return new Response(response.body, {
        status: response.status,
        headers
      });
    } catch (e) {
      console.error('Error handling request:', e);
      return new Response('Internal Server Error: ' + e.message, { status: 500 });
    }
  }
};
