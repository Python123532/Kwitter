
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAVJ7n1oylU8QB8l6-OeaYK7iMG1MTm-wk",
      authDomain: "fake-twitter-42dcb.firebaseapp.com",
      databaseURL: "https://fake-twitter-42dcb-default-rtdb.firebaseio.com",
      projectId: "fake-twitter-42dcb",
      storageBucket: "fake-twitter-42dcb.appspot.com",
      messagingSenderId: "64741608101",
      appId: "1:64741608101:web:daf6cf4886539cb9319b4c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" +user_name +"!";

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
  }
  
  
  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
            window.location = "kwitter_page.html";         
  }
  
  function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }
