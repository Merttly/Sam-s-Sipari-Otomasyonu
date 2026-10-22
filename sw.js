/* Sam's Sipariş: online-first POS. Never cache authentication or order pages. */
const LEGACY_PREFIX='sams-';
self.addEventListener('install',()=>{self.skipWaiting()});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const names=await caches.keys();
  await Promise.all(names.filter(name=>name.startsWith(LEGACY_PREFIX)).map(name=>caches.delete(name)));
  await self.clients.claim();
 })());
});
/* No fetch handler: always use the network, including recovery callbacks. */
