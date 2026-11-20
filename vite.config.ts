import { defineConfig, type Plugin } from 'vite';

function hoistImportmapsFirst(html: string): string {
  const importmapRe = /<script\b[^>]*\btype\s*=\s*['"]importmap['"][^>]*>[\s\S]*?<\/script>/gi;
  const blocks: string[] = [];
  const stripped = html.replace(importmapRe, (m) => {
    blocks.push(m);
    return '';
  });
  if (blocks.length === 0) return html;
  const headMatch = /<head\b[^>]*>/i.exec(stripped);
  if (!headMatch) {
    return blocks.join('\n') + '\n' + stripped;
  }
  const insertPos = headMatch.index + headMatch[0].length;
  return (
    stripped.slice(0, insertPos) +
    '\n  ' +
    blocks.join('\n  ') +
    stripped.slice(insertPos)
  );
}

function stripImportmapsForBundle(html: string): string {
  const importmapRe = /<script\b[^>]*\btype\s*=\s*['"]importmap['"][^>]*>[\s\S]*?<\/script>\s*/gi;
  return html.replace(importmapRe, '');
}

function pelicanGstaticAssetsPlugin(): Plugin {
  let isBuild = false;
  return {
    name: 'pelican-gstatic-assets',
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    transformIndexHtml: {
      order: 'post',
      handler(html: string) {
        // Production bundles inline vendor/three.module.js; leaving an importmap in dist/index.html
        // triggers Chromium/WebKit TypeError when browser extensions inject module scripts at document_start.
        return isBuild ? stripImportmapsForBundle(html) : hoistImportmapsFirst(html);
      },
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [pelicanGstaticAssetsPlugin()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 6000,
  },
});
