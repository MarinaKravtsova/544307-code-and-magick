'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var removedWizardNames = [];
var removedWizardSurnames = [];
var removedCoat = [];
var removedEyes = [];

for (var x = 0; x < 4; x++) {
  removedWizardNames[x] = WIZARD_NAMES.splice(Math.floor(Math.random() * WIZARD_NAMES.length), 1);
  removedWizardSurnames[x] = WIZARD_SURNAMES.splice(Math.floor(Math.random() * WIZARD_NAMES.length), 1);
  removedCoat[x] = COAT.splice(Math.floor(Math.random() * COAT.length), 1);
  removedEyes[x] = EYES.splice(Math.floor(Math.random() * EYES.length), 1);
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [
  {
    name: removedWizardNames[0] + '   ' + removedWizardSurnames[0],
    coatColor: removedCoat[0],
    eyesColor: removedEyes[0]
  },
  {
    name: removedWizardNames[1] + '   ' + removedWizardSurnames[1],
    coatColor: removedCoat[1],
    eyesColor: removedEyes[1]
  },
  {
    name: removedWizardNames[2] + '   ' + removedWizardSurnames[2],
    coatColor: removedCoat[2],
    eyesColor: removedEyes[2]
  },
  {
    name: removedWizardNames[3] + '   ' + removedWizardSurnames[3],
    coatColor: removedCoat[3],
    eyesColor: removedEyes[3]
  }
];

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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
