const CACHE='turni-pwa-v15';
const ASSETS=['./','./index.html','./manifest.json','./jszip.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('turni-pwa-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r})))})
self.addEventListener('push',e=>{let data={title:'Turni',body:'Hai un turno domani.'};try{if(e.data)data=e.data.json()}catch(_){}e.waitUntil(self.registration.showNotification(data.title||'Turni',{body:data.body||'Hai un turno domani.',icon:'',badge:''}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>cs.length?cs[0].focus():clients.openWindow('./')))});
