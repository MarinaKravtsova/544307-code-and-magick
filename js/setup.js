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

var wizards = [];

var generationRandomNumber = function (max, min) {
  var RandomNumber = Math.floor(Math.random() * (max - min) + min);

  return RandomNumber;
};

var wizardFunction = function () {
  var wizard = {
    name: wizardNames.splice(generationRandomNumber(wizardNames.length, 0), 1) + '   ' + wizardSurnames.splice(generationRandomNumber(wizardSurnames.length, 0), 1),
    coatColor: coat.splice(generationRandomNumber(coat.length, 0), 1),
    eyesColor: eyes.splice(generationRandomNumber(eyes.length, 0), 1)
  };
  return wizard;
};

var wizardsNumbers = 4;
for (var y = 0; y < wizardsNumbers; y++) {
  wizards[y] = wizardFunction();
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
