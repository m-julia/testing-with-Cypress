import FormPage from '../support/PageObjects/FormPage';

describe('Form testing', function() {

    before(function(){
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSdPyLEWnYsTWkvfGT26aGwZNYMhWXo4rFx4-8ONfjML_OTTag/viewform?c=0&w=1');
        })

        //#region Otazka_1
        it('Otazka_1_Moznost_1', function() {
            //Arrange
            const formPage = new FormPage();
    
            //Act
            formPage.getFirstRadio().click();
    
            //Assert
            formPage.getFirstRadio().should('have.class', 'isChecked')
            formPage.getFirstRadio().should('have.attr', 'aria-checked', 'true')
            formPage.getSecondRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getThirdRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getClearButton().parent().should('be.visible', 'true');
        })

        it('Otazka_1_Moznost_2', function() {
            //Arrange
            const formPage = new FormPage();
    
            //Act
            formPage.getSecondRadio().click();
    
            //Assert
            formPage.getSecondRadio().should('have.class', 'isChecked')
            formPage.getSecondRadio().should('have.attr', 'aria-checked', 'true')
            formPage.getFirstRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getThirdRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getClearButton().parent().should('be.visible', 'true');
        })

        it('Otazka_1_Moznost_3', function() {
            //Arrange
            const formPage = new FormPage();
    
            //Act
            formPage.getThirdRadio().click();
    
            //Assert
            formPage.getThirdRadio().should('have.class', 'isChecked')
            formPage.getThirdRadio().should('have.attr', 'aria-checked', 'true')
            formPage.getFirstRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getSecondRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getClearButton().parent().should('be.visible', 'true');
        })

        it('Otazka_1_Zrusit_vyber', function() {
            //Arrange
            const formPage = new FormPage();
    
            //Act
            formPage.getClearButton().click();
    
            //Assert
            formPage.getFirstRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getSecondRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getThirdRadio().should('have.attr', 'aria-checked', 'false')
            formPage.getClearButton().parent().should('be.visible', 'false');
        })
        //#endregion

        //#region Otazka_2
        it('Otazka_2_Without_Text', function() {
            //Arrange
            const formPage = new FormPage();

            //Act
            const text = 'Hi'
            formPage.getOtazka2Input().type(text).clear();
            formPage.getOtazka2Input().click();
            cy.get('#i14').click();

            //Assert
            formPage.getOtazka2Input().should('have.attr', 'data-initial-value', '');
            formPage.getOtazka2Div().should('have.class', 'hasError')
        })

        it('Otazka_2_Filled_With_Text', function() {
            //Arrange
            const formPage = new FormPage();

            //Act
            const text = 'Some text'
            formPage.getOtazka2Input().type(text);
            
            //Assert
            formPage.getOtazka2Input().should('have.attr', 'data-initial-value', text);
            formPage.getOtazka2InputErrorMsg().should('have.css', 'display', 'none');
        })
        //#endregion
    
        //#region Otazka_3
        it('Otazka_3_Select_All_Options', function() {
            //Arrange
            const formPage = new FormPage();
            //Act
            formPage.getCheckBox().children().each(($el) => {
                $el.click();
            });

            //Assert
            formPage.getFirstCheckBoxElement().should('have.class', 'isChecked')
            formPage.getSecondCheckBoxElement().should('have.class', 'isChecked')
            formPage.getThirdCheckBoxElement().should('have.class', 'isChecked')           
        })

        it('Otazka_3_SelectAndUnSelect_All_Options', function() {
            //Arrange
            const formPage = new FormPage();
            //Act
            formPage.getCheckBox().children().each(($el) => {
                $el.click();
            });

            formPage.getCheckBox().children().each(($el) => {
                $el.click();
            });

            //Assert
            formPage.getFirstCheckBoxElement().should('have.class', 'isChecked', 'false')
            formPage.getSecondCheckBoxElement().should('have.class', 'isChecked', 'false')
            formPage.getThirdCheckBoxElement().should('have.class', 'isChecked', 'false')       
            formPage.getCheckBoxErrorMsg().should('be.visible', 'true');    
        })
        //#endregion

        //#region Date
        it('Date', function() {
            //Arrange
            const formPage = new FormPage();

            //Act

            //Assert
        })
        //#endregion

        //#region Otazka_4
        it('Otazka_4_Select_Choose', function() {
            //Arrange
            const formPage = new FormPage();
    
            //Act
            formPage.getDropDownMenu().click();      
            formPage.getDropDownMenuChooseOption().click();
            
            //Assert
            formPage.getDropDownErrorMsg().should('be.visible', 'true');
        })

        it('Otazka_4_Select_Moznost1', function() {
            //Arrange
            const formPage = new FormPage();
    
            //Act
            formPage.getDropDownMenu().click();
            formPage.getDropDownMenuFirstOption().click();
            //Assert
        })
        //#endregion
})