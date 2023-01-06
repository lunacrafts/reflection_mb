import { MongoClient } from "mongodb";

const uri = "mongodb://luna:crafts@localhost:27017";

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();

    const mirrorboards = client.db("mirrorboards");

    await mirrorboards.dropDatabase();

    const extension1 = await mirrorboards.collection('extensions').insertOne({
      name: 'core',
      settings: {
        fullscreen_button: true,
        toggle_drawer: false,
      }
    });

    const extension2 = await mirrorboards.collection('extensions').insertOne({
      name: 'hypeboards',
      settings: {
        hypeboard_content_generator: true
      }
    });

    const user1 = await mirrorboards.collection('users').insertOne({
      name: 'Elon Musk'
    });

    const mirrorboard1 = await mirrorboards.collection('mirrorboards').insertOne({
      name: 'Social GPT',
      extensions: {
        core: true,
        hypeboard: true,
      },
      settings: {
        core: {},
        hypeboard: {},
      }
    });

    const settings1 = await mirrorboards.collection('mirrorboards_settings').insertOne({
      mirrorboardId: mirrorboard1.insertedId,
      settings: {
        core: {},
        hypeboard: {}
      }
    });

    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
