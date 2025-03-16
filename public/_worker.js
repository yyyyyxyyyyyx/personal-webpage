// 简化版Cloudflare Worker
export default {
  async fetch(request, env) {
    try {
      // 尝试直接从静态资源中获取请求的路径
      const url = new URL(request.url);
      let response = await env.ASSETS.fetch(request);
      
      // 如果找不到，尝试回退到index.html
      if (response.status === 404) {
        const indexUrl = new URL('/index.html', url);
        response = await env.ASSETS.fetch(new Request(indexUrl, request));
      }
      
      return response;
    } catch (e) {
      return new Response('Error: ' + e.message, { status: 500 });
    }
  }
};
