// 定义Cloudflare Worker以处理所有请求
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 处理静态资源请求
    if (url.pathname.startsWith('/_next/static/') || 
        url.pathname.startsWith('/images/') || 
        url.pathname.endsWith('.js') || 
        url.pathname.endsWith('.css') || 
        url.pathname.endsWith('.json') || 
        url.pathname.endsWith('.ico') || 
        url.pathname.endsWith('.png') || 
        url.pathname.endsWith('.jpg') || 
        url.pathname.endsWith('.svg')) {
      // 尝试从Cloudflare Pages静态资源中获取
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
    }
    
    // 处理API请求
    if (url.pathname.startsWith('/api/')) {
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
    }
    
    // 对于所有其他请求，尝试返回index.html
    try {
      // 首先尝试直接获取请求的路径
      let response = await env.ASSETS.fetch(request);
      
      // 如果找不到，则返回index.html
      if (response.status === 404) {
        // 获取index.html
        const indexUrl = new URL('/', url);
        response = await env.ASSETS.fetch(new Request(indexUrl, request));
        
        // 如果index.html也找不到，则返回404
        if (response.status === 404) {
          return new Response('Not Found', { status: 404 });
        }
      }
      
      // 设置适当的缓存控制头
      const headers = new Headers(response.headers);
      headers.set('Cache-Control', 'public, max-age=3600');
      
      return new Response(response.body, {
        status: response.status,
        headers
      });
    } catch (e) {
      return new Response('Internal Server Error: ' + e.message, { status: 500 });
    }
  }
};
