class RegisterForm {
  elements = {
    titleInput: () => cy.get('[data-test="title-input"]'),
    titleFeedback: () => cy.get('[data-test="title-error-message"]'),

    selectAuthorInput: () => cy.get('[name="author.id"]'),
    authorFeedback: () => cy.get('[data-test="author-error-message"]'),

    publisherInput: () => cy.get('[data-test="publisher-input"]'),
    publisherFeedback: () => cy.get('[data-test="publisher-error-message"]'),

    yearOfPublicationInput: () =>
      cy.get('[data-test="year-of-publication-input"]'),
    yearOfPublicationFeedback: () =>
      cy.get('[data-test="year-of-publication-error-message"]'),

    languageInput: () => cy.get('[data-test="language-input"]'),
    languageFeedback: () => cy.get('[data-test="language-error-message"]'),

    numberOfPagesInput: () => cy.get('[data-test="number-of-pages-input"]'),
    numberOfPagesFeedback: () =>
      cy.get('[data-test="number-of-pages-error-message"]'),

    categoryBookInput: () => cy.get('[data-test="category-book-input"]'),
    categoryBookFeedback: () =>
      cy.get('[data-test="category-book-error-message"]'),

    synopsisInput: () => cy.get('[data-test="synopsis-input"]'),
    synopsisFeedback: () => cy.get('[data-test="synopsis-error-message"]'),

    fullNameInput: () => cy.get('[data-test="full-name-input"]'),
    fullNameFeedback: () => cy.get('[data-test="full-name-error-message"]'),
    biographyInput: () => cy.get('[data-test="biography-input"]'),
    biographyFeedback: () => cy.get('[data-test="biography-error-message"]'),

    dateOfBirthInput: () => cy.get('[data-test="date-of-birth-input"]'),
    dateOfBirthFeedback: () =>
      cy.get('[data-test="date-of-birth-error-message"]'),

    nationalityInput: () => cy.get('[data-test="nationality-input"]'),
    nationalityFeedback: () =>
      cy.get('[data-test="nationality-error-message"]'),

    categoryAuthorInput: () => cy.get('[data-test="category-author-input"]'),
    categoryAuthorFeedback: () =>
      cy.get('[data-test="category-author-error-message"]'),

    searchInput: () => cy.get('[data-test="search-input"]'),

    openAddModal: () => cy.get('[data-test="add-button"]'),
    submitBtn: () => cy.get('[data-test="submit-button"]'),
    closeAddModal: () => cy.get('[data-test="close-modal-button"]'),
    openEditModal: () => cy.get('[data-test="edit-button"]'),
    openDeleteModal: () => cy.get('[data-test="delete-button"]'),
    deleteButton: () => cy.get('[data-test="delete-alert-button"]'),
    openMoreInfoButton: () => cy.get('[data-test="more-info-button"]'),
    closeMoreInfoButton: () =>
      cy.get('[data-test="close-more-info-button-modal"]'),
    navigateToBookPage: () => cy.get('[data-test="navigation-book-button"]'),
    navigateToAuthorPage: () =>
      cy.get('[data-test="navigation-author-button"]'),
    openSelectButton: () => cy.get('[data-test="open-select-button"]'),
  };

  typeField(field, text) {
    if (text) {
      this.elements[field]().type(text);
    }
  }

  clearField(field) {
    this.elements[field]().clear();
  }

  clickButton(button) {
    this.elements[button]().click();
  }

  submitForm() {
    this.clickButton("submitBtn");
  }

  navigate(name) {
    const navigationButton =
      name === "books" ? "navigateToBookPage" : "navigateToAuthorPage";
    this.clickButton(navigationButton);
  }

  verifyErrorMessage(field, message) {
    this.elements[field]().should("contain.text", message);
  }

  verifyElementExists(selector, text) {
    cy.get(selector).contains(text).should("exist");
  }

  verifyElementNotExists(selector) {
    cy.get(selector).should("have.length", 0);
  }
}

type Field = {
  field: string;
  value: string;
};

type ErrorMessage = {
  field: string;
  message: string;
};
type EntityType = {
  name: string;
  fields: Field[];
  errorMessages: ErrorMessage[];
};

