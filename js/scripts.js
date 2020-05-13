
let submitQ = document.getElementById("submitQ")
let close = document.getElementById("close-modal")
var result = "";

submitQ.onclick = function(){

  var tropScore = 0;
  var natScore = 0;
  var extScore =0;

//Question 1
  if(document.getElementById("trop1").checked) {
    tropScore++;
  }
  if(document.getElementById("nat1").checked) {
    natScore++;
  }
  if(document.getElementById("ext1").checked) {
    extScore++;
  }

  //Question 2
  if(document.getElementById("trop2").checked) {
    tropScore++;
  }
  if(document.getElementById("nat2").checked) {
    natScore++;
  }
  if(document.getElementById("ext2").checked) {
    extScore++;
  }

  //Question 3
  if(document.getElementById("trop3").checked) {
    tropScore++;
  }
  if(document.getElementById("nat3").checked) {
    natScore++;
  }
  if(document.getElementById("ext3").checked) {
    extScore++;
  }

  //Question 4
  if(document.getElementById("trop4").checked) {
    tropScore++;
  }
  if(document.getElementById("nat4").checked) {
    natScore++;
  }
  if(document.getElementById("ext4").checked) {
    extScore++;
  }
//  alert(tropScore + "," + natScore + "," + extScore);

//Find largest of the scores
  if(tropScore>natScore && tropScore>extScore)
  {
    result = "tropresult";
  }
  else if(natScore>tropScore && natScore>extScore)
  {
    result = "natresult";
  }
  else if(extScore>tropScore && extScore>tropScore)
  {
    result = "extresult";
  }
  else {
    result = "allresult";
  }

  $('#quizModalScrollable').modal('hide')
  alert(result);
}

$('#quizModalScrollable').on('hidden.bs.modal', function () {
  // Load up a new modal...
  if (result != "") {
    $('#resultModalCenter').modal('show')
    var output = document.getElementById("result-display-here");
    output.innerHTML = "";
    var imgPath = "<img height=600 width=800 vertical-align:middle src=../images/:result:.png>"
    imgPath = imgPath.replace(":result:", result);
    output.innerHTML= imgPath;
  }

})

closeModal.onclick = function(){
  result="";
  var tropScore = 0;
  var natScore = 0;
  var extScore =0;

}
