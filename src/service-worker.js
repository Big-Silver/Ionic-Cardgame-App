/**
 * Check out https://googlechrome.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');


self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    // './build/main.js',
    // './build/main.css',
    // './build/polyfills.js',
    // 'index.html',
	// 'manifest.json',
	'./assets/images/home/big-games/angryvegan.png',
	'./assets/images/home/big-games/candystreak.png',
	'./assets/images/home/big-games/cheezywords.png',
	'./assets/images/home/big-games/merji.png',
	'./assets/images/home/big-games/skullsland.png',
	'./assets/images/home/big-games/smashyblockz.png',
	'./assets/images/home/big-games/wordhunt.png',
	'./assets/images/home/small-games/angryvegan.png',
	'./assets/images/home/small-games/candystreak.png',
	'./assets/images/home/small-games/cheezywords.png',
	'./assets/images/home/small-games/lifes_a_beach.png',
	'./assets/images/home/small-games/megaspin.png',
	'./assets/images/home/small-games/merji.png',
	'./assets/images/home/small-games/neon_spin.png',
	'./assets/images/home/small-games/pop_slot.png',
	'./assets/images/home/small-games/skullsland.png',
	'./assets/images/home/small-games/smashyblockz.png',
	'./assets/images/home/small-games/wordhunt.png',
  ]
);


// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