const addEntityWithInputs = (entityType: EntityType) => {
  it(`Given I am on the ${entityType.name} page`, () => {
    registerForm.navigate(entityType.name);
  });

  it(`when I click on the "add new ${entityType.name} +"`, () => {
    registerForm.clickButton("openModal");
  });

  entityType.fields.forEach(({field, value}) => {
    it(`enters "${value}" in the ${field} field`, () => {
      if (value === "") {
        registerForm.clearField(field);
      } else {
        registerForm.typeField(field, value);
      }
    });
  });

  it("submits the form", () => {
    registerForm.submitForm();
  });

  if (entityType.errorMessages.length != 0) {
    entityType.errorMessages.forEach(({field, message}) => {
      it(`should show "${message}" message above the ${field} field`, () => {
        registerForm.elements[field]().should("contain.text", message);
      });
    });
  } else {
    it(`shoul save the new item`, () => {
      const savedItems = JSON.parse(
        window.localStorage.getItem(`${entityType.name}`),
      );

      expect(savedItems).to.be.an("array");
      expect(savedItems.length).to.be.greaterThan(0);

      savedItems.forEach(item => {
        entityType.fields.forEach(({field, value}) => {
          if (field) {
            it(`should have "${value}" in the ${field} field`, () => {
              expect(item[field]).to.equal(value);
            });
          }
        });
      });
    });
  }
};

