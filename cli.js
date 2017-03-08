#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tempWrite = require('temp-write');
const fileIcon = require('file-icon');

const cli = meow(`
	Usage
	  $ file-icon <app-name|bundle-id|file-path>

	Options
	  --size  Size of the icon [Max: 1024]

	Examples
	  $ file-icon Safari
	  /tmp/86ca9400-9f34-4a64-ab24-027d80f88b46/icon.png
	  $ file-icon com.apple.Safari
	  /tmp/ece2b714-6c6c-4677-a57c-e0e18f7b9405/icon.png
	  $ file-icon unicorn.jpg --size=512
	  /tmp/c3871faa-d759-48b9-ac85-5504d712a02a/icon.png
`);

fileIcon(cli.input[0], cli.flags.size).then(buf => {
	console.log(tempWrite.sync(buf, 'icon.png'));
});
