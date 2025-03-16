// 简化版Cloudflare Worker，避免重定向循环
export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      
      // 检查请求是否已经包含了一个特殊的标记，以避免循环
      const hasRedirectHeader = request.headers.get('x-redirected');
      
      // 尝试直接从静态资源中获取请求的路径
      let response = await env.ASSETS.fetch(request);
      
      // 如果找不到，且没有被重定向过，尝试回退到index.html
      if (response.status === 404 && !hasRedirectHeader) {
        const indexUrl = new URL('/index.html', url);
        const newRequest = new Request(indexUrl, request);
        // 添加标记，表示这个请求已经被重定向过
        newRequest.headers.set('x-redirected', 'true');
        response = await env.ASSETS.fetch(newRequest);
      }
      
      return response;
    } catch (e) {
      return new Response('Error: ' + e.message, { status: 500 });
    }
  }
};
