//FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, getDocs, orderBy, deleteDoc, doc,query,limit } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyBi6nOnQGYSgtU8j52O-ZhLl1fq_5tPpmM",

    authDomain: "innovative-robotics.firebaseapp.com",

    projectId: "innovative-robotics",

    storageBucket: "innovative-robotics.appspot.com",

    messagingSenderId: "713802242207",

    appId: "1:713802242207:web:d14a1e3c5f5b54b5aceaaa"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const event = document.getElementById("event");

var count = 0;
// const querySnapshot = await getDocs(collection(db, "news"));
const querySnapshot = await getDocs(
    query(
        collection(db, "news"), 
        orderBy("date", "desc"), 
        limit(3)
    )
);
querySnapshot.forEach((doc) => {
    var jsonContainer = doc.data();
    let post_link = document.createElement("a");
    post_link.href = `${jsonContainer.link}`;
    post_link.innerHTML = `
        <div class = "event-container">
            <img class = "event-image" src="${jsonContainer.image_url}" alt="">
            <div>
                <h3>${jsonContainer.title}</h3>
                <p>${jsonContainer.detail}</p>
            </div>
        </div>`
    event.appendChild(post_link);
});
