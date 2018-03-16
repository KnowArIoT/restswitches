

## Setup

Install node.js:

´´´
apt-get update ; apt-get install node
´´´

Install libraries:


´´´
npm install
´´´

Run the app:


´´´
npm start
´´´

## HTTP bridge to Tellstick

Eksempel på kall:

```
http://192.168.100.210:3000/switch/1/on
```

De to siste verdiene sitter:
1. ID for bryter/ dimmer
2. kommando

