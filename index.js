const Huejay = require('huejay');

const userId = "-YmeU-cyV-CY5E1Zcw6uiqLVqzV1bU3FPSWnm-ud";


const client = new Huejay.Client({
  host: '192.168.0.16',
  username: userId,
});



client.rules.getAll()
  .then(async rules => {
    //const filtered = rules.filter(r=>r.)
    for (let rule of rules) {
       await client.rules.delete(rule.id);
      console.log(`Deleted [${rule.id}]: ${rule.name}`);
    }});

// client.scenes.getAll().then(async scenes => {
//   const filtered = scenes.filter(s=>s.recycle && !s.locked);
//   for (const scene of filtered) {
//     console.log('Scene:', scene.name, scene.id, scene.lastUpdated);
//     await client.scenes.delete(scene.id);
//   }
// });

// let state = null;
// const checkSensor = async () => {
//   const sensor = await client.sensors.getById(6);
//   const date = new Date();
//   const currentState = sensor.state.presence;
//   if(state != currentState){
//     state = currentState;
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`, state);
//   }  

//   setTimeout(checkSensor, 500);
// };

//checkSensor();

// const createDownstairsScene = async () => {
//   const scene = {
//     name: 'Night Downstairs Scene',
//     type: 'LightScene',
//     lights: [
//       '8'
//     ],
//     lightstates: {
//       8: {
//         on: true,
//         bri: 36,
//         xy: [
//           0.4575,
//           0.4099
//         ]
//       }
//     }
//   };


//   const sceneObj = new client.scenes.Scene(scene);
//   const result = await client.scenes.create(sceneObj);

// };

// createDownstairsScene();