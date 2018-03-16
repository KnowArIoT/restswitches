

## Setup

Install ```tellstick-core```:

Follow these instrucions:
https://community.home-assistant.io/t/home-assistant-running-on-raspberry-pi-2-b-with-tellstick-duo/4346/11

Set correct serial id:

http://andreasahrens.se/telldus-core-tellstick-not-found-solved/

```


Install node.js:

```
apt-get update ; apt-get install node
```

Install libraries:


```
npm install
```

Run the app:


```
npm start
```



## HTTP bridge to Tellstick

Eksempel på kall:

```
http://192.168.100.210:3000/switch/1/on
```

De to siste verdiene sitter:
1. ID for bryter/ dimmer
2. kommando

