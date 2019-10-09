
broker = "wss://test.mosquitto.org:8081/mqtt";

  client = mqtt.connect(broker)
  var subTopic = "nadela";
  var pubTopic = "nadela/fan/status";
  var Payload ="";
  var time = moment().format('MMMM Do YYYY, h:mm:ss a')

  $("#btn-1").click(function () {
    $("#textWrite").text("The fan is currently turned at 1")
    Payload = "The fan is currently turned at 1 : " 
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)


})
$("#btn-2").click(function () {
    $("#textWrite").text("The fan is currently turned at 2 : ")
    Payload = "The fan is currently turned at 2 : " 
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)

})
$("#btn-3").click(function () {
    $("#textWrite").text("The fan is currently turned at 3")
    Payload = "The fan is currently turned at 3 : " 
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)
})
$("#btn-on").click(function () {
    $("#textWrite").text("The fan is currently turned on ")
    $("#btn-off").show();
    $("#btn-on").hide();
    Payload = "The fan is currently turned on : " 
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)

})
$("#btn-off").click(function () {
    $("#textWrite").text("The fan is currently turned off")
    $("#btn-on").show();
    $("#btn-off").hide();
    Payload = "The fan is currently turned off" 
    client.subscribe(subTopic)
    client.publish(pubTopic, Payload)
});



  









