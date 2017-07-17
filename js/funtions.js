$(function(){ 
    //Add, Save, Edit and Delete functions code 
    $(".btnEdit").bind("click", Edit); 
    $(".btnDelete").bind("click", Delete); 
    //$("#btnAdd").bind("click", Add); 
    });

function Add(){ 
$("#tblData tbody").append( "<tr>"+ "<td><input type='text'/></td>"+ "<td><input type='text'/></td>"+ "<td><input type='text'/></td>"+ "<td><img src='images/disk.png' class='btnSave'><img src='images/delete.png' class='btnDelete'/></td>"+ "</tr>"); $(".btnSave").bind("click", Save);	$(".btnDelete").bind("click", Delete); }; 


function Save(){ var par = $(this).parent().parent(); //tr 
var tdNamaPegawai = par.children("td:nth-child(1)"); 
var tdButtons = par.children("td:nth-child(2)"); 
tdNamaPegawai.html(tdNamaPegawai.children("input[type=text]").val()); 
tdButtons.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>"); 
$(".btnEdit").bind("click", Edit); $(".btnDelete").bind("click", Delete); }; 

function Edit(){ 
var par = $(this).parent().parent(); //tr 
var tdNamaPegawai = par.children("td:nth-child(1)"); 
var tdButtons = par.children("td:nth-child(4)"); 
tdNamaPegawai.html("<input type='text' id='txtNamaPegawai' value='"+tdNamaPegawai.html()+"'/>"); 
tdButtons.html("<img src='images/disk.png' class='btnSave'/>"); 
$(".btnSave").bind("click", Save); $(".btnEdit").bind("click", Edit); 
$(".btnDelete").bind("click", Delete); };

function Delete(){ 
var par = $(this).parent().parent();//tr 
par.remove(); }; 