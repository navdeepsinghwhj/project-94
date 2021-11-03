
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
const firebaseConfig = {
      apiKey: "AIzaSyA5KXi0WZ7XVjgFecInIPHGNSJUmjisEYQ",
      authDomain: "kwitter-12284.firebaseapp.com",
      databaseURL: "https://kwitter-12284-default-rtdb.firebaseio.com",
      projectId: "kwitter-12284",
      storageBucket: "kwitter-12284.appspot.com",
      messagingSenderId: "1028867007304",
      appId: "1:1028867007304:web:abee224aa0d1a59dd8897d",
      measurementId: "G-QH2LF16QYV"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";


function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setIte("room_name", name)
     window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}