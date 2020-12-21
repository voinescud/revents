const functions = require('firebase-functions');

const admin= require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.addFollowing = functions.firestore
.document('following/{userUid}/userFollowing/{profile.id}')
.onCreate(async (snapshot,context)=>{
    const following = snapshot.data();
    try {
        const userDoc = await db.collection('users').doc(context.params.userUid).get();
        const batch = db.batch();
    } catch (error) {
       // return console.log(error);
    }
} )