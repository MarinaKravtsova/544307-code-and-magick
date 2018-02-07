'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBERS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardNames = WIZARD_NAMES.slice();
var wizardSurnames = WIZARD_SURNAMES.slice();
var coat = COAT.slice();
var eyes = EYES.slice();

var userDialog = document.querySelector('.setup');
var removeHidden = function (dom) {
  dom.classList.remove('hidden');
};
// removeHidden(userDialog);
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

for (var y = 0; y < WIZARD_NUMBERS; y++) {
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

// Открытие/закрытие окна настройки персонажа,Валидация ввода имени персонажа.
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  });
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// Изменение цвета мантии, глаз и фаербола по нажатию.
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style = 'fill:' + COAT[generationRandomNumber(COAT.length, 0)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style = 'fill:' + EYES[generationRandomNumber(EYES.length, 0)];
});

fireball.addEventListener('click', function () {
  fireball.style = 'background:' + FIREBALL[generationRandomNumber(FIREBALL.length, 0)];
});
