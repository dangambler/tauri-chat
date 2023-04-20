# tauri-chat

trying out integrating tauri into a react app

### setup

- change firebase config to yours @ `src/config/firebase.ts`

- create a firestore in firebase console, add collection "messages" with documents { name: string, message: string, time: timestamp }

- change app id to something yours (`src-tauri/tauri.conf.json` -> `tauri/bundle/identifier`)

and then..

`yarn tauri build`

and that should work if I didn't forget to add something in this readme

.exe will be stored in `src-tauri/target/release/`

IT WEIGHTS 4MB WOW
