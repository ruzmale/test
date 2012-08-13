
var items=_.template("<div>" +
      "<input type=checkbox id=<%=itemId%>>"+"<%=valueItem%>"+"       "+
      "<a id=<%=idEditItem%> href=#>Edit</a>"+
"</div>");
var list=_.template("<div>" +"<div>"+
      "<h1 id=<%=headerId%>><%=value%></h1> " +
      "<button id=<%buttonId%>>Edit</button>" +"</div>"+
      "<input type=text id=<%=itemName%>>" +
      "<button onclick=createItem(<%=id%>)>Add item</button>" +
      "<div id=<%=containerId%>></div>"+
"</div>");
function createList() {
   var i = 1;
   i = i+1;

   if ($("#listName").val().length >= 256 ) {
      $("#error").show(500,function(){
         $("#error").hide(); 
      });
   } else if($("#listName").val().length <= 256) {
      $("#container").append(list({id:$("#listName").val(), value:$("#listName").val(), buttonId:"button", headerId:"header", itemName:$("#listName").val(),containerId:$("#listName").val()+"container", itemIdBlock:$("#listName").val()+"item"}));

   }
}
function checked(container) {
   $(":checked").click(function() {
     $(this).effect("highlight", {}, 3000);
}); 
}
function createItem(itemName) {
   i=1;
   i=i+1;
   $("#"+itemName.id+"container").append(items({itemId:itemName.id+i, idEditItem:"Edit", valueItem: $("#"+itemName.id).val()}));
   $("#"+itemName.id+"container").sortable();
   $(":checkbox").change(function() {
      if(this.checked){
        
      }
 }); 
}
function showNewList(){
   $("#createNewList").attr("style", "display:none");
   $("#blockCreateNewList").attr("style", "display:block");
}
function hideNewList() {
   $("#container").empty();
   $("#createNewList").attr("style", "display:block");
   $("#blockCreateNewList").attr("style", "display:none");
}