var firebaseConfig = {
    apiKey: "AIzaSyAPs3D_bgxUJWMza7f1Ex0PgFnU4eQEWMk",
    authDomain: "project-93-17a19.firebaseapp.com",
    databaseURL: "https://project-93-17a19-default-rtdb.firebaseio.com",
    projectId: "project-93-17a19",
    storageBucket: "project-93-17a19.appspot.com",
    messagingSenderId: "991655793590",
    appId: "1:991655793590:web:2741435793c61c9c44a717"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("message").value = "";
}