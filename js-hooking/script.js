const people = (function() {
    let people = []

    let squishey = {
        name: "Jose Daniels",
        age: 19,
        dickLength: '5 cm',
        relationshipStatus: 'single',
        sOName: null
    }
    people.push(squishey)

    let patricia = {
        name: "Patricia Erin",
        age: 22,
        dickLength: '-7 in',
        relationshipStatus: 'single',
        sOName: null
    }
    people.push(patricia)

    let michael = {
        name: "Michael Cantrell",
        age: 17,
        dickLength: '5.5 in',
        relationshipStatus: 'taken',
        sOName: 'Erica'
    }
    people.push(michael)

    console.log(people)
})();
