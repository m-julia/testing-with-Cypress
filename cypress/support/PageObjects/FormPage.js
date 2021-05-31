class FormPage {
    getFirstRadio() {
        return cy.get('#i5');
    }
    getSecondRadio() {
        return cy.get('#i8');
    }
    
    getThirdRadio() {
        return cy.get('#i11');
    }

    getClearButton() {
        return cy.get('.freebirdWidgetsDeselectableradioButton');
    }

    getOtazka2Input() {
        return cy.get('input[aria-labelledby="i14"]')
    }

    getOtazka2InputErrorMsg() {
        return cy.get('.freebirdFormviewerComponentsQuestionBaseValidationError');
    }
   
    getOtazka2Div() {
        return cy.get('div.freebirdFormviewerComponentsQuestionBaseRoot[jscontroller="sWGJ4b"]')
    }

    getButtoSubmit() {
        return cy.get('appsMaterialWizButtonEl');
    }

    getCheckBox() {
        return cy.get('.freebirdFormviewerComponentsQuestionCheckboxChoice')
    }

    getFirstCheckBoxElement() {
        return cy.get('#i23');
    };
    
    getSecondCheckBoxElement() {
        return cy.get('#i26');
    };

    getThirdCheckBoxElement() {
        return cy.get('#i29');
    };

    getCheckBoxErrorMsg() {
        return cy.get('#i20');
    };

    //Dates

    getDropDownMenu() {
        return cy.get('.quantumWizMenuPaperselectOptionList');
    }

    getDropDownMenuChooseOption() {
        return cy.get('div.quantumWizMenuPaperselectOption[data-value=""]');
    }
    
     
    getDropDownMenuFirstOption() {
        return cy.get('div.freebirdThemedSelectOptionDarkerDisabled > span').invoke('height').should('be.gt', 0).contains('Možnost 1')
    }

    getDropDownErrorMsg() {
        return cy.get('#i38');
    }
}  

export default FormPage;