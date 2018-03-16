

## Setup

Install ```tellstick-core```:

Follow these instrucions:
https://community.home-assistant.io/t/home-assistant-running-on-raspberry-pi-2-b-with-tellstick-duo/4346/11

Set correct serial id:

http://andreasahrens.se/telldus-core-tellstick-not-found-solved/

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

REST example:


### Switch on or off:

```
http://192.168.100.210:3000/switch/1/on
```

Meaning of the last to parameters:
1. Switch ID
2. Command (on of off)


### Dimmer:

Example:

```
192.168.100.210:3000/dim/2/200
```


Meaning of the last to parameters:
1. Dimmer ID
2. Dimmer value (0 - 255)

### Sound

Example:

```
http://192.168.100.210:3000/sound/wakeup
```


Meaning of the last parameter:
1. Scenario (wakeup, sleep or stop)

