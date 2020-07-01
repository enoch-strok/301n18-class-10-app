'use strict';

function renderThings(list) {
  const container = $('.things').html;
  const template = $('.thingsToDoTemplate').html;
  list.forEach(item => {
    let newItemHTML = Mustache.render(item, template)
    container.append(newItemHTML);
  });
}

renderThings(things);

function showThingsToDo() {

  let things = [
    { thing: 'watch tv' },
    { thing: 'take a nap' },
  ];
  // renderThings(things);

}

$(document).ready(function () {
  showThingsToDo();
});
