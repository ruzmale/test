
var items=_.template("<div id=<%=checkboxContainer%>>" +
      "<input type=checkbox id=<%=itemId%>>"+"<%=valueItem%>"+"       "+
      "<a id=<%=idEditItem%> href=#>Edit</a>"+
"</div>");
var list=_.template("<div>" +"<div>"+
      "<h1 id=<%=headerId%>><%=value%></h1> " +
      "<button id=<%buttonId%>>Edit</button>" +"</div>"+
      "<input type=text id=<%=itemName%>>" +
      "<button onclick=createItem(<%=id%>)>Add item</button>" +
      "<div id=<%=containerId%>></div>"+
      "<div id=<%=checkedId%>></div>"+
"</div>");
function createList() {
   var i = 1;
   i = i+1;

   if ($("#listName").val().length >= 256 ) {
      $("#error").show(500,function(){
         $("#error").hide(); 
      });
   } else if($("#listName").val().length <= 256) {
      $("#container").append(list({id:$("#listName").val(), value:$("#listName").val(), 
         buttonId:"button", headerId:"header", itemName:$("#listName").val(),
         containerId:$("#listName").val()+"container",
         checkedId:$("#listName").val()+"checked",
         itemIdBlock:$("#listName").val()+"item"}));

   }
}
function checked(container) {
 
}
function createItem(itemName) {
   i=1;
   i=i+1;
   
   console.log($("#"+itemName.id).val()+"checkbox");
   $("#"+itemName.id+"container").append(items({itemId:itemName.id+i, 
      idEditItem:"Edit", 
      valueItem: $("#"+itemName.id).val(),checkboxContainer:$("#"+itemName.id).val()+"checkbox"}));
   $("#"+itemName.id+"container").sortable();
   $(":checkbox").change(function() {
      if(this.checked){
        
         $(":checked").detach();
         $(":checked").appendTo($("#listName").val()+"checked");
         $(":checked").attach();
      }
      else {
         $(":checked").detach();
         $(":checked").appendTo($("#"+itemName.id+"container"));
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