$(function () {
  // méthode datapicker() de jQuery UI
  $("#maData").datapicker();

  $("#barre").progressbar({
    value: 42
  });

  $("#redimention").resizable({
    minWidth: 100,
    minHeight: 100,
    maxWidth: 400,
    maxHeight: 600,
  });

  $('.enfant').draggable({
      //containment : "parent", // mot clé parent
      containment : "#parent", // id parent
      snap : ".enfant", // effet aimenté
      snapMode : "outer",
      grid :[50,50]
    
  });
// listes triable et interchangeable 
  $('#afaire,#fait').sortable({
      connectWith : '.taches',
      placeholder : 'tache'
  });
});
