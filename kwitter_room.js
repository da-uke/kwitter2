
const firebaseConfig = {
      apiKey: "AIzaSyBqQtOpckDmtvYqsnzJW-K8F7WaB8zqXl0",
      authDomain: "chicken-nugget-1c037.firebaseapp.com",
      databaseURL: "https://chicken-nugget-1c037-default-rtdb.firebaseio.com",
      projectId: "chicken-nugget-1c037",
      storageBucket: "chicken-nugget-1c037.appspot.com",
      messagingSenderId: "556181175958",
      appId: "1:556181175958:web:d94efec40a9a80a65eccb7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    document.getElementById("user_name").innerHTML="welc0me "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter.html";
}