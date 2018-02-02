'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardNames = WIZARD_NAMES;
var wizardSurnames = WIZARD_SURNAMES;
var coat = COAT;
var eyes = EYES;

var userDialog = document.querySelector('.setup');
var removeHidden = function (dom) {
  dom.classList.remove('hidden');
};
removeHidden(userDialog);
removeHidden(userDialog.querySelector('.setup-similar'));

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizardFunction = function () {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardNames.splice(Math.floor(Math.random() * wizardNames.length), 1) + '   ' + wizardSurnames.splice(Math.floor(Math.random() * wizardSurnames.length), 1);
  wizardElement.querySelector('.wizard-coat').style.fill = coat.splice(Math.floor(Math.random() * coat.length), 1);
  wizardElement.querySelector('.wizard-eyes').style.fill = eyes.splice(Math.floor(Math.random() * eyes.length), 1);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var y = 0; y <= 3; y++) {
  fragment.appendChild(wizardFunction());
}
similarListElement.appendChild(fragment);
