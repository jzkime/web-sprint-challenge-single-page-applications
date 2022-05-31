describe("Pizza Form Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    }) // end of beforeEach

    const orderTop = () => cy.get(`#header-pizza`);
    const homeTop = () => cy.get(`[name="headerHome"]`);
    const orderHomepage = () => cy.get(`#order-pizza`);

    const nameInput = () => cy.get(`input[id="name-input"]`);
    const dropDown = () => cy.get(`#size-dropdown`);
    const topPepperoni = () => cy.get(`input[name=pepperoni]`);
    const topVeggie = () => cy.get(`input[name=veggie]`);
    const topMeat = () => cy.get(`input[name=meat]`);
    const topPineapple = () => cy.get(`input[name=pineapple]`);

    const inputGF = () => cy.get(`input[name=gf]`);
    const inputSpecial = () => cy.get(`input[name=special]`);

    const checkOut = () => cy.get(`#order-button`);


    describe("sanity tests", () => {
        it("sanity checks", () => {
            expect(1 + 3).to.equal(4);
            expect(5 + 4).to.not.equal(10);
            expect({}).to.not.equal({});
            expect({}).to.eql({});
        })

        it("checks url", () => {
            cy.url().should("include", "localhost");
        })
    }) // sanity tests

    describe("opening page buttons work", () => {
        it("checks buttons exist", () => {
            orderTop().should("exist");
            homeTop().should("exist");
            orderHomepage().should("exist");
        })

        it("checks top buttons go to correct place", () => {
            orderTop().click();
            cy.url().should("include", 'pizza');
            homeTop().click();
            cy.url().should("not.include", "pizza");
        })

        it("checks homepage button go to form", () => {
            orderHomepage().click();
            cy.url().should("include", 'pizza');
        })
    }) // opening buttons work

    describe("Form works", () => {
        beforeEach(() => {
            orderHomepage().click();
        })

        it("form elements exist", () => {
            nameInput().should("exist");
            dropDown().should("exist");
            topPepperoni().should("exist");
            topVeggie().should("exist");
            topMeat().should("exist");
            topPineapple().should("exist");
            inputGF().should("exist");
            inputSpecial().should("exist");
            checkOut().should("exist");
        })

        it("can use each form element", () => {
            nameInput().should("have.value", "")
            .type("Peter Parker")
            .should("have.value", "Peter Parker");

            dropDown().should("have.value", "Pick your pizza size").select("small");

            inputGF().should("not.be.checked");
            inputGF().click().should("be.checked");

            inputSpecial().should("have.value", "")
            .type("Please knock twice when when delivering...")
            .should("have.value", "Please knock twice when when delivering...")


        })

        describe("checks each topping", () => {
            it("can use each topping checkbox", () => {
                topPepperoni().should("not.be.checked");
                topPepperoni().click().should("be.checked");

                topVeggie().should("not.be.checked");
                topMeat().should("not.be.checked");
                topPineapple().should("not.be.checked");

                topVeggie().click().should("be.checked");
                topMeat().click().should("be.checked");
                topPineapple().click().should("be.checked");
            })
        })

        describe("checks each drop down option", () => {
            it("checks small", () => {
                dropDown().should("have.value", "Pick your pizza size").select("small");
                dropDown().should("have.value", "small").select("medium");
            })

            it("checks medium", () => {
                dropDown().select("medium");
                dropDown().should("have.value", "medium").select("large");
            })

            it("checks large", () => {
                dropDown().select("large");
                dropDown().should("have.value", "large").select("super");
            })

            it("checks super", () => {
                dropDown().select("super");
                dropDown().should("have.value", "super").select("small");
            })

            it("checks error of dropdown", () => {
                dropDown().select("large");
                dropDown().should("have.value", "large").select("Pick your pizza size");

                cy.contains("Must choose a size");
            })
        })

        describe("can submit form and error check", () => {
            it("keeps order button disabled until name and size entered", () => {
                checkOut().should("be.disabled")

                nameInput().type("Turtle");
                dropDown().select("small");
                checkOut().should("not.be.disabled");
            })

            it("shows errors when it doesn't have correct inputs", () => {
                nameInput().type("w");
                cy.contains("name must be at least 2 characters");

                dropDown().select("small");
                dropDown().select("Pick your pizza size");
                cy.contains("Must choose a size");

                checkOut().should("be.disabled");
            })

            it("can submit form and shows new page", () => {
                nameInput().type("Loki");
                dropDown().select("medium");
                topVeggie().click();
                inputGF().click()

                inputSpecial().type("if you see a Thor look alike outside the door, go around the block until they're gone. I'm not home.");
                checkOut().click()

                cy.url().should("include", "orders")

                cy.contains("Loki");
                cy.contains("medium");
                cy.contains(/veggie/i);
                cy.contains("Gluten Free");
                cy.contains("if you see a Thor look alike outside the door, go around the block until they're gone. I'm not home.");
            })

            it("shows all options from input", () => {
                nameInput().type("Alexander Hamilton");
                dropDown().select("medium");
                topPineapple().click();
                inputGF().click();
                inputSpecial().type("The last place I ordered from didn't respond to my 51 emails. I hope you don't disappoint.")

                checkOut().click();

                cy.contains("Alexander Hamilton")
                cy.contains("medium");
                cy.contains(/pineapple/i);
                cy.contains("Gluten Free");
                cy.contains("The last place I ordered from didn't respond to my 51 emails. I hope you don't disappoint.");
            })

            it("shows cheese if no toppings chosen", () => {
                nameInput().type("George Washington");
                dropDown().select("small");
                checkOut().click();

                cy.contains("Cheese");
                cy.contains("Toppings").should("not.exist");
            })

        })// submit and new page

    })// form check
})