const registerForm = new RegisterForm();
describe("Book and Author Registration", () => {
  before(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  describe("Author Management", () => {
    it("should add author with invalid inputs and show errors", () => {
      registerForm.navigate("authors");
      registerForm.clickButton("openAddModal");
      registerForm.submitForm();

      registerForm.verifyErrorMessage("fullNameFeedback", "Full name required");
      registerForm.verifyErrorMessage(
        "biographyFeedback",
        "Biography required",
      );
      registerForm.verifyErrorMessage(
        "dateOfBirthFeedback",
        "Date of birth required",
      );
      registerForm.verifyErrorMessage(
        "nationalityFeedback",
        "Nationality required",
      );
      registerForm.verifyErrorMessage(
        "categoryAuthorFeedback",
        "Category required",
      );
    });

    it("should add author with valid inputs", () => {
      registerForm.typeField("fullNameInput", "J.K. Rowling");
      registerForm.typeField("biographyInput", "British author...");
      registerForm.typeField("dateOfBirthInput", "1965-07-31");
      registerForm.typeField("nationalityInput", "British");
      registerForm.typeField("categoryAuthorInput", "Fantasy");
      registerForm.submitForm();
      registerForm.clickButton("closeAddModal");

      registerForm.verifyElementExists(".rt-TableRow", "J.K. Rowling");
    });

    it("should search for author", () => {
      registerForm.typeField("searchInput", "J.K. Rowling");
      registerForm.verifyElementExists(".rt-TableRow", "J.K. Rowling");
      registerForm.clearField("searchInput");
      registerForm.typeField("searchInput", "Non-existent Author");
      registerForm.verifyElementNotExists(".rt-TableBody .rt-TableRow");
      registerForm.clearField("searchInput");
    });

    it("should show author details", () => {
      registerForm.clickButton("openMoreInfoButton");
      registerForm.verifyElementExists('[role="dialog"]', "J.K. Rowling");
      registerForm.clickButton("closeMoreInfoButton");
    });

    it("should update author", () => {
      registerForm.clickButton("openEditModal");
      registerForm.clearField("fullNameInput");
      registerForm.typeField("fullNameInput", "Joanne Rowling");
      registerForm.submitForm();
      registerForm.clickButton("closeAddModal");
      registerForm.verifyElementExists(".rt-TableRow", "Joanne Rowling");
    });

    it("should delete author", () => {
      registerForm.navigate("authors");
      registerForm.clickButton("openDeleteModal");
      registerForm.clickButton("deleteButton");
      registerForm.verifyElementNotExists(".rt-TableBody .rt-TableRow");
    });

    it("should add author with valid inputs", () => {
      registerForm.clickButton("openAddModal");
      registerForm.typeField("fullNameInput", "J.K. Rowling");
      registerForm.typeField("biographyInput", "British author...");
      registerForm.typeField("dateOfBirthInput", "1965-07-31");
      registerForm.typeField("nationalityInput", "British");
      registerForm.typeField("categoryAuthorInput", "Fantasy");
      registerForm.submitForm();
      registerForm.clickButton("closeAddModal");

      registerForm.verifyElementExists(".rt-TableRow", "J.K. Rowling");
    });
  });

  describe("Book Management", () => {
    it("should add book with invalid inputs and show errors", () => {
      registerForm.navigate("books");
      registerForm.clickButton("openAddModal");
      registerForm.clearField("yearOfPublicationInput");
      registerForm.clearField("numberOfPagesInput");
      registerForm.submitForm();

      registerForm.verifyErrorMessage("titleFeedback", "Title required");
      registerForm.verifyErrorMessage("authorFeedback", "Author required");
      registerForm.verifyErrorMessage(
        "publisherFeedback",
        "Publisher required",
      );
      registerForm.verifyErrorMessage(
        "yearOfPublicationFeedback",
        "Year of publication required",
      );
      registerForm.verifyErrorMessage("languageFeedback", "Language required");
      registerForm.verifyErrorMessage(
        "numberOfPagesFeedback",
        "Number of pages required",
      );
      registerForm.verifyErrorMessage(
        "categoryBookFeedback",
        "Category required",
      );
      registerForm.verifyErrorMessage("synopsisFeedback", "Synopsis required");
    });

    it("should add book with valid inputs", () => {
      registerForm.typeField("titleInput", "Harry Potter");
      cy.get('[data-test="open-select-button"]').click();

      cy.get('[data-test="select"]').first().click();

      cy.get('[data-test="open-select-button"] span').should(
        'contain',
        'J.K. Rowling'
      );
      registerForm.typeField("publisherInput", "Bloomsbury");
      registerForm.typeField("yearOfPublicationInput", "1994");
      registerForm.typeField("languageInput", "English");
      registerForm.typeField("numberOfPagesInput", "309");
      registerForm.typeField("categoryBookInput", "Fantasy");
      registerForm.typeField(
        "synopsisInput",
        "Harry Potter, um jovem bruxo, começa sua jornada na escola de magia Hogwarts, onde descobre segredos sobre seu passado e seu vínculo com o vilão Lord Voldemort.",
      );

      registerForm.submitForm();
      registerForm.clickButton("closeAddModal");
      registerForm.verifyElementExists(".rt-TableRow", "Harry Potter");
    });

    it("should search for book", () => {
      registerForm.typeField("searchInput", "Harry Potter");
      registerForm.verifyElementExists(".rt-TableRow", "Harry Potter");
      registerForm.clearField("searchInput");
      registerForm.typeField("searchInput", "Non-existent Book");
      registerForm.verifyElementNotExists(".rt-TableBody .rt-TableRow");
      registerForm.clearField("searchInput");
    });

    it("should show book details", () => {
      registerForm.clickButton("openMoreInfoButton");
      registerForm.verifyElementExists('[role="dialog"]', "Harry Potter");
      registerForm.clickButton("closeMoreInfoButton");
    });

    it("should update book", () => {
      registerForm.clickButton("openEditModal");
      registerForm.clearField("titleInput");
      registerForm.typeField(
        "titleInput",
        "Harry Potter and the Sorcerer's Stone",
      );
      registerForm.submitForm();
      registerForm.clickButton("closeAddModal");
      registerForm.verifyElementExists(
        ".rt-TableRow",
        "Harry Potter and the Sorcerer's Stone",
      );
    });

    it("should delete an author and ensure associated books are also deleted", () => {
      registerForm.navigate("authors");
      registerForm.clickButton("openDeleteModal");
      registerForm.clickButton("deleteButton");
      registerForm.verifyElementNotExists(".rt-TableBody .rt-TableRow");
      registerForm.navigate("books");
      registerForm.verifyElementNotExists(".rt-TableBody .rt-TableRow");
    })
  });
});
